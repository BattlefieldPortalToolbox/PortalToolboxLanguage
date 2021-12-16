import { getAntlrParser } from "./antlr";
import { create, createRepl } from "ts-node";
import repl from "repl";

const replService = createRepl();
const tsNodeService = create({projectSearchDir: "../"});
replService.setService(tsNodeService);
const replServer = repl.start({useColors: true});

replServer.context.getParser = getAntlrParser;

replServer.setupHistory("./dist/.repl-history", () => {});
