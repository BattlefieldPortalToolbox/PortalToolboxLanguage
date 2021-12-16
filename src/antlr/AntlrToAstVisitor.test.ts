import { AntlrToAstVisitor } from "./AntlrToAstVisitor";
import PortalToolboxLanguageParser from "./PortalToolboxLanguageParser";
import PortalToolboxLanguageLexer from "./PortalToolboxLanguageLexer";
import { CommonTokenStream, InputStream } from "antlr4";
import type {
    ArrayLiteralContext,
    ArrayTypeExpressionContext,
    AwaitExpressionContext,
    BinaryExpressionContext,
    BlockStatementContext,
    BooleanLiteralContext,
    BooleanTypeExpressionContext,
    BreakStatementContext,
    CallExpressionContext,
    CastExpressionContext,
    ContinueStatementContext,
    ExpressionStatementContext,
    ForStatementContext,
    IdentifierAssignmentStatementContext,
    IdentifierExpressionContext,
    IdentifierTypeExpressionContext,
    IfStatementContext,
    IndexAssignmentStatementContext,
    IndexExpressionContext,
    LiteralExpressionContext,
    MemberAssignmentStatementContext,
    MemberExpressionContext,
    NumberLiteralContext,
    NumberTypeExpressionContext,
    ParenthesisExpressionContext,
    ParenthesisTypeExpressionContext,
    ReturnStatementContext,
    StringLiteralContext,
    StringTypeExpressionContext,
    TernaryExpressionContext,
    TupleTypeExpressionContext,
    UnaryExpressionContext,
    UnionTypeExpressionContext,
    VariableDeclarationStatementContext,
    WhileStatementContext
} from "./contexts";
import {
    BinaryOperator,
    BodyActionsNode,
    BodyConditionNode,
    BodyConditionsNode,
    ExpressionStatementNode,
    IdentifierExpressionNode,
    IdentifierNode,
    IdentifierTypeExpressionNode,
    ISourceLocation,
    LiteralExpressionNode,
    NumberTypeExpressionNode,
    RuleDefinitionNode,
    SubroutineDefinitionNode,
    UnaryOperator,
    VariableDeclarationNode,
    VariableScopeSpecifier
} from "../ast";

function getParserFor(source: string): PortalToolboxLanguageParser {
    const inputStream = new InputStream(source);
    const lexer = new PortalToolboxLanguageLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);

    return new PortalToolboxLanguageParser(tokenStream);
}

function getSourceRange(text: string): ISourceLocation {
    return {start: 0, stop: text.length, line: 1, column: 1};
}

