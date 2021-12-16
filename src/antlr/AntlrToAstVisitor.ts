import PortalToolboxLanguageVisitor from "./PortalToolboxLanguageVisitor";
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
} from "../ast";
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
    ExpressionContext,
    ExpressionStatementContext,
    ForStatementContext,
    IdentifierAssignmentStatementContext,
    IdentifierContext,
    IdentifierExpressionContext,
    IdentifierTypeExpressionContext,
    IfStatementContext,
    IndexAssignmentStatementContext,
    IndexExpressionContext,
    LiteralContext,
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
    StatementContext,
    StringLiteralContext,
    StringTypeExpressionContext,
    SubroutineDefinitionContext,
    TernaryExpressionContext,
    TupleTypeExpressionContext,
    TypeExpressionContext,
    UnaryExpressionContext,
    UnionTypeExpressionContext,
    VariableDeclarationContext,
    VariableDeclarationStatementContext,
    VariableDeclarationWithoutSpecifierContext,
    WhileStatementContext
} from "./contexts";
import type { TerminalNode } from "antlr4/tree/Tree";
import type { ParserRuleContext, Token } from "antlr4";

export class AntlrToAstVisitor extends PortalToolboxLanguageVisitor<Node> {

    static specialEscapeCharacters: { [char: string]: string } = {
        "n": "\n"
    };

    override visitCode(ctx: CodeContext): CodeNode {
        const definitions = [
            ...ctx.variableDeclaration() as VariableDeclarationContext[],
            ...ctx.subroutineDefinition() as SubroutineDefinitionContext[],
            ...ctx.ruleDefinition() as RuleDefinitionContext[],
            ...ctx.modDefinition() as ModDefinitionContext[]
        ].map(definition => this.visit(definition))
            .sort((a, b) => a.location!.start - b.location!.start) as (VariableDeclarationNode | SubroutineDefinitionNode | RuleDefinitionNode | ModDefinitionNode)[];

        return AntlrToAstVisitor.setLocation(new CodeNode(definitions), ctx);
    }

    override visitModDefinition(ctx: ModDefinitionContext): ModDefinitionNode {
        const identifier = ctx.modIdentifier ? this.visitIdentifier(ctx.modIdentifier) : null;
        const identifierRules = (ctx.ruleIdentifier as IdentifierContext[])
            .map(modRule => this.visitIdentifier(modRule));
        const ruleDefinitionRules = (ctx.ruleDefinition() as RuleDefinitionContext[])
            .map(modRule => this.visitRuleDefinition(modRule));
        const rules = [...identifierRules, ...ruleDefinitionRules]
            .sort((a, b) => a.location!.start - b.location!.start);

        return AntlrToAstVisitor.setLocation(new ModDefinitionNode(identifier, rules), ctx);
    }

    override visitRuleDefinition(ctx: RuleDefinitionContext): RuleDefinitionNode {
        const isMod = !!ctx.MOD();
        const isAsync = !!ctx.ASYNC();
        const identifier = ctx.ruleIdentifier ? this.visitIdentifier(ctx.ruleIdentifier) : null;
        const event = this.visitIdentifier(ctx.event);
        const eventArgument = ctx.eventArgument ? this.visitIdentifier(ctx.eventArgument) : null;
        const body = this.visitBody(ctx.body());

        return AntlrToAstVisitor.setLocation(new RuleDefinitionNode(
            isMod,
            isAsync,
            identifier,
            event,
            eventArgument,
            body
        ), ctx);
    }

    override visitSubroutineDefinition(ctx: SubroutineDefinitionContext): SubroutineDefinitionNode {
        const isAsync = !!ctx.ASYNC();
        const identifier = this.visitIdentifier(ctx.identifier());
        const argumentsDeclaration = ctx.argumentsDeclaration() ? this.visitArgumentsDeclaration(ctx.argumentsDeclaration()) : null;
        const returnTypeExpression = ctx.typeExpression() ? this.visitTypeExpression(ctx.typeExpression()) : null;
        const body = this.visitBody(ctx.body());

        return AntlrToAstVisitor.setLocation(new SubroutineDefinitionNode(
            isAsync,
            identifier,
            argumentsDeclaration,
            returnTypeExpression,
            body
        ), ctx);
    }

