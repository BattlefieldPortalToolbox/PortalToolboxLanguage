import type { BlocklyNode } from "./BlocklyNode";
import type { BlocklyShadow } from "./BlocklyShadow";
import type { BlocklyBlock } from "./BlocklyBlock";

export interface IBlocklyHasBlock extends BlocklyNode {
    shadow: BlocklyShadow | null;
    block: BlocklyBlock | null;
}
