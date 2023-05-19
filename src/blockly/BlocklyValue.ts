import { BlocklyInputBase } from "./BlocklyInputBase";
import type { BlocklyNodeVisitor } from "./BlocklyNodeVisitor";

export class BlocklyValue extends BlocklyInputBase {
    accept<T>(visitor: BlocklyNodeVisitor<T>): T {
        return visitor.visitValue(this);
    }
}