    override visitArgumentsDeclaration(ctx: ArgumentsDeclarationContext): ArgumentsDeclarationNode {
        const argumentsDeclarations = (ctx.argumentDeclaration() as ArgumentDeclarationContext[]).map(a => this.visitArgumentDeclaration(a));

        return AntlrToAstVisitor.setLocation(new ArgumentsDeclarationNode(argumentsDeclarations), ctx);
    }

    override visitArgumentDeclaration(ctx: ArgumentDeclarationContext): ArgumentDeclarationNode {
        const identifier = this.visitIdentifier(ctx.identifier());
        const typeExpression = ctx.typeExpression() ? this.visitTypeExpression(ctx.typeExpression()) : null;

        return AntlrToAstVisitor.setLocation(new ArgumentDeclarationNode(identifier, typeExpression), ctx);
    }

    override visitBody(ctx: BodyContext): BodyNode {
        const blocks = [
            ...ctx.bodyConditions() as BodyConditionsContext[],
            ...ctx.bodyCondition() as BodyConditionContext[],
            ...ctx.bodyActions() as BodyActionsContext[]
        ].sort((a, b) => a.start.start - b.start.start)
            .map(b => this.visit(b));
        const statements = (ctx.statement() as StatementContext[]).map(s => this.visitStatement(s));

        return AntlrToAstVisitor.setLocation(new BodyNode(blocks, statements), ctx);
    }

    override visitBodyConditions(ctx: BodyConditionsContext): BodyConditionsNode {
        const conditions = (ctx.expression() as ExpressionContext[]).map(e => this.visitExpression(e));

        return AntlrToAstVisitor.setLocation(new BodyConditionsNode(conditions), ctx);
    }

    override visitBodyCondition(ctx: BodyConditionContext): BodyConditionNode {
        return AntlrToAstVisitor.setLocation(new BodyConditionNode(this.visitExpression(ctx.expression())), ctx);
    }

    override visitBodyActions(ctx: BodyActionsContext): BodyActionsNode {
        const statements = (ctx.statement() as StatementContext[]).map(s => this.visitStatement(s));

        return AntlrToAstVisitor.setLocation(new BodyActionsNode(statements), ctx);
    }

    visitStatement(ctx: StatementContext): StatementNode {
        return this.visit(ctx);
    }

    override visitVariableDeclarationStatement(ctx: VariableDeclarationStatementContext): VariableDeclarationStatementNode {
        return AntlrToAstVisitor.setLocation(new VariableDeclarationStatementNode(this.visitVariableDeclaration(ctx.variableDeclaration())), ctx);
    }

    override visitIfStatement(ctx: IfStatementContext): IfStatementNode {
        const condition = this.visitExpression(ctx.expression());
        const ifTrue = this.visitExpression(ctx.ifTrue);
        const ifFalse = ctx.ifFalse ? this.visitExpression(ctx.ifFalse) : null;

        return AntlrToAstVisitor.setLocation(new IfStatementNode(condition, ifTrue, ifFalse), ctx);
    }

    override visitWhileStatement(ctx: WhileStatementContext): WhileStatementNode {
        const condition = this.visitExpression(ctx.expression());
        const statement = this.visitStatement(ctx.statement());

        return AntlrToAstVisitor.setLocation(new WhileStatementNode(condition, statement), ctx);
    }

    override visitForStatement(ctx: ForStatementContext): ForStatementNode {
        const isVar = !!ctx.VAR();
        const identifier = this.visitIdentifier(ctx.identifier());
        const fromExpression = ctx.from ? this.visitExpression(ctx.from) : null;
        const toExpression = this.visitExpression(ctx.to);
        const byExpression = ctx.by ? this.visitExpression(ctx.by) : null;
        const statement = this.visitStatement(ctx.statement());

        return AntlrToAstVisitor.setLocation(new ForStatementNode(
            isVar,
            identifier,
            fromExpression,
            toExpression,
            byExpression,
            statement
        ), ctx);
    }

    override visitReturnStatement(ctx: ReturnStatementContext): ReturnStatementNode {
        const expression = ctx.expression() ? this.visitExpression(ctx.expression()) : null;

        return AntlrToAstVisitor.setLocation(new ReturnStatementNode(expression), ctx);
    }

