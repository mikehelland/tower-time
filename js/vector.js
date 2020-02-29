const _0x58de = [
  "slow",
  "atan2",
  "getDir",
  "cos",
  "getMag",
  "subGetNew",
  "sqrt",
  "sin",
  "sub",
  "dist",
  "normalize",
  "addGetNew",
  "copy",
  "setDir"
];
(function(_0x1c42a3, _0x58de38) {
  const _0x1ee372 = function(_0x5771bf) {
    while (--_0x5771bf) {
      _0x1c42a3["push"](_0x1c42a3["shift"]());
    }
  };
  _0x1ee372(++_0x58de38);
})(_0x58de, 0xda);
const _0x1ee3 = function(_0x1c42a3, _0x58de38) {
  _0x1c42a3 = _0x1c42a3 - 0x0;
  let _0x1ee372 = _0x58de[_0x1c42a3];
  return _0x1ee372;
};
("use strict");
class Vector {
  constructor(_0x368b8f, _0x2de04f) {
    (this["x"] = _0x368b8f), (this["y"] = _0x2de04f);
  }
  ["add"](_0x19c31a) {
    (this["x"] += _0x19c31a["x"]), (this["y"] += _0x19c31a["y"]);
  }
  [_0x1ee3("0x0")](_0x543147) {
    (this["x"] -= _0x543147["x"]), (this["y"] -= _0x543147["y"]);
  }
  [_0x1ee3("0x2")]() {
    const _0x11abf0 = Math[_0x1ee3("0xc")](
      this["x"] * this["x"] + this["y"] * this["y"]
    );
    return (
      (this["x"] /= _0x11abf0),
      (this["y"] /= _0x11abf0),
      new Vector(this["x"], this["y"])
    );
  }
  [_0x1ee3("0x6")]() {
    return (
      (this["x"] /= 0x2), (this["y"] /= 0x2), new Vector(this["x"], this["y"])
    );
  }
  [_0x1ee3("0x3")](_0x43df74, _0x23af76) {
    const _0x4988de = _0x43df74["x"] + _0x23af76["x"],
      _0x2c8a6c = _0x43df74["y"] + _0x23af76["y"];
    return new Vector(_0x4988de, _0x2c8a6c);
  }
  [_0x1ee3("0xb")](_0x10be70, _0xa77f66) {
    const _0x3218f7 = _0x10be70["x"] - _0xa77f66["x"],
      _0x4a5d6 = _0x10be70["y"] - _0xa77f66["y"];
    return new Vector(_0x3218f7, _0x4a5d6);
  }
  [_0x1ee3("0x8")]() {
    return Math[_0x1ee3("0x7")](this["y"], this["x"]);
  }
  [_0x1ee3("0xa")]() {
    const _0x13390d = this["x"] * this["x"],
      _0x28822d = this["y"] * this["y"];
    return Math[_0x1ee3("0xc")]["apply"](_0x13390d + _0x28822d);
  }
  [_0x1ee3("0x5")](_0x4b5ce6) {
    const _0x44d61e = this[_0x1ee3("0xa")]();
    (this["x"] = Math[_0x1ee3("0x9")](_0x4b5ce6) * _0x44d61e),
      (this["y"] = Math[_0x1ee3("0xd")](_0x4b5ce6) * _0x44d61e);
  }
  ["setMag"](_0x508a5e) {
    const _0x333445 = this["getDir"]();
    (this["x"] = Math[_0x1ee3("0x9")](_0x333445) * _0x508a5e),
      (this["y"] = Math[_0x1ee3("0xd")](_0x333445) * _0x508a5e);
  }
  [_0x1ee3("0x1")](_0x45ebb8) {
    const _0x86bc80 = this["x"] - _0x45ebb8["x"],
      _0x471d7a = this["y"] - _0x45ebb8["y"];
    return Math[_0x1ee3("0xc")](_0x86bc80 * _0x86bc80 + _0x471d7a * _0x471d7a);
  }
  [_0x1ee3("0x4")]() {
    return new Vector(this["x"], this["y"]);
  }
}
