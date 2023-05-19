import type { BlocklyNode } from "./BlocklyNode";

export interface IBlocklyHasId extends BlocklyNode {
    id: string | null;
}