    override visitBreakStatement(ctx: BreakStatementContext): BreakStatementNode {
        return AntlrToAstVisitor.setLocation(new BreakStatementNode(), ctx);
    }

    override visitContinueStatement(ctx: ContinueStatementContext): ContinueStatementNode {
        return AntlrToAstVisitor.setLocation(new ContinueStatementNode(), ctx);
    }

    override visitBlockStatement(ctx: BlockStatementContext): BlockStatementNode {
        const statements = (ctx.statement() as StatementContext[]).map(s => this.visitStatement(s));

        return AntlrToAstVisitor.setLocation(new BlockStatementNode(statements), ctx);
    }

    override visitMemberAssignmentStatement(ctx: MemberAssignmentStatementContext): MemberAssignmentStatementNode {
        const containerExpression = this.visitExpression(ctx.expression(0));
        const identifier = this.visitIdentifier(ctx.identifier());
        const expression = this.visitExpression(ctx.expression(1));

        return AntlrToAstVisitor.setLocation(new MemberAssignmentStatementNode(containerExpression, identifier, expression), ctx);
    }

    override visitIndexAssignmentStatement(ctx: IndexAssignmentStatementContext): IndexAssignmentStatementNode {
        const containerExpression = this.visitExpression(ctx.expression(0));
        const indexExpression = this.visitExpression(ctx.expression(1));
        const expression = this.visitExpression(ctx.expression(2));

        return AntlrToAstVisitor.setLocation(new IndexAssignmentStatementNode(containerExpression, indexExpression, expression), ctx);
    }

    override visitIdentifierAssignmentStatement(ctx: IdentifierAssignmentStatementContext): IdentifierAssignmentStatementNode {
        const identifier = this.visitIdentifier(ctx.identifier());
        const expression = this.visitExpression(ctx.expression());

        return AntlrToAstVisitor.setLocation(new IdentifierAssignmentStatementNode(identifier, expression), ctx);
    }

    override visitExpressionStatement(ctx: ExpressionStatementContext): ExpressionStatementNode {
        return AntlrToAstVisitor.setLocation(new ExpressionStatementNode(this.visitExpression(ctx.expression())), ctx);
    }

    override visitVariableDeclaration(ctx: VariableDeclarationContext): VariableDeclarationNode {
        const specifier = (ctx.specifier as Token).text as VariableScopeSpecifier;
        const variables = (ctx.variableDeclarationWithoutSpecifier() as VariableDeclarationWithoutSpecifierContext[])
            .map(v => this.visitVariableDeclarationWithoutSpecifier(v));

        return AntlrToAstVisitor.setLocation(new VariableDeclarationNode(specifier, variables), ctx);
    }

    override visitVariableDeclarationWithoutSpecifier(ctx: VariableDeclarationWithoutSpecifierContext): VariableDeclarationWithoutSpecifierNode {
        const identifier = this.visitIdentifier(ctx.identifier());
        const typeExpression = ctx.typeExpression() ? this.visitTypeExpression(ctx.typeExpression()) : null;
        const expression = ctx.expression() ? this.visitExpression(ctx.expression()) : null;

        return AntlrToAstVisitor.setLocation(new VariableDeclarationWithoutSpecifierNode(identifier, typeExpression, expression), ctx);
    }

    visitExpression(ctx: ExpressionContext): ExpressionNode {
        return this.visit(ctx);
    }

    override visitCallExpression(ctx: CallExpressionContext): CallExpressionNode {
        const expression = this.visitExpression(ctx.expression());
        const callArguments = this.visitCallArguments(ctx.callArguments());

        return AntlrToAstVisitor.setLocation(new CallExpressionNode(expression, callArguments), ctx);
    }

    override visitMemberExpression(ctx: MemberExpressionContext): MemberExpressionNode {
        const expression = this.visitExpression(ctx.expression());
        const identifier = this.visitIdentifier(ctx.identifier());

        return AntlrToAstVisitor.setLocation(new MemberExpressionNode(expression, identifier), ctx);
    }

    override visitIndexExpression(ctx: IndexExpressionContext): IndexExpressionNode {
        const expression = this.visitExpression(ctx.expression(0));
        const indexExpression = this.visitExpression(ctx.expression(1));

        return AntlrToAstVisitor.setLocation(new IndexExpressionNode(expression, indexExpression), ctx);
    }

