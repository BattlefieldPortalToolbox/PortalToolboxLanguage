grammar PortalToolboxLanguage;

// code rule

code : (variableDeclaration | subroutineDefinition | ruleDefinition | modDefinition)* EOF ;

// mod definition rule

modDefinition : MOD modIdentifier=identifier? '{' (ruleIdentifier+=identifier ';'? | ruleDefinition)* '}' ;

// rule definition rule

ruleDefinition : MOD? ASYNC? RULE ruleIdentifier=identifier? ON event=identifier ('(' eventArgument=identifier ')')? body ;

// subroutine rules

subroutineDefinition : ASYNC? SUB identifier argumentsDeclaration? (':' typeExpression)? body ;

argumentsDeclaration : '(' (argumentDeclaration (',' argumentDeclaration)*)? ')' ;

argumentDeclaration : identifier (':' typeExpression)? ;

// body

body : '{' (bodyConditions | bodyCondition | bodyActions)* statement* '}' ;

bodyConditions : CONDITIONS '{' (expression ';'?)* '}' ;

bodyCondition : CONDITION expression ';'? ;

bodyActions : ACTIONS '{' statement* '}' ;

// statement rules

statement : variableDeclaration # VariableDeclarationStatement
          | IF '(' expression ')' ifTrue=statement (ELSE ifFalse=statement)? # IfStatement
          | WHILE '(' expression ')' statement # WhileStatement
          | FOR '(' VAR? identifier (FROM from=expression)? TO to=expression (BY by=expression)? ')' statement # ForStatement
          | RETURN expression? ';'? # ReturnStatement
          | BREAK ';'? # BreakStatement
          | CONTINUE ';'? # ContinueStatement
          | '{' statement* '}' # BlockStatement
          | expression '.' identifier '=' expression ';'? # MemberAssignmentStatement
          | expression '[' expression ']' '=' expression ';'? # IndexAssignmentStatement
          | identifier '=' expression ';'? # IdentifierAssignmentStatement
          | expression ';'? # ExpressionStatement
          ;

// variable declaration rules

variableDeclaration : specifier=(VAR | GLOBAL | PLAYER | TEAM) ('{' variableDeclarationWithoutSpecifier* '}' | variableDeclarationWithoutSpecifier) ;

variableDeclarationWithoutSpecifier : identifier (':' typeExpression)? ('=' expression)? ';'? ;

// expression rules

expression : expression callArguments # CallExpression
           | expression '.' identifier # MemberExpression
           | expression '[' expression ']' # IndexExpression
           | AWAIT expression # AwaitExpression
           | op=('!' | '-') expression # UnaryExpression
           | expression AS typeExpression # CastExpression
           | left=expression op=('*' | '/') right=expression # BinaryExpression
           | left=expression op=('+' | '-') right=expression # BinaryExpression
           | left=expression op=('<' | '<=' | '>=' | '>') right=expression # BinaryExpression
           | left=expression op=('==' | '!=') right=expression # BinaryExpression
           | left=expression op='&&' right=expression # BinaryExpression
           | left=expression op='||' right=expression # BinaryExpression
           | <assoc=right> expression '?' expression ':' expression # TernaryExpression
           | identifier # IdentifierExpression
           | literal # LiteralExpression
           | '(' expression ')' # ParenthesisExpression
           ;

// call arguments rule

callArguments : '(' (expression (',' expression)*)? ')' ;

// type expression rules

typeExpression : typeExpression '[' ']' # ArrayTypeExpression
               | typeExpression '|' typeExpression # UnionTypeExpression
               | identifier # IdentifierTypeExpression
               | '[' (typeExpression (',' typeExpression)*)? ']' # TupleTypeExpression
               | '(' typeExpression ')' # ParenthesisTypeExpression
               | BOOLEAN_LITERAL # BooleanTypeExpression
               | NUMBER_LITERAL # NumberTypeExpression
               | STRING_LITERAL # StringTypeExpression
               ;

// identifier rules

identifier : IDENTIFIER
           | BACKTICK_IDENTIFIER
           // keywords that are valid identifiers:
           | ACTIONS
           | ASYNC
           | AWAIT
           | BY
           | BREAK
           | CONDITIONS
           | CONDITION
           | CONTINUE
           | FROM
           | GLOBAL
           | MOD
           | ON
           | PLAYER
           | RULE
           | SUB
           | TEAM
           | TO
           | VAR
           ;

// literal rules

literal : '[' (expression (',' expression)* ','?)? ']' # ArrayLiteral
        | BOOLEAN_LITERAL # BooleanLiteral
        | NUMBER_LITERAL # NumberLiteral
        | STRING_LITERAL # StringLiteral
        ;

// tokens

ACTIONS : 'actions' ;

AS : 'as' ;

ASYNC : 'async' ;

AWAIT : 'await' ;

BY : 'by' ;

BREAK : 'break' ;

CONDITIONS : 'conditions' ;

CONDITION : 'condition' ;

CONTINUE : 'continue' ;

ELSE : 'else' ;

FOR : 'for' ;

FROM : 'from' ;

GLOBAL : 'global' ;

IF : 'if' ;

MOD : 'mod' ;

ON : 'on' ;

PLAYER : 'player' ;

RETURN : 'return' ;

RULE : 'rule' ;

SUB : 'sub' ;

TEAM : 'team' ;

TO : 'to' ;

VAR : 'var' ;

WHILE : 'while' ;

BOOLEAN_LITERAL : 'true' | 'false' ;

NUMBER_LITERAL : [0-9]+ ('.' [0-9]+)? ;

STRING_LITERAL : '"' (~["\\\r\n]+ | '\\' ['"\\n])* '"' ;

BACKTICK_IDENTIFIER : '`' (~[`\\]+ | '\\' [`\\n])* '`' ;

IDENTIFIER : [a-zA-Z_][a-zA-Z0-9_]* ;

MULTILINE_COMMENT : '/*' .*? '*/' -> skip ;

COMMENT : '//' ~[\r\n]* -> skip ;

WS : [ \t\r\n]+ -> skip ;

// Make the tokenizer never throw errors, by simply consuming invalid tokens as unknown,
// which will throw a parser error, which are easier to deal with.

// TODO: use .+? to group as many invalid tokens as possible

UNKNWON : . ;
