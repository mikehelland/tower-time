const _0x59ac = [
  "lastFired",
  "Fire",
  "update",
  "images/air/yellow-tower-3.png",
  "height",
  "width",
  "creeps",
  "cooldown",
  "findTarget",
  "images/fire/red-tower-atk-2.png",
  "attacks",
  "Air",
  "mouseY",
  "handleUpgrade",
  "canUpgrade",
  "follow",
  "selected",
  "images/earth/green-tower-2.png",
  "images/fire/red-tower-3.png",
  "speed",
  "removed",
  "images/earth/green-tower-atk-2.png",
  "canvas",
  "upgradeLevel",
  "visible",
  "ceil",
  "atkImg",
  "type",
  "save",
  "angle",
  "images/earth/green-tower-atk-3.png",
  "render",
  "images/water/blue-tower-atk-3.png",
  "images/fire/red-tower-atk-3.png",
  "restore",
  "images/air/yellow-tower-2.png",
  "mouseX",
  "drawImage",
  "now",
  "images/earth/green-tower-3.png",
  "Water",
  "rgba(222,\x20255,\x20252,\x200.3)",
  "context",
  "push",
  "placed",
  "run",
  "images/air/yellow-tower-atk-2.png",
  "length",
  "fillStyle",
  "images/water/blue-tower-atk-2.png",
  "damage",
  "images/fire/red-tower-2.png",
  "images/water/blue-tower-3.png",
  "arc",
  "checkFire",
  "img",
  "src",
  "Earth",
  "location",
  "range",
  "target",
  "upgrade",
  "translate"
];
(function(_0x56560e, _0x59aceb) {
  const _0x1d8dc7 = function(_0x4bbfda) {
    while (--_0x4bbfda) {
      _0x56560e["push"](_0x56560e["shift"]());
    }
  };
  _0x1d8dc7(++_0x59aceb);
})(_0x59ac, 0x1cf);
const _0x1d8d = function(_0x56560e, _0x59aceb) {
  _0x56560e = _0x56560e - 0x0;
  let _0x1d8dc7 = _0x59ac[_0x56560e];
  return _0x1d8dc7;
};
("use strict");
class Tower {
  constructor(
    _0x1e6b0e,
    _0xe2f7,
    _0xfba88e,
    _0x565236,
    _0x4b428d,
    _0x550cfd,
    _0x6c6e72,
    _0x1ca9be,
    _0x14d596
  ) {
    (this[_0x1d8d("0x21")] = _0xfba88e),
      (this[_0x1d8d("0x4")] = _0x565236),
      (this["cost"] = _0x1e6b0e),
      (this["upgrade"] = _0xe2f7),
      (this[_0x1d8d("0x5")] = _0x4b428d),
      (this[_0x1d8d("0x25")] = _0x550cfd),
      (this["cooldown"] = _0x1ca9be),
      (this[_0x1d8d("0x1c")] = _0x6c6e72),
      (this[_0x1d8d("0x3c")] = _0x14d596),
      (this[_0x1d8d("0x24")] = new Vector(0x0, 0x0)),
      (this["lastFired"] = Date[_0x1d8d("0x10")]()),
      (this["angle"] = 0x0),
      (this[_0x1d8d("0x26")] = null),
      (this["follow"] = !0x0),
      (this[_0x1d8d("0x39")] = !0x1),
      (this["upgradeLevel"] = 0x1),
      (this[_0x1d8d("0x37")] = !0x0),
      (this[_0x1d8d("0x3d")] = !0x1),
      (this["visible"] = !0x1),
      (this[_0x1d8d("0x16")] = !0x1);
  }
  [_0x1d8d("0x31")]() {
    for (
      let _0x50cde1 = 0x0;
      _0x50cde1 < tt[_0x1d8d("0x2f")]["length"];
      _0x50cde1++
    )
      if (
        tt[_0x1d8d("0x2f")][_0x50cde1][_0x1d8d("0x24")]["dist"](
          this[_0x1d8d("0x24")]
        ) < this[_0x1d8d("0x25")] &&
        tt[_0x1d8d("0x2f")][_0x50cde1]["alive"]
      )
        return (
          (this["follow"] = !0x1),
          tt[_0x1d8d("0x2f")][_0x50cde1][_0x1d8d("0x24")]
        );
    return (
      (this["target"] = new Vector(
        tt[_0x1d8d("0x0")][_0x1d8d("0xe")],
        tt[_0x1d8d("0x0")][_0x1d8d("0x35")]
      )),
      (this[_0x1d8d("0x38")] = !0x0),
      this[_0x1d8d("0x26")]
    );
  }
  [_0x1d8d("0x20")]() {
    let _0x1eee72 = Date[_0x1d8d("0x10")]();
    if (
      this[_0x1d8d("0x24")]["dist"](this[_0x1d8d("0x26")]) <
        this[_0x1d8d("0x25")] &&
      this["placed"] &&
      _0x1eee72 - this[_0x1d8d("0x29")] > this[_0x1d8d("0x30")] &&
      0x0 !== tt[_0x1d8d("0x2f")][_0x1d8d("0x19")] &&
      !this[_0x1d8d("0x38")]
    ) {
      this[_0x1d8d("0x29")] = _0x1eee72;
      const _0x57514d = new Vector(
          this["location"]["x"],
          this[_0x1d8d("0x24")]["y"]
        ),
        _0x45e1b2 = new Attack(
          _0x57514d,
          this[_0x1d8d("0x7")],
          this[_0x1d8d("0x4")],
          this[_0x1d8d("0x5")],
          this[_0x1d8d("0x1c")],
          this[_0x1d8d("0x3c")]
        );
      tt[_0x1d8d("0x33")][_0x1d8d("0x15")](_0x45e1b2);
    }
  }
  [_0x1d8d("0x36")]() {
    (this[_0x1d8d("0x1")] += 0x1),
      (this[_0x1d8d("0x27")] *= 0x2),
      (this["damage"] =
        0x5 * Math[_0x1d8d("0x3")]((2.5 * this["damage"]) / 0x5)),
      (this[_0x1d8d("0x25")] += 0x19),
      (this[_0x1d8d("0x3c")] += 0x2),
      _0x1d8d("0x23") === this[_0x1d8d("0x5")]
        ? 0x2 === this[_0x1d8d("0x1")]
          ? ((this[_0x1d8d("0x21")] = new Image()),
            (this["img"][_0x1d8d("0x22")] = _0x1d8d("0x3a")),
            (this[_0x1d8d("0x4")] = new Image()),
            (this[_0x1d8d("0x4")][_0x1d8d("0x22")] = _0x1d8d("0x3e")))
          : ((this[_0x1d8d("0x21")] = new Image()),
            (this[_0x1d8d("0x21")][_0x1d8d("0x22")] = _0x1d8d("0x11")),
            (this["atkImg"] = new Image()),
            (this["atkImg"][_0x1d8d("0x22")] = _0x1d8d("0x8")))
        : _0x1d8d("0x12") === this[_0x1d8d("0x5")]
        ? 0x2 === this["upgradeLevel"]
          ? ((this[_0x1d8d("0x21")] = new Image()),
            (this[_0x1d8d("0x21")]["src"] = "images/water/blue-tower-2.png"),
            (this["atkImg"] = new Image()),
            (this[_0x1d8d("0x4")][_0x1d8d("0x22")] = _0x1d8d("0x1b")))
          : ((this["img"] = new Image()),
            (this[_0x1d8d("0x21")][_0x1d8d("0x22")] = _0x1d8d("0x1e")),
            (this[_0x1d8d("0x4")] = new Image()),
            (this["atkImg"][_0x1d8d("0x22")] = _0x1d8d("0xa")))
        : _0x1d8d("0x2a") === this[_0x1d8d("0x5")]
        ? 0x2 === this[_0x1d8d("0x1")]
          ? ((this[_0x1d8d("0x21")] = new Image()),
            (this[_0x1d8d("0x21")][_0x1d8d("0x22")] = _0x1d8d("0x1d")),
            (this[_0x1d8d("0x4")] = new Image()),
            (this[_0x1d8d("0x4")]["src"] = _0x1d8d("0x32")))
          : ((this[_0x1d8d("0x21")] = new Image()),
            (this[_0x1d8d("0x21")]["src"] = _0x1d8d("0x3b")),
            (this[_0x1d8d("0x4")] = new Image()),
            (this[_0x1d8d("0x4")][_0x1d8d("0x22")] = _0x1d8d("0xb")))
        : _0x1d8d("0x34") === this[_0x1d8d("0x5")] &&
          (0x2 === this[_0x1d8d("0x1")]
            ? ((this[_0x1d8d("0x21")] = new Image()),
              (this[_0x1d8d("0x21")][_0x1d8d("0x22")] = _0x1d8d("0xd")),
              (this[_0x1d8d("0x4")] = new Image()),
              (this[_0x1d8d("0x4")][_0x1d8d("0x22")] = _0x1d8d("0x18")))
            : ((this[_0x1d8d("0x21")] = new Image()),
              (this[_0x1d8d("0x21")][_0x1d8d("0x22")] = _0x1d8d("0x2c")),
              (this[_0x1d8d("0x4")] = new Image()),
              (this[_0x1d8d("0x4")][_0x1d8d("0x22")] =
                "images/air/yellow-tower-atk-3.png"))),
      0x3 === this[_0x1d8d("0x1")] && (this[_0x1d8d("0x37")] = !0x1);
  }
  [_0x1d8d("0x17")]() {
    this[_0x1d8d("0x2b")](), this[_0x1d8d("0x9")]();
  }
  [_0x1d8d("0x2b")]() {
    this[_0x1d8d("0x26")] = this[_0x1d8d("0x31")]();
    let _0xf213d7 = this[_0x1d8d("0x24")]["x"] - this[_0x1d8d("0x26")]["x"],
      _0x1e28c3 = this[_0x1d8d("0x24")]["y"] - this["target"]["y"];
    (this[_0x1d8d("0x7")] = Math["atan2"](_0x1e28c3, _0xf213d7) - Math["PI"]),
      this["checkFire"]();
  }
  [_0x1d8d("0x9")]() {
    const _0x1a628d = tt[_0x1d8d("0x14")];
    _0x1a628d[_0x1d8d("0x6")](),
      this[_0x1d8d("0x2")] &&
        ((this[_0x1d8d("0x16")] && !this[_0x1d8d("0x39")]) ||
          (_0x1a628d["beginPath"](),
          _0x1a628d[_0x1d8d("0x1f")](
            this[_0x1d8d("0x24")]["x"],
            this["location"]["y"],
            this[_0x1d8d("0x25")],
            0x0,
            0x2 * Math["PI"]
          ),
          (_0x1a628d[_0x1d8d("0x1a")] = _0x1d8d("0x13")),
          _0x1a628d["fill"]()),
        _0x1a628d[_0x1d8d("0x28")](
          this["location"]["x"],
          this[_0x1d8d("0x24")]["y"]
        ),
        _0x1a628d["rotate"](this[_0x1d8d("0x7")]),
        _0x1a628d[_0x1d8d("0xf")](
          this[_0x1d8d("0x21")],
          -this[_0x1d8d("0x21")][_0x1d8d("0x2e")] / 0x2,
          -this[_0x1d8d("0x21")][_0x1d8d("0x2d")] / 0x2
        )),
      _0x1a628d[_0x1d8d("0xc")]();
  }
}