    override visitAwaitExpression(ctx: AwaitExpressionContext): AwaitExpressionNode {
        return AntlrToAstVisitor.setLocation(new AwaitExpressionNode(this.visitExpression(ctx.expression())), ctx);
    }

    override visitUnaryExpression(ctx: UnaryExpressionContext): UnaryExpressionNode {
        const expression = this.visitExpression(ctx.expression());
        const operator = (ctx.op as Token).text as UnaryOperator;

        return AntlrToAstVisitor.setLocation(new UnaryExpressionNode(expression, operator), ctx);
    }

    override visitCastExpression(ctx: CastExpressionContext): CastExpressionNode {
        const expression = this.visitExpression(ctx.expression());
        const typeExpression = this.visitTypeExpression(ctx.typeExpression());

        return AntlrToAstVisitor.setLocation(new CastExpressionNode(expression, typeExpression), ctx);
    }

    override visitBinaryExpression(ctx: BinaryExpressionContext): BinaryExpressionNode {
        const left = this.visitExpression(ctx.left);
        const right = this.visitExpression(ctx.right);
        const op = (ctx.op as Token).text as BinaryOperator;

        return AntlrToAstVisitor.setLocation(new BinaryExpressionNode(left, right, op), ctx);
    }

    override visitTernaryExpression(ctx: TernaryExpressionContext): TernaryExpressionNode {
        const condition = this.visitExpression(ctx.expression(0));
        const ifTrue = this.visitExpression(ctx.expression(1));
        const ifFalse = this.visitExpression(ctx.expression(2));

        return AntlrToAstVisitor.setLocation(new TernaryExpressionNode(condition, ifTrue, ifFalse), ctx);
    }

    override visitIdentifierExpression(ctx: IdentifierExpressionContext): IdentifierExpressionNode {
        return AntlrToAstVisitor.setLocation(new IdentifierExpressionNode(this.visitIdentifier(ctx.identifier())), ctx);
    }

    override visitLiteralExpression(ctx: LiteralExpressionContext): LiteralExpressionNode {
        return AntlrToAstVisitor.setLocation(new LiteralExpressionNode(this.visitLiteral(ctx.literal())), ctx);
    }

    override visitParenthesisExpression(ctx: ParenthesisExpressionContext): ParenthesisExpressionNode {
        return AntlrToAstVisitor.setLocation(new ParenthesisExpressionNode(this.visitExpression(ctx.expression())), ctx);
    }

    override visitCallArguments(ctx: CallArgumentsContext): CallArgumentsNode {
        const expressions = (ctx.expression() as ExpressionContext[]).map(e => this.visitExpression(e));

        return AntlrToAstVisitor.setLocation(new CallArgumentsNode(expressions), ctx);
    }

    visitTypeExpression(ctx: TypeExpressionContext): TypeExpressionNode {
        return this.visit(ctx);
    }

    override visitArrayTypeExpression(ctx: ArrayTypeExpressionContext): ArrayTypeExpressionNode {
        return AntlrToAstVisitor.setLocation(new ArrayTypeExpressionNode(this.visitTypeExpression(ctx.typeExpression())), ctx);
    }

    override visitUnionTypeExpression(ctx: UnionTypeExpressionContext): UnionTypeExpressionNode {
        const elements = (ctx.typeExpression() as TypeExpressionContext[])
            .map(e => {
                const typeExpression = this.visitTypeExpression(e);

                return typeExpression instanceof UnionTypeExpressionNode ? typeExpression.elements : [typeExpression];
            })
            .flat();

        return AntlrToAstVisitor.setLocation(new UnionTypeExpressionNode(elements), ctx);
    }

    override visitIdentifierTypeExpression(ctx: IdentifierTypeExpressionContext): IdentifierTypeExpressionNode {
        return AntlrToAstVisitor.setLocation(new IdentifierTypeExpressionNode(this.visitIdentifier(ctx.identifier())), ctx);
    }

    override visitParenthesisTypeExpression(ctx: ParenthesisTypeExpressionContext): ParenthesisTypeExpressionNode {
        return AntlrToAstVisitor.setLocation(new ParenthesisTypeExpressionNode(this.visitTypeExpression(ctx.typeExpression())), ctx);
    }

