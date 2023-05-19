import { BlocklyNode } from "./BlocklyNode";
import type { IBlocklyHasName } from "./IBlocklyHasName";
import type { IBlocklyHasBlock } from "./IBlocklyHasBlock";
import type { BlocklyShadow } from "./BlocklyShadow";
import type { BlocklyBlock } from "./BlocklyBlock";

export abstract class BlocklyInputBase extends BlocklyNode implements IBlocklyHasName, IBlocklyHasBlock {
    name: string = "";

    shadow: BlocklyShadow | null = null;
    block: BlocklyBlock | null = null;

    override get children(): readonly BlocklyNode[] {
        const children: BlocklyNode[] = [];

        if (this.shadow) children.push(this.shadow);
        if (this.block) children.push(this.block);

        return children;
    }
}
