import { NodeVisitor } from "./NodeVisitor";
import { Node } from "./Node";
import * as nodes from ".";

class FooNodeVisitor<T = any> extends NodeVisitor<T> {
    protected override defaultValue: T;

    constructor(
        defaultValue: T,
        public aggregateResultsFn: (this: NodeVisitor<T>, value: T, aggregate: T) => T
    ) {
        super();
        this.defaultValue = defaultValue;
    }

    protected override aggregateResults(value: T, aggregate: T): T {
        return this.aggregateResultsFn(value, aggregate);
    }
}

class FooNode extends Node {
    override get children(): readonly Node[] {
        return this.fooChildren;
    }

    constructor(public acceptFn: <T>(visitor: NodeVisitor<T>) => T, public fooChildren: Node[] = []) {
        super();
    }

    override accept<T>(visitor: NodeVisitor<T>): T {
        return this.acceptFn(visitor);
    }
}

describe("NodeVisitor", () => {
    let visitorDefaultValue: any;
    let aggregateResultsMock: jest.Mock<any, [value: any, aggregate: any]>;
    let visitor: NodeVisitor<any>;

    let acceptMock: jest.Mock<any, [visitor: NodeVisitor<any>]>;
    let acceptMock1: jest.Mock<any, [visitor: NodeVisitor<any>]>;
    let acceptMock2: jest.Mock<any, [visitor: NodeVisitor<any>]>;
    let acceptMock3: jest.Mock<any, [visitor: NodeVisitor<any>]>;

    beforeEach(() => {
        visitorDefaultValue = {};
        aggregateResultsMock = jest.fn(function (this: NodeVisitor<any>, value: any, aggregate: any) { return NodeVisitor.prototype.aggregateResults.call(this, value, aggregate); });
        visitor = new FooNodeVisitor(visitorDefaultValue, aggregateResultsMock);

        acceptMock = jest.fn().mockReturnThis();
        acceptMock1 = jest.fn().mockReturnThis();
        acceptMock2 = jest.fn().mockReturnThis();
        acceptMock3 = jest.fn().mockReturnThis();
    });

    describe("visit", () => {
        it("should call node.accept with itself as argument and return the return value", () => {
            const expectedResult = {};
            acceptMock.mockReturnValue(expectedResult);
            const node = new FooNode(acceptMock);

            const result = visitor.visit(node);

            expect(result).toBe(expectedResult);
        });

        const nodesCases: (keyof typeof nodes)[] = [
            // code node
            "CodeNode",

            // mod definition node
            "ModDefinitionNode",

            // rule definition node
            "RuleDefinitionNode",

            // subroutine nodes
            "SubroutineDefinitionNode",
            "ArgumentsDeclarationNode",
            "ArgumentDeclarationNode",

            // body nodes
            "BodyNode",
            "BodyConditionsNode",
            "BodyConditionNode",
            "BodyActionsNode",

            // statement nodes
            "VariableDeclarationStatementNode",
            "IfStatementNode",
            "WhileStatementNode",
            "ForStatementNode",
            "ReturnStatementNode",
            "BreakStatementNode",
            "ContinueStatementNode",
            "BlockStatementNode",
            "MemberAssignmentStatementNode",
            "IndexAssignmentStatementNode",
            "IdentifierAssignmentStatementNode",
            "ExpressionStatementNode",

            // variable declaration nodes
            "VariableDeclarationNode",
            "VariableDeclarationWithoutSpecifierNode",

            // expression nodes
            "CallExpressionNode",
            "MemberExpressionNode",
            "IndexExpressionNode",
            "AwaitExpressionNode",
            "UnaryExpressionNode",
            "CastExpressionNode",
            "BinaryExpressionNode",
            "TernaryExpressionNode",
            "IdentifierExpressionNode",
            "LiteralExpressionNode",
            "ParenthesisExpressionNode",

            // call arguments node
            "CallArgumentsNode",

            // type expression nodes
            "ArrayTypeExpressionNode",
            "UnionTypeExpressionNode",
            "IdentifierTypeExpressionNode",
            "TupleTypeExpressionNode",
            "ParenthesisTypeExpressionNode",
            "BooleanTypeExpressionNode",
            "NumberTypeExpressionNode",
            "StringTypeExpressionNode",

            // identifier node
            "IdentifierNode",

            // literal nodes
            "ArrayLiteralNode",
            "BooleanLiteralNode",
            "NumberLiteralNode",
            "StringLiteralNode",
        ];
        const nodeAcceptTestCases: [keyof typeof nodes, keyof NodeVisitor<any>][] = nodesCases
            .map(nodeName => [nodeName, `visit${nodeName.slice(0, -4)}` as keyof NodeVisitor<any>]);

        it.each(nodeAcceptTestCases)("%s should call %s and return result value", (nodeName, visitMethod) => {
            const expectedResult = {};
            visitor[visitMethod] = jest.fn(() => expectedResult);
            const node = new (nodes[nodeName] as any)();

            const result = visitor.visit(node);

            expect(result).toBe(expectedResult);
        });
    });

    describe("visitChildren", () => {
        it("with node with no children should return visitor.defaultValue", () => {
            const node = new FooNode(acceptMock);

            const result = visitor.visitChildren(node);

            expect(result).toBe(visitorDefaultValue);
        });

        it("with node with children should call visitor.visit on each child and aggregateResults on each return value", () => {
            const child1 = new FooNode(acceptMock1);
            const child2 = new FooNode(acceptMock2);
            const child3 = new FooNode(acceptMock3);
            const node = new FooNode(acceptMock, [child1, child2, child3]);

            const result = visitor.visitChildren(node);

            expect(result).toBe(child3);
            expect(acceptMock1).toHaveBeenCalled();
            expect(acceptMock2).toHaveBeenCalled();
            expect(acceptMock3).toHaveBeenCalled();
            expect(aggregateResultsMock).toHaveBeenCalledTimes(3);
            expect(aggregateResultsMock).toHaveBeenNthCalledWith(1, child1, visitorDefaultValue);
            expect(aggregateResultsMock).toHaveBeenNthCalledWith(2, child2, child1);
            expect(aggregateResultsMock).toHaveBeenNthCalledWith(3, child3, child2);
        });
    });

    describe.each([
        // code visitor
        "visitCode",

        // mod definition visitor
        "visitModDefinition",

        // rule definition visitor
        "visitRuleDefinition",

        // subroutine visitors
        "visitSubroutineDefinition",
        "visitArgumentsDeclaration",
        "visitArgumentDeclaration",

        // body visitors
        "visitBody",
        "visitBodyConditions",
        "visitBodyCondition",
        "visitBodyActions",

        // statement visitors
        "visitVariableDeclarationStatement",
        "visitIfStatement",
        "visitWhileStatement",
        "visitForStatement",
        "visitReturnStatement",
        "visitBreakStatement",
        "visitContinueStatement",
        "visitBlockStatement",
        "visitMemberAssignmentStatement",
        "visitIndexAssignmentStatement",
        "visitIdentifierAssignmentStatement",
        "visitExpressionStatement",

        // variable declaration visitors
        "visitVariableDeclaration",
        "visitVariableDeclarationWithoutSpecifier",

        // expression visitors
        "visitCallExpression",
        "visitMemberExpression",
        "visitIndexExpression",
        "visitAwaitExpression",
        "visitUnaryExpression",
        "visitCastExpression",
        "visitBinaryExpression",
        "visitTernaryExpression",
        "visitIdentifierExpression",
        "visitLiteralExpression",
        "visitParenthesisExpression",

        // call arguments visitor
        "visitCallArguments",

        // type expression visitors
        "visitArrayTypeExpression",
        "visitUnionTypeExpression",
        "visitIdentifierTypeExpression",
        "visitTupleTypeExpression",
        "visitParenthesisTypeExpression",
        "visitBooleanTypeExpression",
        "visitNumberTypeExpression",
        "visitStringTypeExpression",

        // identifier visitor
        "visitIdentifier",

        // literal visitors
        "visitArrayLiteral",
        "visitBooleanLiteral",
        "visitNumberLiteral",
        "visitStringLiteral"
    ] as (keyof NodeVisitor<any>)[])("%s", (visitMethod) => {
        it("should call visitor.visitChildren with the node", () => {
            const child = new FooNode(acceptMock1);
            const node = new FooNode(acceptMock, [child]);

            const result = visitor[visitMethod](node as any);

            expect(result).toBe(child);
        });
    });

    describe.each([
        "visitStatement",
        "visitExpression",
        "visitTypeExpression",
        "visitLiteral"
    ] as (keyof NodeVisitor<any>)[])("%s", (visitMethod) => {
        it("should call visitor.visit with the node", () => {
            const node = new FooNode(acceptMock);

            const result = visitor[visitMethod](node as any);

            expect(result).toBe(node);
        });
    });
});