    override visitTupleTypeExpression(ctx: TupleTypeExpressionContext): TupleTypeExpressionNode {
        const elements = (ctx.typeExpression() as TypeExpressionContext[]).map(e => this.visitTypeExpression(e));

        return AntlrToAstVisitor.setLocation(new TupleTypeExpressionNode(elements), ctx);
    }

    override visitBooleanTypeExpression(ctx: BooleanTypeExpressionContext): BooleanTypeExpressionNode {
        return AntlrToAstVisitor.setLocation(new BooleanTypeExpressionNode(AntlrToAstVisitor.getBooleanLiteralNode(ctx)), ctx);
    }

    override visitNumberTypeExpression(ctx: NumberTypeExpressionContext): NumberTypeExpressionNode {
        return AntlrToAstVisitor.setLocation(new NumberTypeExpressionNode(AntlrToAstVisitor.getNumberLiteralNode(ctx)), ctx);
    }

    override visitStringTypeExpression(ctx: StringTypeExpressionContext): StringTypeExpressionNode {
        return AntlrToAstVisitor.setLocation(new StringTypeExpressionNode(AntlrToAstVisitor.getStringLiteralNode(ctx)), ctx);
    }

    override visitIdentifier(ctx: IdentifierContext): IdentifierNode {
        const backtickIdentifier = ctx.BACKTICK_IDENTIFIER() as unknown as TerminalNode | null;
        const name = backtickIdentifier ? AntlrToAstVisitor.unescape(backtickIdentifier.getText()) : ctx.getText();

        return AntlrToAstVisitor.setLocation(new IdentifierNode(name), ctx);
    }

    visitLiteral(ctx: LiteralContext): LiteralNode {
        return this.visit(ctx) as LiteralNode;
    }

    override visitArrayLiteral(ctx: ArrayLiteralContext): ArrayLiteralNode {
        const expressions = (ctx.expression() as ExpressionContext[]).map(e => this.visitExpression(e));

        return AntlrToAstVisitor.setLocation(new ArrayLiteralNode(expressions), ctx);
    }

    override visitBooleanLiteral(ctx: BooleanLiteralContext): BooleanLiteralNode {
        return AntlrToAstVisitor.getBooleanLiteralNode(ctx);
    }

    override visitNumberLiteral(ctx: NumberLiteralContext): NumberLiteralNode {
        return AntlrToAstVisitor.getNumberLiteralNode(ctx);
    }

    override visitStringLiteral(ctx: StringLiteralContext): StringLiteralNode {
        return AntlrToAstVisitor.getStringLiteralNode(ctx);
    }

    private static getBooleanLiteralNode(ctx: ParserRuleContext & { BOOLEAN_LITERAL(): unknown }): BooleanLiteralNode {
        return AntlrToAstVisitor.setLocation(new BooleanLiteralNode((ctx.BOOLEAN_LITERAL() as TerminalNode).getText() === "true"), ctx);
    }

    private static getNumberLiteralNode(ctx: ParserRuleContext & { NUMBER_LITERAL(): unknown }): NumberLiteralNode {
        return AntlrToAstVisitor.setLocation(new NumberLiteralNode((ctx.NUMBER_LITERAL() as TerminalNode).getText()), ctx);
    }

    private static getStringLiteralNode(ctx: ParserRuleContext & { STRING_LITERAL(): unknown }): StringLiteralNode {
        return AntlrToAstVisitor.setLocation(new StringLiteralNode(AntlrToAstVisitor.unescape((ctx.STRING_LITERAL() as TerminalNode).getText())), ctx);
    }

    private static setLocation<T extends Node>(node: T, ctx: ParserRuleContext): T {
        node.location = {
            start: ctx.start.start,
            stop: ctx.stop ? ctx.stop.stop + 1 : ctx.start.start,
            line: ctx.start.line,
            column: ctx.start.column + 1
        };

        return node;
    }

    private static unescape(str: string): string {
        const characters: string[] = [];

        for (let i = 1; i < str.length - 1; i++) {
            if (str[i] !== "\\") {
                characters.push(str[i]);
            } else {
                i++;

                if (str[i] in AntlrToAstVisitor.specialEscapeCharacters) {
                    characters.push(AntlrToAstVisitor.specialEscapeCharacters[str[i]]);
                } else {
                    characters.push(str[i]);
                }
            }
        }

        return characters.join("");
    }

}
