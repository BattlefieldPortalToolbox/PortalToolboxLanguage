import type {
    BlockStatementNode,
    BreakStatementNode,
    ContinueStatementNode,
    ExpressionStatementNode,
    ForStatementNode,
    IdentifierAssignmentStatementNode,
    IfStatementNode,
    IndexAssignmentStatementNode,
    MemberAssignmentStatementNode,
    ReturnStatementNode,
    StatementNode,
    VariableDeclarationStatementNode,
    WhileStatementNode
} from "./statements";
import type {
    ArrayTypeExpressionNode,
    BooleanTypeExpressionNode,
    IdentifierTypeExpressionNode,
    NumberTypeExpressionNode,
    ParenthesisTypeExpressionNode,
    StringTypeExpressionNode,
    TupleTypeExpressionNode,
    TypeExpressionNode,
    UnionTypeExpressionNode
} from "./type-expressions";
import type { Node } from "./Node";
import type { ModDefinitionNode } from "./ModDefinitionNode";
import type {
    AwaitExpressionNode,
    BinaryExpressionNode,
    CallExpressionNode,
    CastExpressionNode,
    ExpressionNode,
    IdentifierExpressionNode,
    IndexExpressionNode,
    LiteralExpressionNode,
    MemberExpressionNode,
    ParenthesisExpressionNode,
    TernaryExpressionNode,
    UnaryExpressionNode
} from "./expressions";
import type { ArrayLiteralNode, BooleanLiteralNode, LiteralNode, NumberLiteralNode, StringLiteralNode } from "./literals";
import type { BodyActionsNode, BodyConditionNode, BodyConditionsNode, BodyNode } from "./body";
import type { CodeNode } from "./CodeNode";
import type { CallArgumentsNode } from "./CallArgumentsNode";
import type { ArgumentDeclarationNode, ArgumentsDeclarationNode, SubroutineDefinitionNode } from "./subroutine";
import type { VariableDeclarationNode } from "./VariableDeclarationNode";
import type { VariableDeclarationWithoutSpecifierNode } from "./VariableDeclarationWithoutSpecifierNode";
import type { IdentifierNode } from "./IdentifierNode";
import type { RuleDefinitionNode } from "./RuleDefinitionNode";


export abstract class NodeVisitor<T> {
    protected defaultValue: T = null!;

    visit(node: Node): T {
        return node.accept(this);
    }

    visitChildren(node: Node): T {
        let value = this.defaultValue;

        for (const child of node.children) {
            value = this.aggregateResults(this.visit(child), value);
        }

        return value;
    }

    protected aggregateResults(value: T, aggregate: T): T {
        return value;
    }

    // code node

    visitCode(node: CodeNode): T {
        return this.visitChildren(node);
    }

    // mod definition node

    visitModDefinition(node: ModDefinitionNode): T {
        return this.visitChildren(node);
    }

    // rule definition node

    visitRuleDefinition(node: RuleDefinitionNode): T {
        return this.visitChildren(node);
    }

    // subroutine nodes

    visitSubroutineDefinition(node: SubroutineDefinitionNode): T {
        return this.visitChildren(node);
    }

    visitArgumentsDeclaration(node: ArgumentsDeclarationNode): T {
        return this.visitChildren(node);
    }

    visitArgumentDeclaration(node: ArgumentDeclarationNode): T {
        return this.visitChildren(node);
    }

    // body nodes

    visitBody(node: BodyNode): T {
        return this.visitChildren(node);
    }

    visitBodyConditions(node: BodyConditionsNode): T {
        return this.visitChildren(node);
    }

    visitBodyCondition(node: BodyConditionNode): T {
        return this.visitChildren(node);
    }

    visitBodyActions(node: BodyActionsNode): T {
        return this.visitChildren(node);
    }

    // statement nodes

    visitStatement(node: StatementNode): T {
        return this.visit(node);
    }

    visitVariableDeclarationStatement(node: VariableDeclarationStatementNode): T {
        return this.visitChildren(node);
    }

    visitIfStatement(node: IfStatementNode): T {
        return this.visitChildren(node);
    }

    visitWhileStatement(node: WhileStatementNode): T {
        return this.visitChildren(node);
    }

    visitForStatement(node: ForStatementNode): T {
        return this.visitChildren(node);
    }

