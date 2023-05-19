import { BlocklyNode } from "./BlocklyNode";
import type { BlocklyNodeVisitor } from "./BlocklyNodeVisitor";
import type { IBlocklyHasName } from "./IBlocklyHasName";
import type { IBlocklyHasValue } from "./IBlocklyHasValue";
import type { IBlocklyHasId } from "./IBlocklyHasId";

export class BlocklyField extends BlocklyNode implements IBlocklyHasName, IBlocklyHasValue, IBlocklyHasId {
    id: string | null = null;
    name: string = "";
    variableType: string | null = null;

    value: string = "";

    accept<T>(visitor: BlocklyNodeVisitor<T>): T {
        return visitor.visitField(this);
    }
}
