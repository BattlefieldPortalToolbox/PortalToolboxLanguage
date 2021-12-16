import { CommonTokenStream, InputStream } from "antlr4";
import PortalToolboxLanguageLexer from "./PortalToolboxLanguageLexer";
import PortalToolboxLanguageParser from "./PortalToolboxLanguageParser";

export function getAntlrParser(code: string): PortalToolboxLanguageParser {
    const inputStream = new InputStream(code);
    const lexer = new PortalToolboxLanguageLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new PortalToolboxLanguageParser(tokenStream);

    return parser;
}
