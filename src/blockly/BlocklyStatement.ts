import type { BlocklyNodeVisitor } from "./BlocklyNodeVisitor";
import { BlocklyInputBase } from "./BlocklyInputBase";

export class BlocklyStatement extends BlocklyInputBase {
    accept<T>(visitor: BlocklyNodeVisitor<T>): T {
        return visitor.visitStatement(this);
    }
}
