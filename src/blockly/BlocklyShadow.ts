import { BlocklyBlockBase } from "./BlocklyBlockBase";
import type { BlocklyNodeVisitor } from "./BlocklyNodeVisitor";

export class BlocklyShadow extends BlocklyBlockBase {
    accept<T>(visitor: BlocklyNodeVisitor<T>): T {
        return visitor.visitShadow(this);
    }
}
