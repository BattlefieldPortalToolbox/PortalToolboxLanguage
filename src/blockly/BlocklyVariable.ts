import { BlocklyNode } from "./BlocklyNode";
import type { BlocklyNodeVisitor } from "./BlocklyNodeVisitor";
import type { IBlocklyHasValue } from "./IBlocklyHasValue";
import type { IBlocklyHasId } from "./IBlocklyHasId";

export class BlocklyVariable extends BlocklyNode implements IBlocklyHasValue, IBlocklyHasId {
    id: string | null = null;
    type: string | null = null;

    value: string = "";

    accept<T>(visitor: BlocklyNodeVisitor<T>): T {
        return visitor.visitVariable(this);
    }
}
