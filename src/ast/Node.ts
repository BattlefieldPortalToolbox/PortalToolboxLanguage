import type { ISourceLocation } from "./ISourceLocation";
import type { NodeVisitor } from "./NodeVisitor";

export abstract class Node {
    public location: ISourceLocation | null = null;

    get children(): readonly Node[] {
        return [];
    }

    abstract accept<T>(visitor: NodeVisitor<T>): T;
}
