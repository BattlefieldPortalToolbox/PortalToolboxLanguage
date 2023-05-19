import { BlocklyNode } from "./BlocklyNode";
import type { BlocklyNodeVisitor } from "./BlocklyNodeVisitor";
import type { IBlocklyHasValue } from "./IBlocklyHasValue";
import type { IBlocklyHasId } from "./IBlocklyHasId";
import type { IBlocklyHasPosition } from "./IBlocklyHasPosition";

export class BlocklyComment extends BlocklyNode implements IBlocklyHasValue, IBlocklyHasId, IBlocklyHasPosition {
    id: string | null = null;

    x: number | null = null;
    y: number | null = null;
    h: number | null = null;

    pinned: boolean | null = null;

    w: number | null = null;

    value: string = "";

    accept<T>(visitor: BlocklyNodeVisitor<T>): T {
        return visitor.visitComment(this);
    }
}
