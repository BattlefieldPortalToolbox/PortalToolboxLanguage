import type { ParseTreeVisitor } from "antlr4/tree/Tree";
import type {
    ArgumentDeclarationContext,
    ArgumentsDeclarationContext,
    ArrayLiteralContext,
    ArrayTypeExpressionContext,
    AwaitExpressionContext,
    BinaryExpressionContext,
    BlockStatementContext,
    BodyActionsContext,
    BodyConditionContext,
    BodyConditionsContext,
    BodyContext,
    BooleanLiteralContext,
    BooleanTypeExpressionContext,
    BreakStatementContext,
    CallArgumentsContext,
    CallExpressionContext,
    CastExpressionContext,
    CodeContext,
    ContinueStatementContext,
    ExpressionStatementContext,
    ForStatementContext,
    IdentifierAssignmentStatementContext,
    IdentifierContext,
    IdentifierExpressionContext,
    IdentifierTypeExpressionContext,
    IfStatementContext,
    IndexAssignmentStatementContext,
    IndexExpressionContext,
    LiteralExpressionContext,
    MemberAssignmentStatementContext,
    MemberExpressionContext,
    ModDefinitionContext,
    NumberLiteralContext,
    NumberTypeExpressionContext,
    ParenthesisExpressionContext,
    ParenthesisTypeExpressionContext,
    ReturnStatementContext,
    RuleDefinitionContext,
    StringLiteralContext,
    StringTypeExpressionContext,
    SubroutineDefinitionContext,
    TernaryExpressionContext,
    TupleTypeExpressionContext,
    UnaryExpressionContext,
    UnionTypeExpressionContext,
    VariableDeclarationContext,
    VariableDeclarationStatementContext,
    VariableDeclarationWithoutSpecifierContext,
    WhileStatementContext
} from "./contexts";
import PortalToolboxLanguageParser from "./PortalToolboxLanguageParser";
import { ParserRuleContext } from "antlr4";

declare class PortalToolboxLanguageVisitor<T = any> extends ParseTreeVisitor {

    override visit(ctx: ParserRuleContext): T;

    override visitChildren(ctx: ParserRuleContext): T;

    // code visitor

    visitCode(ctx: CodeContext): T;

    // mod visitor

    visitModDefinition(ctx: ModDefinitionContext): T;

    // rule definition visitor

    visitRuleDefinition(ctx: RuleDefinitionContext): T;

    // subroutine visitors

    visitSubroutineDefinition(ctx: SubroutineDefinitionContext): T;

    visitArgumentsDeclaration(ctx: ArgumentsDeclarationContext): T;

    visitArgumentDeclaration(ctx: ArgumentDeclarationContext): T;

    // body visitors

    visitBody(ctx: BodyContext): T;

    visitBodyConditions(ctx: BodyConditionsContext): T;

    visitBodyCondition(ctx: BodyConditionContext): T;

    visitBodyActions(ctx: BodyActionsContext): T;

    // statement visitors

    visitVariableDeclarationStatement(ctx: VariableDeclarationStatementContext): T;

    visitIfStatement(ctx: IfStatementContext): T;

    visitWhileStatement(ctx: WhileStatementContext): T;

    visitForStatement(ctx: ForStatementContext): T;

    visitReturnStatement(ctx: ReturnStatementContext): T;

    visitBreakStatement(ctx: BreakStatementContext): T;

    visitContinueStatement(ctx: ContinueStatementContext): T;

    visitBlockStatement(ctx: BlockStatementContext): T;

    visitMemberAssignmentStatement(ctx: MemberAssignmentStatementContext): T;

    visitIndexAssignmentStatement(ctx: IndexAssignmentStatementContext): T;

    visitIdentifierAssignmentStatement(ctx: IdentifierAssignmentStatementContext): T;

    visitExpressionStatement(ctx: ExpressionStatementContext): T;

    // variable declaration visitors

    visitVariableDeclaration(ctx: VariableDeclarationContext): T;

    visitVariableDeclarationWithoutSpecifier(ctx: VariableDeclarationWithoutSpecifierContext): T;

    // expression visitors

    visitCallExpression(ctx: CallExpressionContext): T;

    visitMemberExpression(ctx: MemberExpressionContext): T;

    visitIndexExpression(ctx: IndexExpressionContext): T;

    visitAwaitExpression(ctx: AwaitExpressionContext): T;

    visitUnaryExpression(ctx: UnaryExpressionContext): T;

    visitCastExpression(ctx: CastExpressionContext): T;

    visitBinaryExpression(ctx: BinaryExpressionContext): T;

    visitTernaryExpression(ctx: TernaryExpressionContext): T;

    visitIdentifierExpression(ctx: IdentifierExpressionContext): T;

    visitLiteralExpression(ctx: LiteralExpressionContext): T;

    visitParenthesisExpression(ctx: ParenthesisExpressionContext): T;

    // call arguments visitor

    visitCallArguments(ctx: CallArgumentsContext): T;

    // type expression visitors

    visitArrayTypeExpression(ctx: ArrayTypeExpressionContext): T;

    visitUnionTypeExpression(ctx: UnionTypeExpressionContext): T;

    visitIdentifierTypeExpression(ctx: IdentifierTypeExpressionContext): T;

    visitTupleTypeExpression(ctx: TupleTypeExpressionContext): T;

    visitParenthesisTypeExpression(ctx: ParenthesisTypeExpressionContext): T;

    visitBooleanTypeExpression(ctx: BooleanTypeExpressionContext): T;

    visitNumberTypeExpression(ctx: NumberTypeExpressionContext): T;

    visitStringTypeExpression(ctx: StringTypeExpressionContext): T;

    // identifier visitor

    visitIdentifier(ctx: IdentifierContext): T;

    // literal visitors

    visitArrayLiteral(ctx: ArrayLiteralContext): T;

    visitBooleanLiteral(ctx: BooleanLiteralContext): T;

    visitNumberLiteral(ctx: NumberLiteralContext): T;

    visitStringLiteral(ctx: StringLiteralContext): T;
}

type ConstructorReturn<T extends new (...args: any[]) => any> = T extends new (...args: any[]) => infer R ? R : never;

type ContextNameWithoutContext<T extends string> = T extends `${infer Name}Context` ? Name : never;

type AllContextsNames = Extract<keyof typeof PortalToolboxLanguageParser, `${string}Context`>;

type VisitorContextsNames = Exclude<AllContextsNames, "StatementContext" | "ExpressionContext" | "TypeExpressionContext" | "LiteralContext">;

type RequiredVisitorMethods = {
    [Context in VisitorContextsNames as `visit${ContextNameWithoutContext<Context>}`]: (ctx: ConstructorReturn<typeof PortalToolboxLanguageParser[Context]>) => any;
};

/**
 * This is a type-check class to ensure that all the actually generated visitor methods in the JavaScript source code
 * are being declared in this declaration file. This class will throw an error if PortalToolboxLanguageVisitor declaration
 * is missing some visitor methods.
 */
declare class __TypeCheckClass_DoNotUse extends PortalToolboxLanguageVisitor implements RequiredVisitorMethods {}

export = PortalToolboxLanguageVisitor;
