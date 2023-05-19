import type { BlocklyNode } from "./BlocklyNode";

export interface IBlocklyHasValue extends BlocklyNode {
    value: string;
}
