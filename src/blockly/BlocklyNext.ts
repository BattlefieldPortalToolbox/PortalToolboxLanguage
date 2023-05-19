import { BlocklyNode } from "./BlocklyNode";
import type { BlocklyNodeVisitor } from "./BlocklyNodeVisitor";
import type { IBlocklyHasBlock } from "./IBlocklyHasBlock";
import type { BlocklyShadow } from "./BlocklyShadow";
import type { BlocklyBlock } from "./BlocklyBlock";

export class BlocklyNext extends BlocklyNode implements IBlocklyHasBlock {
    shadow: BlocklyShadow | null = null;
    block: BlocklyBlock | null = null;

    override get children(): readonly BlocklyNode[] {
        const children: BlocklyNode[] = [];

        if (this.shadow) children.push(this.shadow);
        if (this.block) children.push(this.block);

        return children;
    }

    accept<T>(visitor: BlocklyNodeVisitor<T>): T {
        return visitor.visitNext(this);
    }
}