    visitReturnStatement(node: ReturnStatementNode): T {
        return this.visitChildren(node);
    }

    visitBreakStatement(node: BreakStatementNode): T {
        return this.visitChildren(node);
    }

    visitContinueStatement(node: ContinueStatementNode): T {
        return this.visitChildren(node);
    }

    visitBlockStatement(node: BlockStatementNode): T {
        return this.visitChildren(node);
    }

    visitMemberAssignmentStatement(node: MemberAssignmentStatementNode): T {
        return this.visitChildren(node);
    }

    visitIndexAssignmentStatement(node: IndexAssignmentStatementNode): T {
        return this.visitChildren(node);
    }

    visitIdentifierAssignmentStatement(node: IdentifierAssignmentStatementNode): T {
        return this.visitChildren(node);
    }

    visitExpressionStatement(node: ExpressionStatementNode): T {
        return this.visitChildren(node);
    }

    // variable declaration nodes

    visitVariableDeclaration(node: VariableDeclarationNode): T {
        return this.visitChildren(node);
    }

    visitVariableDeclarationWithoutSpecifier(node: VariableDeclarationWithoutSpecifierNode): T {
        return this.visitChildren(node);
    }

    // expression nodes

    visitExpression(node: ExpressionNode): T {
        return this.visit(node);
    }

    visitCallExpression(node: CallExpressionNode): T {
        return this.visitChildren(node);
    }

    visitMemberExpression(node: MemberExpressionNode): T {
        return this.visitChildren(node);
    }

    visitIndexExpression(node: IndexExpressionNode): T {
        return this.visitChildren(node);
    }

    visitAwaitExpression(node: AwaitExpressionNode): T {
        return this.visitChildren(node);
    }

    visitUnaryExpression(node: UnaryExpressionNode): T {
        return this.visitChildren(node);
    }

    visitCastExpression(node: CastExpressionNode): T {
        return this.visitChildren(node);
    }

    visitBinaryExpression(node: BinaryExpressionNode): T {
        return this.visitChildren(node);
    }

    visitTernaryExpression(node: TernaryExpressionNode): T {
        return this.visitChildren(node);
    }

    visitIdentifierExpression(node: IdentifierExpressionNode): T {
        return this.visitChildren(node);
    }

    visitLiteralExpression(node: LiteralExpressionNode): T {
        return this.visitChildren(node);
    }

    visitParenthesisExpression(node: ParenthesisExpressionNode): T {
        return this.visitChildren(node);
    }

    // call arguments node

    visitCallArguments(node: CallArgumentsNode): T {
        return this.visitChildren(node);
    }

    // type expression nodes

    visitTypeExpression(node: TypeExpressionNode): T {
        return this.visit(node);
    }

    visitArrayTypeExpression(node: ArrayTypeExpressionNode): T {
        return this.visitChildren(node);
    }

    visitUnionTypeExpression(node: UnionTypeExpressionNode): T {
        return this.visitChildren(node);
    }

    visitIdentifierTypeExpression(node: IdentifierTypeExpressionNode): T {
        return this.visitChildren(node);
    }

    visitTupleTypeExpression(node: TupleTypeExpressionNode): T {
        return this.visitChildren(node);
    }

    visitParenthesisTypeExpression(node: ParenthesisTypeExpressionNode): T {
        return this.visitChildren(node);
    }

    visitBooleanTypeExpression(node: BooleanTypeExpressionNode): T {
        return this.visitChildren(node);
    }

    visitNumberTypeExpression(node: NumberTypeExpressionNode): T {
        return this.visitChildren(node);
    }

    visitStringTypeExpression(node: StringTypeExpressionNode): T {
        return this.visitChildren(node);
    }

    // identifier node

    visitIdentifier(node: IdentifierNode): T {
        return this.visitChildren(node);
    }

    // literal nodes

    visitLiteral(node: LiteralNode): T {
        return this.visit(node);
    }

    visitArrayLiteral(node: ArrayLiteralNode): T {
        return this.visitChildren(node);
    }

    visitBooleanLiteral(node: BooleanLiteralNode): T {
        return this.visitChildren(node);
    }

    visitNumberLiteral(node: NumberLiteralNode): T {
        return this.visitChildren(node);
    }

    visitStringLiteral(node: StringLiteralNode): T {
        return this.visitChildren(node);
    }
}
