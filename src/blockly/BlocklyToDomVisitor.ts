import { BlocklyNodeVisitor } from "./BlocklyNodeVisitor";
import type { BlocklyElement } from "./BlocklyElement";
import type { BlocklyNode } from "./BlocklyNode";
import type { BlocklyMutation } from "./BlocklyMutation";
import type { BlocklyData } from "./BlocklyData";
import type { BlocklyComment } from "./BlocklyComment";
import type { IBlocklyHasId } from "./IBlocklyHasId";
import type { IBlocklyHasPosition } from "./IBlocklyHasPosition";
import type { IBlocklyHasValue } from "./IBlocklyHasValue";
import type { BlocklyField } from "./BlocklyField";
import type { IBlocklyHasName } from "./IBlocklyHasName";
import type { BlocklyNext } from "./BlocklyNext";
import type { IBlocklyHasBlock } from "./IBlocklyHasBlock";
import type { BlocklyStatement } from "./BlocklyStatement";
import type { BlocklyValue } from "./BlocklyValue";
import type { BlocklyBlockBase } from "./BlocklyBlockBase";
import type { BlocklyBlock } from "./BlocklyBlock";
import type { BlocklyShadow } from "./BlocklyShadow";
import type { BlocklyVariable } from "./BlocklyVariable";
import type { BlocklyVariables } from "./BlocklyVariables";
import type { BlocklyXml } from "./BlocklyXml";

export class BlocklyToDomVisitor extends BlocklyNodeVisitor<Element> {
    private document: XMLDocument;

    constructor(document: XMLDocument) {
        super();

        this.document = document;
    }

    static toDom(node: BlocklyNode, document: Document): Document {
        const xmlDocument = document.implementation.createDocument("https://developers.google.com/blockly/xml", null);
        const visitor = new BlocklyToDomVisitor(xmlDocument);

        const rootNode = visitor.visit(node);

        xmlDocument.appendChild(rootNode);

        return xmlDocument;
    }

    override visitXml(xml: BlocklyXml): Element {
        const el = this.document.createElement("xml");

        el.setAttribute("xmlns", "https://developers.google.com/blockly/xml");
        this.addAttributes(el, xml);

        if (xml.variables !== null) el.appendChild(this.visit(xml.variables));

        for (const comment of xml.comments) {
            el.appendChild(this.visit(comment));
        }

        for (const block of xml.blocks) {
            el.appendChild(this.visit(block));
        }

        return el;
    }

    override visitVariables(variables: BlocklyVariables): Element {
        const el = this.document.createElement("variables");

        this.addAttributes(el, variables);

        for (const variable of variables.variables) {
            el.appendChild(this.visit(variable));
        }

        return el;
    }

    override visitVariable(variable: BlocklyVariable): Element {
        const el = this.document.createElement("variable");

        this.setId(el, variable);
        if (variable.type !== null) el.setAttribute("type", variable.type);
        this.addAttributes(el, variable);

        this.setValue(el, variable);

        return el;
    }

    override visitBlock(block: BlocklyBlock): Element {
        return this.visitBlockBase("block", block);
    }

    override visitShadow(shadow: BlocklyShadow): Element {
        return this.visitBlockBase("shadow", shadow);
    }

    private visitBlockBase(name: string, block: BlocklyBlockBase): Element {
        const el = this.document.createElement(name);

        el.setAttribute("type", block.type);
        this.setId(el, block);
        if (block.inline !== null) el.setAttribute("inline", block.inline.toString());
        if (block.collapsed !== null) el.setAttribute("collapsed", block.collapsed.toString());
        if (block.disabled !== null) el.setAttribute("disabled", block.disabled.toString());
        if (block.deletable !== null) el.setAttribute("deletable", block.deletable.toString());
        if (block.movable !== null) el.setAttribute("movable", block.movable.toString());
        if (block.editable !== null) el.setAttribute("editable", block.editable.toString());
        this.setPosition(el, block);
        this.addAttributes(el, block);

        if (block.mutation !== null) el.appendChild(this.visit(block.mutation));

        for (const field of block.fields) {
            el.appendChild(this.visit(field));
        }

        if (block.comment !== null) el.appendChild(this.visit(block.comment));
        if (block.data !== null) el.appendChild(this.visit(block.data));

        for (const input of block.inputs) {
            el.appendChild(this.visit(input));
        }

        if (block.next !== null) el.appendChild(this.visit(block.next));

        return el;
    }

    override visitValue(value: BlocklyValue): Element {
        const el = this.document.createElement("next");

        this.setName(el, value);
        this.addAttributes(el, value);

        this.setBlock(el, value);

        return el;
    }

    override visitStatement(statement: BlocklyStatement): Element {
        const el = this.document.createElement("next");

        this.setName(el, statement);
        this.addAttributes(el, statement);

        this.setBlock(el, statement);

        return el;
    }

    override visitNext(next: BlocklyNext): Element {
        const el = this.document.createElement("next");

        this.addAttributes(el, next);
        this.setBlock(el, next);

        return el;
    }

    override visitField(field: BlocklyField): Element {
        const el = this.document.createElement("field");

        this.setId(el, field);
        this.setName(el, field);
        if (field.variableType !== null) el.setAttribute("variabletype", field.variableType);
        this.addAttributes(el, field);

        this.setValue(el, field);

        return el;
    }

    override visitComment(comment: BlocklyComment): Element {
        const el = this.document.createElement("comment");

        this.setId(el, comment);
        this.setPosition(el, comment);
        if (comment.h !== null) el.setAttribute("h", comment.h.toString());
        if (comment.pinned !== null) el.setAttribute("pinned", comment.pinned.toString());
        if (comment.w !== null) el.setAttribute("w", comment.w.toString());
        this.addAttributes(el, comment);

        this.setValue(el, comment);

        return el;
    }

    override visitData(data: BlocklyData): Element {
        const el = this.document.createElement("data");

        this.addAttributes(el, data);
        this.setValue(el, data);

        return el;
    }

    override visitMutation(mutation: BlocklyMutation): Element {
        const el = this.document.createElement("mutation");

        this.addAttributes(el, mutation);

        for (const child of mutation.elements) {
            el.appendChild(this.visit(child));
        }

        return el;
    }

    override visitElement(element: BlocklyElement): Element {
        const el = this.document.createElement(element.name);

        this.addAttributes(el, element);
        this.setValue(el, element);

        for (const child of element.elements) {
            el.appendChild(this.visit(child));
        }

        return el;
    }

    private addAttributes(element: Element, node: BlocklyNode): void {
        for (const [attributeName, attributeValue] of node.attributes) {
            element.setAttribute(attributeName, attributeValue);
        }
    }

    private setId(element: Element, node: IBlocklyHasId): void {
        if (node.id !== null) element.setAttribute("id", node.id);
    }

    private setPosition(element: Element, node: IBlocklyHasPosition): void {
        if (node.x !== null) element.setAttribute("x", node.x.toString());
        if (node.y !== null) element.setAttribute("y", node.y.toString());
    }

    private setValue(element: Element, node: IBlocklyHasValue): void {
        element.textContent = node.value;
    }

    private setName(element: Element, node: IBlocklyHasName): void {
        element.setAttribute("name", node.name);
    }

    private setBlock(element: Element, node: IBlocklyHasBlock) {
        if (node.shadow !== null) element.appendChild(this.visit(node.shadow));
        if (node.block !== null) element.appendChild(this.visit(node.block));
    }
}
