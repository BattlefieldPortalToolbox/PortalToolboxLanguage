import { BlocklyNode } from "./BlocklyNode";
import type { BlocklyNodeVisitor } from "./BlocklyNodeVisitor";
import type { IBlocklyHasValue } from "./IBlocklyHasValue";

export class BlocklyData extends BlocklyNode implements IBlocklyHasValue {
    value: string = "";

    accept<T>(visitor: BlocklyNodeVisitor<T>): T {
        return visitor.visitData(this);
    }
}
