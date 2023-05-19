import { BlocklyNode } from "./BlocklyNode";
import type { BlocklyMutation } from "./BlocklyMutation";
import type { BlocklyField } from "./BlocklyField";
import type { BlocklyComment } from "./BlocklyComment";
import type { BlocklyData } from "./BlocklyData";
import type { BlocklyStatement } from "./BlocklyStatement";
import type { BlocklyValue } from "./BlocklyValue";
import type { BlocklyNext } from "./BlocklyNext";
import type { IBlocklyHasId } from "./IBlocklyHasId";
import type { IBlocklyHasPosition } from "./IBlocklyHasPosition";

export abstract class BlocklyBlockBase extends BlocklyNode implements IBlocklyHasId, IBlocklyHasPosition {
    mutation: BlocklyMutation | null = null;
    fields: BlocklyField[] = [];
    comment: BlocklyComment | null = null;
    data: BlocklyData | null = null;

    inputs: (BlocklyStatement | BlocklyValue)[] = [];

    next: BlocklyNext | null = null;

    type: string = "";
    id: string | null = null;

    inline: boolean | null = null;
    collapsed: boolean | null = null;
    disabled: boolean | null = null;
    deletable: boolean | null = null;
    movable: boolean | null = null;
    editable: boolean | null = null;

    x: number | null = null;
    y: number | null = null;

    override get children(): readonly BlocklyNode[] {
        const children: BlocklyNode[] = [];

        if (this.mutation) children.push(this.mutation);
        children.push(...this.fields);
        if (this.comment) children.push(this.comment);
        if (this.data) children.push(this.data);
        children.push(...this.inputs);
        if (this.next) children.push(this.next);

        return children;
    }
}
