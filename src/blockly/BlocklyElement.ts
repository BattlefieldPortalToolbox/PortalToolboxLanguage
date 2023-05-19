import { BlocklyNode } from "./BlocklyNode";
import type { BlocklyNodeVisitor } from "./BlocklyNodeVisitor";
import type { IBlocklyHasValue } from "./IBlocklyHasValue";
import type { IBlocklyHasName } from "./IBlocklyHasName";

export class BlocklyElement extends BlocklyNode implements IBlocklyHasValue, IBlocklyHasName {
    elements: BlocklyElement[] = [];
    value: string;
    name: string;

    override get children(): readonly BlocklyNode[] {
        return this.elements;
    }

    constructor(name: string = "", value: string = "", attributes?: Iterable<readonly [string, string]>, elements?: readonly BlocklyElement[]) {
        super(attributes);

        this.name = name;
        this.value = value;

        if (elements)
            this.elements = [...elements];
    }

    accept<T>(visitor: BlocklyNodeVisitor<T>): T {
        return visitor.visitElement(this);
    }
}
