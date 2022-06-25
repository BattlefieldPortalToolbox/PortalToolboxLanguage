import type * as nodes from ".";
import {
    ArgumentDeclarationNode,
    ArgumentsDeclarationNode,
    ArrayLiteralNode,
    ArrayTypeExpressionNode,
    AwaitExpressionNode,
    BinaryExpressionNode,
    BinaryOperator,
    BlockStatementNode,
    BodyActionsNode,
    BodyBlockNode,
    BodyConditionNode,
    BodyConditionsNode,
    BodyNode,
    BooleanLiteralNode,
    BooleanTypeExpressionNode,
    BreakStatementNode,
    CallArgumentsNode,
    CallExpressionNode,
    CastExpressionNode,
    CodeNode,
    ContinueStatementNode,
    ExpressionNode,
    ExpressionStatementNode,
    ForStatementNode,
    IdentifierAssignmentStatementNode,
    IdentifierExpressionNode,
    IdentifierNode,
    IdentifierTypeExpressionNode,
    IfStatementNode,
    IndexAssignmentStatementNode,
    IndexExpressionNode,
    LiteralExpressionNode,
    LiteralNode,
    MemberAssignmentStatementNode,
    MemberExpressionNode,
    ModDefinitionNode,
    Node,
    NodeVisitor,
    NumberLiteralNode,
    NumberTypeExpressionNode,
    ParenthesisExpressionNode,
    ParenthesisTypeExpressionNode,
    ReturnStatementNode,
    RuleDefinitionNode,
    StatementNode,
    StringLiteralNode,
    StringTypeExpressionNode,
    SubroutineDefinitionNode,
    TernaryExpressionNode,
    TupleTypeExpressionNode,
    TypeExpressionNode,
    UnaryExpressionNode,
    UnaryOperator,
    UnionTypeExpressionNode,
    VariableDeclarationNode,
    VariableDeclarationStatementNode,
    VariableDeclarationWithoutSpecifierNode,
    VariableScopeSpecifier,
    WhileStatementNode
} from ".";

class FooBodyBlockNode extends BodyBlockNode {
    accept<T>(visitor: NodeVisitor<T>): T { throw new Error(""); }
}

class FooStatementNode extends StatementNode {
    accept<T>(visitor: NodeVisitor<T>): T { throw new Error(""); }
}

class FooExpressionNode extends ExpressionNode {
    accept<T>(visitor: NodeVisitor<T>): T { throw new Error(""); }
}

class FooTypeExpressionNode extends TypeExpressionNode {
    accept<T>(visitor: NodeVisitor<T>): T { throw new Error(""); }
}

class FooLiteralNode extends LiteralNode {
    constructor() {super(null);}

    accept<T>(visitor: NodeVisitor<T>): T { throw new Error(""); }
}

