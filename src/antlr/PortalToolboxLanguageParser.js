// Generated from PortalToolboxLanguage.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import PortalToolboxLanguageListener from './PortalToolboxLanguageListener.js';
import PortalToolboxLanguageVisitor from './PortalToolboxLanguageVisitor.js';

const serializedATN = [4,1,59,397,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,1,0,1,0,1,0,1,0,5,0,41,
8,0,10,0,12,0,44,9,0,1,0,1,0,1,1,1,1,3,1,50,8,1,1,1,1,1,1,1,3,1,55,8,1,1,
1,5,1,58,8,1,10,1,12,1,61,9,1,1,1,1,1,1,2,3,2,66,8,2,1,2,3,2,69,8,2,1,2,
1,2,3,2,73,8,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,81,8,2,1,2,1,2,1,3,3,3,86,8,3,
1,3,1,3,1,3,3,3,91,8,3,1,3,1,3,3,3,95,8,3,1,3,1,3,1,4,1,4,1,4,1,4,5,4,103,
8,4,10,4,12,4,106,9,4,3,4,108,8,4,1,4,1,4,1,5,1,5,1,5,3,5,115,8,5,1,6,1,
6,1,6,1,6,5,6,121,8,6,10,6,12,6,124,9,6,1,6,5,6,127,8,6,10,6,12,6,130,9,
6,1,6,1,6,1,7,1,7,1,7,1,7,3,7,138,8,7,5,7,140,8,7,10,7,12,7,143,9,7,1,7,
1,7,1,8,1,8,1,8,3,8,150,8,8,1,9,1,9,1,9,5,9,155,8,9,10,9,12,9,158,9,9,1,
9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,170,8,10,1,10,1,10,1,
10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,181,8,10,1,10,1,10,1,10,3,10,186,8,
10,1,10,1,10,1,10,1,10,3,10,192,8,10,1,10,1,10,1,10,1,10,1,10,3,10,199,8,
10,1,10,3,10,202,8,10,1,10,1,10,3,10,206,8,10,1,10,1,10,3,10,210,8,10,1,
10,1,10,5,10,214,8,10,10,10,12,10,217,9,10,1,10,1,10,1,10,1,10,1,10,1,10,
1,10,3,10,226,8,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,235,8,10,1,10,
1,10,1,10,1,10,3,10,241,8,10,1,10,1,10,3,10,245,8,10,3,10,247,8,10,1,11,
1,11,1,11,5,11,252,8,11,10,11,12,11,255,9,11,1,11,1,11,3,11,259,8,11,1,12,
1,12,1,12,3,12,264,8,12,1,12,1,12,3,12,268,8,12,1,12,3,12,271,8,12,1,13,
1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,284,8,13,1,13,1,13,
1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,
13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,
1,13,1,13,1,13,1,13,1,13,1,13,5,13,323,8,13,10,13,12,13,326,9,13,1,14,1,
14,1,14,1,14,5,14,332,8,14,10,14,12,14,335,9,14,3,14,337,8,14,1,14,1,14,
1,15,1,15,1,15,1,15,1,15,1,15,5,15,347,8,15,10,15,12,15,350,9,15,3,15,352,
8,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,3,15,362,8,15,1,15,1,15,1,15,
1,15,1,15,1,15,5,15,370,8,15,10,15,12,15,373,9,15,1,16,1,16,1,17,1,17,1,
17,1,17,5,17,381,8,17,10,17,12,17,384,9,17,1,17,3,17,387,8,17,3,17,389,8,
17,1,17,1,17,1,17,1,17,3,17,395,8,17,1,17,0,2,26,30,18,0,2,4,6,8,10,12,14,
16,18,20,22,24,26,28,30,32,34,0,7,4,0,39,39,43,43,47,47,49,49,1,0,12,13,
1,0,14,15,2,0,13,13,16,16,1,0,17,20,1,0,21,22,6,0,27,27,29,35,38,39,41,43,
45,49,54,55,465,0,42,1,0,0,0,2,47,1,0,0,0,4,65,1,0,0,0,6,85,1,0,0,0,8,98,
1,0,0,0,10,111,1,0,0,0,12,116,1,0,0,0,14,133,1,0,0,0,16,146,1,0,0,0,18,151,
1,0,0,0,20,246,1,0,0,0,22,248,1,0,0,0,24,260,1,0,0,0,26,283,1,0,0,0,28,327,
1,0,0,0,30,361,1,0,0,0,32,374,1,0,0,0,34,394,1,0,0,0,36,41,3,22,11,0,37,
41,3,6,3,0,38,41,3,4,2,0,39,41,3,2,1,0,40,36,1,0,0,0,40,37,1,0,0,0,40,38,
1,0,0,0,40,39,1,0,0,0,41,44,1,0,0,0,42,40,1,0,0,0,42,43,1,0,0,0,43,45,1,
0,0,0,44,42,1,0,0,0,45,46,5,0,0,1,46,1,1,0,0,0,47,49,5,41,0,0,48,50,3,32,
16,0,49,48,1,0,0,0,49,50,1,0,0,0,50,51,1,0,0,0,51,59,5,1,0,0,52,54,3,32,
16,0,53,55,5,2,0,0,54,53,1,0,0,0,54,55,1,0,0,0,55,58,1,0,0,0,56,58,3,4,2,
0,57,52,1,0,0,0,57,56,1,0,0,0,58,61,1,0,0,0,59,57,1,0,0,0,59,60,1,0,0,0,
60,62,1,0,0,0,61,59,1,0,0,0,62,63,5,3,0,0,63,3,1,0,0,0,64,66,5,41,0,0,65,
64,1,0,0,0,65,66,1,0,0,0,66,68,1,0,0,0,67,69,5,29,0,0,68,67,1,0,0,0,68,69,
1,0,0,0,69,70,1,0,0,0,70,72,5,45,0,0,71,73,3,32,16,0,72,71,1,0,0,0,72,73,
1,0,0,0,73,74,1,0,0,0,74,75,5,42,0,0,75,80,3,32,16,0,76,77,5,4,0,0,77,78,
3,32,16,0,78,79,5,5,0,0,79,81,1,0,0,0,80,76,1,0,0,0,80,81,1,0,0,0,81,82,
1,0,0,0,82,83,3,12,6,0,83,5,1,0,0,0,84,86,5,29,0,0,85,84,1,0,0,0,85,86,1,
0,0,0,86,87,1,0,0,0,87,88,5,46,0,0,88,90,3,32,16,0,89,91,3,8,4,0,90,89,1,
0,0,0,90,91,1,0,0,0,91,94,1,0,0,0,92,93,5,6,0,0,93,95,3,30,15,0,94,92,1,
0,0,0,94,95,1,0,0,0,95,96,1,0,0,0,96,97,3,12,6,0,97,7,1,0,0,0,98,107,5,4,
0,0,99,104,3,10,5,0,100,101,5,7,0,0,101,103,3,10,5,0,102,100,1,0,0,0,103,
106,1,0,0,0,104,102,1,0,0,0,104,105,1,0,0,0,105,108,1,0,0,0,106,104,1,0,
0,0,107,99,1,0,0,0,107,108,1,0,0,0,108,109,1,0,0,0,109,110,5,5,0,0,110,9,
1,0,0,0,111,114,3,32,16,0,112,113,5,6,0,0,113,115,3,30,15,0,114,112,1,0,
0,0,114,115,1,0,0,0,115,11,1,0,0,0,116,122,5,1,0,0,117,121,3,14,7,0,118,
121,3,16,8,0,119,121,3,18,9,0,120,117,1,0,0,0,120,118,1,0,0,0,120,119,1,
0,0,0,121,124,1,0,0,0,122,120,1,0,0,0,122,123,1,0,0,0,123,128,1,0,0,0,124,
122,1,0,0,0,125,127,3,20,10,0,126,125,1,0,0,0,127,130,1,0,0,0,128,126,1,
0,0,0,128,129,1,0,0,0,129,131,1,0,0,0,130,128,1,0,0,0,131,132,5,3,0,0,132,
13,1,0,0,0,133,134,5,33,0,0,134,141,5,1,0,0,135,137,3,26,13,0,136,138,5,
2,0,0,137,136,1,0,0,0,137,138,1,0,0,0,138,140,1,0,0,0,139,135,1,0,0,0,140,
143,1,0,0,0,141,139,1,0,0,0,141,142,1,0,0,0,142,144,1,0,0,0,143,141,1,0,
0,0,144,145,5,3,0,0,145,15,1,0,0,0,146,147,5,34,0,0,147,149,3,26,13,0,148,
150,5,2,0,0,149,148,1,0,0,0,149,150,1,0,0,0,150,17,1,0,0,0,151,152,5,27,
0,0,152,156,5,1,0,0,153,155,3,20,10,0,154,153,1,0,0,0,155,158,1,0,0,0,156,
154,1,0,0,0,156,157,1,0,0,0,157,159,1,0,0,0,158,156,1,0,0,0,159,160,5,3,
0,0,160,19,1,0,0,0,161,247,3,22,11,0,162,163,5,40,0,0,163,164,5,4,0,0,164,
165,3,26,13,0,165,166,5,5,0,0,166,169,3,20,10,0,167,168,5,36,0,0,168,170,
3,20,10,0,169,167,1,0,0,0,169,170,1,0,0,0,170,247,1,0,0,0,171,172,5,50,0,
0,172,173,5,4,0,0,173,174,3,26,13,0,174,175,5,5,0,0,175,176,3,20,10,0,176,
247,1,0,0,0,177,178,5,37,0,0,178,180,5,4,0,0,179,181,5,49,0,0,180,179,1,
0,0,0,180,181,1,0,0,0,181,182,1,0,0,0,182,185,3,32,16,0,183,184,5,38,0,0,
184,186,3,26,13,0,185,183,1,0,0,0,185,186,1,0,0,0,186,187,1,0,0,0,187,188,
5,48,0,0,188,191,3,26,13,0,189,190,5,31,0,0,190,192,3,26,13,0,191,189,1,
0,0,0,191,192,1,0,0,0,192,193,1,0,0,0,193,194,5,5,0,0,194,195,3,20,10,0,
195,247,1,0,0,0,196,198,5,44,0,0,197,199,3,26,13,0,198,197,1,0,0,0,198,199,
1,0,0,0,199,201,1,0,0,0,200,202,5,2,0,0,201,200,1,0,0,0,201,202,1,0,0,0,
202,247,1,0,0,0,203,205,5,32,0,0,204,206,5,2,0,0,205,204,1,0,0,0,205,206,
1,0,0,0,206,247,1,0,0,0,207,209,5,35,0,0,208,210,5,2,0,0,209,208,1,0,0,0,
209,210,1,0,0,0,210,247,1,0,0,0,211,215,5,1,0,0,212,214,3,20,10,0,213,212,
1,0,0,0,214,217,1,0,0,0,215,213,1,0,0,0,215,216,1,0,0,0,216,218,1,0,0,0,
217,215,1,0,0,0,218,247,5,3,0,0,219,220,3,26,13,0,220,221,5,8,0,0,221,222,
3,32,16,0,222,223,5,9,0,0,223,225,3,26,13,0,224,226,5,2,0,0,225,224,1,0,
0,0,225,226,1,0,0,0,226,247,1,0,0,0,227,228,3,26,13,0,228,229,5,10,0,0,229,
230,3,26,13,0,230,231,5,11,0,0,231,232,5,9,0,0,232,234,3,26,13,0,233,235,
5,2,0,0,234,233,1,0,0,0,234,235,1,0,0,0,235,247,1,0,0,0,236,237,3,32,16,
0,237,238,5,9,0,0,238,240,3,26,13,0,239,241,5,2,0,0,240,239,1,0,0,0,240,
241,1,0,0,0,241,247,1,0,0,0,242,244,3,26,13,0,243,245,5,2,0,0,244,243,1,
0,0,0,244,245,1,0,0,0,245,247,1,0,0,0,246,161,1,0,0,0,246,162,1,0,0,0,246,
171,1,0,0,0,246,177,1,0,0,0,246,196,1,0,0,0,246,203,1,0,0,0,246,207,1,0,
0,0,246,211,1,0,0,0,246,219,1,0,0,0,246,227,1,0,0,0,246,236,1,0,0,0,246,
242,1,0,0,0,247,21,1,0,0,0,248,258,7,0,0,0,249,253,5,1,0,0,250,252,3,24,
12,0,251,250,1,0,0,0,252,255,1,0,0,0,253,251,1,0,0,0,253,254,1,0,0,0,254,
256,1,0,0,0,255,253,1,0,0,0,256,259,5,3,0,0,257,259,3,24,12,0,258,249,1,
0,0,0,258,257,1,0,0,0,259,23,1,0,0,0,260,263,3,32,16,0,261,262,5,6,0,0,262,
264,3,30,15,0,263,261,1,0,0,0,263,264,1,0,0,0,264,267,1,0,0,0,265,266,5,
9,0,0,266,268,3,26,13,0,267,265,1,0,0,0,267,268,1,0,0,0,268,270,1,0,0,0,
269,271,5,2,0,0,270,269,1,0,0,0,270,271,1,0,0,0,271,25,1,0,0,0,272,273,6,
13,-1,0,273,274,5,30,0,0,274,284,3,26,13,13,275,276,7,1,0,0,276,284,3,26,
13,12,277,284,3,32,16,0,278,284,3,34,17,0,279,280,5,4,0,0,280,281,3,26,13,
0,281,282,5,5,0,0,282,284,1,0,0,0,283,272,1,0,0,0,283,275,1,0,0,0,283,277,
1,0,0,0,283,278,1,0,0,0,283,279,1,0,0,0,284,324,1,0,0,0,285,286,10,10,0,
0,286,287,7,2,0,0,287,323,3,26,13,11,288,289,10,9,0,0,289,290,7,3,0,0,290,
323,3,26,13,10,291,292,10,8,0,0,292,293,7,4,0,0,293,323,3,26,13,9,294,295,
10,7,0,0,295,296,7,5,0,0,296,323,3,26,13,8,297,298,10,6,0,0,298,299,5,23,
0,0,299,323,3,26,13,7,300,301,10,5,0,0,301,302,5,24,0,0,302,323,3,26,13,
6,303,304,10,4,0,0,304,305,5,25,0,0,305,306,3,26,13,0,306,307,5,6,0,0,307,
308,3,26,13,4,308,323,1,0,0,0,309,310,10,16,0,0,310,323,3,28,14,0,311,312,
10,15,0,0,312,313,5,8,0,0,313,323,3,32,16,0,314,315,10,14,0,0,315,316,5,
10,0,0,316,317,3,26,13,0,317,318,5,11,0,0,318,323,1,0,0,0,319,320,10,11,
0,0,320,321,5,28,0,0,321,323,3,30,15,0,322,285,1,0,0,0,322,288,1,0,0,0,322,
291,1,0,0,0,322,294,1,0,0,0,322,297,1,0,0,0,322,300,1,0,0,0,322,303,1,0,
0,0,322,309,1,0,0,0,322,311,1,0,0,0,322,314,1,0,0,0,322,319,1,0,0,0,323,
326,1,0,0,0,324,322,1,0,0,0,324,325,1,0,0,0,325,27,1,0,0,0,326,324,1,0,0,
0,327,336,5,4,0,0,328,333,3,26,13,0,329,330,5,7,0,0,330,332,3,26,13,0,331,
329,1,0,0,0,332,335,1,0,0,0,333,331,1,0,0,0,333,334,1,0,0,0,334,337,1,0,
0,0,335,333,1,0,0,0,336,328,1,0,0,0,336,337,1,0,0,0,337,338,1,0,0,0,338,
339,5,5,0,0,339,29,1,0,0,0,340,341,6,15,-1,0,341,362,3,32,16,0,342,351,5,
10,0,0,343,348,3,30,15,0,344,345,5,7,0,0,345,347,3,30,15,0,346,344,1,0,0,
0,347,350,1,0,0,0,348,346,1,0,0,0,348,349,1,0,0,0,349,352,1,0,0,0,350,348,
1,0,0,0,351,343,1,0,0,0,351,352,1,0,0,0,352,353,1,0,0,0,353,362,5,11,0,0,
354,355,5,4,0,0,355,356,3,30,15,0,356,357,5,5,0,0,357,362,1,0,0,0,358,362,
5,51,0,0,359,362,5,52,0,0,360,362,5,53,0,0,361,340,1,0,0,0,361,342,1,0,0,
0,361,354,1,0,0,0,361,358,1,0,0,0,361,359,1,0,0,0,361,360,1,0,0,0,362,371,
1,0,0,0,363,364,10,7,0,0,364,365,5,26,0,0,365,370,3,30,15,8,366,367,10,8,
0,0,367,368,5,10,0,0,368,370,5,11,0,0,369,363,1,0,0,0,369,366,1,0,0,0,370,
373,1,0,0,0,371,369,1,0,0,0,371,372,1,0,0,0,372,31,1,0,0,0,373,371,1,0,0,
0,374,375,7,6,0,0,375,33,1,0,0,0,376,388,5,10,0,0,377,382,3,26,13,0,378,
379,5,7,0,0,379,381,3,26,13,0,380,378,1,0,0,0,381,384,1,0,0,0,382,380,1,
0,0,0,382,383,1,0,0,0,383,386,1,0,0,0,384,382,1,0,0,0,385,387,5,7,0,0,386,
385,1,0,0,0,386,387,1,0,0,0,387,389,1,0,0,0,388,377,1,0,0,0,388,389,1,0,
0,0,389,390,1,0,0,0,390,395,5,11,0,0,391,395,5,51,0,0,392,395,5,52,0,0,393,
395,5,53,0,0,394,376,1,0,0,0,394,391,1,0,0,0,394,392,1,0,0,0,394,393,1,0,
0,0,395,35,1,0,0,0,56,40,42,49,54,57,59,65,68,72,80,85,90,94,104,107,114,
120,122,128,137,141,149,156,169,180,185,191,198,201,205,209,215,225,234,
240,244,246,253,258,263,267,270,283,322,324,333,336,348,351,361,369,371,
382,386,388,394];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class PortalToolboxLanguageParser extends antlr4.Parser {

    static grammarFileName = "PortalToolboxLanguage.g4";
    static literalNames = [ null, "'{'", "';'", "'}'", "'('", "')'", "':'", 
                            "','", "'.'", "'='", "'['", "']'", "'!'", "'-'", 
                            "'*'", "'/'", "'+'", "'<'", "'<='", "'>='", 
                            "'>'", "'=='", "'!='", "'&&'", "'||'", "'?'", 
                            "'|'", "'actions'", "'as'", "'async'", "'await'", 
                            "'by'", "'break'", "'conditions'", "'condition'", 
                            "'continue'", "'else'", "'for'", "'from'", "'global'", 
                            "'if'", "'mod'", "'on'", "'player'", "'return'", 
                            "'rule'", "'sub'", "'team'", "'to'", "'var'", 
                            "'while'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, "ACTIONS", "AS", "ASYNC", 
                             "AWAIT", "BY", "BREAK", "CONDITIONS", "CONDITION", 
                             "CONTINUE", "ELSE", "FOR", "FROM", "GLOBAL", 
                             "IF", "MOD", "ON", "PLAYER", "RETURN", "RULE", 
                             "SUB", "TEAM", "TO", "VAR", "WHILE", "BOOLEAN_LITERAL", 
                             "NUMBER_LITERAL", "STRING_LITERAL", "BACKTICK_IDENTIFIER", 
                             "IDENTIFIER", "MULTILINE_COMMENT", "COMMENT", 
                             "WS", "UNKNWON" ];
    static ruleNames = [ "code", "modDefinition", "ruleDefinition", "subroutineDefinition", 
                         "argumentsDeclaration", "argumentDeclaration", 
                         "body", "bodyConditions", "bodyCondition", "bodyActions", 
                         "statement", "variableDeclaration", "variableDeclarationWithoutSpecifier", 
                         "expression", "callArguments", "typeExpression", 
                         "identifier", "literal" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = PortalToolboxLanguageParser.ruleNames;
        this.literalNames = PortalToolboxLanguageParser.literalNames;
        this.symbolicNames = PortalToolboxLanguageParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 13:
    	    		return this.expression_sempred(localctx, predIndex);
    	case 15:
    	    		return this.typeExpression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 10);
    		case 1:
    			return this.precpred(this._ctx, 9);
    		case 2:
    			return this.precpred(this._ctx, 8);
    		case 3:
    			return this.precpred(this._ctx, 7);
    		case 4:
    			return this.precpred(this._ctx, 6);
    		case 5:
    			return this.precpred(this._ctx, 5);
    		case 6:
    			return this.precpred(this._ctx, 4);
    		case 7:
    			return this.precpred(this._ctx, 16);
    		case 8:
    			return this.precpred(this._ctx, 15);
    		case 9:
    			return this.precpred(this._ctx, 14);
    		case 10:
    			return this.precpred(this._ctx, 11);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    typeExpression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 11:
    			return this.precpred(this._ctx, 7);
    		case 12:
    			return this.precpred(this._ctx, 8);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	code() {
	    let localctx = new CodeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, PortalToolboxLanguageParser.RULE_code);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 29)) & ~0x1f) == 0 && ((1 << (_la - 29)) & ((1 << (PortalToolboxLanguageParser.ASYNC - 29)) | (1 << (PortalToolboxLanguageParser.GLOBAL - 29)) | (1 << (PortalToolboxLanguageParser.MOD - 29)) | (1 << (PortalToolboxLanguageParser.PLAYER - 29)) | (1 << (PortalToolboxLanguageParser.RULE - 29)) | (1 << (PortalToolboxLanguageParser.SUB - 29)) | (1 << (PortalToolboxLanguageParser.TEAM - 29)) | (1 << (PortalToolboxLanguageParser.VAR - 29)))) !== 0)) {
	            this.state = 40;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 36;
	                this.variableDeclaration();
	                break;

	            case 2:
	                this.state = 37;
	                this.subroutineDefinition();
	                break;

	            case 3:
	                this.state = 38;
	                this.ruleDefinition();
	                break;

	            case 4:
	                this.state = 39;
	                this.modDefinition();
	                break;

	            }
	            this.state = 44;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 45;
	        this.match(PortalToolboxLanguageParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	modDefinition() {
	    let localctx = new ModDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, PortalToolboxLanguageParser.RULE_modDefinition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this.match(PortalToolboxLanguageParser.MOD);
	        this.state = 49;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 27)) & ~0x1f) == 0 && ((1 << (_la - 27)) & ((1 << (PortalToolboxLanguageParser.ACTIONS - 27)) | (1 << (PortalToolboxLanguageParser.ASYNC - 27)) | (1 << (PortalToolboxLanguageParser.AWAIT - 27)) | (1 << (PortalToolboxLanguageParser.BY - 27)) | (1 << (PortalToolboxLanguageParser.BREAK - 27)) | (1 << (PortalToolboxLanguageParser.CONDITIONS - 27)) | (1 << (PortalToolboxLanguageParser.CONDITION - 27)) | (1 << (PortalToolboxLanguageParser.CONTINUE - 27)) | (1 << (PortalToolboxLanguageParser.FROM - 27)) | (1 << (PortalToolboxLanguageParser.GLOBAL - 27)) | (1 << (PortalToolboxLanguageParser.MOD - 27)) | (1 << (PortalToolboxLanguageParser.ON - 27)) | (1 << (PortalToolboxLanguageParser.PLAYER - 27)) | (1 << (PortalToolboxLanguageParser.RULE - 27)) | (1 << (PortalToolboxLanguageParser.SUB - 27)) | (1 << (PortalToolboxLanguageParser.TEAM - 27)) | (1 << (PortalToolboxLanguageParser.TO - 27)) | (1 << (PortalToolboxLanguageParser.VAR - 27)) | (1 << (PortalToolboxLanguageParser.BACKTICK_IDENTIFIER - 27)) | (1 << (PortalToolboxLanguageParser.IDENTIFIER - 27)))) !== 0)) {
	            this.state = 48;
	            localctx.modIdentifier = this.identifier();
	        }

	        this.state = 51;
	        this.match(PortalToolboxLanguageParser.T__0);
	        this.state = 59;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 27)) & ~0x1f) == 0 && ((1 << (_la - 27)) & ((1 << (PortalToolboxLanguageParser.ACTIONS - 27)) | (1 << (PortalToolboxLanguageParser.ASYNC - 27)) | (1 << (PortalToolboxLanguageParser.AWAIT - 27)) | (1 << (PortalToolboxLanguageParser.BY - 27)) | (1 << (PortalToolboxLanguageParser.BREAK - 27)) | (1 << (PortalToolboxLanguageParser.CONDITIONS - 27)) | (1 << (PortalToolboxLanguageParser.CONDITION - 27)) | (1 << (PortalToolboxLanguageParser.CONTINUE - 27)) | (1 << (PortalToolboxLanguageParser.FROM - 27)) | (1 << (PortalToolboxLanguageParser.GLOBAL - 27)) | (1 << (PortalToolboxLanguageParser.MOD - 27)) | (1 << (PortalToolboxLanguageParser.ON - 27)) | (1 << (PortalToolboxLanguageParser.PLAYER - 27)) | (1 << (PortalToolboxLanguageParser.RULE - 27)) | (1 << (PortalToolboxLanguageParser.SUB - 27)) | (1 << (PortalToolboxLanguageParser.TEAM - 27)) | (1 << (PortalToolboxLanguageParser.TO - 27)) | (1 << (PortalToolboxLanguageParser.VAR - 27)) | (1 << (PortalToolboxLanguageParser.BACKTICK_IDENTIFIER - 27)) | (1 << (PortalToolboxLanguageParser.IDENTIFIER - 27)))) !== 0)) {
	            this.state = 57;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 52;
	                localctx._identifier = this.identifier();
	                localctx.ruleIdentifier.push(localctx._identifier);
	                this.state = 54;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===PortalToolboxLanguageParser.T__1) {
	                    this.state = 53;
	                    this.match(PortalToolboxLanguageParser.T__1);
	                }

	                break;

	            case 2:
	                this.state = 56;
	                this.ruleDefinition();
	                break;

	            }
	            this.state = 61;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 62;
	        this.match(PortalToolboxLanguageParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ruleDefinition() {
	    let localctx = new RuleDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, PortalToolboxLanguageParser.RULE_ruleDefinition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PortalToolboxLanguageParser.MOD) {
	            this.state = 64;
	            this.match(PortalToolboxLanguageParser.MOD);
	        }

	        this.state = 68;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PortalToolboxLanguageParser.ASYNC) {
	            this.state = 67;
	            this.match(PortalToolboxLanguageParser.ASYNC);
	        }

	        this.state = 70;
	        this.match(PortalToolboxLanguageParser.RULE);
	        this.state = 72;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        if(la_===1) {
	            this.state = 71;
	            localctx.ruleIdentifier = this.identifier();

	        }
	        this.state = 74;
	        this.match(PortalToolboxLanguageParser.ON);
	        this.state = 75;
	        localctx.event = this.identifier();
	        this.state = 80;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PortalToolboxLanguageParser.T__3) {
	            this.state = 76;
	            this.match(PortalToolboxLanguageParser.T__3);
	            this.state = 77;
	            localctx.eventArgument = this.identifier();
	            this.state = 78;
	            this.match(PortalToolboxLanguageParser.T__4);
	        }

	        this.state = 82;
	        this.body();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	subroutineDefinition() {
	    let localctx = new SubroutineDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, PortalToolboxLanguageParser.RULE_subroutineDefinition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PortalToolboxLanguageParser.ASYNC) {
	            this.state = 84;
	            this.match(PortalToolboxLanguageParser.ASYNC);
	        }

	        this.state = 87;
	        this.match(PortalToolboxLanguageParser.SUB);
	        this.state = 88;
	        this.identifier();
	        this.state = 90;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PortalToolboxLanguageParser.T__3) {
	            this.state = 89;
	            this.argumentsDeclaration();
	        }

	        this.state = 94;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PortalToolboxLanguageParser.T__5) {
	            this.state = 92;
	            this.match(PortalToolboxLanguageParser.T__5);
	            this.state = 93;
	            this.typeExpression(0);
	        }

	        this.state = 96;
	        this.body();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argumentsDeclaration() {
	    let localctx = new ArgumentsDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, PortalToolboxLanguageParser.RULE_argumentsDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 98;
	        this.match(PortalToolboxLanguageParser.T__3);
	        this.state = 107;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 27)) & ~0x1f) == 0 && ((1 << (_la - 27)) & ((1 << (PortalToolboxLanguageParser.ACTIONS - 27)) | (1 << (PortalToolboxLanguageParser.ASYNC - 27)) | (1 << (PortalToolboxLanguageParser.AWAIT - 27)) | (1 << (PortalToolboxLanguageParser.BY - 27)) | (1 << (PortalToolboxLanguageParser.BREAK - 27)) | (1 << (PortalToolboxLanguageParser.CONDITIONS - 27)) | (1 << (PortalToolboxLanguageParser.CONDITION - 27)) | (1 << (PortalToolboxLanguageParser.CONTINUE - 27)) | (1 << (PortalToolboxLanguageParser.FROM - 27)) | (1 << (PortalToolboxLanguageParser.GLOBAL - 27)) | (1 << (PortalToolboxLanguageParser.MOD - 27)) | (1 << (PortalToolboxLanguageParser.ON - 27)) | (1 << (PortalToolboxLanguageParser.PLAYER - 27)) | (1 << (PortalToolboxLanguageParser.RULE - 27)) | (1 << (PortalToolboxLanguageParser.SUB - 27)) | (1 << (PortalToolboxLanguageParser.TEAM - 27)) | (1 << (PortalToolboxLanguageParser.TO - 27)) | (1 << (PortalToolboxLanguageParser.VAR - 27)) | (1 << (PortalToolboxLanguageParser.BACKTICK_IDENTIFIER - 27)) | (1 << (PortalToolboxLanguageParser.IDENTIFIER - 27)))) !== 0)) {
	            this.state = 99;
	            this.argumentDeclaration();
	            this.state = 104;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===PortalToolboxLanguageParser.T__6) {
	                this.state = 100;
	                this.match(PortalToolboxLanguageParser.T__6);
	                this.state = 101;
	                this.argumentDeclaration();
	                this.state = 106;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 109;
	        this.match(PortalToolboxLanguageParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argumentDeclaration() {
	    let localctx = new ArgumentDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, PortalToolboxLanguageParser.RULE_argumentDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this.identifier();
	        this.state = 114;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PortalToolboxLanguageParser.T__5) {
	            this.state = 112;
	            this.match(PortalToolboxLanguageParser.T__5);
	            this.state = 113;
	            this.typeExpression(0);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	body() {
	    let localctx = new BodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, PortalToolboxLanguageParser.RULE_body);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 116;
	        this.match(PortalToolboxLanguageParser.T__0);
	        this.state = 122;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 120;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case PortalToolboxLanguageParser.CONDITIONS:
	                    this.state = 117;
	                    this.bodyConditions();
	                    break;
	                case PortalToolboxLanguageParser.CONDITION:
	                    this.state = 118;
	                    this.bodyCondition();
	                    break;
	                case PortalToolboxLanguageParser.ACTIONS:
	                    this.state = 119;
	                    this.bodyActions();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                } 
	            }
	            this.state = 124;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
	        }

	        this.state = 128;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PortalToolboxLanguageParser.T__0) | (1 << PortalToolboxLanguageParser.T__3) | (1 << PortalToolboxLanguageParser.T__9) | (1 << PortalToolboxLanguageParser.T__11) | (1 << PortalToolboxLanguageParser.T__12) | (1 << PortalToolboxLanguageParser.ACTIONS) | (1 << PortalToolboxLanguageParser.ASYNC) | (1 << PortalToolboxLanguageParser.AWAIT) | (1 << PortalToolboxLanguageParser.BY))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (PortalToolboxLanguageParser.BREAK - 32)) | (1 << (PortalToolboxLanguageParser.CONDITIONS - 32)) | (1 << (PortalToolboxLanguageParser.CONDITION - 32)) | (1 << (PortalToolboxLanguageParser.CONTINUE - 32)) | (1 << (PortalToolboxLanguageParser.FOR - 32)) | (1 << (PortalToolboxLanguageParser.FROM - 32)) | (1 << (PortalToolboxLanguageParser.GLOBAL - 32)) | (1 << (PortalToolboxLanguageParser.IF - 32)) | (1 << (PortalToolboxLanguageParser.MOD - 32)) | (1 << (PortalToolboxLanguageParser.ON - 32)) | (1 << (PortalToolboxLanguageParser.PLAYER - 32)) | (1 << (PortalToolboxLanguageParser.RETURN - 32)) | (1 << (PortalToolboxLanguageParser.RULE - 32)) | (1 << (PortalToolboxLanguageParser.SUB - 32)) | (1 << (PortalToolboxLanguageParser.TEAM - 32)) | (1 << (PortalToolboxLanguageParser.TO - 32)) | (1 << (PortalToolboxLanguageParser.VAR - 32)) | (1 << (PortalToolboxLanguageParser.WHILE - 32)) | (1 << (PortalToolboxLanguageParser.BOOLEAN_LITERAL - 32)) | (1 << (PortalToolboxLanguageParser.NUMBER_LITERAL - 32)) | (1 << (PortalToolboxLanguageParser.STRING_LITERAL - 32)) | (1 << (PortalToolboxLanguageParser.BACKTICK_IDENTIFIER - 32)) | (1 << (PortalToolboxLanguageParser.IDENTIFIER - 32)))) !== 0)) {
	            this.state = 125;
	            this.statement();
	            this.state = 130;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 131;
	        this.match(PortalToolboxLanguageParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bodyConditions() {
	    let localctx = new BodyConditionsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, PortalToolboxLanguageParser.RULE_bodyConditions);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 133;
	        this.match(PortalToolboxLanguageParser.CONDITIONS);
	        this.state = 134;
	        this.match(PortalToolboxLanguageParser.T__0);
	        this.state = 141;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PortalToolboxLanguageParser.T__3) | (1 << PortalToolboxLanguageParser.T__9) | (1 << PortalToolboxLanguageParser.T__11) | (1 << PortalToolboxLanguageParser.T__12) | (1 << PortalToolboxLanguageParser.ACTIONS) | (1 << PortalToolboxLanguageParser.ASYNC) | (1 << PortalToolboxLanguageParser.AWAIT) | (1 << PortalToolboxLanguageParser.BY))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (PortalToolboxLanguageParser.BREAK - 32)) | (1 << (PortalToolboxLanguageParser.CONDITIONS - 32)) | (1 << (PortalToolboxLanguageParser.CONDITION - 32)) | (1 << (PortalToolboxLanguageParser.CONTINUE - 32)) | (1 << (PortalToolboxLanguageParser.FROM - 32)) | (1 << (PortalToolboxLanguageParser.GLOBAL - 32)) | (1 << (PortalToolboxLanguageParser.MOD - 32)) | (1 << (PortalToolboxLanguageParser.ON - 32)) | (1 << (PortalToolboxLanguageParser.PLAYER - 32)) | (1 << (PortalToolboxLanguageParser.RULE - 32)) | (1 << (PortalToolboxLanguageParser.SUB - 32)) | (1 << (PortalToolboxLanguageParser.TEAM - 32)) | (1 << (PortalToolboxLanguageParser.TO - 32)) | (1 << (PortalToolboxLanguageParser.VAR - 32)) | (1 << (PortalToolboxLanguageParser.BOOLEAN_LITERAL - 32)) | (1 << (PortalToolboxLanguageParser.NUMBER_LITERAL - 32)) | (1 << (PortalToolboxLanguageParser.STRING_LITERAL - 32)) | (1 << (PortalToolboxLanguageParser.BACKTICK_IDENTIFIER - 32)) | (1 << (PortalToolboxLanguageParser.IDENTIFIER - 32)))) !== 0)) {
	            this.state = 135;
	            this.expression(0);
	            this.state = 137;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===PortalToolboxLanguageParser.T__1) {
	                this.state = 136;
	                this.match(PortalToolboxLanguageParser.T__1);
	            }

	            this.state = 143;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 144;
	        this.match(PortalToolboxLanguageParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bodyCondition() {
	    let localctx = new BodyConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, PortalToolboxLanguageParser.RULE_bodyCondition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 146;
	        this.match(PortalToolboxLanguageParser.CONDITION);
	        this.state = 147;
	        this.expression(0);
	        this.state = 149;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PortalToolboxLanguageParser.T__1) {
	            this.state = 148;
	            this.match(PortalToolboxLanguageParser.T__1);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bodyActions() {
	    let localctx = new BodyActionsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, PortalToolboxLanguageParser.RULE_bodyActions);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 151;
	        this.match(PortalToolboxLanguageParser.ACTIONS);
	        this.state = 152;
	        this.match(PortalToolboxLanguageParser.T__0);
	        this.state = 156;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PortalToolboxLanguageParser.T__0) | (1 << PortalToolboxLanguageParser.T__3) | (1 << PortalToolboxLanguageParser.T__9) | (1 << PortalToolboxLanguageParser.T__11) | (1 << PortalToolboxLanguageParser.T__12) | (1 << PortalToolboxLanguageParser.ACTIONS) | (1 << PortalToolboxLanguageParser.ASYNC) | (1 << PortalToolboxLanguageParser.AWAIT) | (1 << PortalToolboxLanguageParser.BY))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (PortalToolboxLanguageParser.BREAK - 32)) | (1 << (PortalToolboxLanguageParser.CONDITIONS - 32)) | (1 << (PortalToolboxLanguageParser.CONDITION - 32)) | (1 << (PortalToolboxLanguageParser.CONTINUE - 32)) | (1 << (PortalToolboxLanguageParser.FOR - 32)) | (1 << (PortalToolboxLanguageParser.FROM - 32)) | (1 << (PortalToolboxLanguageParser.GLOBAL - 32)) | (1 << (PortalToolboxLanguageParser.IF - 32)) | (1 << (PortalToolboxLanguageParser.MOD - 32)) | (1 << (PortalToolboxLanguageParser.ON - 32)) | (1 << (PortalToolboxLanguageParser.PLAYER - 32)) | (1 << (PortalToolboxLanguageParser.RETURN - 32)) | (1 << (PortalToolboxLanguageParser.RULE - 32)) | (1 << (PortalToolboxLanguageParser.SUB - 32)) | (1 << (PortalToolboxLanguageParser.TEAM - 32)) | (1 << (PortalToolboxLanguageParser.TO - 32)) | (1 << (PortalToolboxLanguageParser.VAR - 32)) | (1 << (PortalToolboxLanguageParser.WHILE - 32)) | (1 << (PortalToolboxLanguageParser.BOOLEAN_LITERAL - 32)) | (1 << (PortalToolboxLanguageParser.NUMBER_LITERAL - 32)) | (1 << (PortalToolboxLanguageParser.STRING_LITERAL - 32)) | (1 << (PortalToolboxLanguageParser.BACKTICK_IDENTIFIER - 32)) | (1 << (PortalToolboxLanguageParser.IDENTIFIER - 32)))) !== 0)) {
	            this.state = 153;
	            this.statement();
	            this.state = 158;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 159;
	        this.match(PortalToolboxLanguageParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, PortalToolboxLanguageParser.RULE_statement);
	    var _la = 0; // Token type
	    try {
	        this.state = 246;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new VariableDeclarationStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 161;
	            this.variableDeclaration();
	            break;

	        case 2:
	            localctx = new IfStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 162;
	            this.match(PortalToolboxLanguageParser.IF);
	            this.state = 163;
	            this.match(PortalToolboxLanguageParser.T__3);
	            this.state = 164;
	            this.expression(0);
	            this.state = 165;
	            this.match(PortalToolboxLanguageParser.T__4);
	            this.state = 166;
	            localctx.ifTrue = this.statement();
	            this.state = 169;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	            if(la_===1) {
	                this.state = 167;
	                this.match(PortalToolboxLanguageParser.ELSE);
	                this.state = 168;
	                localctx.ifFalse = this.statement();

	            }
	            break;

	        case 3:
	            localctx = new WhileStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 171;
	            this.match(PortalToolboxLanguageParser.WHILE);
	            this.state = 172;
	            this.match(PortalToolboxLanguageParser.T__3);
	            this.state = 173;
	            this.expression(0);
	            this.state = 174;
	            this.match(PortalToolboxLanguageParser.T__4);
	            this.state = 175;
	            this.statement();
	            break;

	        case 4:
	            localctx = new ForStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 177;
	            this.match(PortalToolboxLanguageParser.FOR);
	            this.state = 178;
	            this.match(PortalToolboxLanguageParser.T__3);
	            this.state = 180;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	            if(la_===1) {
	                this.state = 179;
	                this.match(PortalToolboxLanguageParser.VAR);

	            }
	            this.state = 182;
	            this.identifier();
	            this.state = 185;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===PortalToolboxLanguageParser.FROM) {
	                this.state = 183;
	                this.match(PortalToolboxLanguageParser.FROM);
	                this.state = 184;
	                localctx.from = this.expression(0);
	            }

	            this.state = 187;
	            this.match(PortalToolboxLanguageParser.TO);
	            this.state = 188;
	            localctx.to = this.expression(0);
	            this.state = 191;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===PortalToolboxLanguageParser.BY) {
	                this.state = 189;
	                this.match(PortalToolboxLanguageParser.BY);
	                this.state = 190;
	                localctx.by = this.expression(0);
	            }

	            this.state = 193;
	            this.match(PortalToolboxLanguageParser.T__4);
	            this.state = 194;
	            this.statement();
	            break;

	        case 5:
	            localctx = new ReturnStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 196;
	            this.match(PortalToolboxLanguageParser.RETURN);
	            this.state = 198;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
	            if(la_===1) {
	                this.state = 197;
	                this.expression(0);

	            }
	            this.state = 201;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===PortalToolboxLanguageParser.T__1) {
	                this.state = 200;
	                this.match(PortalToolboxLanguageParser.T__1);
	            }

	            break;

	        case 6:
	            localctx = new BreakStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 203;
	            this.match(PortalToolboxLanguageParser.BREAK);
	            this.state = 205;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===PortalToolboxLanguageParser.T__1) {
	                this.state = 204;
	                this.match(PortalToolboxLanguageParser.T__1);
	            }

	            break;

	        case 7:
	            localctx = new ContinueStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 207;
	            this.match(PortalToolboxLanguageParser.CONTINUE);
	            this.state = 209;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===PortalToolboxLanguageParser.T__1) {
	                this.state = 208;
	                this.match(PortalToolboxLanguageParser.T__1);
	            }

	            break;

	        case 8:
	            localctx = new BlockStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 211;
	            this.match(PortalToolboxLanguageParser.T__0);
	            this.state = 215;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PortalToolboxLanguageParser.T__0) | (1 << PortalToolboxLanguageParser.T__3) | (1 << PortalToolboxLanguageParser.T__9) | (1 << PortalToolboxLanguageParser.T__11) | (1 << PortalToolboxLanguageParser.T__12) | (1 << PortalToolboxLanguageParser.ACTIONS) | (1 << PortalToolboxLanguageParser.ASYNC) | (1 << PortalToolboxLanguageParser.AWAIT) | (1 << PortalToolboxLanguageParser.BY))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (PortalToolboxLanguageParser.BREAK - 32)) | (1 << (PortalToolboxLanguageParser.CONDITIONS - 32)) | (1 << (PortalToolboxLanguageParser.CONDITION - 32)) | (1 << (PortalToolboxLanguageParser.CONTINUE - 32)) | (1 << (PortalToolboxLanguageParser.FOR - 32)) | (1 << (PortalToolboxLanguageParser.FROM - 32)) | (1 << (PortalToolboxLanguageParser.GLOBAL - 32)) | (1 << (PortalToolboxLanguageParser.IF - 32)) | (1 << (PortalToolboxLanguageParser.MOD - 32)) | (1 << (PortalToolboxLanguageParser.ON - 32)) | (1 << (PortalToolboxLanguageParser.PLAYER - 32)) | (1 << (PortalToolboxLanguageParser.RETURN - 32)) | (1 << (PortalToolboxLanguageParser.RULE - 32)) | (1 << (PortalToolboxLanguageParser.SUB - 32)) | (1 << (PortalToolboxLanguageParser.TEAM - 32)) | (1 << (PortalToolboxLanguageParser.TO - 32)) | (1 << (PortalToolboxLanguageParser.VAR - 32)) | (1 << (PortalToolboxLanguageParser.WHILE - 32)) | (1 << (PortalToolboxLanguageParser.BOOLEAN_LITERAL - 32)) | (1 << (PortalToolboxLanguageParser.NUMBER_LITERAL - 32)) | (1 << (PortalToolboxLanguageParser.STRING_LITERAL - 32)) | (1 << (PortalToolboxLanguageParser.BACKTICK_IDENTIFIER - 32)) | (1 << (PortalToolboxLanguageParser.IDENTIFIER - 32)))) !== 0)) {
	                this.state = 212;
	                this.statement();
	                this.state = 217;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 218;
	            this.match(PortalToolboxLanguageParser.T__2);
	            break;

	        case 9:
	            localctx = new MemberAssignmentStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 9);
	            this.state = 219;
	            this.expression(0);
	            this.state = 220;
	            this.match(PortalToolboxLanguageParser.T__7);
	            this.state = 221;
	            this.identifier();
	            this.state = 222;
	            this.match(PortalToolboxLanguageParser.T__8);
	            this.state = 223;
	            this.expression(0);
	            this.state = 225;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===PortalToolboxLanguageParser.T__1) {
	                this.state = 224;
	                this.match(PortalToolboxLanguageParser.T__1);
	            }

	            break;

	        case 10:
	            localctx = new IndexAssignmentStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 10);
	            this.state = 227;
	            this.expression(0);
	            this.state = 228;
	            this.match(PortalToolboxLanguageParser.T__9);
	            this.state = 229;
	            this.expression(0);
	            this.state = 230;
	            this.match(PortalToolboxLanguageParser.T__10);
	            this.state = 231;
	            this.match(PortalToolboxLanguageParser.T__8);
	            this.state = 232;
	            this.expression(0);
	            this.state = 234;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===PortalToolboxLanguageParser.T__1) {
	                this.state = 233;
	                this.match(PortalToolboxLanguageParser.T__1);
	            }

	            break;

	        case 11:
	            localctx = new IdentifierAssignmentStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 11);
	            this.state = 236;
	            this.identifier();
	            this.state = 237;
	            this.match(PortalToolboxLanguageParser.T__8);
	            this.state = 238;
	            this.expression(0);
	            this.state = 240;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===PortalToolboxLanguageParser.T__1) {
	                this.state = 239;
	                this.match(PortalToolboxLanguageParser.T__1);
	            }

	            break;

	        case 12:
	            localctx = new ExpressionStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 12);
	            this.state = 242;
	            this.expression(0);
	            this.state = 244;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===PortalToolboxLanguageParser.T__1) {
	                this.state = 243;
	                this.match(PortalToolboxLanguageParser.T__1);
	            }

	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableDeclaration() {
	    let localctx = new VariableDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, PortalToolboxLanguageParser.RULE_variableDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 248;
	        localctx.specifier = this._input.LT(1);
	        _la = this._input.LA(1);
	        if(!(((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (PortalToolboxLanguageParser.GLOBAL - 39)) | (1 << (PortalToolboxLanguageParser.PLAYER - 39)) | (1 << (PortalToolboxLanguageParser.TEAM - 39)) | (1 << (PortalToolboxLanguageParser.VAR - 39)))) !== 0))) {
	            localctx.specifier = this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 258;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PortalToolboxLanguageParser.T__0:
	            this.state = 249;
	            this.match(PortalToolboxLanguageParser.T__0);
	            this.state = 253;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(((((_la - 27)) & ~0x1f) == 0 && ((1 << (_la - 27)) & ((1 << (PortalToolboxLanguageParser.ACTIONS - 27)) | (1 << (PortalToolboxLanguageParser.ASYNC - 27)) | (1 << (PortalToolboxLanguageParser.AWAIT - 27)) | (1 << (PortalToolboxLanguageParser.BY - 27)) | (1 << (PortalToolboxLanguageParser.BREAK - 27)) | (1 << (PortalToolboxLanguageParser.CONDITIONS - 27)) | (1 << (PortalToolboxLanguageParser.CONDITION - 27)) | (1 << (PortalToolboxLanguageParser.CONTINUE - 27)) | (1 << (PortalToolboxLanguageParser.FROM - 27)) | (1 << (PortalToolboxLanguageParser.GLOBAL - 27)) | (1 << (PortalToolboxLanguageParser.MOD - 27)) | (1 << (PortalToolboxLanguageParser.ON - 27)) | (1 << (PortalToolboxLanguageParser.PLAYER - 27)) | (1 << (PortalToolboxLanguageParser.RULE - 27)) | (1 << (PortalToolboxLanguageParser.SUB - 27)) | (1 << (PortalToolboxLanguageParser.TEAM - 27)) | (1 << (PortalToolboxLanguageParser.TO - 27)) | (1 << (PortalToolboxLanguageParser.VAR - 27)) | (1 << (PortalToolboxLanguageParser.BACKTICK_IDENTIFIER - 27)) | (1 << (PortalToolboxLanguageParser.IDENTIFIER - 27)))) !== 0)) {
	                this.state = 250;
	                this.variableDeclarationWithoutSpecifier();
	                this.state = 255;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 256;
	            this.match(PortalToolboxLanguageParser.T__2);
	            break;
	        case PortalToolboxLanguageParser.ACTIONS:
	        case PortalToolboxLanguageParser.ASYNC:
	        case PortalToolboxLanguageParser.AWAIT:
	        case PortalToolboxLanguageParser.BY:
	        case PortalToolboxLanguageParser.BREAK:
	        case PortalToolboxLanguageParser.CONDITIONS:
	        case PortalToolboxLanguageParser.CONDITION:
	        case PortalToolboxLanguageParser.CONTINUE:
	        case PortalToolboxLanguageParser.FROM:
	        case PortalToolboxLanguageParser.GLOBAL:
	        case PortalToolboxLanguageParser.MOD:
	        case PortalToolboxLanguageParser.ON:
	        case PortalToolboxLanguageParser.PLAYER:
	        case PortalToolboxLanguageParser.RULE:
	        case PortalToolboxLanguageParser.SUB:
	        case PortalToolboxLanguageParser.TEAM:
	        case PortalToolboxLanguageParser.TO:
	        case PortalToolboxLanguageParser.VAR:
	        case PortalToolboxLanguageParser.BACKTICK_IDENTIFIER:
	        case PortalToolboxLanguageParser.IDENTIFIER:
	            this.state = 257;
	            this.variableDeclarationWithoutSpecifier();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableDeclarationWithoutSpecifier() {
	    let localctx = new VariableDeclarationWithoutSpecifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, PortalToolboxLanguageParser.RULE_variableDeclarationWithoutSpecifier);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 260;
	        this.identifier();
	        this.state = 263;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PortalToolboxLanguageParser.T__5) {
	            this.state = 261;
	            this.match(PortalToolboxLanguageParser.T__5);
	            this.state = 262;
	            this.typeExpression(0);
	        }

	        this.state = 267;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PortalToolboxLanguageParser.T__8) {
	            this.state = 265;
	            this.match(PortalToolboxLanguageParser.T__8);
	            this.state = 266;
	            this.expression(0);
	        }

	        this.state = 270;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PortalToolboxLanguageParser.T__1) {
	            this.state = 269;
	            this.match(PortalToolboxLanguageParser.T__1);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 26;
	    this.enterRecursionRule(localctx, 26, PortalToolboxLanguageParser.RULE_expression, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 283;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,42,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new AwaitExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 273;
	            this.match(PortalToolboxLanguageParser.AWAIT);
	            this.state = 274;
	            this.expression(13);
	            break;

	        case 2:
	            localctx = new UnaryExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 275;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===PortalToolboxLanguageParser.T__11 || _la===PortalToolboxLanguageParser.T__12)) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 276;
	            this.expression(12);
	            break;

	        case 3:
	            localctx = new IdentifierExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 277;
	            this.identifier();
	            break;

	        case 4:
	            localctx = new LiteralExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 278;
	            this.literal();
	            break;

	        case 5:
	            localctx = new ParenthesisExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 279;
	            this.match(PortalToolboxLanguageParser.T__3);
	            this.state = 280;
	            this.expression(0);
	            this.state = 281;
	            this.match(PortalToolboxLanguageParser.T__4);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 324;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,44,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 322;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,43,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new BinaryExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, PortalToolboxLanguageParser.RULE_expression);
	                    this.state = 285;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 286;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===PortalToolboxLanguageParser.T__13 || _la===PortalToolboxLanguageParser.T__14)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 287;
	                    localctx.right = this.expression(11);
	                    break;

	                case 2:
	                    localctx = new BinaryExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, PortalToolboxLanguageParser.RULE_expression);
	                    this.state = 288;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 289;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===PortalToolboxLanguageParser.T__12 || _la===PortalToolboxLanguageParser.T__15)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 290;
	                    localctx.right = this.expression(10);
	                    break;

	                case 3:
	                    localctx = new BinaryExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, PortalToolboxLanguageParser.RULE_expression);
	                    this.state = 291;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 292;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PortalToolboxLanguageParser.T__16) | (1 << PortalToolboxLanguageParser.T__17) | (1 << PortalToolboxLanguageParser.T__18) | (1 << PortalToolboxLanguageParser.T__19))) !== 0))) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 293;
	                    localctx.right = this.expression(9);
	                    break;

	                case 4:
	                    localctx = new BinaryExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, PortalToolboxLanguageParser.RULE_expression);
	                    this.state = 294;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 295;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===PortalToolboxLanguageParser.T__20 || _la===PortalToolboxLanguageParser.T__21)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 296;
	                    localctx.right = this.expression(8);
	                    break;

	                case 5:
	                    localctx = new BinaryExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, PortalToolboxLanguageParser.RULE_expression);
	                    this.state = 297;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 298;
	                    localctx.op = this.match(PortalToolboxLanguageParser.T__22);
	                    this.state = 299;
	                    localctx.right = this.expression(7);
	                    break;

	                case 6:
	                    localctx = new BinaryExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, PortalToolboxLanguageParser.RULE_expression);
	                    this.state = 300;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 301;
	                    localctx.op = this.match(PortalToolboxLanguageParser.T__23);
	                    this.state = 302;
	                    localctx.right = this.expression(6);
	                    break;

	                case 7:
	                    localctx = new TernaryExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, PortalToolboxLanguageParser.RULE_expression);
	                    this.state = 303;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 304;
	                    this.match(PortalToolboxLanguageParser.T__24);
	                    this.state = 305;
	                    this.expression(0);
	                    this.state = 306;
	                    this.match(PortalToolboxLanguageParser.T__5);
	                    this.state = 307;
	                    this.expression(4);
	                    break;

	                case 8:
	                    localctx = new CallExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, PortalToolboxLanguageParser.RULE_expression);
	                    this.state = 309;
	                    if (!( this.precpred(this._ctx, 16))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
	                    }
	                    this.state = 310;
	                    this.callArguments();
	                    break;

	                case 9:
	                    localctx = new MemberExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, PortalToolboxLanguageParser.RULE_expression);
	                    this.state = 311;
	                    if (!( this.precpred(this._ctx, 15))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
	                    }
	                    this.state = 312;
	                    this.match(PortalToolboxLanguageParser.T__7);
	                    this.state = 313;
	                    this.identifier();
	                    break;

	                case 10:
	                    localctx = new IndexExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, PortalToolboxLanguageParser.RULE_expression);
	                    this.state = 314;
	                    if (!( this.precpred(this._ctx, 14))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
	                    }
	                    this.state = 315;
	                    this.match(PortalToolboxLanguageParser.T__9);
	                    this.state = 316;
	                    this.expression(0);
	                    this.state = 317;
	                    this.match(PortalToolboxLanguageParser.T__10);
	                    break;

	                case 11:
	                    localctx = new CastExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, PortalToolboxLanguageParser.RULE_expression);
	                    this.state = 319;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 320;
	                    this.match(PortalToolboxLanguageParser.AS);
	                    this.state = 321;
	                    this.typeExpression(0);
	                    break;

	                } 
	            }
	            this.state = 326;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,44,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	callArguments() {
	    let localctx = new CallArgumentsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, PortalToolboxLanguageParser.RULE_callArguments);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 327;
	        this.match(PortalToolboxLanguageParser.T__3);
	        this.state = 336;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PortalToolboxLanguageParser.T__3) | (1 << PortalToolboxLanguageParser.T__9) | (1 << PortalToolboxLanguageParser.T__11) | (1 << PortalToolboxLanguageParser.T__12) | (1 << PortalToolboxLanguageParser.ACTIONS) | (1 << PortalToolboxLanguageParser.ASYNC) | (1 << PortalToolboxLanguageParser.AWAIT) | (1 << PortalToolboxLanguageParser.BY))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (PortalToolboxLanguageParser.BREAK - 32)) | (1 << (PortalToolboxLanguageParser.CONDITIONS - 32)) | (1 << (PortalToolboxLanguageParser.CONDITION - 32)) | (1 << (PortalToolboxLanguageParser.CONTINUE - 32)) | (1 << (PortalToolboxLanguageParser.FROM - 32)) | (1 << (PortalToolboxLanguageParser.GLOBAL - 32)) | (1 << (PortalToolboxLanguageParser.MOD - 32)) | (1 << (PortalToolboxLanguageParser.ON - 32)) | (1 << (PortalToolboxLanguageParser.PLAYER - 32)) | (1 << (PortalToolboxLanguageParser.RULE - 32)) | (1 << (PortalToolboxLanguageParser.SUB - 32)) | (1 << (PortalToolboxLanguageParser.TEAM - 32)) | (1 << (PortalToolboxLanguageParser.TO - 32)) | (1 << (PortalToolboxLanguageParser.VAR - 32)) | (1 << (PortalToolboxLanguageParser.BOOLEAN_LITERAL - 32)) | (1 << (PortalToolboxLanguageParser.NUMBER_LITERAL - 32)) | (1 << (PortalToolboxLanguageParser.STRING_LITERAL - 32)) | (1 << (PortalToolboxLanguageParser.BACKTICK_IDENTIFIER - 32)) | (1 << (PortalToolboxLanguageParser.IDENTIFIER - 32)))) !== 0)) {
	            this.state = 328;
	            this.expression(0);
	            this.state = 333;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===PortalToolboxLanguageParser.T__6) {
	                this.state = 329;
	                this.match(PortalToolboxLanguageParser.T__6);
	                this.state = 330;
	                this.expression(0);
	                this.state = 335;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 338;
	        this.match(PortalToolboxLanguageParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	typeExpression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new TypeExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 30;
	    this.enterRecursionRule(localctx, 30, PortalToolboxLanguageParser.RULE_typeExpression, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 361;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PortalToolboxLanguageParser.ACTIONS:
	        case PortalToolboxLanguageParser.ASYNC:
	        case PortalToolboxLanguageParser.AWAIT:
	        case PortalToolboxLanguageParser.BY:
	        case PortalToolboxLanguageParser.BREAK:
	        case PortalToolboxLanguageParser.CONDITIONS:
	        case PortalToolboxLanguageParser.CONDITION:
	        case PortalToolboxLanguageParser.CONTINUE:
	        case PortalToolboxLanguageParser.FROM:
	        case PortalToolboxLanguageParser.GLOBAL:
	        case PortalToolboxLanguageParser.MOD:
	        case PortalToolboxLanguageParser.ON:
	        case PortalToolboxLanguageParser.PLAYER:
	        case PortalToolboxLanguageParser.RULE:
	        case PortalToolboxLanguageParser.SUB:
	        case PortalToolboxLanguageParser.TEAM:
	        case PortalToolboxLanguageParser.TO:
	        case PortalToolboxLanguageParser.VAR:
	        case PortalToolboxLanguageParser.BACKTICK_IDENTIFIER:
	        case PortalToolboxLanguageParser.IDENTIFIER:
	            localctx = new IdentifierTypeExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 341;
	            this.identifier();
	            break;
	        case PortalToolboxLanguageParser.T__9:
	            localctx = new TupleTypeExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 342;
	            this.match(PortalToolboxLanguageParser.T__9);
	            this.state = 351;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PortalToolboxLanguageParser.T__3) | (1 << PortalToolboxLanguageParser.T__9) | (1 << PortalToolboxLanguageParser.ACTIONS) | (1 << PortalToolboxLanguageParser.ASYNC) | (1 << PortalToolboxLanguageParser.AWAIT) | (1 << PortalToolboxLanguageParser.BY))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (PortalToolboxLanguageParser.BREAK - 32)) | (1 << (PortalToolboxLanguageParser.CONDITIONS - 32)) | (1 << (PortalToolboxLanguageParser.CONDITION - 32)) | (1 << (PortalToolboxLanguageParser.CONTINUE - 32)) | (1 << (PortalToolboxLanguageParser.FROM - 32)) | (1 << (PortalToolboxLanguageParser.GLOBAL - 32)) | (1 << (PortalToolboxLanguageParser.MOD - 32)) | (1 << (PortalToolboxLanguageParser.ON - 32)) | (1 << (PortalToolboxLanguageParser.PLAYER - 32)) | (1 << (PortalToolboxLanguageParser.RULE - 32)) | (1 << (PortalToolboxLanguageParser.SUB - 32)) | (1 << (PortalToolboxLanguageParser.TEAM - 32)) | (1 << (PortalToolboxLanguageParser.TO - 32)) | (1 << (PortalToolboxLanguageParser.VAR - 32)) | (1 << (PortalToolboxLanguageParser.BOOLEAN_LITERAL - 32)) | (1 << (PortalToolboxLanguageParser.NUMBER_LITERAL - 32)) | (1 << (PortalToolboxLanguageParser.STRING_LITERAL - 32)) | (1 << (PortalToolboxLanguageParser.BACKTICK_IDENTIFIER - 32)) | (1 << (PortalToolboxLanguageParser.IDENTIFIER - 32)))) !== 0)) {
	                this.state = 343;
	                this.typeExpression(0);
	                this.state = 348;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===PortalToolboxLanguageParser.T__6) {
	                    this.state = 344;
	                    this.match(PortalToolboxLanguageParser.T__6);
	                    this.state = 345;
	                    this.typeExpression(0);
	                    this.state = 350;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 353;
	            this.match(PortalToolboxLanguageParser.T__10);
	            break;
	        case PortalToolboxLanguageParser.T__3:
	            localctx = new ParenthesisTypeExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 354;
	            this.match(PortalToolboxLanguageParser.T__3);
	            this.state = 355;
	            this.typeExpression(0);
	            this.state = 356;
	            this.match(PortalToolboxLanguageParser.T__4);
	            break;
	        case PortalToolboxLanguageParser.BOOLEAN_LITERAL:
	            localctx = new BooleanTypeExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 358;
	            this.match(PortalToolboxLanguageParser.BOOLEAN_LITERAL);
	            break;
	        case PortalToolboxLanguageParser.NUMBER_LITERAL:
	            localctx = new NumberTypeExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 359;
	            this.match(PortalToolboxLanguageParser.NUMBER_LITERAL);
	            break;
	        case PortalToolboxLanguageParser.STRING_LITERAL:
	            localctx = new StringTypeExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 360;
	            this.match(PortalToolboxLanguageParser.STRING_LITERAL);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 371;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,51,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 369;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,50,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new UnionTypeExpressionContext(this, new TypeExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, PortalToolboxLanguageParser.RULE_typeExpression);
	                    this.state = 363;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 364;
	                    this.match(PortalToolboxLanguageParser.T__25);
	                    this.state = 365;
	                    this.typeExpression(8);
	                    break;

	                case 2:
	                    localctx = new ArrayTypeExpressionContext(this, new TypeExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, PortalToolboxLanguageParser.RULE_typeExpression);
	                    this.state = 366;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 367;
	                    this.match(PortalToolboxLanguageParser.T__9);
	                    this.state = 368;
	                    this.match(PortalToolboxLanguageParser.T__10);
	                    break;

	                } 
	            }
	            this.state = 373;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,51,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, PortalToolboxLanguageParser.RULE_identifier);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 374;
	        _la = this._input.LA(1);
	        if(!(((((_la - 27)) & ~0x1f) == 0 && ((1 << (_la - 27)) & ((1 << (PortalToolboxLanguageParser.ACTIONS - 27)) | (1 << (PortalToolboxLanguageParser.ASYNC - 27)) | (1 << (PortalToolboxLanguageParser.AWAIT - 27)) | (1 << (PortalToolboxLanguageParser.BY - 27)) | (1 << (PortalToolboxLanguageParser.BREAK - 27)) | (1 << (PortalToolboxLanguageParser.CONDITIONS - 27)) | (1 << (PortalToolboxLanguageParser.CONDITION - 27)) | (1 << (PortalToolboxLanguageParser.CONTINUE - 27)) | (1 << (PortalToolboxLanguageParser.FROM - 27)) | (1 << (PortalToolboxLanguageParser.GLOBAL - 27)) | (1 << (PortalToolboxLanguageParser.MOD - 27)) | (1 << (PortalToolboxLanguageParser.ON - 27)) | (1 << (PortalToolboxLanguageParser.PLAYER - 27)) | (1 << (PortalToolboxLanguageParser.RULE - 27)) | (1 << (PortalToolboxLanguageParser.SUB - 27)) | (1 << (PortalToolboxLanguageParser.TEAM - 27)) | (1 << (PortalToolboxLanguageParser.TO - 27)) | (1 << (PortalToolboxLanguageParser.VAR - 27)) | (1 << (PortalToolboxLanguageParser.BACKTICK_IDENTIFIER - 27)) | (1 << (PortalToolboxLanguageParser.IDENTIFIER - 27)))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, PortalToolboxLanguageParser.RULE_literal);
	    var _la = 0; // Token type
	    try {
	        this.state = 394;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PortalToolboxLanguageParser.T__9:
	            localctx = new ArrayLiteralContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 376;
	            this.match(PortalToolboxLanguageParser.T__9);
	            this.state = 388;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PortalToolboxLanguageParser.T__3) | (1 << PortalToolboxLanguageParser.T__9) | (1 << PortalToolboxLanguageParser.T__11) | (1 << PortalToolboxLanguageParser.T__12) | (1 << PortalToolboxLanguageParser.ACTIONS) | (1 << PortalToolboxLanguageParser.ASYNC) | (1 << PortalToolboxLanguageParser.AWAIT) | (1 << PortalToolboxLanguageParser.BY))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (PortalToolboxLanguageParser.BREAK - 32)) | (1 << (PortalToolboxLanguageParser.CONDITIONS - 32)) | (1 << (PortalToolboxLanguageParser.CONDITION - 32)) | (1 << (PortalToolboxLanguageParser.CONTINUE - 32)) | (1 << (PortalToolboxLanguageParser.FROM - 32)) | (1 << (PortalToolboxLanguageParser.GLOBAL - 32)) | (1 << (PortalToolboxLanguageParser.MOD - 32)) | (1 << (PortalToolboxLanguageParser.ON - 32)) | (1 << (PortalToolboxLanguageParser.PLAYER - 32)) | (1 << (PortalToolboxLanguageParser.RULE - 32)) | (1 << (PortalToolboxLanguageParser.SUB - 32)) | (1 << (PortalToolboxLanguageParser.TEAM - 32)) | (1 << (PortalToolboxLanguageParser.TO - 32)) | (1 << (PortalToolboxLanguageParser.VAR - 32)) | (1 << (PortalToolboxLanguageParser.BOOLEAN_LITERAL - 32)) | (1 << (PortalToolboxLanguageParser.NUMBER_LITERAL - 32)) | (1 << (PortalToolboxLanguageParser.STRING_LITERAL - 32)) | (1 << (PortalToolboxLanguageParser.BACKTICK_IDENTIFIER - 32)) | (1 << (PortalToolboxLanguageParser.IDENTIFIER - 32)))) !== 0)) {
	                this.state = 377;
	                this.expression(0);
	                this.state = 382;
	                this._errHandler.sync(this);
	                var _alt = this._interp.adaptivePredict(this._input,52,this._ctx)
	                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                    if(_alt===1) {
	                        this.state = 378;
	                        this.match(PortalToolboxLanguageParser.T__6);
	                        this.state = 379;
	                        this.expression(0); 
	                    }
	                    this.state = 384;
	                    this._errHandler.sync(this);
	                    _alt = this._interp.adaptivePredict(this._input,52,this._ctx);
	                }

	                this.state = 386;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===PortalToolboxLanguageParser.T__6) {
	                    this.state = 385;
	                    this.match(PortalToolboxLanguageParser.T__6);
	                }

	            }

	            this.state = 390;
	            this.match(PortalToolboxLanguageParser.T__10);
	            break;
	        case PortalToolboxLanguageParser.BOOLEAN_LITERAL:
	            localctx = new BooleanLiteralContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 391;
	            this.match(PortalToolboxLanguageParser.BOOLEAN_LITERAL);
	            break;
	        case PortalToolboxLanguageParser.NUMBER_LITERAL:
	            localctx = new NumberLiteralContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 392;
	            this.match(PortalToolboxLanguageParser.NUMBER_LITERAL);
	            break;
	        case PortalToolboxLanguageParser.STRING_LITERAL:
	            localctx = new StringLiteralContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 393;
	            this.match(PortalToolboxLanguageParser.STRING_LITERAL);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

