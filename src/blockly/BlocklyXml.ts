import { BlocklyNode } from "./BlocklyNode";
import type { BlocklyNodeVisitor } from "./BlocklyNodeVisitor";
import type { BlocklyVariables } from "./BlocklyVariables";
import type { BlocklyComment } from "./BlocklyComment";
import type { BlocklyBlock } from "./BlocklyBlock";

export class BlocklyXml extends BlocklyNode {
    variables: BlocklyVariables | null = null;
    comments: BlocklyComment[] = [];
    blocks: BlocklyBlock[] = [];

    override get children(): readonly BlocklyNode[] {
        const children: BlocklyNode[] = [];

        if (this.variables) children.push(this.variables);

        return [...children, ...this.comments, ...this.blocks];
    }

    accept<T>(visitor: BlocklyNodeVisitor<T>): T {
        return visitor.visitXml(this);
    }
}
