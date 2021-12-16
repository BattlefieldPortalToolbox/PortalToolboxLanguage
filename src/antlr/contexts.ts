import type PortalToolboxLanguageParser from "./PortalToolboxLanguageParser";

type ConstructorReturn<T extends new (...args: any[]) => any> = T extends new (...args: any[]) => infer R ? R : never;

// code context

export type CodeContext = ConstructorReturn<typeof PortalToolboxLanguageParser.CodeContext>;

// mod context

export type ModDefinitionContext = ConstructorReturn<typeof PortalToolboxLanguageParser.ModDefinitionContext>;

// rule definition context

export type RuleDefinitionContext = ConstructorReturn<typeof PortalToolboxLanguageParser.RuleDefinitionContext>;

// subroutine contexts

export type SubroutineDefinitionContext = ConstructorReturn<typeof PortalToolboxLanguageParser.SubroutineDefinitionContext>;
export type ArgumentsDeclarationContext = ConstructorReturn<typeof PortalToolboxLanguageParser.ArgumentsDeclarationContext>;
export type ArgumentDeclarationContext = ConstructorReturn<typeof PortalToolboxLanguageParser.ArgumentDeclarationContext>;

// body contexts

export type BodyContext = ConstructorReturn<typeof PortalToolboxLanguageParser.BodyContext>;
export type BodyConditionsContext = ConstructorReturn<typeof PortalToolboxLanguageParser.BodyConditionsContext>;
export type BodyConditionContext = ConstructorReturn<typeof PortalToolboxLanguageParser.BodyConditionContext>;
export type BodyActionsContext = ConstructorReturn<typeof PortalToolboxLanguageParser.BodyActionsContext>;

// statement contexts

export type StatementContext = ConstructorReturn<typeof PortalToolboxLanguageParser.StatementContext>;
export type VariableDeclarationStatementContext = ConstructorReturn<typeof PortalToolboxLanguageParser.VariableDeclarationStatementContext>;
export type IfStatementContext = ConstructorReturn<typeof PortalToolboxLanguageParser.IfStatementContext>;
export type WhileStatementContext = ConstructorReturn<typeof PortalToolboxLanguageParser.WhileStatementContext>;
export type ForStatementContext = ConstructorReturn<typeof PortalToolboxLanguageParser.ForStatementContext>;
export type ReturnStatementContext = ConstructorReturn<typeof PortalToolboxLanguageParser.ReturnStatementContext>;
export type BreakStatementContext = ConstructorReturn<typeof PortalToolboxLanguageParser.BreakStatementContext>;
export type ContinueStatementContext = ConstructorReturn<typeof PortalToolboxLanguageParser.ContinueStatementContext>;
export type BlockStatementContext = ConstructorReturn<typeof PortalToolboxLanguageParser.BlockStatementContext>;
export type MemberAssignmentStatementContext = ConstructorReturn<typeof PortalToolboxLanguageParser.MemberAssignmentStatementContext>;
export type IndexAssignmentStatementContext = ConstructorReturn<typeof PortalToolboxLanguageParser.IndexAssignmentStatementContext>;
export type IdentifierAssignmentStatementContext = ConstructorReturn<typeof PortalToolboxLanguageParser.IdentifierAssignmentStatementContext>;
export type ExpressionStatementContext = ConstructorReturn<typeof PortalToolboxLanguageParser.ExpressionStatementContext>;

// variable declaration contexts

export type VariableDeclarationContext = ConstructorReturn<typeof PortalToolboxLanguageParser.VariableDeclarationContext>;
export type VariableDeclarationWithoutSpecifierContext = ConstructorReturn<typeof PortalToolboxLanguageParser.VariableDeclarationWithoutSpecifierContext>;

// expression contexts

export type ExpressionContext = ConstructorReturn<typeof PortalToolboxLanguageParser.ExpressionContext>;
export type CallExpressionContext = ConstructorReturn<typeof PortalToolboxLanguageParser.CallExpressionContext>;
export type MemberExpressionContext = ConstructorReturn<typeof PortalToolboxLanguageParser.MemberExpressionContext>;
export type IndexExpressionContext = ConstructorReturn<typeof PortalToolboxLanguageParser.IndexExpressionContext>;
export type AwaitExpressionContext = ConstructorReturn<typeof PortalToolboxLanguageParser.AwaitExpressionContext>;
export type UnaryExpressionContext = ConstructorReturn<typeof PortalToolboxLanguageParser.UnaryExpressionContext>;
export type CastExpressionContext = ConstructorReturn<typeof PortalToolboxLanguageParser.CastExpressionContext>;
export type BinaryExpressionContext = ConstructorReturn<typeof PortalToolboxLanguageParser.BinaryExpressionContext>;
export type TernaryExpressionContext = ConstructorReturn<typeof PortalToolboxLanguageParser.TernaryExpressionContext>;
export type IdentifierExpressionContext = ConstructorReturn<typeof PortalToolboxLanguageParser.IdentifierExpressionContext>;
export type LiteralExpressionContext = ConstructorReturn<typeof PortalToolboxLanguageParser.LiteralExpressionContext>;
export type ParenthesisExpressionContext = ConstructorReturn<typeof PortalToolboxLanguageParser.ParenthesisExpressionContext>;

// call arguments context

export type CallArgumentsContext = ConstructorReturn<typeof PortalToolboxLanguageParser.CallArgumentsContext>;

// type expression contexts

export type TypeExpressionContext = ConstructorReturn<typeof PortalToolboxLanguageParser.TypeExpressionContext>;
export type ArrayTypeExpressionContext = ConstructorReturn<typeof PortalToolboxLanguageParser.ArrayTypeExpressionContext>;
export type UnionTypeExpressionContext = ConstructorReturn<typeof PortalToolboxLanguageParser.UnionTypeExpressionContext>;
export type IdentifierTypeExpressionContext = ConstructorReturn<typeof PortalToolboxLanguageParser.IdentifierTypeExpressionContext>;
export type TupleTypeExpressionContext = ConstructorReturn<typeof PortalToolboxLanguageParser.TupleTypeExpressionContext>;
export type ParenthesisTypeExpressionContext = ConstructorReturn<typeof PortalToolboxLanguageParser.ParenthesisTypeExpressionContext>;
export type BooleanTypeExpressionContext = ConstructorReturn<typeof PortalToolboxLanguageParser.BooleanTypeExpressionContext>;
export type NumberTypeExpressionContext = ConstructorReturn<typeof PortalToolboxLanguageParser.NumberTypeExpressionContext>;
export type StringTypeExpressionContext = ConstructorReturn<typeof PortalToolboxLanguageParser.StringTypeExpressionContext>;

// identifier context

export type IdentifierContext = ConstructorReturn<typeof PortalToolboxLanguageParser.IdentifierContext>;

// literal contexts

export type LiteralContext = ConstructorReturn<typeof PortalToolboxLanguageParser.LiteralContext>;
export type ArrayLiteralContext = ConstructorReturn<typeof PortalToolboxLanguageParser.ArrayLiteralContext>;
export type BooleanLiteralContext = ConstructorReturn<typeof PortalToolboxLanguageParser.BooleanLiteralContext>;
export type NumberLiteralContext = ConstructorReturn<typeof PortalToolboxLanguageParser.NumberLiteralContext>;
export type StringLiteralContext = ConstructorReturn<typeof PortalToolboxLanguageParser.StringLiteralContext>;
