import * as Rhost from "../src/index";

describe("color", function () {
  it("should convert all X11 color names to xterm", function () {
    Rhost.X11ColorNames.forEach(function (color) {
      expect(Rhost.color.x11ToIndex(color[0]) == color[1]);
    });
  });
  it("should convert find XTerm colors", function () {
    expect(Rhost.color.findXTerm(1)?.hsv);
  });
  it("should convert HTML colors to nearest xterm", function () {
    expect([9, 196].includes(Rhost.color.htmlToIndex("ff0000")));
    expect([9, 196].includes(Rhost.color.htmlToIndex("ff0001")));
    expect(146 == Rhost.color.htmlToIndex("afafd7"));
  });
  it("should handle low ASCII", function () {
    const ash = "Ash is still the bum";
    const output = Rhost.encodeString(ash);
    expect(output == "Ash is still the bum");
  });
  it("should handle four-hex-digit unicode", function () {
    const ash = "ࡔ";
    const output = Rhost.encodeString(ash);
    expect(output == "%<u0854>");
  });
  it("should handle five-hex-digit unicode", function () {
    const ash = "𒀸";
    const output = Rhost.encodeString(ash);
    expect(output == "%<u12038>");
  });
});
