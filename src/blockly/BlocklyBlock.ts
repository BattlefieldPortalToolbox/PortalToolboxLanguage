import { BlocklyBlockBase } from "./BlocklyBlockBase";
import type { BlocklyNodeVisitor } from "./BlocklyNodeVisitor";

export class BlocklyBlock extends BlocklyBlockBase {
    accept<T>(visitor: BlocklyNodeVisitor<T>): T {
        return visitor.visitBlock(this);
    }
}
