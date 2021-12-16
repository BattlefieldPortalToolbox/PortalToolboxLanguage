// Generated from PortalToolboxLanguage.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';
import PortalToolboxLanguageListener from './PortalToolboxLanguageListener.js';
import PortalToolboxLanguageVisitor from './PortalToolboxLanguageVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003=\u018f\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0007\u0002+\n\u0002\f\u0002\u000e",
    "\u0002.\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0005\u00034\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003",
    "9\n\u0003\u0003\u0003\u0007\u0003<\n\u0003\f\u0003\u000e\u0003?\u000b",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0005\u0004D\n\u0004\u0003",
    "\u0004\u0005\u0004G\n\u0004\u0003\u0004\u0003\u0004\u0005\u0004K\n\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0005\u0004S\n\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0005\u0005",
    "X\n\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005]\n\u0005\u0003",
    "\u0005\u0003\u0005\u0005\u0005a\n\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006i\n\u0006\f\u0006",
    "\u000e\u0006l\u000b\u0006\u0005\u0006n\n\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007u\n\u0007\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0007\b{\n\b\f\b\u000e\b~\u000b\b\u0003\b\u0007\b",
    "\u0081\n\b\f\b\u000e\b\u0084\u000b\b\u0003\b\u0003\b\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0005\t\u008c\n\t\u0007\t\u008e\n\t\f\t\u000e\t\u0091",
    "\u000b\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0005\n\u0098\n\n\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0007\u000b\u009d\n\u000b\f\u000b\u000e",
    "\u000b\u00a0\u000b\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f\u00ac\n\f\u0003\f",
    "\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005",
    "\f\u00b7\n\f\u0003\f\u0003\f\u0003\f\u0005\f\u00bc\n\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0005\f\u00c2\n\f\u0003\f\u0003\f\u0003\f\u0003\f",
    "\u0003\f\u0005\f\u00c9\n\f\u0003\f\u0005\f\u00cc\n\f\u0003\f\u0003\f",
    "\u0005\f\u00d0\n\f\u0003\f\u0003\f\u0005\f\u00d4\n\f\u0003\f\u0003\f",
    "\u0007\f\u00d8\n\f\f\f\u000e\f\u00db\u000b\f\u0003\f\u0003\f\u0003\f",
    "\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f\u00e4\n\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f\u00ed\n\f\u0003\f\u0003\f",
    "\u0003\f\u0003\f\u0005\f\u00f3\n\f\u0003\f\u0003\f\u0005\f\u00f7\n\f",
    "\u0005\f\u00f9\n\f\u0003\r\u0003\r\u0003\r\u0007\r\u00fe\n\r\f\r\u000e",
    "\r\u0101\u000b\r\u0003\r\u0003\r\u0005\r\u0105\n\r\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0005\u000e\u010a\n\u000e\u0003\u000e\u0003\u000e",
    "\u0005\u000e\u010e\n\u000e\u0003\u000e\u0005\u000e\u0111\n\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u011e",
    "\n\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0007\u000f\u0145\n\u000f\f\u000f\u000e\u000f",
    "\u0148\u000b\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0007",
    "\u0010\u014e\n\u0010\f\u0010\u000e\u0010\u0151\u000b\u0010\u0005\u0010",
    "\u0153\n\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0007\u0011\u015d\n\u0011",
    "\f\u0011\u000e\u0011\u0160\u000b\u0011\u0005\u0011\u0162\n\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0005\u0011\u016c\n\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0007\u0011\u0174\n",
    "\u0011\f\u0011\u000e\u0011\u0177\u000b\u0011\u0003\u0012\u0003\u0012",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0007\u0013\u017f\n",
    "\u0013\f\u0013\u000e\u0013\u0182\u000b\u0013\u0003\u0013\u0005\u0013",
    "\u0185\n\u0013\u0005\u0013\u0187\n\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0005\u0013\u018d\n\u0013\u0003\u0013\u0002\u0004",
    "\u001c \u0014\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016",
    "\u0018\u001a\u001c\u001e \"$\u0002\t\u0006\u0002))--1133\u0003\u0002",
    "\u000e\u000f\u0003\u0002\u0011\u0012\u0004\u0002\u000f\u000f\u0013\u0013",
    "\u0003\u0002\u0014\u0017\u0003\u0002\u0018\u0019\u0007\u0002\u001e%",
    "()+-/389\u0002\u01d3\u0002,\u0003\u0002\u0002\u0002\u00041\u0003\u0002",
    "\u0002\u0002\u0006C\u0003\u0002\u0002\u0002\bW\u0003\u0002\u0002\u0002",
    "\nd\u0003\u0002\u0002\u0002\fq\u0003\u0002\u0002\u0002\u000ev\u0003",
    "\u0002\u0002\u0002\u0010\u0087\u0003\u0002\u0002\u0002\u0012\u0094\u0003",
    "\u0002\u0002\u0002\u0014\u0099\u0003\u0002\u0002\u0002\u0016\u00f8\u0003",
    "\u0002\u0002\u0002\u0018\u00fa\u0003\u0002\u0002\u0002\u001a\u0106\u0003",
    "\u0002\u0002\u0002\u001c\u011d\u0003\u0002\u0002\u0002\u001e\u0149\u0003",
    "\u0002\u0002\u0002 \u016b\u0003\u0002\u0002\u0002\"\u0178\u0003\u0002",
    "\u0002\u0002$\u018c\u0003\u0002\u0002\u0002&+\u0005\u0018\r\u0002\'",
    "+\u0005\b\u0005\u0002(+\u0005\u0006\u0004\u0002)+\u0005\u0004\u0003",
    "\u0002*&\u0003\u0002\u0002\u0002*\'\u0003\u0002\u0002\u0002*(\u0003",
    "\u0002\u0002\u0002*)\u0003\u0002\u0002\u0002+.\u0003\u0002\u0002\u0002",
    ",*\u0003\u0002\u0002\u0002,-\u0003\u0002\u0002\u0002-/\u0003\u0002\u0002",
    "\u0002.,\u0003\u0002\u0002\u0002/0\u0007\u0002\u0002\u00030\u0003\u0003",
    "\u0002\u0002\u000213\u0007+\u0002\u000224\u0005\"\u0012\u000232\u0003",
    "\u0002\u0002\u000234\u0003\u0002\u0002\u000245\u0003\u0002\u0002\u0002",
    "5=\u0007\u0003\u0002\u000268\u0005\"\u0012\u000279\u0007\u0004\u0002",
    "\u000287\u0003\u0002\u0002\u000289\u0003\u0002\u0002\u00029<\u0003\u0002",
    "\u0002\u0002:<\u0005\u0006\u0004\u0002;6\u0003\u0002\u0002\u0002;:\u0003",
    "\u0002\u0002\u0002<?\u0003\u0002\u0002\u0002=;\u0003\u0002\u0002\u0002",
    "=>\u0003\u0002\u0002\u0002>@\u0003\u0002\u0002\u0002?=\u0003\u0002\u0002",
    "\u0002@A\u0007\u0005\u0002\u0002A\u0005\u0003\u0002\u0002\u0002BD\u0007",
    "+\u0002\u0002CB\u0003\u0002\u0002\u0002CD\u0003\u0002\u0002\u0002DF",
    "\u0003\u0002\u0002\u0002EG\u0007\u001f\u0002\u0002FE\u0003\u0002\u0002",
    "\u0002FG\u0003\u0002\u0002\u0002GH\u0003\u0002\u0002\u0002HJ\u0007/",
    "\u0002\u0002IK\u0005\"\u0012\u0002JI\u0003\u0002\u0002\u0002JK\u0003",
    "\u0002\u0002\u0002KL\u0003\u0002\u0002\u0002LM\u0007,\u0002\u0002MR",
    "\u0005\"\u0012\u0002NO\u0007\u0006\u0002\u0002OP\u0005\"\u0012\u0002",
    "PQ\u0007\u0007\u0002\u0002QS\u0003\u0002\u0002\u0002RN\u0003\u0002\u0002",
    "\u0002RS\u0003\u0002\u0002\u0002ST\u0003\u0002\u0002\u0002TU\u0005\u000e",
    "\b\u0002U\u0007\u0003\u0002\u0002\u0002VX\u0007\u001f\u0002\u0002WV",
    "\u0003\u0002\u0002\u0002WX\u0003\u0002\u0002\u0002XY\u0003\u0002\u0002",
    "\u0002YZ\u00070\u0002\u0002Z\\\u0005\"\u0012\u0002[]\u0005\n\u0006\u0002",
    "\\[\u0003\u0002\u0002\u0002\\]\u0003\u0002\u0002\u0002]`\u0003\u0002",
    "\u0002\u0002^_\u0007\b\u0002\u0002_a\u0005 \u0011\u0002`^\u0003\u0002",
    "\u0002\u0002`a\u0003\u0002\u0002\u0002ab\u0003\u0002\u0002\u0002bc\u0005",
    "\u000e\b\u0002c\t\u0003\u0002\u0002\u0002dm\u0007\u0006\u0002\u0002",
    "ej\u0005\f\u0007\u0002fg\u0007\t\u0002\u0002gi\u0005\f\u0007\u0002h",
    "f\u0003\u0002\u0002\u0002il\u0003\u0002\u0002\u0002jh\u0003\u0002\u0002",
    "\u0002jk\u0003\u0002\u0002\u0002kn\u0003\u0002\u0002\u0002lj\u0003\u0002",
    "\u0002\u0002me\u0003\u0002\u0002\u0002mn\u0003\u0002\u0002\u0002no\u0003",
    "\u0002\u0002\u0002op\u0007\u0007\u0002\u0002p\u000b\u0003\u0002\u0002",
    "\u0002qt\u0005\"\u0012\u0002rs\u0007\b\u0002\u0002su\u0005 \u0011\u0002",
    "tr\u0003\u0002\u0002\u0002tu\u0003\u0002\u0002\u0002u\r\u0003\u0002",
    "\u0002\u0002v|\u0007\u0003\u0002\u0002w{\u0005\u0010\t\u0002x{\u0005",
    "\u0012\n\u0002y{\u0005\u0014\u000b\u0002zw\u0003\u0002\u0002\u0002z",
    "x\u0003\u0002\u0002\u0002zy\u0003\u0002\u0002\u0002{~\u0003\u0002\u0002",
    "\u0002|z\u0003\u0002\u0002\u0002|}\u0003\u0002\u0002\u0002}\u0082\u0003",
    "\u0002\u0002\u0002~|\u0003\u0002\u0002\u0002\u007f\u0081\u0005\u0016",
    "\f\u0002\u0080\u007f\u0003\u0002\u0002\u0002\u0081\u0084\u0003\u0002",
    "\u0002\u0002\u0082\u0080\u0003\u0002\u0002\u0002\u0082\u0083\u0003\u0002",
    "\u0002\u0002\u0083\u0085\u0003\u0002\u0002\u0002\u0084\u0082\u0003\u0002",
    "\u0002\u0002\u0085\u0086\u0007\u0005\u0002\u0002\u0086\u000f\u0003\u0002",
    "\u0002\u0002\u0087\u0088\u0007#\u0002\u0002\u0088\u008f\u0007\u0003",
    "\u0002\u0002\u0089\u008b\u0005\u001c\u000f\u0002\u008a\u008c\u0007\u0004",
    "\u0002\u0002\u008b\u008a\u0003\u0002\u0002\u0002\u008b\u008c\u0003\u0002",
    "\u0002\u0002\u008c\u008e\u0003\u0002\u0002\u0002\u008d\u0089\u0003\u0002",
    "\u0002\u0002\u008e\u0091\u0003\u0002\u0002\u0002\u008f\u008d\u0003\u0002",
    "\u0002\u0002\u008f\u0090\u0003\u0002\u0002\u0002\u0090\u0092\u0003\u0002",
    "\u0002\u0002\u0091\u008f\u0003\u0002\u0002\u0002\u0092\u0093\u0007\u0005",
    "\u0002\u0002\u0093\u0011\u0003\u0002\u0002\u0002\u0094\u0095\u0007$",
    "\u0002\u0002\u0095\u0097\u0005\u001c\u000f\u0002\u0096\u0098\u0007\u0004",
    "\u0002\u0002\u0097\u0096\u0003\u0002\u0002\u0002\u0097\u0098\u0003\u0002",
    "\u0002\u0002\u0098\u0013\u0003\u0002\u0002\u0002\u0099\u009a\u0007\u001e",
    "\u0002\u0002\u009a\u009e\u0007\u0003\u0002\u0002\u009b\u009d\u0005\u0016",
    "\f\u0002\u009c\u009b\u0003\u0002\u0002\u0002\u009d\u00a0\u0003\u0002",
    "\u0002\u0002\u009e\u009c\u0003\u0002\u0002\u0002\u009e\u009f\u0003\u0002",
    "\u0002\u0002\u009f\u00a1\u0003\u0002\u0002\u0002\u00a0\u009e\u0003\u0002",
    "\u0002\u0002\u00a1\u00a2\u0007\u0005\u0002\u0002\u00a2\u0015\u0003\u0002",
    "\u0002\u0002\u00a3\u00f9\u0005\u0018\r\u0002\u00a4\u00a5\u0007*\u0002",
    "\u0002\u00a5\u00a6\u0007\u0006\u0002\u0002\u00a6\u00a7\u0005\u001c\u000f",
    "\u0002\u00a7\u00a8\u0007\u0007\u0002\u0002\u00a8\u00ab\u0005\u0016\f",
    "\u0002\u00a9\u00aa\u0007&\u0002\u0002\u00aa\u00ac\u0005\u0016\f\u0002",
    "\u00ab\u00a9\u0003\u0002\u0002\u0002\u00ab\u00ac\u0003\u0002\u0002\u0002",
    "\u00ac\u00f9\u0003\u0002\u0002\u0002\u00ad\u00ae\u00074\u0002\u0002",
    "\u00ae\u00af\u0007\u0006\u0002\u0002\u00af\u00b0\u0005\u001c\u000f\u0002",
    "\u00b0\u00b1\u0007\u0007\u0002\u0002\u00b1\u00b2\u0005\u0016\f\u0002",
    "\u00b2\u00f9\u0003\u0002\u0002\u0002\u00b3\u00b4\u0007\'\u0002\u0002",
    "\u00b4\u00b6\u0007\u0006\u0002\u0002\u00b5\u00b7\u00073\u0002\u0002",
    "\u00b6\u00b5\u0003\u0002\u0002\u0002\u00b6\u00b7\u0003\u0002\u0002\u0002",
    "\u00b7\u00b8\u0003\u0002\u0002\u0002\u00b8\u00bb\u0005\"\u0012\u0002",
    "\u00b9\u00ba\u0007(\u0002\u0002\u00ba\u00bc\u0005\u001c\u000f\u0002",
    "\u00bb\u00b9\u0003\u0002\u0002\u0002\u00bb\u00bc\u0003\u0002\u0002\u0002",
    "\u00bc\u00bd\u0003\u0002\u0002\u0002\u00bd\u00be\u00072\u0002\u0002",
    "\u00be\u00c1\u0005\u001c\u000f\u0002\u00bf\u00c0\u0007!\u0002\u0002",
    "\u00c0\u00c2\u0005\u001c\u000f\u0002\u00c1\u00bf\u0003\u0002\u0002\u0002",
    "\u00c1\u00c2\u0003\u0002\u0002\u0002\u00c2\u00c3\u0003\u0002\u0002\u0002",
    "\u00c3\u00c4\u0007\u0007\u0002\u0002\u00c4\u00c5\u0005\u0016\f\u0002",
    "\u00c5\u00f9\u0003\u0002\u0002\u0002\u00c6\u00c8\u0007.\u0002\u0002",
    "\u00c7\u00c9\u0005\u001c\u000f\u0002\u00c8\u00c7\u0003\u0002\u0002\u0002",
    "\u00c8\u00c9\u0003\u0002\u0002\u0002\u00c9\u00cb\u0003\u0002\u0002\u0002",
    "\u00ca\u00cc\u0007\u0004\u0002\u0002\u00cb\u00ca\u0003\u0002\u0002\u0002",
    "\u00cb\u00cc\u0003\u0002\u0002\u0002\u00cc\u00f9\u0003\u0002\u0002\u0002",
    "\u00cd\u00cf\u0007\"\u0002\u0002\u00ce\u00d0\u0007\u0004\u0002\u0002",
    "\u00cf\u00ce\u0003\u0002\u0002\u0002\u00cf\u00d0\u0003\u0002\u0002\u0002",
    "\u00d0\u00f9\u0003\u0002\u0002\u0002\u00d1\u00d3\u0007%\u0002\u0002",
    "\u00d2\u00d4\u0007\u0004\u0002\u0002\u00d3\u00d2\u0003\u0002\u0002\u0002",
    "\u00d3\u00d4\u0003\u0002\u0002\u0002\u00d4\u00f9\u0003\u0002\u0002\u0002",
    "\u00d5\u00d9\u0007\u0003\u0002\u0002\u00d6\u00d8\u0005\u0016\f\u0002",
    "\u00d7\u00d6\u0003\u0002\u0002\u0002\u00d8\u00db\u0003\u0002\u0002\u0002",
    "\u00d9\u00d7\u0003\u0002\u0002\u0002\u00d9\u00da\u0003\u0002\u0002\u0002",
    "\u00da\u00dc\u0003\u0002\u0002\u0002\u00db\u00d9\u0003\u0002\u0002\u0002",
    "\u00dc\u00f9\u0007\u0005\u0002\u0002\u00dd\u00de\u0005\u001c\u000f\u0002",
    "\u00de\u00df\u0007\n\u0002\u0002\u00df\u00e0\u0005\"\u0012\u0002\u00e0",
    "\u00e1\u0007\u000b\u0002\u0002\u00e1\u00e3\u0005\u001c\u000f\u0002\u00e2",
    "\u00e4\u0007\u0004\u0002\u0002\u00e3\u00e2\u0003\u0002\u0002\u0002\u00e3",
    "\u00e4\u0003\u0002\u0002\u0002\u00e4\u00f9\u0003\u0002\u0002\u0002\u00e5",
    "\u00e6\u0005\u001c\u000f\u0002\u00e6\u00e7\u0007\f\u0002\u0002\u00e7",
    "\u00e8\u0005\u001c\u000f\u0002\u00e8\u00e9\u0007\r\u0002\u0002\u00e9",
    "\u00ea\u0007\u000b\u0002\u0002\u00ea\u00ec\u0005\u001c\u000f\u0002\u00eb",
    "\u00ed\u0007\u0004\u0002\u0002\u00ec\u00eb\u0003\u0002\u0002\u0002\u00ec",
    "\u00ed\u0003\u0002\u0002\u0002\u00ed\u00f9\u0003\u0002\u0002\u0002\u00ee",
    "\u00ef\u0005\"\u0012\u0002\u00ef\u00f0\u0007\u000b\u0002\u0002\u00f0",
    "\u00f2\u0005\u001c\u000f\u0002\u00f1\u00f3\u0007\u0004\u0002\u0002\u00f2",
    "\u00f1\u0003\u0002\u0002\u0002\u00f2\u00f3\u0003\u0002\u0002\u0002\u00f3",
    "\u00f9\u0003\u0002\u0002\u0002\u00f4\u00f6\u0005\u001c\u000f\u0002\u00f5",
    "\u00f7\u0007\u0004\u0002\u0002\u00f6\u00f5\u0003\u0002\u0002\u0002\u00f6",
    "\u00f7\u0003\u0002\u0002\u0002\u00f7\u00f9\u0003\u0002\u0002\u0002\u00f8",
    "\u00a3\u0003\u0002\u0002\u0002\u00f8\u00a4\u0003\u0002\u0002\u0002\u00f8",
    "\u00ad\u0003\u0002\u0002\u0002\u00f8\u00b3\u0003\u0002\u0002\u0002\u00f8",
    "\u00c6\u0003\u0002\u0002\u0002\u00f8\u00cd\u0003\u0002\u0002\u0002\u00f8",
    "\u00d1\u0003\u0002\u0002\u0002\u00f8\u00d5\u0003\u0002\u0002\u0002\u00f8",
    "\u00dd\u0003\u0002\u0002\u0002\u00f8\u00e5\u0003\u0002\u0002\u0002\u00f8",
    "\u00ee\u0003\u0002\u0002\u0002\u00f8\u00f4\u0003\u0002\u0002\u0002\u00f9",
    "\u0017\u0003\u0002\u0002\u0002\u00fa\u0104\t\u0002\u0002\u0002\u00fb",
    "\u00ff\u0007\u0003\u0002\u0002\u00fc\u00fe\u0005\u001a\u000e\u0002\u00fd",
    "\u00fc\u0003\u0002\u0002\u0002\u00fe\u0101\u0003\u0002\u0002\u0002\u00ff",
    "\u00fd\u0003\u0002\u0002\u0002\u00ff\u0100\u0003\u0002\u0002\u0002\u0100",
    "\u0102\u0003\u0002\u0002\u0002\u0101\u00ff\u0003\u0002\u0002\u0002\u0102",
    "\u0105\u0007\u0005\u0002\u0002\u0103\u0105\u0005\u001a\u000e\u0002\u0104",
    "\u00fb\u0003\u0002\u0002\u0002\u0104\u0103\u0003\u0002\u0002\u0002\u0105",
    "\u0019\u0003\u0002\u0002\u0002\u0106\u0109\u0005\"\u0012\u0002\u0107",
    "\u0108\u0007\b\u0002\u0002\u0108\u010a\u0005 \u0011\u0002\u0109\u0107",
    "\u0003\u0002\u0002\u0002\u0109\u010a\u0003\u0002\u0002\u0002\u010a\u010d",
    "\u0003\u0002\u0002\u0002\u010b\u010c\u0007\u000b\u0002\u0002\u010c\u010e",
    "\u0005\u001c\u000f\u0002\u010d\u010b\u0003\u0002\u0002\u0002\u010d\u010e",
    "\u0003\u0002\u0002\u0002\u010e\u0110\u0003\u0002\u0002\u0002\u010f\u0111",
    "\u0007\u0004\u0002\u0002\u0110\u010f\u0003\u0002\u0002\u0002\u0110\u0111",
    "\u0003\u0002\u0002\u0002\u0111\u001b\u0003\u0002\u0002\u0002\u0112\u0113",
    "\b\u000f\u0001\u0002\u0113\u0114\u0007 \u0002\u0002\u0114\u011e\u0005",
    "\u001c\u000f\u000f\u0115\u0116\t\u0003\u0002\u0002\u0116\u011e\u0005",
    "\u001c\u000f\u000e\u0117\u011e\u0005\"\u0012\u0002\u0118\u011e\u0005",
    "$\u0013\u0002\u0119\u011a\u0007\u0006\u0002\u0002\u011a\u011b\u0005",
    "\u001c\u000f\u0002\u011b\u011c\u0007\u0007\u0002\u0002\u011c\u011e\u0003",
    "\u0002\u0002\u0002\u011d\u0112\u0003\u0002\u0002\u0002\u011d\u0115\u0003",
    "\u0002\u0002\u0002\u011d\u0117\u0003\u0002\u0002\u0002\u011d\u0118\u0003",
    "\u0002\u0002\u0002\u011d\u0119\u0003\u0002\u0002\u0002\u011e\u0146\u0003",
    "\u0002\u0002\u0002\u011f\u0120\f\f\u0002\u0002\u0120\u0121\t\u0004\u0002",
    "\u0002\u0121\u0145\u0005\u001c\u000f\r\u0122\u0123\f\u000b\u0002\u0002",
    "\u0123\u0124\t\u0005\u0002\u0002\u0124\u0145\u0005\u001c\u000f\f\u0125",
    "\u0126\f\n\u0002\u0002\u0126\u0127\t\u0006\u0002\u0002\u0127\u0145\u0005",
    "\u001c\u000f\u000b\u0128\u0129\f\t\u0002\u0002\u0129\u012a\t\u0007\u0002",
    "\u0002\u012a\u0145\u0005\u001c\u000f\n\u012b\u012c\f\b\u0002\u0002\u012c",
    "\u012d\u0007\u001a\u0002\u0002\u012d\u0145\u0005\u001c\u000f\t\u012e",
    "\u012f\f\u0007\u0002\u0002\u012f\u0130\u0007\u001b\u0002\u0002\u0130",
    "\u0145\u0005\u001c\u000f\b\u0131\u0132\f\u0006\u0002\u0002\u0132\u0133",
    "\u0007\u001c\u0002\u0002\u0133\u0134\u0005\u001c\u000f\u0002\u0134\u0135",
    "\u0007\b\u0002\u0002\u0135\u0136\u0005\u001c\u000f\u0006\u0136\u0145",
    "\u0003\u0002\u0002\u0002\u0137\u0138\f\u0012\u0002\u0002\u0138\u0145",
    "\u0005\u001e\u0010\u0002\u0139\u013a\f\u0011\u0002\u0002\u013a\u013b",
    "\u0007\n\u0002\u0002\u013b\u0145\u0005\"\u0012\u0002\u013c\u013d\f\u0010",
    "\u0002\u0002\u013d\u013e\u0007\f\u0002\u0002\u013e\u013f\u0005\u001c",
    "\u000f\u0002\u013f\u0140\u0007\r\u0002\u0002\u0140\u0145\u0003\u0002",
    "\u0002\u0002\u0141\u0142\f\r\u0002\u0002\u0142\u0143\u0007\u0010\u0002",
    "\u0002\u0143\u0145\u0005 \u0011\u0002\u0144\u011f\u0003\u0002\u0002",
    "\u0002\u0144\u0122\u0003\u0002\u0002\u0002\u0144\u0125\u0003\u0002\u0002",
    "\u0002\u0144\u0128\u0003\u0002\u0002\u0002\u0144\u012b\u0003\u0002\u0002",
    "\u0002\u0144\u012e\u0003\u0002\u0002\u0002\u0144\u0131\u0003\u0002\u0002",
    "\u0002\u0144\u0137\u0003\u0002\u0002\u0002\u0144\u0139\u0003\u0002\u0002",
    "\u0002\u0144\u013c\u0003\u0002\u0002\u0002\u0144\u0141\u0003\u0002\u0002",
    "\u0002\u0145\u0148\u0003\u0002\u0002\u0002\u0146\u0144\u0003\u0002\u0002",
    "\u0002\u0146\u0147\u0003\u0002\u0002\u0002\u0147\u001d\u0003\u0002\u0002",
    "\u0002\u0148\u0146\u0003\u0002\u0002\u0002\u0149\u0152\u0007\u0006\u0002",
    "\u0002\u014a\u014f\u0005\u001c\u000f\u0002\u014b\u014c\u0007\t\u0002",
    "\u0002\u014c\u014e\u0005\u001c\u000f\u0002\u014d\u014b\u0003\u0002\u0002",
    "\u0002\u014e\u0151\u0003\u0002\u0002\u0002\u014f\u014d\u0003\u0002\u0002",
    "\u0002\u014f\u0150\u0003\u0002\u0002\u0002\u0150\u0153\u0003\u0002\u0002",
    "\u0002\u0151\u014f\u0003\u0002\u0002\u0002\u0152\u014a\u0003\u0002\u0002",
    "\u0002\u0152\u0153\u0003\u0002\u0002\u0002\u0153\u0154\u0003\u0002\u0002",
    "\u0002\u0154\u0155\u0007\u0007\u0002\u0002\u0155\u001f\u0003\u0002\u0002",
    "\u0002\u0156\u0157\b\u0011\u0001\u0002\u0157\u016c\u0005\"\u0012\u0002",
    "\u0158\u0161\u0007\f\u0002\u0002\u0159\u015e\u0005 \u0011\u0002\u015a",
    "\u015b\u0007\t\u0002\u0002\u015b\u015d\u0005 \u0011\u0002\u015c\u015a",
    "\u0003\u0002\u0002\u0002\u015d\u0160\u0003\u0002\u0002\u0002\u015e\u015c",
    "\u0003\u0002\u0002\u0002\u015e\u015f\u0003\u0002\u0002\u0002\u015f\u0162",
    "\u0003\u0002\u0002\u0002\u0160\u015e\u0003\u0002\u0002\u0002\u0161\u0159",
    "\u0003\u0002\u0002\u0002\u0161\u0162\u0003\u0002\u0002\u0002\u0162\u0163",
    "\u0003\u0002\u0002\u0002\u0163\u016c\u0007\r\u0002\u0002\u0164\u0165",
    "\u0007\u0006\u0002\u0002\u0165\u0166\u0005 \u0011\u0002\u0166\u0167",
    "\u0007\u0007\u0002\u0002\u0167\u016c\u0003\u0002\u0002\u0002\u0168\u016c",
    "\u00075\u0002\u0002\u0169\u016c\u00076\u0002\u0002\u016a\u016c\u0007",
    "7\u0002\u0002\u016b\u0156\u0003\u0002\u0002\u0002\u016b\u0158\u0003",
    "\u0002\u0002\u0002\u016b\u0164\u0003\u0002\u0002\u0002\u016b\u0168\u0003",
    "\u0002\u0002\u0002\u016b\u0169\u0003\u0002\u0002\u0002\u016b\u016a\u0003",
    "\u0002\u0002\u0002\u016c\u0175\u0003\u0002\u0002\u0002\u016d\u016e\f",
    "\t\u0002\u0002\u016e\u016f\u0007\u001d\u0002\u0002\u016f\u0174\u0005",
    " \u0011\n\u0170\u0171\f\n\u0002\u0002\u0171\u0172\u0007\f\u0002\u0002",
    "\u0172\u0174\u0007\r\u0002\u0002\u0173\u016d\u0003\u0002\u0002\u0002",
    "\u0173\u0170\u0003\u0002\u0002\u0002\u0174\u0177\u0003\u0002\u0002\u0002",
    "\u0175\u0173\u0003\u0002\u0002\u0002\u0175\u0176\u0003\u0002\u0002\u0002",
    "\u0176!\u0003\u0002\u0002\u0002\u0177\u0175\u0003\u0002\u0002\u0002",
    "\u0178\u0179\t\b\u0002\u0002\u0179#\u0003\u0002\u0002\u0002\u017a\u0186",
    "\u0007\f\u0002\u0002\u017b\u0180\u0005\u001c\u000f\u0002\u017c\u017d",
    "\u0007\t\u0002\u0002\u017d\u017f\u0005\u001c\u000f\u0002\u017e\u017c",
    "\u0003\u0002\u0002\u0002\u017f\u0182\u0003\u0002\u0002\u0002\u0180\u017e",
    "\u0003\u0002\u0002\u0002\u0180\u0181\u0003\u0002\u0002\u0002\u0181\u0184",
    "\u0003\u0002\u0002\u0002\u0182\u0180\u0003\u0002\u0002\u0002\u0183\u0185",
    "\u0007\t\u0002\u0002\u0184\u0183\u0003\u0002\u0002\u0002\u0184\u0185",
    "\u0003\u0002\u0002\u0002\u0185\u0187\u0003\u0002\u0002\u0002\u0186\u017b",
    "\u0003\u0002\u0002\u0002\u0186\u0187\u0003\u0002\u0002\u0002\u0187\u0188",
    "\u0003\u0002\u0002\u0002\u0188\u018d\u0007\r\u0002\u0002\u0189\u018d",
    "\u00075\u0002\u0002\u018a\u018d\u00076\u0002\u0002\u018b\u018d\u0007",
    "7\u0002\u0002\u018c\u017a\u0003\u0002\u0002\u0002\u018c\u0189\u0003",
    "\u0002\u0002\u0002\u018c\u018a\u0003\u0002\u0002\u0002\u018c\u018b\u0003",
    "\u0002\u0002\u0002\u018d%\u0003\u0002\u0002\u0002:*,38;=CFJRW\\`jmt",
    "z|\u0082\u008b\u008f\u0097\u009e\u00ab\u00b6\u00bb\u00c1\u00c8\u00cb",
    "\u00cf\u00d3\u00d9\u00e3\u00ec\u00f2\u00f6\u00f8\u00ff\u0104\u0109\u010d",
    "\u0110\u011d\u0144\u0146\u014f\u0152\u015e\u0161\u016b\u0173\u0175\u0180",
    "\u0184\u0186\u018c"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class PortalToolboxLanguageParser extends antlr4.Parser {

    static grammarFileName = "PortalToolboxLanguage.g4";
    static literalNames = [ null, "'{'", "';'", "'}'", "'('", "')'", "':'", 
                            "','", "'.'", "'='", "'['", "']'", "'!'", "'-'", 
                            "'as'", "'*'", "'/'", "'+'", "'<'", "'<='", 
                            "'>='", "'>'", "'=='", "'!='", "'&&'", "'||'", 
                            "'?'", "'|'", "'actions'", "'async'", "'await'", 
                            "'by'", "'break'", "'conditions'", "'condition'", 
                            "'continue'", "'else'", "'for'", "'from'", "'global'", 
                            "'if'", "'mod'", "'on'", "'player'", "'return'", 
                            "'rule'", "'sub'", "'team'", "'to'", "'var'", 
                            "'while'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, "ACTIONS", "ASYNC", 
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
	        if(((((_la - 28)) & ~0x1f) == 0 && ((1 << (_la - 28)) & ((1 << (PortalToolboxLanguageParser.ACTIONS - 28)) | (1 << (PortalToolboxLanguageParser.ASYNC - 28)) | (1 << (PortalToolboxLanguageParser.AWAIT - 28)) | (1 << (PortalToolboxLanguageParser.BY - 28)) | (1 << (PortalToolboxLanguageParser.BREAK - 28)) | (1 << (PortalToolboxLanguageParser.CONDITIONS - 28)) | (1 << (PortalToolboxLanguageParser.CONDITION - 28)) | (1 << (PortalToolboxLanguageParser.CONTINUE - 28)) | (1 << (PortalToolboxLanguageParser.FROM - 28)) | (1 << (PortalToolboxLanguageParser.GLOBAL - 28)) | (1 << (PortalToolboxLanguageParser.MOD - 28)) | (1 << (PortalToolboxLanguageParser.ON - 28)) | (1 << (PortalToolboxLanguageParser.PLAYER - 28)) | (1 << (PortalToolboxLanguageParser.RULE - 28)) | (1 << (PortalToolboxLanguageParser.SUB - 28)) | (1 << (PortalToolboxLanguageParser.TEAM - 28)) | (1 << (PortalToolboxLanguageParser.TO - 28)) | (1 << (PortalToolboxLanguageParser.VAR - 28)) | (1 << (PortalToolboxLanguageParser.BACKTICK_IDENTIFIER - 28)) | (1 << (PortalToolboxLanguageParser.IDENTIFIER - 28)))) !== 0)) {
	            this.state = 48;
	            localctx.modIdentifier = this.identifier();
	        }

	        this.state = 51;
	        this.match(PortalToolboxLanguageParser.T__0);
	        this.state = 59;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 28)) & ~0x1f) == 0 && ((1 << (_la - 28)) & ((1 << (PortalToolboxLanguageParser.ACTIONS - 28)) | (1 << (PortalToolboxLanguageParser.ASYNC - 28)) | (1 << (PortalToolboxLanguageParser.AWAIT - 28)) | (1 << (PortalToolboxLanguageParser.BY - 28)) | (1 << (PortalToolboxLanguageParser.BREAK - 28)) | (1 << (PortalToolboxLanguageParser.CONDITIONS - 28)) | (1 << (PortalToolboxLanguageParser.CONDITION - 28)) | (1 << (PortalToolboxLanguageParser.CONTINUE - 28)) | (1 << (PortalToolboxLanguageParser.FROM - 28)) | (1 << (PortalToolboxLanguageParser.GLOBAL - 28)) | (1 << (PortalToolboxLanguageParser.MOD - 28)) | (1 << (PortalToolboxLanguageParser.ON - 28)) | (1 << (PortalToolboxLanguageParser.PLAYER - 28)) | (1 << (PortalToolboxLanguageParser.RULE - 28)) | (1 << (PortalToolboxLanguageParser.SUB - 28)) | (1 << (PortalToolboxLanguageParser.TEAM - 28)) | (1 << (PortalToolboxLanguageParser.TO - 28)) | (1 << (PortalToolboxLanguageParser.VAR - 28)) | (1 << (PortalToolboxLanguageParser.BACKTICK_IDENTIFIER - 28)) | (1 << (PortalToolboxLanguageParser.IDENTIFIER - 28)))) !== 0)) {
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
	        if(((((_la - 28)) & ~0x1f) == 0 && ((1 << (_la - 28)) & ((1 << (PortalToolboxLanguageParser.ACTIONS - 28)) | (1 << (PortalToolboxLanguageParser.ASYNC - 28)) | (1 << (PortalToolboxLanguageParser.AWAIT - 28)) | (1 << (PortalToolboxLanguageParser.BY - 28)) | (1 << (PortalToolboxLanguageParser.BREAK - 28)) | (1 << (PortalToolboxLanguageParser.CONDITIONS - 28)) | (1 << (PortalToolboxLanguageParser.CONDITION - 28)) | (1 << (PortalToolboxLanguageParser.CONTINUE - 28)) | (1 << (PortalToolboxLanguageParser.FROM - 28)) | (1 << (PortalToolboxLanguageParser.GLOBAL - 28)) | (1 << (PortalToolboxLanguageParser.MOD - 28)) | (1 << (PortalToolboxLanguageParser.ON - 28)) | (1 << (PortalToolboxLanguageParser.PLAYER - 28)) | (1 << (PortalToolboxLanguageParser.RULE - 28)) | (1 << (PortalToolboxLanguageParser.SUB - 28)) | (1 << (PortalToolboxLanguageParser.TEAM - 28)) | (1 << (PortalToolboxLanguageParser.TO - 28)) | (1 << (PortalToolboxLanguageParser.VAR - 28)) | (1 << (PortalToolboxLanguageParser.BACKTICK_IDENTIFIER - 28)) | (1 << (PortalToolboxLanguageParser.IDENTIFIER - 28)))) !== 0)) {
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
	            while(((((_la - 28)) & ~0x1f) == 0 && ((1 << (_la - 28)) & ((1 << (PortalToolboxLanguageParser.ACTIONS - 28)) | (1 << (PortalToolboxLanguageParser.ASYNC - 28)) | (1 << (PortalToolboxLanguageParser.AWAIT - 28)) | (1 << (PortalToolboxLanguageParser.BY - 28)) | (1 << (PortalToolboxLanguageParser.BREAK - 28)) | (1 << (PortalToolboxLanguageParser.CONDITIONS - 28)) | (1 << (PortalToolboxLanguageParser.CONDITION - 28)) | (1 << (PortalToolboxLanguageParser.CONTINUE - 28)) | (1 << (PortalToolboxLanguageParser.FROM - 28)) | (1 << (PortalToolboxLanguageParser.GLOBAL - 28)) | (1 << (PortalToolboxLanguageParser.MOD - 28)) | (1 << (PortalToolboxLanguageParser.ON - 28)) | (1 << (PortalToolboxLanguageParser.PLAYER - 28)) | (1 << (PortalToolboxLanguageParser.RULE - 28)) | (1 << (PortalToolboxLanguageParser.SUB - 28)) | (1 << (PortalToolboxLanguageParser.TEAM - 28)) | (1 << (PortalToolboxLanguageParser.TO - 28)) | (1 << (PortalToolboxLanguageParser.VAR - 28)) | (1 << (PortalToolboxLanguageParser.BACKTICK_IDENTIFIER - 28)) | (1 << (PortalToolboxLanguageParser.IDENTIFIER - 28)))) !== 0)) {
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
	                    if(!(_la===PortalToolboxLanguageParser.T__14 || _la===PortalToolboxLanguageParser.T__15)) {
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
	                    if(!(_la===PortalToolboxLanguageParser.T__12 || _la===PortalToolboxLanguageParser.T__16)) {
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
	                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PortalToolboxLanguageParser.T__17) | (1 << PortalToolboxLanguageParser.T__18) | (1 << PortalToolboxLanguageParser.T__19) | (1 << PortalToolboxLanguageParser.T__20))) !== 0))) {
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
	                    if(!(_la===PortalToolboxLanguageParser.T__21 || _la===PortalToolboxLanguageParser.T__22)) {
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
	                    localctx.op = this.match(PortalToolboxLanguageParser.T__23);
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
	                    localctx.op = this.match(PortalToolboxLanguageParser.T__24);
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
	                    this.match(PortalToolboxLanguageParser.T__25);
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
	                    this.match(PortalToolboxLanguageParser.T__13);
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
	                    this.match(PortalToolboxLanguageParser.T__26);
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
	        if(!(((((_la - 28)) & ~0x1f) == 0 && ((1 << (_la - 28)) & ((1 << (PortalToolboxLanguageParser.ACTIONS - 28)) | (1 << (PortalToolboxLanguageParser.ASYNC - 28)) | (1 << (PortalToolboxLanguageParser.AWAIT - 28)) | (1 << (PortalToolboxLanguageParser.BY - 28)) | (1 << (PortalToolboxLanguageParser.BREAK - 28)) | (1 << (PortalToolboxLanguageParser.CONDITIONS - 28)) | (1 << (PortalToolboxLanguageParser.CONDITION - 28)) | (1 << (PortalToolboxLanguageParser.CONTINUE - 28)) | (1 << (PortalToolboxLanguageParser.FROM - 28)) | (1 << (PortalToolboxLanguageParser.GLOBAL - 28)) | (1 << (PortalToolboxLanguageParser.MOD - 28)) | (1 << (PortalToolboxLanguageParser.ON - 28)) | (1 << (PortalToolboxLanguageParser.PLAYER - 28)) | (1 << (PortalToolboxLanguageParser.RULE - 28)) | (1 << (PortalToolboxLanguageParser.SUB - 28)) | (1 << (PortalToolboxLanguageParser.TEAM - 28)) | (1 << (PortalToolboxLanguageParser.TO - 28)) | (1 << (PortalToolboxLanguageParser.VAR - 28)) | (1 << (PortalToolboxLanguageParser.BACKTICK_IDENTIFIER - 28)) | (1 << (PortalToolboxLanguageParser.IDENTIFIER - 28)))) !== 0))) {
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
PortalToolboxLanguageParser.T__26 = 27;
PortalToolboxLanguageParser.ACTIONS = 28;
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
