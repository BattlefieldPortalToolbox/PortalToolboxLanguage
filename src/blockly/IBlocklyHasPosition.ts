import type { BlocklyNode } from "./BlocklyNode";

export interface IBlocklyHasPosition extends BlocklyNode {
    x: number | null;
    y: number | null;
}