describe("AntlrToAstVisitor", () => {
    let visitor: AntlrToAstVisitor;

    beforeEach(() => {
        visitor = new AntlrToAstVisitor();
    });

    // code tests

    describe("visitCode", () => {
        it.each([
            ["", []],
            ["var foo; sub bar {} rule baz on bazEvent {} mod foobar {}", ["foo", "bar", "baz", "foobar"]],
            ["mod foobar {} rule baz on bazEvent {} sub bar {} var foo;", ["foobar", "baz", "bar", "foo"]]
        ] as [string, string[]][])("with input `%s` should return CodeNode with definitions %s", (source, definitions) => {
            const parser = getParserFor(source);
            const ctx = parser.code();

            const result = visitor.visitCode(ctx);

            expect(result.definitions.map(d => {
                if (d instanceof VariableDeclarationNode) return d.variables[0].identifier.name;
                if (d instanceof SubroutineDefinitionNode) return d.identifier.name;
                return d.identifier!.name;
            })).toEqual(definitions);
            expect(result.location).toEqual(getSourceRange(source));
        });
    });

    // mod tests

    describe("visitModDefinition", () => {
        const identifierCases = [null, "foo"];
        const rulesCases: [string, string[]][] = [
            ["", []],
            [" bar; rule baz on foobar {} ", ["bar", "baz"]],
            [" rule baz on foobar {} bar; ", ["baz", "bar"]],
        ];
        const modDefinitionTestCases: [string, null | string, string[]][] = [];

        for (const identifier of identifierCases) {
            for (const rules of rulesCases) {
                modDefinitionTestCases.push([`mod${identifier ? " " + identifier : ""} {${rules[0]}}`, identifier, rules[1]]);
            }
        }

        it.each(modDefinitionTestCases)("with input `%s` should return ModDefinitionNode with identifier %s and rules %s", (source, expectedIdentifier, expectedRules) => {
            const parser = getParserFor(source);
            const ctx = parser.modDefinition();

            const result = visitor.visitModDefinition(ctx);

            if (expectedIdentifier)
                expect(result.identifier?.name).toBe(expectedIdentifier);
            else
                expect(result.identifier).toBeNull();
            expect(result.rules.map(r => r instanceof IdentifierNode ? r.name : (r as RuleDefinitionNode).identifier!.name)).toEqual(expectedRules);
            expect(result.location).toEqual(getSourceRange(source));
        });
    });

    // rule definition tests

    describe("visitRuleDefinition", () => {
        const isModCases = [false, true];
        const isAsyncCases = [false, true];
        const identifierCases = [null, "foo"];
        const eventArgumentCases = [null, "baz"];
        const ruleDefinitionTestCases: [string, boolean, boolean, null | string, null | string][] = [];

        for (const isMod of isModCases) {
            for (const isAsync of isAsyncCases) {
                for (const identifier of identifierCases) {
                    for (const eventArgument of eventArgumentCases) {
                        ruleDefinitionTestCases.push([
                            `${isMod ? "mod " : ""}${isAsync ? "async " : ""}rule${identifier ? " " + identifier : ""} on bar${eventArgument ? "(" + eventArgument + ")" : ""} { foobar; }`,
                            isMod,
                            isAsync,
                            identifier,
                            eventArgument
                        ]);
                    }
                }
            }
        }

        it.each(ruleDefinitionTestCases)("with input `%s` should return RuleDefinitionNode with isMod %s, isAsync %s, identifier %s, event bar, event argument %s and body with statement foobar", (source, expectedIsMod, expectedIsAsync, expectedIdentifier, expectedEventArgument) => {
            const parser = getParserFor(source);
            const ctx = parser.ruleDefinition();

            const result = visitor.visitRuleDefinition(ctx);

            expect(result.isMod).toBe(expectedIsMod);
            expect(result.isAsync).toBe(expectedIsAsync);
            if (expectedIdentifier)
                expect(result.identifier?.name).toBe(expectedIdentifier);
            else
                expect(result.identifier).toBeNull();
            expect(result.event.name).toBe("bar");
            if (expectedEventArgument)
                expect(result.eventArgument?.name).toBe(expectedEventArgument);
            else
                expect(result.eventArgument).toBeNull();
            expect(((result.body.statements[0] as ExpressionStatementNode).expression as IdentifierExpressionNode).identifier.name).toBe("foobar");
            expect(result.location).toEqual(getSourceRange(source));
        });
    });

    // subroutine tests

    describe("visitSubroutineDefinition", () => {
        const isAsyncCases = [false, true];
        const argumentsCases: (null | string[])[] = [null, [], ["foo", "bar", "baz"]];
        const returnTypeExpressionCases: (null | string)[] = [null, "foobar"];
        const subroutineTestCases: [string, boolean, null | string[], string | null][] = [];

        for (const isAsync of isAsyncCases) {
            for (const argumentsCase of argumentsCases) {
                for (const returnTypeExpression of returnTypeExpressionCases) {
                    subroutineTestCases.push([
                        `${isAsync ? "async " : ""}sub foosub${argumentsCase ? "(" + argumentsCase.join(", ") + ")" : ""}${returnTypeExpression ? ": " + returnTypeExpression : ""} { foos; }`,
                        isAsync,
                        argumentsCase,
                        returnTypeExpression
                    ]);
                }
            }
        }

        it.each(subroutineTestCases)("with input `%s` should return SubroutineDefinitionNode with isAsync %s, identifier foosub, arguments declaration %s, return type expression %s and body with statement foos", (source, expectedIsAsync, expectedArguments, expectedReturnTypeExpression) => {
            const parser = getParserFor(source);
            const ctx = parser.subroutineDefinition();

            const result = visitor.visitSubroutineDefinition(ctx);

            expect(result.isAsync).toBe(expectedIsAsync);
            expect(result.identifier.name).toBe("foosub");
            if (expectedArguments)
                expect(result.argumentsDeclaration?.arguments.map(a => a.identifier.name)).toEqual(expectedArguments);
            else
                expect(result.argumentsDeclaration).toBeNull();
            if (expectedReturnTypeExpression)
                expect((result.returnTypeExpression as IdentifierTypeExpressionNode).identifier.name).toBe(expectedReturnTypeExpression);
            else
                expect(result.returnTypeExpression).toBeNull();
            expect(((result.body.statements[0] as ExpressionStatementNode).expression as IdentifierExpressionNode).identifier.name).toBe("foos");
            expect(result.location).toEqual(getSourceRange(source));
        });
    });

    describe("visitArgumentsDeclaration", () => {
        it.each([
            ["()", []],
            ["(foo)", ["foo"]],
            ["(foo, bar, baz)", ["foo", "bar", "baz"]],
        ])("with input `%s` should return ArgumentsDeclarationNode with arguments %s", (source, expectedArguments) => {
            const parser = getParserFor(source);
            const ctx = parser.argumentsDeclaration();

            const result = visitor.visitArgumentsDeclaration(ctx);

            expect(result.arguments.map(a => a.identifier.name)).toEqual(expectedArguments);
            expect(result.location).toEqual(getSourceRange(source));
        });
    });

    describe("visitArgumentDeclaration", () => {
        it("with input `foo` should return ArgumentDeclarationNode with identifier foo and no type expression", () => {
            const parser = getParserFor("foo");
            const ctx = parser.argumentDeclaration();

            const result = visitor.visitArgumentDeclaration(ctx);

            expect(result.identifier.name).toBe("foo");
            expect(result.typeExpression).toBeNull();
            expect(result.location).toEqual(getSourceRange("foo"));
        });

        it("with input `foo: bar` should return ArgumentDeclarationNode with identifier foo and type expression bar", () => {
            const parser = getParserFor("foo: bar");
            const ctx = parser.argumentDeclaration();

            const result = visitor.visitArgumentDeclaration(ctx);

            expect(result.identifier.name).toBe("foo");
            expect((result.typeExpression as IdentifierTypeExpressionNode).identifier.name).toBe("bar");
            expect(result.location).toEqual(getSourceRange("foo: bar"));
        });
    });

    // body tests

    describe("visitBody", () => {
        it("with input `%s` should return BodyNode with conditions, condition and actions blocks, and statement foobar", () => {
            const parser = getParserFor("{ actions { baz } conditions { foo } condition bar; foobar; }");
            const ctx = parser.body();

            const result = visitor.visitBody(ctx);

            expect(result.blocks[0]).toBeInstanceOf(BodyActionsNode);
            expect((((result.blocks[0] as BodyActionsNode).statements[0] as ExpressionStatementNode).expression as IdentifierExpressionNode).identifier.name).toBe("baz");
            expect(result.blocks[1]).toBeInstanceOf(BodyConditionsNode);
            expect(((result.blocks[1] as BodyConditionsNode).conditions[0] as IdentifierExpressionNode).identifier.name).toBe("foo");
            expect(result.blocks[2]).toBeInstanceOf(BodyConditionNode);
            expect(((result.blocks[2] as BodyConditionNode).condition as IdentifierExpressionNode).identifier.name).toBe("bar");
            expect(((result.statements[0] as ExpressionStatementNode).expression as IdentifierExpressionNode).identifier.name).toBe("foobar");
            expect(result.location).toEqual(getSourceRange("{ conditions { foo } condition bar; actions { baz } foobar; }"));
        });
    });

    describe("visitBodyConditions", () => {
        it.each([
            ["conditions {}", []],
            ["conditions { foo bar baz }", ["foo", "bar", "baz"]],
            ["conditions { foo; bar; baz; }", ["foo", "bar", "baz"]]
        ])("with input `%s` should return BodyConditionsNode with conditions %s", (source, conditions) => {
            const parser = getParserFor(source);
            const ctx = parser.bodyConditions();

            const result = visitor.visitBodyConditions(ctx);

            expect(result.conditions.map(e => (e as IdentifierExpressionNode).identifier.name)).toEqual(conditions);
            expect(result.location).toEqual(getSourceRange(source));
        });
    });

    describe("visitBodyCondition", () => {
        it.each(["condition foo", "condition foo;"])("with input `%s` should return BodyConditionNode with condition foo", (source) => {
            const parser = getParserFor(source);
            const ctx = parser.bodyCondition();

            const result = visitor.visitBodyCondition(ctx);

            expect((result.condition as IdentifierExpressionNode).identifier.name).toBe("foo");
            expect(result.location).toEqual(getSourceRange(source));
        });
    });

    describe("visitBodyActions", () => {
        it.each([
            ["actions {}", []],
            ["actions { foo; bar; baz; }", ["foo", "bar", "baz"]]
        ] as const)("with input `%s` should return BodyNode with statements %s", (source, statements) => {
            const parser = getParserFor(source);
            const ctx = parser.bodyActions();

            const result = visitor.visitBodyActions(ctx);

            expect(result.statements.map(s => ((s as ExpressionStatementNode).expression as IdentifierExpressionNode).identifier.name)).toEqual(statements);
            expect(result.location).toEqual(getSourceRange(source));
        });
    });

    // statement tests

    describe("visitVariableDeclarationStatement", () => {
        it("with input `var foo;` should return VariableDeclarationStatementNode with variable declaration foo", () => {
            const parser = getParserFor("var foo;");
            const ctx = parser.statement() as VariableDeclarationStatementContext;

            const result = visitor.visitVariableDeclarationStatement(ctx);

            expect(result.variableDeclaration.variables[0].identifier.name).toBe("foo");
            expect(result.location).toEqual(getSourceRange("var foo;"));
        });
    });

    describe("visitIfStatement", () => {
        it("with input `if (1) bar;` should return IfStatementNode with condition 1, if true statement bar and if false statement null", () => {
            const parser = getParserFor("if (1) bar;");
            const ctx = parser.statement() as IfStatementContext;

            const result = visitor.visitIfStatement(ctx);

            expect((result.condition as LiteralExpressionNode).literal.value).toBe("1");
            expect(((result.ifTrue as ExpressionStatementNode).expression as IdentifierExpressionNode).identifier.name).toBe("bar");
            expect(result.ifFalse).toBeNull();
            expect(result.location).toEqual(getSourceRange("if (1) bar;"));
        });

        it("with input `if (1) bar; else baz;` should return IfStatementNode with condition 1, if true statement bar and if false statement baz", () => {
            const parser = getParserFor("if (1) bar; else baz;");
            const ctx = parser.statement() as IfStatementContext;

            const result = visitor.visitIfStatement(ctx);

            expect((result.condition as LiteralExpressionNode).literal.value).toBe("1");
            expect(((result.ifTrue as ExpressionStatementNode).expression as IdentifierExpressionNode).identifier.name).toBe("bar");
            expect(((result.ifFalse as ExpressionStatementNode).expression as IdentifierExpressionNode).identifier.name).toBe("baz");
            expect(result.location).toEqual(getSourceRange("if (1) bar; else baz;"));
        });
    });

    describe("visitWhileStatement", () => {
        it("with input `while (1) bar;` should return WhileStatementNode with condition 1 and statement bar", () => {
            const parser = getParserFor("while (1) bar;");
            const ctx = parser.statement() as WhileStatementContext;

            const result = visitor.visitWhileStatement(ctx);

            expect((result.condition as LiteralExpressionNode).literal.value).toBe("1");
            expect(((result.statement as ExpressionStatementNode).expression as IdentifierExpressionNode).identifier.name).toBe("bar");
            expect(result.location).toEqual(getSourceRange("while (1) bar;"));
        });
    });

    describe("visitForStatement", () => {
        const isVarCases = [false, true];
        const fromExpressionCases = [null, "0"];
        const byExpressionCases = [null, "2"];

        const testCases: [string, boolean, string | null, string | null][] = [];
        for (const isVar of isVarCases) {
            for (const fromExpression of fromExpressionCases) {
                for (const byExpression of byExpressionCases) {
                    testCases.push([`for (${isVar ? "var " : ""}foo${fromExpression ? " from " + fromExpression : ""} to 10${byExpression ? " by " + byExpression : ""}) bar;`, isVar, fromExpression, byExpression]);
                }
            }
        }

        it.each(testCases)("with input `%s` should return ForStatementNode with isVar %s, identifier foo, from expression %s, to expression 10, by expression %s and statement bar", (source, expectedIsVar, expectedFromExpression, expectedByExpression) => {
            const parser = getParserFor(source);
            const ctx = parser.statement() as ForStatementContext;

            const result = visitor.visitForStatement(ctx);

            expect(result.isVar).toBe(expectedIsVar);
            expect(result.identifier.name).toBe("foo");
            if (expectedFromExpression)
                expect((result.fromExpression as LiteralExpressionNode).literal.value).toBe(expectedFromExpression);
            else
                expect(result.fromExpression).toBeNull();
            expect((result.toExpression as LiteralExpressionNode).literal.value).toBe("10");
            if (expectedByExpression)
                expect((result.byExpression as LiteralExpressionNode).literal.value).toBe(expectedByExpression);
            else
                expect(result.byExpression).toBeNull();
            expect(((result.statement as ExpressionStatementNode).expression as IdentifierExpressionNode).identifier.name).toBe("bar");
            expect(result.location).toEqual(getSourceRange(source));
        });
    });

    describe("visitReturnStatement", () => {
        it.each(["return", "return;"])("with input `%s` should return ReturnStatementNode with no expression", (source) => {
            const parser = getParserFor(source);
            const ctx = parser.statement() as ReturnStatementContext;

            const result = visitor.visitReturnStatement(ctx);

            expect(result.expression).toBeNull();
            expect(result.location).toEqual(getSourceRange(source));
        });

        it.each(["return 1", "return 1;"])("with input `%s` should return ReturnStatementNode with expression 1", (source) => {
            const parser = getParserFor(source);
            const ctx = parser.statement() as ReturnStatementContext;

            const result = visitor.visitReturnStatement(ctx);

            expect((result.expression as LiteralExpressionNode).literal.value).toBe("1");
            expect(result.location).toEqual(getSourceRange(source));
        });
    });

    describe("visitBreakStatement", () => {
        it.each(["break", "break;"])("with input `%s` should return BreakStatementNode", (source) => {
            const parser = getParserFor(source);
            const ctx = parser.statement() as BreakStatementContext;

            const result = visitor.visitBreakStatement(ctx);

            expect(result.location).toEqual(getSourceRange(source));
        });
    });

    describe("visitContinueStatement", () => {
        it.each(["continue", "continue;"])("with input `%s` should return ContinueStatementNode", (source) => {
            const parser = getParserFor(source);
            const ctx = parser.statement() as ContinueStatementContext;

            const result = visitor.visitContinueStatement(ctx);

            expect(result.location).toEqual(getSourceRange(source));
        });
    });

    describe("visitBlockStatement", () => {
        it.each([["{}", []], ["{ foo; bar; baz; }", ["foo", "bar", "baz"]]])("with input `%s` should return BlockStatementNode with statements %s", (source, expectedExpressions) => {
            const parser = getParserFor(source);
            const ctx = parser.statement() as BlockStatementContext;

            const result = visitor.visitBlockStatement(ctx);

            expect(result.statements.map(s => ((s as ExpressionStatementNode).expression as IdentifierExpressionNode).identifier.name)).toEqual(expectedExpressions);
            expect(result.location).toEqual(getSourceRange(source));
        });
    });

    describe("visitMemberAssignmentStatement", () => {
        it.each(["foo.bar = 1", "foo.bar = 1;"])("with input `%s` should return MemberAssignmentStatementNode with identifier foo, member bar and expression 1", (source) => {
            const parser = getParserFor(source);
            const ctx = parser.statement() as MemberAssignmentStatementContext;

            const result = visitor.visitMemberAssignmentStatement(ctx);

            expect((result.containerExpression as IdentifierExpressionNode).identifier.name).toBe("foo");
            expect(result.identifier.name).toBe("bar");
            expect((result.expression as LiteralExpressionNode).literal.value).toBe("1");
            expect(result.location).toEqual(getSourceRange(source));
        });
    });

    describe("visitIndexAssignmentStatement", () => {
        it.each(["foo[0] = 1", "foo[0] = 1;"])("with input `%s` should return IndexAssignmentStatementNode with container expression foo, index expression 1 and expression 1", (source) => {
            const parser = getParserFor(source);
            const ctx = parser.statement() as IndexAssignmentStatementContext;

            const result = visitor.visitIndexAssignmentStatement(ctx);

            expect((result.containerExpression as IdentifierExpressionNode).identifier.name).toBe("foo");
            expect((result.indexExpression as LiteralExpressionNode).literal.value).toBe("0");
            expect((result.expression as LiteralExpressionNode).literal.value).toBe("1");
            expect(result.location).toEqual(getSourceRange(source));
        });
    });

    describe("visitIdentifierAssignmentStatement", () => {
        it.each(["foo = 1", "foo = 1;"])("with input `%s` should return IdentifierAssignmentStatementNode with identifier foo and expression 1", (source) => {
            const parser = getParserFor(source);
            const ctx = parser.statement() as IdentifierAssignmentStatementContext;

            const result = visitor.visitIdentifierAssignmentStatement(ctx);

            expect(result.identifier.name).toBe("foo");
            expect((result.expression as LiteralExpressionNode).literal.value).toBe("1");
            expect(result.location).toEqual(getSourceRange(source));
        });
    });

    describe("visitExpressionStatement", () => {
        it.each(["foo", "foo;"])("with input `%s` should return ExpressionStatementNode with identifier expression foo", (source) => {
            const parser = getParserFor(source);
            const ctx = parser.statement() as ExpressionStatementContext;

            const result = visitor.visitExpressionStatement(ctx);

            expect((result.expression as IdentifierExpressionNode).identifier.name).toBe("foo");
            expect(result.location).toEqual(getSourceRange(source));
        });
    });

    // variable declaration tests

    describe("visitVariableDeclaration", () => {
        const specifiers = (Object.keys(VariableScopeSpecifier) as (keyof typeof VariableScopeSpecifier)[]).map(key => VariableScopeSpecifier[key]);

        const variableDeclarationsTestCases = specifiers
            .flatMap(specifier => [
                [`${specifier} foo`, specifier, ["foo"]],
                [`${specifier} foo;`, specifier, ["foo"]],
                [`${specifier} {}`, specifier, []],
                [`${specifier} { foo; bar; baz; }`, specifier, ["foo", "bar", "baz"]],
            ] as const);
        it.each(variableDeclarationsTestCases)("with input `%s` should return VariableDeclarationNode with specifier %s and variables %s", (source, expectedSpecifier, expectedVariables) => {
            const parser = getParserFor(source);
            const ctx = parser.variableDeclaration();

            const result = visitor.visitVariableDeclaration(ctx);

            expect(result.specifier).toBe(expectedSpecifier);
            expect(result.variables.map(v => v.identifier.name)).toEqual(expectedVariables);
            expect(result.location).toEqual(getSourceRange(source));
        });
    });

    describe("visitVariableDeclarationWithoutSpecifier", () => {
        it.each([
            ["foo", "foo"],
            ["foo;", "foo"],
        ])("with input `%s` should return VariableDeclarationWithoutSpecifierNode with identifier named %s, no type expression and no expression", (source, expectedIdentifierName) => {
            const parser = getParserFor(source);
            const ctx = parser.variableDeclarationWithoutSpecifier();

            const result = visitor.visitVariableDeclarationWithoutSpecifier(ctx);

            expect(result.identifier.name).toBe(expectedIdentifierName);
            expect(result.typeExpression).toBeNull();
            expect(result.expression).toBeNull();
            expect(result.location).toEqual(getSourceRange(source));
        });

        it.each([
            ["foo: bar", "foo", "bar"],
            ["foo: bar;", "foo", "bar"],
        ])("with input `%s` should return VariableDeclarationWithoutSpecifierNode with identifier named %s, type expression %s and no expression", (source, expectedIdentifierName, expectedTypeExpression) => {
            const parser = getParserFor(source);
            const ctx = parser.variableDeclarationWithoutSpecifier();

            const result = visitor.visitVariableDeclarationWithoutSpecifier(ctx);

            expect(result.identifier.name).toBe(expectedIdentifierName);
            expect((result.typeExpression as IdentifierTypeExpressionNode).identifier.name).toBe(expectedTypeExpression);
            expect(result.expression).toBeNull();
            expect(result.location).toEqual(getSourceRange(source));
        });

        it.each([
            ["foo = 1", "foo", "1"],
            ["foo = 1;", "foo", "1"],
        ])("with input `%s` should return VariableDeclarationWithoutSpecifierNode with identifier named %s, no type expression and expression %s", (source, expectedIdentifierName, expectedExpression) => {
            const parser = getParserFor(source);
            const ctx = parser.variableDeclarationWithoutSpecifier();

            const result = visitor.visitVariableDeclarationWithoutSpecifier(ctx);

            expect(result.identifier.name).toBe(expectedIdentifierName);
            expect(result.typeExpression).toBeNull();
            expect((result.expression as LiteralExpressionNode).literal.value).toBe(expectedExpression);
            expect(result.location).toEqual(getSourceRange(source));
        });

        it.each([
            ["foo: bar = 1", "foo", "bar", "1"],
            ["foo: bar = 1;", "foo", "bar", "1"],
        ])("with input `%s` should return VariableDeclarationWithoutSpecifierNode with identifier named %s, type expression %s and expression %s", (source, expectedIdentifierName, expectedTypeExpression, expectedExpression) => {
            const parser = getParserFor(source);
            const ctx = parser.variableDeclarationWithoutSpecifier();

            const result = visitor.visitVariableDeclarationWithoutSpecifier(ctx);

            expect(result.identifier.name).toBe(expectedIdentifierName);
            expect((result.typeExpression as IdentifierTypeExpressionNode).identifier.name).toBe(expectedTypeExpression);
            expect((result.expression as LiteralExpressionNode).literal.value).toBe(expectedExpression);
            expect(result.location).toEqual(getSourceRange(source));
        });
    });

    // expression tests

    describe("visitCallExpression", () => {
        it("with input `foo(1, 2, 3)` should return CallExpressionNode with identifier expression foo and arguments [1, 2, 3]", () => {
            const parser = getParserFor("foo(1, 2, 3)");
            const ctx = parser.expression() as CallExpressionContext;

            const result = visitor.visitCallExpression(ctx);

            expect((result.expression as IdentifierExpressionNode).identifier.name).toBe("foo");
            expect(result.arguments.expressions.map(e => (e as LiteralExpressionNode).literal.value)).toEqual(["1", "2", "3"]);
            expect(result.location).toEqual(getSourceRange("foo(1, 2, 3)"));
        });
    });

    describe("visitMemberExpression", () => {
        it("with input `foo.bar` should return MemberExpressionNode with identifier expression named foo and identifier named bar", () => {
            const parser = getParserFor("foo.bar");
            const ctx = parser.expression() as MemberExpressionContext;

            const result = visitor.visitMemberExpression(ctx);

            expect((result.expression as IdentifierExpressionNode).identifier.name).toBe("foo");
            expect(result.identifier.name).toBe("bar");
            expect(result.location).toEqual(getSourceRange("foo.bar"));
        });
    });

    describe("visitIndexExpression", () => {
        it("with input `foo[0]` should return IndexExpressionNode with identifier expression named foo and index literal expression with value 0", () => {
            const parser = getParserFor("foo[0]");
            const ctx = parser.expression() as IndexExpressionContext;

            const result = visitor.visitIndexExpression(ctx);

            expect((result.expression as IdentifierExpressionNode).identifier.name).toBe("foo");
            expect((result.indexExpression as LiteralExpressionNode).literal.value).toBe("0");
            expect(result.location).toEqual(getSourceRange("foo[0]"));
        });
    });

    describe("visitAwaitExpression", () => {
        it("with input `await foo` should return AwaitExpressionNode with identifier expression named foo", () => {
            const parser = getParserFor("await foo");
            const ctx = parser.expression() as AwaitExpressionContext;

            const result = visitor.visitAwaitExpression(ctx);

            expect((result.expression as IdentifierExpressionNode).identifier.name).toBe("foo");
            expect(result.location).toEqual(getSourceRange("await foo"));
        });
    });

    describe("visitUnaryExpression", () => {
        it.each([["-1", UnaryOperator.Negative], ["!1", UnaryOperator.Not]])("with input `%s` should return UnaryExpressionNode with operator %s", (source, expectedOperator) => {
            const parser = getParserFor(source);
            const ctx = parser.expression() as UnaryExpressionContext;

            const result = visitor.visitUnaryExpression(ctx);

            expect(result.operator).toBe(expectedOperator);
            expect((result.expression as LiteralExpressionNode).literal.value).toBe("1");
            expect(result.location).toEqual(getSourceRange(source));
        });
    });

    describe("visitCastExpression", () => {
        it("with input `foo as bar` should return CastExpressionNode with identifier expression foo and type expression bar", () => {
            const parser = getParserFor("foo as bar");
            const ctx = parser.expression() as CastExpressionContext;

            const result = visitor.visitCastExpression(ctx);

            expect((result.expression as IdentifierExpressionNode).identifier.name).toBe("foo");
            expect((result.typeExpression as IdentifierTypeExpressionNode).identifier.name).toBe("bar");
            expect(result.location).toEqual(getSourceRange("foo as bar"));
        });
    });

    describe("visitBinaryExpression", () => {
        const binaryExpressions: [string, BinaryOperator][] = [
            ["1 || 2", BinaryOperator.Or],
            ["1 && 2", BinaryOperator.And],
            ["1 == 2", BinaryOperator.Equal],
            ["1 != 2", BinaryOperator.NotEqual],
            ["1 < 2", BinaryOperator.LessThan],
            ["1 <= 2", BinaryOperator.LessThanOrEqual],
            ["1 >= 2", BinaryOperator.GreaterThanOrEqual],
            ["1 > 2", BinaryOperator.GreaterThan],
            ["1 + 2", BinaryOperator.Add],
            ["1 - 2", BinaryOperator.Subtract],
            ["1 * 2", BinaryOperator.Multiply],
            ["1 / 2", BinaryOperator.Divide],
        ];
        it.each(binaryExpressions)("with input `%s` should return BinaryExpressionNode with left expression 1, right expression 2 and operator %s", (source, expectedOperator) => {
            const parser = getParserFor(source);
            const ctx = parser.expression() as BinaryExpressionContext;

            const result = visitor.visitBinaryExpression(ctx);

            expect((result.left as LiteralExpressionNode).literal.value).toBe("1");
            expect((result.right as LiteralExpressionNode).literal.value).toBe("2");
            expect(result.operator).toBe(expectedOperator);
            expect(result.location).toEqual(getSourceRange(source));
        });
    });

    describe("visitTernaryExpression", () => {
        it("with input `1 ? 2 : 3` should return TernaryExpressionNode with condition 1, true branch 2 and false branch 3", () => {
            const parser = getParserFor("1 ? 2 : 3");
            const ctx = parser.expression() as TernaryExpressionContext;

            const result = visitor.visitTernaryExpression(ctx);

            expect((result.condition as LiteralExpressionNode).literal.value).toBe("1");
            expect((result.ifTrue as LiteralExpressionNode).literal.value).toBe("2");
            expect((result.ifFalse as LiteralExpressionNode).literal.value).toBe("3");
            expect(result.location).toEqual(getSourceRange("1 ? 2 : 3"));
        });
    });

    describe("visitIdentifierExpression", () => {
        it.each([["foo", "foo"], ["await", "await"], ["`true`", "true"]])("with input %s should return IdentifierExpressionNode with identifier name %s", (source, expectedName) => {
            const parser = getParserFor(source);
            const ctx = parser.expression() as IdentifierExpressionContext;

            const result = visitor.visitIdentifierExpression(ctx);

            expect(result.identifier.name).toBe(expectedName);
            expect(result.location).toEqual(getSourceRange(source));
        });
    });

    describe("visitLiteralExpression", () => {
        it.each([["true", true], ["1.1", "1.1"], ["\"foo\"", "foo"]])("with input `%s` should return LiteralExpressionNode with literal value %s", (source, expectedValue) => {
            const parser = getParserFor(source);
            const ctx = parser.expression() as LiteralExpressionContext;

            const result = visitor.visitLiteralExpression(ctx);

            expect(result.literal.value).toBe(expectedValue);
            expect(result.location).toEqual(getSourceRange(source));
        });
    });

    describe("visitParenthesisExpression", () => {
        it("with input `(foo)` should return ParenthesisExpressionNode with identifier expression named foo", () => {
            const parser = getParserFor("(foo)");
            const ctx = parser.expression() as ParenthesisExpressionContext;

            const result = visitor.visitParenthesisExpression(ctx);

            expect((result.expression as IdentifierExpressionNode).identifier.name).toBe("foo");
            expect(result.location).toEqual(getSourceRange("(foo)"));
        });
    });

    // call arguments tests

    describe("visitCallArguments", () => {
        it.each([["()", []], ["(1)", ["1"]], ["(1, 2, 3)", ["1", "2", "3"]]])("with input `%s` should return CallArgumentsNode with expressions %s", (source, expectedValues) => {
            const parser = getParserFor(source);
            const ctx = parser.callArguments();

            const result = visitor.visitCallArguments(ctx);

            expect(result.expressions.map(e => (e as LiteralExpressionNode).literal.value)).toEqual(expectedValues);
            expect(result.location).toEqual(getSourceRange(source));
        });
    });

    // type expression tests

    describe("visitArrayTypeExpression", () => {
        it("with input `foo[]` should return ArrayTypeExpressionNode with identifier element named foo", () => {
            const parser = getParserFor("foo[]");
            const ctx = parser.typeExpression() as ArrayTypeExpressionContext;

            const result = visitor.visitArrayTypeExpression(ctx);

            expect((result.element as IdentifierTypeExpressionNode).identifier.name).toBe("foo");
            expect(result.location).toEqual(getSourceRange("foo[]"));
        });
    });

    describe("visitUnionTypeExpression", () => {
        it("with input `1 | 2 | 3` should return UnionTypeExpressionNode with element types [1, 2, 3]", () => {
            const parser = getParserFor("1 | 2 | 3");
            const ctx = parser.typeExpression() as UnionTypeExpressionContext;

            const result = visitor.visitUnionTypeExpression(ctx);

            expect(result.elements.map(e => (e as NumberTypeExpressionNode).literal.value)).toEqual(["1", "2", "3"]);
            expect(result.location).toEqual(getSourceRange("1 | 2 | 3"));
        });
    });

    describe("visitIdentifierTypeExpression", () => {
        it("with input `foo` should return IdentifierTypeExpressionNode with identifier name foo", () => {
            const parser = getParserFor("foo");
            const ctx = parser.typeExpression() as IdentifierTypeExpressionContext;

            const result = visitor.visitIdentifierTypeExpression(ctx);

            expect(result.identifier.name).toBe("foo");
            expect(result.location).toEqual(getSourceRange("foo"));
        });
    });

    describe("visitTupleTypeExpression", () => {
        it.each([["[]", []], ["[1, 2, 3]", ["1", "2", "3"]]])("with input `%s` should return TupleTypeExpressionNode with element types %s", (source, expectedElementTypeValues) => {
            const parser = getParserFor(source);
            const ctx = parser.typeExpression() as TupleTypeExpressionContext;

            const result = visitor.visitTupleTypeExpression(ctx);

            expect(result.elements.map(e => (e as NumberTypeExpressionNode).literal.value)).toEqual(expectedElementTypeValues);
            expect(result.location).toEqual(getSourceRange(source));
        });
    });

    describe("visitParenthesisTypeExpression", () => {
        it("with input `(foo)` should return ParenthesisTypeExpressionNode with identifier type expression foo", () => {
            const parser = getParserFor("(foo)");
            const ctx = parser.typeExpression() as ParenthesisTypeExpressionContext;

            const result = visitor.visitParenthesisTypeExpression(ctx);

            expect((result.typeExpression as IdentifierTypeExpressionNode).identifier.name).toBe("foo");
            expect(result.location).toEqual(getSourceRange("(foo)"));
        });
    });

    describe("visitBooleanTypeExpression", () => {
        it.each([["true", true], ["false", false]])("with input `%s` should return BooleanTypeExpressionNode with value %s", (source, expectedValue) => {
            const parser = getParserFor(source);
            const ctx = parser.typeExpression() as BooleanTypeExpressionContext;

            const result = visitor.visitBooleanTypeExpression(ctx);

            expect(result.literal.value).toBe(expectedValue);
            expect(result.location).toEqual(getSourceRange(source));
        });
    });

    describe("visitNumberTypeExpression", () => {
        it.each(["0", "1.1"])("with input `%s` should return NumberTypeExpressionNode with same value", (source) => {
            const parser = getParserFor(source);
            const ctx = parser.typeExpression() as NumberTypeExpressionContext;

            const result = visitor.visitNumberTypeExpression(ctx);

            expect(result.literal.value).toBe(source);
            expect(result.location).toEqual(getSourceRange(source));
        });
    });

    describe("visitStringTypeExpression", () => {
        it.each([["\"\"", ""], ["\"foo\"", "foo"], ["\"foo\\\"\\'\\n\"", "foo\"'\n"]])("with input `%s` should return StringTypeExpressionNode with value %s", (source, expectedValue) => {
            const parser = getParserFor(source);
            const ctx = parser.typeExpression() as StringTypeExpressionContext;

            const result = visitor.visitStringTypeExpression(ctx);

            expect(result.literal.value).toBe(expectedValue);
            expect(result.location).toEqual(getSourceRange(source));
        });
    });

    // identifier tests

    describe("visitIdentifier", () => {
        it("with input `foo` should return IdentifierNode with same name", () => {
            const parser = getParserFor("foo");
            const ctx = parser.identifier();

            const result = visitor.visitIdentifier(ctx);

            expect(result.name).toBe("foo");
            expect(result.location).toEqual(getSourceRange("foo"));
        });

        const validKeywordsIdentifiers = ["actions", "async", "await", "by", "break", "conditions", "condition", "continue", "from", "global", "mod", "on", "player", "rule", "sub", "team", "to", "var"];
        it.each(validKeywordsIdentifiers)("with keyword `%s` should return IdentifierNode with same name", (source) => {
            const parser = getParserFor(source);
            const ctx = parser.identifier();

            const result = visitor.visitIdentifier(ctx);

            expect(result.name).toBe(source);
            expect(result.location).toEqual(getSourceRange(source));
        });

        it.each([["`foo`", "foo"], ["`true`", "true"], ["`\\`\\n`", "`\n"]])("with backtick identifier %s should return IdentifierNode with name %s", (source, expectedName) => {
            const parser = getParserFor(source);
            const ctx = parser.identifier();

            const result = visitor.visitIdentifier(ctx);

            expect(result.name).toBe(expectedName);
            expect(result.location).toEqual(getSourceRange(source));
        });
    });

    // literal tests

    describe("visitArrayLiteral", () => {
        it.each([["[]", []], ["[1, 2, 3]", ["1", "2", "3"]]])("with input `%s` should return ArrayLiteralNode with values %s", (source, expectedValues) => {
            const parser = getParserFor(source);
            const ctx = parser.literal() as ArrayLiteralContext;

            const result = visitor.visitArrayLiteral(ctx);

            expect(result.value.map(e => (e as LiteralExpressionNode).literal.value)).toEqual(expectedValues);
            expect(result.location).toEqual(getSourceRange(source));
        });
    });

    describe("visitBooleanLiteral", () => {
        it.each([["true", true], ["false", false]])("with input `%s` should return BooleanLiteralNode with value %s", (source, expectedValue) => {
            const parser = getParserFor(source);
            const ctx = parser.literal() as BooleanLiteralContext;

            const result = visitor.visitBooleanLiteral(ctx);

            expect(result.value).toBe(expectedValue);
            expect(result.location).toEqual(getSourceRange(source));
        });
    });

    describe("visitNumberLiteral", () => {
        it.each(["0", "1.1"])("with input `%s` should return NumberLiteralNode with same value", (source) => {
            const parser = getParserFor(source);
            const ctx = parser.literal() as NumberLiteralContext;

            const result = visitor.visitNumberLiteral(ctx);

            expect(result.value).toBe(source);
            expect(result.location).toEqual(getSourceRange(source));
        });
    });

    describe("visitStringLiteral", () => {
        it.each([["\"\"", ""], ["\"foo\"", "foo"], ["\"foo\\\"\\'\\n\"", "foo\"'\n"]])("with input `%s` should return StringLiteralNode with value '%s'", (source, expectedValue) => {
            const parser = getParserFor(source);
            const ctx = parser.literal() as StringLiteralContext;

            const result = visitor.visitStringLiteral(ctx);

            expect(result.value).toBe(expectedValue);
            expect(result.location).toEqual(getSourceRange(source));
        });
    });
});
