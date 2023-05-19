import { BlocklyToDomVisitor } from "./BlocklyToDomVisitor";
import * as jsdom from "jsdom";
import { BlocklyElement } from "./BlocklyElement";

describe("BlocklyToDomVisitor", () => {
    const dom = new jsdom.JSDOM();

    let document: Document;
    let blocklyToDomVisitor: BlocklyToDomVisitor;

    function serializeToXml(node: Node): string {
        const xmlSerializer = new dom.window.XMLSerializer();

        return xmlSerializer.serializeToString(node);
    }

    beforeEach(() => {
        document = dom.window.document.implementation.createDocument(null, null);
        blocklyToDomVisitor = new BlocklyToDomVisitor(document);
    });

    describe("visitElement", () => {
        test.each([
            ["without value, attributes and children", new BlocklyElement("foo"), "<foo/>"],
            ["with value but without attributes and children", new BlocklyElement("foo", "bar"), "<foo>bar</foo>"],
            ["with attributes but without value and children", new BlocklyElement("foo", "", [["bar", "baz"]]), "<foo bar=\"baz\"/>"],
            ["with children but without value and attributes", new BlocklyElement("foo", "", [], [new BlocklyElement("bar")]), "<foo><bar/></foo>"],
            ["with value, attributes and children", new BlocklyElement("foo", "bar", [["baz", "foobar"]], [new BlocklyElement("foobaz")]), "<foo baz=\"foobar\">bar<foobaz/></foo>"],
        ])("%s should return element", (_, element, expectedXml) => {
            const result = blocklyToDomVisitor.visitElement(element);

            expect(serializeToXml(result)).toBe(expectedXml);
        });
    });
});