PortalToolboxLanguageParser.EOF = antlr4.Token.EOF;
PortalToolboxLanguageParser.T__0 = 1;
PortalToolboxLanguageParser.T__1 = 2;
PortalToolboxLanguageParser.T__2 = 3;
PortalToolboxLanguageParser.T__3 = 4;
PortalToolboxLanguageParser.T__4 = 5;
PortalToolboxLanguageParser.T__5 = 6;
PortalToolboxLanguageParser.T__6 = 7;
PortalToolboxLanguageParser.T__7 = 8;
PortalToolboxLanguageParser.T__8 = 9;
PortalToolboxLanguageParser.T__9 = 10;
PortalToolboxLanguageParser.T__10 = 11;
PortalToolboxLanguageParser.T__11 = 12;
PortalToolboxLanguageParser.T__12 = 13;
PortalToolboxLanguageParser.T__13 = 14;
PortalToolboxLanguageParser.T__14 = 15;
PortalToolboxLanguageParser.T__15 = 16;
PortalToolboxLanguageParser.T__16 = 17;
PortalToolboxLanguageParser.T__17 = 18;
PortalToolboxLanguageParser.T__18 = 19;
PortalToolboxLanguageParser.T__19 = 20;
PortalToolboxLanguageParser.T__20 = 21;
PortalToolboxLanguageParser.T__21 = 22;
PortalToolboxLanguageParser.T__22 = 23;
PortalToolboxLanguageParser.T__23 = 24;
PortalToolboxLanguageParser.T__24 = 25;
PortalToolboxLanguageParser.T__25 = 26;
PortalToolboxLanguageParser.ACTIONS = 27;
PortalToolboxLanguageParser.AS = 28;
PortalToolboxLanguageParser.ASYNC = 29;
PortalToolboxLanguageParser.AWAIT = 30;
PortalToolboxLanguageParser.BY = 31;
PortalToolboxLanguageParser.BREAK = 32;
PortalToolboxLanguageParser.CONDITIONS = 33;
PortalToolboxLanguageParser.CONDITION = 34;
PortalToolboxLanguageParser.CONTINUE = 35;
PortalToolboxLanguageParser.ELSE = 36;
PortalToolboxLanguageParser.FOR = 37;
PortalToolboxLanguageParser.FROM = 38;
PortalToolboxLanguageParser.GLOBAL = 39;
PortalToolboxLanguageParser.IF = 40;
PortalToolboxLanguageParser.MOD = 41;
PortalToolboxLanguageParser.ON = 42;
PortalToolboxLanguageParser.PLAYER = 43;
PortalToolboxLanguageParser.RETURN = 44;
PortalToolboxLanguageParser.RULE = 45;
PortalToolboxLanguageParser.SUB = 46;
PortalToolboxLanguageParser.TEAM = 47;
PortalToolboxLanguageParser.TO = 48;
PortalToolboxLanguageParser.VAR = 49;
PortalToolboxLanguageParser.WHILE = 50;
PortalToolboxLanguageParser.BOOLEAN_LITERAL = 51;
PortalToolboxLanguageParser.NUMBER_LITERAL = 52;
PortalToolboxLanguageParser.STRING_LITERAL = 53;
PortalToolboxLanguageParser.BACKTICK_IDENTIFIER = 54;
PortalToolboxLanguageParser.IDENTIFIER = 55;
PortalToolboxLanguageParser.MULTILINE_COMMENT = 56;
PortalToolboxLanguageParser.COMMENT = 57;
PortalToolboxLanguageParser.WS = 58;
PortalToolboxLanguageParser.UNKNWON = 59;

