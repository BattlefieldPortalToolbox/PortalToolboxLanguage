import type { BlocklyNodeVisitor } from "./BlocklyNodeVisitor";

export abstract class BlocklyNode {
    attributes: Map<string, string> = new Map();

    get children(): readonly BlocklyNode[] {
        return [];
    }

    constructor(attributes?: Iterable<readonly [string, string]>) {
        if (attributes)
            this.attributes = new Map(attributes);
    }

    abstract accept<T>(visitor: BlocklyNodeVisitor<T>): T;
}
