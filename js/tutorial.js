const _0x1810 = [
  "toggleInfo",
  "#tower-type",
  "hidden",
  "tutorialWindow",
  "#tower-range",
  "next",
  "#tutorial-window",
  "your\x20current\x20score\x20-\x20increases\x20for\x20every\x20enemy\x20stopped",
  "now\x20that\x20you\x20have\x20some\x20towers,\x20its\x20time\x20to\x20send\x20the\x20first\x20wave\x20-\x20good\x20luck!",
  "addEventListener",
  "score",
  "mouseover",
  "start",
  "hideInfo",
  "mouseout",
  "#tower-damage",
  "lives",
  "move\x20your\x20mouse\x20anywhere\x20to\x20learn\x20more\x20or\x20click\x20here\x20to\x20dismiss\x20tooltips",
  "add",
  "the\x20amount\x20damage\x20needed\x20to\x20stop\x20the\x20most\x20recent\x20enemies\x20-\x20increases\x20every\x20wave",
  "your\x20precious\x20lives\x20-\x20if\x20an\x20enemy\x20makes\x20it\x20to\x20the\x20red\x20square,\x20you\x20lose\x20a\x20life\x20-\x20reach\x20zero\x20lives\x20and\x20the\x20game\x20is\x20over",
  "#start-button",
  "canvas",
  "#info-creep",
  "show",
  "damage",
  "contains",
  "#towers",
  "textPar",
  "select\x20to\x20send\x20the\x20next\x20wave\x20automatically\x20if\x20there\x20are\x20no\x20more\x20enemies",
  "innerText",
  "cooldown",
  "creep",
  "to\x20get\x20started,\x20place\x20a\x20few\x20towers\x20on\x20the\x20board\x20from\x20the\x20menu\x20below",
  "remove",
  "edit",
  "classList",
  "game-over",
  "when\x20a\x20placed\x20tower\x20is\x20selected,\x20upgrade\x20and\x20sell\x20give\x20you\x20the\x20options\x20to\x20upgrade\x20your\x20tower\x20for\x20\x27next\x27\x20cost\x20or\x20sell\x20it\x20back\x20for\x20its\x20most\x20recent\x20cost",
  "type",
  "#info-lives",
  "showInfo",
  "number\x20of\x20miliseconds\x20the\x20current\x20tower\x20needs\x20before\x20firing\x20again",
  "querySelector",
  "#tutorial-text",
  "innerHTML",
  "towers",
  "#info-bits",
  "#tower-next",
  "distance\x20the\x20current\x20tower\x20can\x20watch\x20for\x20enemies\x20to\x20attack",
  "range",
  "bits",
  "#text-p",
  "#edit-tower-buttons",
  "amount\x20of\x20damage\x20the\x20current\x20tower\x20will\x20deal\x20every\x20time\x20it\x20fires",
  "spend\x20your\x20bank\x20on\x20towers\x20and\x20tower\x20upgrades\x20-\x20increase\x20it\x20by\x20stopping\x20enemies\x20and\x20sending\x20waves",
  "auto",
  "#game-canvas",
  "addListeners",
  "#info-score",
  "click",
  "default",
  "wave"
];
(function(_0x574bae, _0x18100d) {
  const _0x51ebfa = function(_0x453b52) {
    while (--_0x453b52) {
      _0x574bae["push"](_0x574bae["shift"]());
    }
  };
  _0x51ebfa(++_0x18100d);
})(_0x1810, 0x1d3);
const _0x51eb = function(_0x574bae, _0x18100d) {
  _0x574bae = _0x574bae - 0x0;
  let _0x51ebfa = _0x1810[_0x574bae];
  return _0x51ebfa;
};
("use strict");
class Tutorial {
  constructor() {
    (this[_0x51eb("0x28")] = document[_0x51eb("0x11")](_0x51eb("0x2b"))),
      this[_0x51eb("0x28")][_0x51eb("0x2e")](
        _0x51eb("0x22"),
        this["toggleInfo"],
        !0x1
      ),
      (this[_0x51eb("0x2")] = document[_0x51eb("0x11")](_0x51eb("0x1a"))),
      (this[_0x51eb("0x23")] = _0x51eb("0x36")),
      (this[_0x51eb("0x2f")] = document["querySelector"](_0x51eb("0x21"))),
      this[_0x51eb("0x20")](this["score"], _0x51eb("0x2f")),
      (this[_0x51eb("0x24")] = document[_0x51eb("0x11")]("#info-wave")),
      this["addListeners"](this[_0x51eb("0x24")], _0x51eb("0x24")),
      (this[_0x51eb("0x6")] = document[_0x51eb("0x11")](_0x51eb("0x3c"))),
      this[_0x51eb("0x20")](this[_0x51eb("0x6")], _0x51eb("0x6")),
      (this[_0x51eb("0x35")] = document[_0x51eb("0x11")](_0x51eb("0xe"))),
      this["addListeners"](this[_0x51eb("0x35")], _0x51eb("0x35")),
      (this[_0x51eb("0x19")] = document[_0x51eb("0x11")](_0x51eb("0x15"))),
      this[_0x51eb("0x20")](this[_0x51eb("0x19")], _0x51eb("0x19")),
      (this["type"] = document["querySelector"](_0x51eb("0x26"))),
      this[_0x51eb("0x20")](this[_0x51eb("0xd")], _0x51eb("0xd")),
      (this[_0x51eb("0x3e")] = document[_0x51eb("0x11")](_0x51eb("0x34"))),
      this[_0x51eb("0x20")](this[_0x51eb("0x3e")], _0x51eb("0x3e")),
      (this[_0x51eb("0x18")] = document[_0x51eb("0x11")](_0x51eb("0x29"))),
      this["addListeners"](this[_0x51eb("0x18")], _0x51eb("0x18")),
      (this[_0x51eb("0x5")] = document[_0x51eb("0x11")]("#tower-cooldown")),
      this[_0x51eb("0x20")](this[_0x51eb("0x5")], "cooldown"),
      (this["next"] = document[_0x51eb("0x11")](_0x51eb("0x16"))),
      this[_0x51eb("0x20")](this[_0x51eb("0x2a")], _0x51eb("0x2a")),
      (this["auto"] = document["querySelector"]("#auto-container")),
      this[_0x51eb("0x20")](this[_0x51eb("0x1e")], _0x51eb("0x1e")),
      (this[_0x51eb("0x31")] = document[_0x51eb("0x11")](_0x51eb("0x3a"))),
      this[_0x51eb("0x20")](this["start"], "start"),
      (this["towers"] = document[_0x51eb("0x11")](_0x51eb("0x1"))),
      this[_0x51eb("0x20")](this[_0x51eb("0x14")], _0x51eb("0x14")),
      (this["edit"] = document[_0x51eb("0x11")](_0x51eb("0x1b"))),
      this[_0x51eb("0x20")](this[_0x51eb("0x9")], "edit"),
      (this[_0x51eb("0x3b")] = document["querySelector"](_0x51eb("0x1f"))),
      this[_0x51eb("0x20")](this["canvas"], _0x51eb("0x3b"));
  }
  [_0x51eb("0x20")](_0xb44483, _0x4bf67c) {
    _0xb44483[_0x51eb("0x2e")](
      _0x51eb("0x30"),
      () => this[_0x51eb("0xf")](_0x4bf67c),
      !0x1
    ),
      _0xb44483[_0x51eb("0x2e")](_0x51eb("0x33"), this[_0x51eb("0x32")], !0x1);
  }
  [_0x51eb("0x25")]() {
    const _0x754fe = document[_0x51eb("0x11")](_0x51eb("0x12"));
    _0x754fe[_0x51eb("0xa")][_0x51eb("0x0")](_0x51eb("0x27"))
      ? (_0x754fe["classList"][_0x51eb("0x8")](_0x51eb("0x27")),
        _0x754fe["classList"]["add"](_0x51eb("0x3d")))
      : (_0x754fe["classList"][_0x51eb("0x8")]("show"),
        _0x754fe[_0x51eb("0xa")][_0x51eb("0x37")](_0x51eb("0x27")));
  }
  ["showInfo"](_0x35f02d) {
    const _0x3969f0 = tutorial[_0x51eb("0x2")];
    0x0 === tt[_0x51eb("0x24")] && tt["gameStarted"] && "canvas" === _0x35f02d
      ? tt[_0x51eb("0x19")] >= 0x32
        ? (_0x3969f0[_0x51eb("0x13")] = _0x51eb("0x7"))
        : (_0x3969f0[_0x51eb("0x13")] = _0x51eb("0x2d"))
      : _0x51eb("0x2f") === _0x35f02d
      ? (_0x3969f0["innerText"] = _0x51eb("0x2c"))
      : _0x51eb("0x24") === _0x35f02d
      ? (_0x3969f0[_0x51eb("0x4")] =
          "the\x20amount\x20of\x20waves\x20you\x20have\x20survived\x20so\x20far")
      : _0x51eb("0x6") === _0x35f02d
      ? (_0x3969f0[_0x51eb("0x4")] = _0x51eb("0x38"))
      : "lives" === _0x35f02d
      ? (_0x3969f0["innerText"] = _0x51eb("0x39"))
      : "bits" === _0x35f02d
      ? (_0x3969f0[_0x51eb("0x4")] = _0x51eb("0x1d"))
      : _0x51eb("0xd") === _0x35f02d
      ? (_0x3969f0[_0x51eb("0x4")] =
          "the\x20name\x20of\x20the\x20current\x20tower")
      : _0x51eb("0x3e") === _0x35f02d
      ? (_0x3969f0[_0x51eb("0x4")] = _0x51eb("0x1c"))
      : _0x51eb("0x18") === _0x35f02d
      ? (_0x3969f0[_0x51eb("0x4")] = _0x51eb("0x17"))
      : _0x51eb("0x5") === _0x35f02d
      ? (_0x3969f0[_0x51eb("0x4")] = _0x51eb("0x10"))
      : _0x51eb("0x2a") === _0x35f02d
      ? (_0x3969f0[_0x51eb("0x4")] =
          "cost\x20of\x20the\x20current\x20tower\x27s\x20next\x20upgrade\x20in\x20bits")
      : _0x51eb("0x1e") === _0x35f02d
      ? (_0x3969f0["innerText"] = _0x51eb("0x3"))
      : _0x51eb("0x31") === _0x35f02d
      ? (_0x3969f0[_0x51eb("0x4")] =
          "starts\x20game\x20and\x20will\x20send\x20the\x20next\x20wave")
      : _0x51eb("0x14") === _0x35f02d
      ? (_0x3969f0[_0x51eb("0x4")] =
          "the\x20four\x20tower\x20types\x20-\x20hover\x20over\x20one\x20to\x20see\x20its\x20stats\x20-\x20click\x20one\x20to\x20select\x20it,\x20move\x20your\x20mouse\x20over\x20the\x20board,\x20and\x20click\x20again\x20to\x20place\x20the\x20tower\x20-\x20the\x20cost\x20will\x20be\x20deducted\x20from\x20your\x20bank")
      : _0x51eb("0x9") === _0x35f02d
      ? (_0x3969f0[_0x51eb("0x4")] = _0x51eb("0xc"))
      : _0x51eb("0x3b") === _0x35f02d
      ? tt["gameStarted"] &&
        (_0x3969f0[_0x51eb("0x4")] =
          "the\x20board\x20-\x20the\x20dark\x20gray\x20sqaure\x20will\x20spawn\x20enemies\x20every\x20wave\x20-\x20enemies\x20will\x20try\x20to\x20get\x20to\x20the\x20red\x20sqaure\x20-\x20light\x20gray\x20spaces\x20are\x20walls\x20-\x20place\x20towers\x20to\x20make\x20more\x20walls!")
      : _0x51eb("0xb") === _0x35f02d &&
        (_0x3969f0["innerHTML"] =
          "nice!\x20see\x20if\x20you\x20can\x20beat\x20this\x20score\x20next\x20time");
  }
  [_0x51eb("0x32")]() {
    tutorial[_0x51eb("0x2")][_0x51eb("0x13")] = tutorial[_0x51eb("0x23")];
  }
}