PortalToolboxLanguageParser.RULE_code = 0;
PortalToolboxLanguageParser.RULE_modDefinition = 1;
PortalToolboxLanguageParser.RULE_ruleDefinition = 2;
PortalToolboxLanguageParser.RULE_subroutineDefinition = 3;
PortalToolboxLanguageParser.RULE_argumentsDeclaration = 4;
PortalToolboxLanguageParser.RULE_argumentDeclaration = 5;
PortalToolboxLanguageParser.RULE_body = 6;
PortalToolboxLanguageParser.RULE_bodyConditions = 7;
PortalToolboxLanguageParser.RULE_bodyCondition = 8;
PortalToolboxLanguageParser.RULE_bodyActions = 9;
PortalToolboxLanguageParser.RULE_statement = 10;
PortalToolboxLanguageParser.RULE_variableDeclaration = 11;
PortalToolboxLanguageParser.RULE_variableDeclarationWithoutSpecifier = 12;
PortalToolboxLanguageParser.RULE_expression = 13;
PortalToolboxLanguageParser.RULE_callArguments = 14;
PortalToolboxLanguageParser.RULE_typeExpression = 15;
PortalToolboxLanguageParser.RULE_identifier = 16;
PortalToolboxLanguageParser.RULE_literal = 17;

class CodeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PortalToolboxLanguageParser.RULE_code;
    }

	EOF() {
	    return this.getToken(PortalToolboxLanguageParser.EOF, 0);
	};

	variableDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VariableDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(VariableDeclarationContext,i);
	    }
	};

	subroutineDefinition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SubroutineDefinitionContext);
	    } else {
	        return this.getTypedRuleContext(SubroutineDefinitionContext,i);
	    }
	};

	ruleDefinition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RuleDefinitionContext);
	    } else {
	        return this.getTypedRuleContext(RuleDefinitionContext,i);
	    }
	};

	modDefinition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ModDefinitionContext);
	    } else {
	        return this.getTypedRuleContext(ModDefinitionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterCode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitCode(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitCode(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ModDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PortalToolboxLanguageParser.RULE_modDefinition;
        this.modIdentifier = null; // IdentifierContext
        this._identifier = null; // IdentifierContext
        this.ruleIdentifier = []; // of IdentifierContexts
    }

	MOD() {
	    return this.getToken(PortalToolboxLanguageParser.MOD, 0);
	};

	ruleDefinition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RuleDefinitionContext);
	    } else {
	        return this.getTypedRuleContext(RuleDefinitionContext,i);
	    }
	};

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterModDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitModDefinition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitModDefinition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RuleDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PortalToolboxLanguageParser.RULE_ruleDefinition;
        this.ruleIdentifier = null; // IdentifierContext
        this.event = null; // IdentifierContext
        this.eventArgument = null; // IdentifierContext
    }

	RULE() {
	    return this.getToken(PortalToolboxLanguageParser.RULE, 0);
	};

	ON() {
	    return this.getToken(PortalToolboxLanguageParser.ON, 0);
	};

	body() {
	    return this.getTypedRuleContext(BodyContext,0);
	};

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	MOD() {
	    return this.getToken(PortalToolboxLanguageParser.MOD, 0);
	};

	ASYNC() {
	    return this.getToken(PortalToolboxLanguageParser.ASYNC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterRuleDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitRuleDefinition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitRuleDefinition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SubroutineDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PortalToolboxLanguageParser.RULE_subroutineDefinition;
    }

	SUB() {
	    return this.getToken(PortalToolboxLanguageParser.SUB, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	body() {
	    return this.getTypedRuleContext(BodyContext,0);
	};

	ASYNC() {
	    return this.getToken(PortalToolboxLanguageParser.ASYNC, 0);
	};

	argumentsDeclaration() {
	    return this.getTypedRuleContext(ArgumentsDeclarationContext,0);
	};

	typeExpression() {
	    return this.getTypedRuleContext(TypeExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterSubroutineDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitSubroutineDefinition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitSubroutineDefinition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentsDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PortalToolboxLanguageParser.RULE_argumentsDeclaration;
    }

	argumentDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArgumentDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(ArgumentDeclarationContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterArgumentsDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitArgumentsDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitArgumentsDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PortalToolboxLanguageParser.RULE_argumentDeclaration;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	typeExpression() {
	    return this.getTypedRuleContext(TypeExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterArgumentDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitArgumentDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitArgumentDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PortalToolboxLanguageParser.RULE_body;
    }

	bodyConditions = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BodyConditionsContext);
	    } else {
	        return this.getTypedRuleContext(BodyConditionsContext,i);
	    }
	};

	bodyCondition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BodyConditionContext);
	    } else {
	        return this.getTypedRuleContext(BodyConditionContext,i);
	    }
	};

	bodyActions = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BodyActionsContext);
	    } else {
	        return this.getTypedRuleContext(BodyActionsContext,i);
	    }
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitBody(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitBody(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BodyConditionsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PortalToolboxLanguageParser.RULE_bodyConditions;
    }

	CONDITIONS() {
	    return this.getToken(PortalToolboxLanguageParser.CONDITIONS, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterBodyConditions(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitBodyConditions(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitBodyConditions(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BodyConditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PortalToolboxLanguageParser.RULE_bodyCondition;
    }

	CONDITION() {
	    return this.getToken(PortalToolboxLanguageParser.CONDITION, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterBodyCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitBodyCondition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitBodyCondition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BodyActionsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PortalToolboxLanguageParser.RULE_bodyActions;
    }

	ACTIONS() {
	    return this.getToken(PortalToolboxLanguageParser.ACTIONS, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterBodyActions(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitBodyActions(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitBodyActions(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PortalToolboxLanguageParser.RULE_statement;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class BreakStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	BREAK() {
	    return this.getToken(PortalToolboxLanguageParser.BREAK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterBreakStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitBreakStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitBreakStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PortalToolboxLanguageParser.BreakStatementContext = BreakStatementContext;

class IfStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        this.ifTrue = null; // StatementContext;
        this.ifFalse = null; // StatementContext;
        super.copyFrom(ctx);
    }

	IF() {
	    return this.getToken(PortalToolboxLanguageParser.IF, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	ELSE() {
	    return this.getToken(PortalToolboxLanguageParser.ELSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterIfStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitIfStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitIfStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PortalToolboxLanguageParser.IfStatementContext = IfStatementContext;

class ExpressionStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterExpressionStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitExpressionStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitExpressionStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PortalToolboxLanguageParser.ExpressionStatementContext = ExpressionStatementContext;

class ReturnStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	RETURN() {
	    return this.getToken(PortalToolboxLanguageParser.RETURN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterReturnStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitReturnStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitReturnStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PortalToolboxLanguageParser.ReturnStatementContext = ReturnStatementContext;

class IdentifierAssignmentStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterIdentifierAssignmentStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitIdentifierAssignmentStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitIdentifierAssignmentStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PortalToolboxLanguageParser.IdentifierAssignmentStatementContext = IdentifierAssignmentStatementContext;

class VariableDeclarationStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	variableDeclaration() {
	    return this.getTypedRuleContext(VariableDeclarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterVariableDeclarationStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitVariableDeclarationStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitVariableDeclarationStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PortalToolboxLanguageParser.VariableDeclarationStatementContext = VariableDeclarationStatementContext;

class BlockStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterBlockStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitBlockStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitBlockStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PortalToolboxLanguageParser.BlockStatementContext = BlockStatementContext;

class WhileStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	WHILE() {
	    return this.getToken(PortalToolboxLanguageParser.WHILE, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterWhileStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitWhileStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitWhileStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PortalToolboxLanguageParser.WhileStatementContext = WhileStatementContext;

class IndexAssignmentStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterIndexAssignmentStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitIndexAssignmentStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitIndexAssignmentStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PortalToolboxLanguageParser.IndexAssignmentStatementContext = IndexAssignmentStatementContext;

class ForStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        this.from = null; // ExpressionContext;
        this.to = null; // ExpressionContext;
        this.by = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	FOR() {
	    return this.getToken(PortalToolboxLanguageParser.FOR, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	TO() {
	    return this.getToken(PortalToolboxLanguageParser.TO, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	VAR() {
	    return this.getToken(PortalToolboxLanguageParser.VAR, 0);
	};

	FROM() {
	    return this.getToken(PortalToolboxLanguageParser.FROM, 0);
	};

	BY() {
	    return this.getToken(PortalToolboxLanguageParser.BY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterForStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitForStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitForStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PortalToolboxLanguageParser.ForStatementContext = ForStatementContext;

class ContinueStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	CONTINUE() {
	    return this.getToken(PortalToolboxLanguageParser.CONTINUE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterContinueStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitContinueStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitContinueStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PortalToolboxLanguageParser.ContinueStatementContext = ContinueStatementContext;

class MemberAssignmentStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterMemberAssignmentStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitMemberAssignmentStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitMemberAssignmentStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PortalToolboxLanguageParser.MemberAssignmentStatementContext = MemberAssignmentStatementContext;

class VariableDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PortalToolboxLanguageParser.RULE_variableDeclaration;
        this.specifier = null; // Token
    }

	VAR() {
	    return this.getToken(PortalToolboxLanguageParser.VAR, 0);
	};

	GLOBAL() {
	    return this.getToken(PortalToolboxLanguageParser.GLOBAL, 0);
	};

	PLAYER() {
	    return this.getToken(PortalToolboxLanguageParser.PLAYER, 0);
	};

	TEAM() {
	    return this.getToken(PortalToolboxLanguageParser.TEAM, 0);
	};

	variableDeclarationWithoutSpecifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VariableDeclarationWithoutSpecifierContext);
	    } else {
	        return this.getTypedRuleContext(VariableDeclarationWithoutSpecifierContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterVariableDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitVariableDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitVariableDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableDeclarationWithoutSpecifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PortalToolboxLanguageParser.RULE_variableDeclarationWithoutSpecifier;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	typeExpression() {
	    return this.getTypedRuleContext(TypeExpressionContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterVariableDeclarationWithoutSpecifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitVariableDeclarationWithoutSpecifier(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitVariableDeclarationWithoutSpecifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PortalToolboxLanguageParser.RULE_expression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class AwaitExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	AWAIT() {
	    return this.getToken(PortalToolboxLanguageParser.AWAIT, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterAwaitExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitAwaitExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitAwaitExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PortalToolboxLanguageParser.AwaitExpressionContext = AwaitExpressionContext;

class TernaryExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterTernaryExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitTernaryExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitTernaryExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PortalToolboxLanguageParser.TernaryExpressionContext = TernaryExpressionContext;

class MemberExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterMemberExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitMemberExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitMemberExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PortalToolboxLanguageParser.MemberExpressionContext = MemberExpressionContext;

class BinaryExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // ExpressionContext;
        this.op = null; // Token;
        this.right = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterBinaryExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitBinaryExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitBinaryExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PortalToolboxLanguageParser.BinaryExpressionContext = BinaryExpressionContext;

class ParenthesisExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterParenthesisExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitParenthesisExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitParenthesisExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PortalToolboxLanguageParser.ParenthesisExpressionContext = ParenthesisExpressionContext;

class LiteralExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterLiteralExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitLiteralExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitLiteralExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PortalToolboxLanguageParser.LiteralExpressionContext = LiteralExpressionContext;

class IndexExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterIndexExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitIndexExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitIndexExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PortalToolboxLanguageParser.IndexExpressionContext = IndexExpressionContext;

class UnaryExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null; // Token;
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterUnaryExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitUnaryExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitUnaryExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PortalToolboxLanguageParser.UnaryExpressionContext = UnaryExpressionContext;

class CastExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	AS() {
	    return this.getToken(PortalToolboxLanguageParser.AS, 0);
	};

	typeExpression() {
	    return this.getTypedRuleContext(TypeExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterCastExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitCastExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitCastExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PortalToolboxLanguageParser.CastExpressionContext = CastExpressionContext;

class CallExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	callArguments() {
	    return this.getTypedRuleContext(CallArgumentsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterCallExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitCallExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitCallExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PortalToolboxLanguageParser.CallExpressionContext = CallExpressionContext;

class IdentifierExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterIdentifierExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitIdentifierExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitIdentifierExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PortalToolboxLanguageParser.IdentifierExpressionContext = IdentifierExpressionContext;

class CallArgumentsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PortalToolboxLanguageParser.RULE_callArguments;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterCallArguments(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitCallArguments(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitCallArguments(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TypeExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PortalToolboxLanguageParser.RULE_typeExpression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class NumberTypeExpressionContext extends TypeExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMBER_LITERAL() {
	    return this.getToken(PortalToolboxLanguageParser.NUMBER_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterNumberTypeExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitNumberTypeExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitNumberTypeExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PortalToolboxLanguageParser.NumberTypeExpressionContext = NumberTypeExpressionContext;

class BooleanTypeExpressionContext extends TypeExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	BOOLEAN_LITERAL() {
	    return this.getToken(PortalToolboxLanguageParser.BOOLEAN_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterBooleanTypeExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitBooleanTypeExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitBooleanTypeExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PortalToolboxLanguageParser.BooleanTypeExpressionContext = BooleanTypeExpressionContext;

class ArrayTypeExpressionContext extends TypeExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	typeExpression() {
	    return this.getTypedRuleContext(TypeExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterArrayTypeExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitArrayTypeExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitArrayTypeExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PortalToolboxLanguageParser.ArrayTypeExpressionContext = ArrayTypeExpressionContext;

class UnionTypeExpressionContext extends TypeExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	typeExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypeExpressionContext);
	    } else {
	        return this.getTypedRuleContext(TypeExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterUnionTypeExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitUnionTypeExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitUnionTypeExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PortalToolboxLanguageParser.UnionTypeExpressionContext = UnionTypeExpressionContext;

class StringTypeExpressionContext extends TypeExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	STRING_LITERAL() {
	    return this.getToken(PortalToolboxLanguageParser.STRING_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterStringTypeExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitStringTypeExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitStringTypeExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PortalToolboxLanguageParser.StringTypeExpressionContext = StringTypeExpressionContext;

class IdentifierTypeExpressionContext extends TypeExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterIdentifierTypeExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitIdentifierTypeExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitIdentifierTypeExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PortalToolboxLanguageParser.IdentifierTypeExpressionContext = IdentifierTypeExpressionContext;

class ParenthesisTypeExpressionContext extends TypeExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	typeExpression() {
	    return this.getTypedRuleContext(TypeExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterParenthesisTypeExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitParenthesisTypeExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitParenthesisTypeExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PortalToolboxLanguageParser.ParenthesisTypeExpressionContext = ParenthesisTypeExpressionContext;

class TupleTypeExpressionContext extends TypeExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	typeExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypeExpressionContext);
	    } else {
	        return this.getTypedRuleContext(TypeExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterTupleTypeExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitTupleTypeExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitTupleTypeExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PortalToolboxLanguageParser.TupleTypeExpressionContext = TupleTypeExpressionContext;

class IdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PortalToolboxLanguageParser.RULE_identifier;
    }

	IDENTIFIER() {
	    return this.getToken(PortalToolboxLanguageParser.IDENTIFIER, 0);
	};

	BACKTICK_IDENTIFIER() {
	    return this.getToken(PortalToolboxLanguageParser.BACKTICK_IDENTIFIER, 0);
	};

	ACTIONS() {
	    return this.getToken(PortalToolboxLanguageParser.ACTIONS, 0);
	};

	ASYNC() {
	    return this.getToken(PortalToolboxLanguageParser.ASYNC, 0);
	};

	AWAIT() {
	    return this.getToken(PortalToolboxLanguageParser.AWAIT, 0);
	};

	BY() {
	    return this.getToken(PortalToolboxLanguageParser.BY, 0);
	};

	BREAK() {
	    return this.getToken(PortalToolboxLanguageParser.BREAK, 0);
	};

	CONDITIONS() {
	    return this.getToken(PortalToolboxLanguageParser.CONDITIONS, 0);
	};

	CONDITION() {
	    return this.getToken(PortalToolboxLanguageParser.CONDITION, 0);
	};

	CONTINUE() {
	    return this.getToken(PortalToolboxLanguageParser.CONTINUE, 0);
	};

	FROM() {
	    return this.getToken(PortalToolboxLanguageParser.FROM, 0);
	};

	GLOBAL() {
	    return this.getToken(PortalToolboxLanguageParser.GLOBAL, 0);
	};

	MOD() {
	    return this.getToken(PortalToolboxLanguageParser.MOD, 0);
	};

	ON() {
	    return this.getToken(PortalToolboxLanguageParser.ON, 0);
	};

	PLAYER() {
	    return this.getToken(PortalToolboxLanguageParser.PLAYER, 0);
	};

	RULE() {
	    return this.getToken(PortalToolboxLanguageParser.RULE, 0);
	};

	SUB() {
	    return this.getToken(PortalToolboxLanguageParser.SUB, 0);
	};

	TEAM() {
	    return this.getToken(PortalToolboxLanguageParser.TEAM, 0);
	};

	TO() {
	    return this.getToken(PortalToolboxLanguageParser.TO, 0);
	};

	VAR() {
	    return this.getToken(PortalToolboxLanguageParser.VAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitIdentifier(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitIdentifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PortalToolboxLanguageParser.RULE_literal;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class StringLiteralContext extends LiteralContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	STRING_LITERAL() {
	    return this.getToken(PortalToolboxLanguageParser.STRING_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterStringLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitStringLiteral(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitStringLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PortalToolboxLanguageParser.StringLiteralContext = StringLiteralContext;

class BooleanLiteralContext extends LiteralContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	BOOLEAN_LITERAL() {
	    return this.getToken(PortalToolboxLanguageParser.BOOLEAN_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterBooleanLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitBooleanLiteral(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitBooleanLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PortalToolboxLanguageParser.BooleanLiteralContext = BooleanLiteralContext;

class ArrayLiteralContext extends LiteralContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterArrayLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitArrayLiteral(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitArrayLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PortalToolboxLanguageParser.ArrayLiteralContext = ArrayLiteralContext;

class NumberLiteralContext extends LiteralContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMBER_LITERAL() {
	    return this.getToken(PortalToolboxLanguageParser.NUMBER_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.enterNumberLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PortalToolboxLanguageListener ) {
	        listener.exitNumberLiteral(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PortalToolboxLanguageVisitor ) {
	        return visitor.visitNumberLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PortalToolboxLanguageParser.NumberLiteralContext = NumberLiteralContext;


PortalToolboxLanguageParser.CodeContext = CodeContext; 
PortalToolboxLanguageParser.ModDefinitionContext = ModDefinitionContext; 
PortalToolboxLanguageParser.RuleDefinitionContext = RuleDefinitionContext; 
PortalToolboxLanguageParser.SubroutineDefinitionContext = SubroutineDefinitionContext; 
PortalToolboxLanguageParser.ArgumentsDeclarationContext = ArgumentsDeclarationContext; 
PortalToolboxLanguageParser.ArgumentDeclarationContext = ArgumentDeclarationContext; 
PortalToolboxLanguageParser.BodyContext = BodyContext; 
PortalToolboxLanguageParser.BodyConditionsContext = BodyConditionsContext; 
PortalToolboxLanguageParser.BodyConditionContext = BodyConditionContext; 
PortalToolboxLanguageParser.BodyActionsContext = BodyActionsContext; 
PortalToolboxLanguageParser.StatementContext = StatementContext; 
PortalToolboxLanguageParser.VariableDeclarationContext = VariableDeclarationContext; 
PortalToolboxLanguageParser.VariableDeclarationWithoutSpecifierContext = VariableDeclarationWithoutSpecifierContext; 
PortalToolboxLanguageParser.ExpressionContext = ExpressionContext; 
PortalToolboxLanguageParser.CallArgumentsContext = CallArgumentsContext; 
PortalToolboxLanguageParser.TypeExpressionContext = TypeExpressionContext; 
PortalToolboxLanguageParser.IdentifierContext = IdentifierContext; 
PortalToolboxLanguageParser.LiteralContext = LiteralContext; 
