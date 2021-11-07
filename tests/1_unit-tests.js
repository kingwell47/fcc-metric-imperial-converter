const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
  const { getNum, getUnit, getReturnUnit, spellOutUnit, convert, getString } =
    convertHandler;

  // convertHandler should correctly read a whole number input.
  test("Whole Number", function () {
    assert.strictEqual(getNum("12km"), 12);
  });
  // convertHandler should correctly read a decimal number input.
  test("Decimal Number", function () {
    assert.strictEqual(getNum("1.5km"), 1.5);
  });
  // convertHandler should correctly read a fractional input.
  test("Fractional Number", function () {
    assert.strictEqual(getNum("1/2km"), 0.5);
  });
  // convertHandler should correctly read a fractional input with a decimal.
  test("Fractional Number with decimal", function () {
    assert.strictEqual(getNum("1.5/2km"), 0.75);
    assert.strictEqual(getNum("2/0.5km"), 4);
  });
  // convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).
  test("Error on double-fraction", function () {
    assert.isNull(getNum("1/5/2km"));
  });
  // convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.
  test("Default to 1 if no numerical input", function () {
    assert.strictEqual(getNum("km"), 1);
    assert.strictEqual(getNum("mi"), 1);
    assert.strictEqual(getNum("gal"), 1);
    assert.strictEqual(getNum("L"), 1);
  });
  // convertHandler should correctly read each valid input unit.
  test("Read input unit", function () {
    assert.strictEqual(getUnit("100km"), "km");
    assert.strictEqual(getUnit("100mi"), "mi");
    assert.strictEqual(getUnit("100gal"), "gal");
    assert.strictEqual(getUnit("100L"), "L");
    assert.strictEqual(getUnit("100l"), "L");
    assert.strictEqual(getUnit("100lbs"), "lbs");
    assert.strictEqual(getUnit("100kg"), "kg");
  });
  // convertHandler should correctly return an error for an invalid input unit.
  test("Error on invalid unit", function () {
    assert.isNull(getUnit("100"));
    assert.isNull(getUnit("100k"));
    assert.isNull(getUnit("100gallon"));
    assert.isNull(getUnit("100miles"));
    assert.isNotNull(getUnit("100l"));
  });
  // convertHandler should return the correct return unit for each valid input unit.
  test("Return correct unit given valid input unit", function () {
    assert.strictEqual(getReturnUnit("mi"), "km");
    assert.strictEqual(getReturnUnit("km"), "mi");
    assert.strictEqual(getReturnUnit("gal"), "L");
    assert.strictEqual(getReturnUnit("L"), "gal");
    assert.strictEqual(getReturnUnit("lbs"), "kg");
    assert.strictEqual(getReturnUnit("kg"), "lbs");
    assert.isNull(getReturnUnit("meter"));
    assert.isNull(getReturnUnit("walrus"));
    assert.isNull(getReturnUnit("cat"));
  });
  // convertHandler should correctly return the spelled-out string unit for each valid input unit.
  test("Return spelled-out string unit given valid input unit", function () {
    assert.strictEqual(spellOutUnit("mi"), "miles");
    assert.strictEqual(spellOutUnit("km"), "kilometers");
    assert.strictEqual(spellOutUnit("gal"), "gallons");
    assert.strictEqual(spellOutUnit("L"), "liters");
    assert.strictEqual(spellOutUnit("l"), "liters");
    assert.strictEqual(spellOutUnit("lbs"), "pounds");
    assert.strictEqual(spellOutUnit("kg"), "kilograms");
    assert.isNull(spellOutUnit("meter"));
    assert.isNull(spellOutUnit("walrus"));
    assert.isNull(spellOutUnit("cat"));
  });
  // convertHandler should correctly convert gal to L.
  test("Convert gal to L", function () {
    assert.strictEqual(convert(1, "gal"), 3.78541);
    assert.strictEqual(convert(3.4, "gal"), 12.87039);
    assert.strictEqual(convert(5.7, "gal"), 21.57684);
  });
  // convertHandler should correctly convert L to gal.
  test("Convert L to gal", function () {
    assert.strictEqual(convert(1, "L"), 0.26417);
    assert.strictEqual(convert(3.4, "L"), 0.89819);
    assert.strictEqual(convert(5.7, "L"), 1.50578);
  });
  // convertHandler should correctly convert mi to km.
  test("Convert mi to km", function () {
    assert.strictEqual(convert(1, "mi"), 1.60934);
    assert.strictEqual(convert(3.4, "mi"), 5.47176);
    assert.strictEqual(convert(5.7, "mi"), 9.17324);
  });
  // convertHandler should correctly convert km to mi.
  test("Convert km to mi", function () {
    assert.strictEqual(convert(1, "km"), 0.62137);
    assert.strictEqual(convert(3.4, "km"), 2.11267);
    assert.strictEqual(convert(5.7, "km"), 3.54182);
  });
  // convertHandler should correctly convert lbs to kg.
  test("Convert lbs to kg", function () {
    assert.strictEqual(convert(1, "lbs"), 0.45359);
    assert.strictEqual(convert(3.4, "lbs"), 1.54221);
    assert.strictEqual(convert(5.7, "lbs"), 2.58547);
  });
  // convertHandler should correctly convert kg to lbs.
  test("Convert km to mi", function () {
    assert.strictEqual(convert(1, "kg"), 2.20462);
    assert.strictEqual(convert(3.4, "kg"), 7.49572);
    assert.strictEqual(convert(5.7, "kg"), 12.56636);
  });
});
