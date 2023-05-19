import type { BlocklyNode } from "./BlocklyNode";
import type { BlocklyMutation } from "./BlocklyMutation";
import type { BlocklyElement } from "./BlocklyElement";
import type { BlocklyData } from "./BlocklyData";
import type { BlocklyComment } from "./BlocklyComment";
import type { BlocklyField } from "./BlocklyField";
import type { BlocklyNext } from "./BlocklyNext";
import type { BlocklyStatement } from "./BlocklyStatement";
import type { BlocklyValue } from "./BlocklyValue";
import type { BlocklyBlock } from "./BlocklyBlock";
import type { BlocklyShadow } from "./BlocklyShadow";
import type { BlocklyVariable } from "./BlocklyVariable";
import type { BlocklyVariables } from "./BlocklyVariables";
import type { BlocklyXml } from "./BlocklyXml";

export abstract class BlocklyNodeVisitor<T> {
    protected defaultValue: T = null!;

    visit(node: BlocklyNode): T {
        return node.accept(this);
    }

    visitChildren(node: BlocklyNode): T {
        let value = this.defaultValue;

        for (const child of node.children) {
            value = this.aggregateResults(this.visit(child), value);
        }

        return value;
    }

    protected aggregateResults(value: T, aggregate: T): T {
        return value;
    }

    visitElement(element: BlocklyElement): T {
        return this.visitChildren(element);
    }

    visitMutation(mutation: BlocklyMutation): T {
        return this.visitChildren(mutation);
    }

    visitData(data: BlocklyData): T {
        return this.visitChildren(data);
    }

    visitComment(comment: BlocklyComment): T {
        return this.visitChildren(comment);
    }

    visitField(field: BlocklyField): T {
        return this.visitChildren(field);
    }

    visitNext(next: BlocklyNext): T {
        return this.visitChildren(next);
    }

    visitStatement(statement: BlocklyStatement): T {
        return this.visitChildren(statement);
    }

    visitValue(value: BlocklyValue): T {
        return this.visitChildren(value);
    }

    visitBlock(block: BlocklyBlock): T {
        return this.visitChildren(block);
    }

    visitShadow(shadow: BlocklyShadow): T {
        return this.visitChildren(shadow);
    }

    visitVariable(variable: BlocklyVariable): T {
        return this.visitChildren(variable);
    }

    visitVariables(variables: BlocklyVariables): T {
        return this.visitChildren(variables);
    }

    visitXml(xml: BlocklyXml): T {
        return this.visitChildren(xml);
    }
}
