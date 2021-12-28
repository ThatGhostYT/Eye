console.clear();

import {Lexer} from "./src/lexer.ts";
import {Parser} from "./src/parser.ts";

const lexer = new Lexer();
const parser = new Parser();

const tokens = lexer.lex(Deno.readTextFileSync("./main.tor") + "\nmain();");

const ast = parser.parse(tokens);

const js = parser.compile(ast);
console.log(js + "\n");

eval(js);