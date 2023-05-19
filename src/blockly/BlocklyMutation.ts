import type { BlocklyNodeVisitor } from "./BlocklyNodeVisitor";
import { BlocklyElement } from "./BlocklyElement";

export class BlocklyMutation extends BlocklyElement {
    override accept<T>(visitor: BlocklyNodeVisitor<T>): T {
        return visitor.visitMutation(this);
    }
}