// TODO: separate into individual *Node.test.ts files
describe("Node.children", () => {
    type NodeChildrenTestCase = [(keyof typeof nodes)[], Node, Node[]];

    type ArgumentChoices<T extends any[]> = {
        [index in keyof T]: T[index][];
    };

    function getPermutations<T extends any[]>(argumentsChoices: ArgumentChoices<T>): T[] {
        if (argumentsChoices.length < 1) return [[] as any];

        const [, ...restChoices] = argumentsChoices;

        return argumentsChoices[0]
            .flatMap(argumentChoice => getPermutations(restChoices).map(restArgs => [argumentChoice, ...restArgs])) as T[];
    }

    function createNodeChildrenTestCases<P extends any[]>(nodeConstructor: new (...args: P) => Node, ...argsChoices: ArgumentChoices<P>): NodeChildrenTestCase[] {
        return getPermutations(argsChoices).map(args => {
            const children = args
                .flatMap(a => Array.isArray(a) ? a : [a])
                .filter(a => a instanceof Node) as Node[];

            return [
                children.map(c => c.constructor.name as keyof typeof nodes),
                new nodeConstructor(...args),
                children
            ];
        });
    }

    const nodesChildrenTestCases: [keyof typeof nodes, NodeChildrenTestCase[]][] = [
        // code node
        [
            "CodeNode",
            createNodeChildrenTestCases(CodeNode, [[], [
                new VariableDeclarationNode(VariableScopeSpecifier.Global, []),
                new SubroutineDefinitionNode(false, new IdentifierNode(""), null, null, new BodyNode([], [])),
                new RuleDefinitionNode(false, false, null, new IdentifierNode(""), null, new BodyNode([], [])),
                new ModDefinitionNode(null, [])
            ]])
        ],

        // mod definition node
        [
            "ModDefinitionNode",
            createNodeChildrenTestCases(ModDefinitionNode, [null, new IdentifierNode("")], [[], [
                new IdentifierNode(""),
                new RuleDefinitionNode(false, false, null, new IdentifierNode(""), null, new BodyNode([], []))
            ]])
        ],

        // rule definition node
        [
            "RuleDefinitionNode",
            createNodeChildrenTestCases(RuleDefinitionNode, [false], [false], [null, new IdentifierNode("")], [new IdentifierNode("")], [null, new IdentifierNode("")], [new BodyNode([], [])])
        ],

        // subroutine nodes
        [
            "SubroutineDefinitionNode",
            createNodeChildrenTestCases(SubroutineDefinitionNode, [false], [new IdentifierNode("")], [null, new ArgumentsDeclarationNode([])], [null, new FooTypeExpressionNode()], [new BodyNode([], [])])
        ],

        [
            "ArgumentsDeclarationNode",
            createNodeChildrenTestCases(ArgumentsDeclarationNode, [[], [new ArgumentDeclarationNode(new IdentifierNode(""), null), new ArgumentDeclarationNode(new IdentifierNode(""), null)]])
        ],

        [
            "ArgumentDeclarationNode",
            createNodeChildrenTestCases(ArgumentDeclarationNode, [new IdentifierNode("")], [null, new FooTypeExpressionNode()])
        ],

        // body nodes
        [
            "BodyNode",
            createNodeChildrenTestCases(BodyNode, [[], [new FooBodyBlockNode(), new FooBodyBlockNode()]], [[], [new FooStatementNode(), new FooStatementNode()]])
        ],

        [
            "BodyConditionsNode",
            createNodeChildrenTestCases(BodyConditionsNode, [[], [new FooExpressionNode(), new FooExpressionNode()]])
        ],

        [
            "BodyConditionNode",
            createNodeChildrenTestCases(BodyConditionNode, [new FooExpressionNode()])
        ],

        [
            "BodyActionsNode",
            createNodeChildrenTestCases(BodyActionsNode, [[], [new FooStatementNode(), new FooStatementNode()]])
        ],

        // statement node
        [
            "VariableDeclarationStatementNode",
            createNodeChildrenTestCases(VariableDeclarationStatementNode, [new VariableDeclarationNode(VariableScopeSpecifier.Global, [])])
        ],

        [
            "IfStatementNode",
            createNodeChildrenTestCases(IfStatementNode, [new FooExpressionNode()], [new FooStatementNode()], [null, new FooStatementNode()])
        ],

        [
            "WhileStatementNode",
            createNodeChildrenTestCases(WhileStatementNode, [new FooExpressionNode()], [new FooStatementNode()])
        ],

        [
            "ForStatementNode",
            createNodeChildrenTestCases(ForStatementNode, [false], [new IdentifierNode("")], [null, new FooExpressionNode()], [new FooExpressionNode()], [null, new FooExpressionNode()], [new FooStatementNode()])
        ],

        [
            "ReturnStatementNode",
            createNodeChildrenTestCases(ReturnStatementNode, [null, new FooExpressionNode()])
        ],

        [
            "BreakStatementNode",
            createNodeChildrenTestCases(BreakStatementNode)
        ],

        [
            "ContinueStatementNode",
            createNodeChildrenTestCases(ContinueStatementNode)
        ],

        [
            "BlockStatementNode",
            createNodeChildrenTestCases(BlockStatementNode, [[], [new FooStatementNode(), new FooStatementNode()]])
        ],

        [
            "MemberAssignmentStatementNode",
            createNodeChildrenTestCases(MemberAssignmentStatementNode, [new FooExpressionNode()], [new IdentifierNode("")], [new FooExpressionNode()])
        ],

        [
            "IndexAssignmentStatementNode",
            createNodeChildrenTestCases(IndexAssignmentStatementNode, [new FooExpressionNode()], [new FooExpressionNode()], [new FooExpressionNode()])
        ],

        [
            "IdentifierAssignmentStatementNode",
            createNodeChildrenTestCases(IdentifierAssignmentStatementNode, [new IdentifierNode("")], [new FooExpressionNode()])
        ],

        [
            "ExpressionStatementNode",
            createNodeChildrenTestCases(ExpressionStatementNode, [new FooExpressionNode()])
        ],

        // variable declaration nodes
        [
            "VariableDeclarationNode",
            createNodeChildrenTestCases(VariableDeclarationNode, [VariableScopeSpecifier.Global], [[], [new VariableDeclarationWithoutSpecifierNode(new IdentifierNode(""), null, null), new VariableDeclarationWithoutSpecifierNode(new IdentifierNode(""), null, null)]])
        ],

        [
            "VariableDeclarationWithoutSpecifierNode",
            createNodeChildrenTestCases(VariableDeclarationWithoutSpecifierNode, [new IdentifierNode("")], [null, new FooTypeExpressionNode()], [null, new FooExpressionNode()])
        ],

        // expression nodes
        [
            "CallExpressionNode",
            createNodeChildrenTestCases(CallExpressionNode, [new FooExpressionNode()], [new CallArgumentsNode([])])
        ],

        [
            "MemberExpressionNode",
            createNodeChildrenTestCases(MemberExpressionNode, [new FooExpressionNode()], [new IdentifierNode("")])
        ],

        [
            "IndexExpressionNode",
            createNodeChildrenTestCases(IndexExpressionNode, [new FooExpressionNode()], [new FooExpressionNode()])
        ],

        [
            "AwaitExpressionNode",
            createNodeChildrenTestCases(AwaitExpressionNode, [new FooExpressionNode()])
        ],

        [
            "UnaryExpressionNode",
            createNodeChildrenTestCases(UnaryExpressionNode, [UnaryOperator.Not], [new FooExpressionNode()])
        ],

        [
            "CastExpressionNode",
            createNodeChildrenTestCases(CastExpressionNode, [new FooExpressionNode()], [new FooTypeExpressionNode()])
        ],

        [
            "BinaryExpressionNode",
            createNodeChildrenTestCases(BinaryExpressionNode, [new FooExpressionNode()], [BinaryOperator.Or], [new FooExpressionNode()])
        ],

        [
            "TernaryExpressionNode",
            createNodeChildrenTestCases(TernaryExpressionNode, [new FooExpressionNode()], [new FooExpressionNode()], [new FooExpressionNode()])
        ],

        [
            "IdentifierExpressionNode",
            createNodeChildrenTestCases(IdentifierExpressionNode, [new IdentifierNode("")])
        ],

        [
            "LiteralExpressionNode",
            createNodeChildrenTestCases(LiteralExpressionNode, [new FooLiteralNode()])
        ],

        [
            "ParenthesisExpressionNode",
            createNodeChildrenTestCases(ParenthesisExpressionNode, [new FooExpressionNode()])
        ],

        // call arguments node
        [
            "CallArgumentsNode",
            createNodeChildrenTestCases(CallArgumentsNode, [[], [new FooExpressionNode(), new FooExpressionNode()]])
        ],

        // type expression nodes
        [
            "ArrayTypeExpressionNode",
            createNodeChildrenTestCases(ArrayTypeExpressionNode, [new FooTypeExpressionNode()])
        ],

        [
            "UnionTypeExpressionNode",
            createNodeChildrenTestCases(UnionTypeExpressionNode, [[], [new FooTypeExpressionNode(), new FooTypeExpressionNode()]])
        ],

        [
            "IdentifierTypeExpressionNode",
            createNodeChildrenTestCases(IdentifierTypeExpressionNode, [new IdentifierNode("")])
        ],

        [
            "TupleTypeExpressionNode",
            createNodeChildrenTestCases(TupleTypeExpressionNode, [[], [new FooTypeExpressionNode(), new FooTypeExpressionNode()]])
        ],

        [
            "ParenthesisTypeExpressionNode",
            createNodeChildrenTestCases(ParenthesisTypeExpressionNode, [new FooTypeExpressionNode()])
        ],

        [
            "BooleanTypeExpressionNode",
            createNodeChildrenTestCases(BooleanTypeExpressionNode, [new BooleanLiteralNode(false)])
        ],

        [
            "NumberTypeExpressionNode",
            createNodeChildrenTestCases(NumberTypeExpressionNode, [new NumberLiteralNode("")])
        ],

        [
            "StringTypeExpressionNode",
            createNodeChildrenTestCases(StringTypeExpressionNode, [new StringLiteralNode("")])
        ],

        // identifier node
        [
            "IdentifierNode",
            createNodeChildrenTestCases(IdentifierNode, [""])
        ],

        // literal nodes
        [
            "ArrayLiteralNode",
            createNodeChildrenTestCases(ArrayLiteralNode, [[], [new FooExpressionNode(), new FooExpressionNode()]])
        ],

        [
            "BooleanLiteralNode",
            createNodeChildrenTestCases(BooleanLiteralNode, [false])
        ],

        [
            "NumberLiteralNode",
            createNodeChildrenTestCases(NumberLiteralNode, [""])
        ],

        [
            "StringLiteralNode",
            createNodeChildrenTestCases(StringLiteralNode, [""])
        ],
    ];

    for (const nodeChildrenTestCases of nodesChildrenTestCases) {
        describe(nodeChildrenTestCases[0], () => {
            it.each(nodeChildrenTestCases[1])(`${nodeChildrenTestCases[0]}.children should have %s`, (childrenNames, node, expectedChildren) => {
                expect(node.children).toEqual(expectedChildren);
            });
        });
    }
});
