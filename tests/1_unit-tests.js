const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
  // convertHandler should correctly read a whole number input.
  test("Whole Number", function () {
    assert.equal(convertHandler.getNum("12km"), 12);
  });
  // convertHandler should correctly read a decimal number input.
  test("Decimal Number", function () {
    assert.equal(convertHandler.getNum("1.5km"), 1.5);
  });
  // convertHandler should correctly read a fractional input.
  test("Fractional Number", function () {
    assert.equal(convertHandler.getNum("1/2km"), 0.5);
  });
  // convertHandler should correctly read a fractional input with a decimal.
  test("Fractional Number with decimal", function () {
    assert.equal(convertHandler.getNum("1.5/2km"), 0.75);
    assert.equal(convertHandler.getNum("2/0.5km"), 4);
  });
  // convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).
  // convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.
  // convertHandler should correctly read each valid input unit.
  // convertHandler should correctly return an error for an invalid input unit.
  // convertHandler should return the correct return unit for each valid input unit.
  // convertHandler should correctly return the spelled-out string unit for each valid input unit.
  // convertHandler should correctly convert gal to L.
  // convertHandler should correctly convert L to gal.
  // convertHandler should correctly convert mi to km.
  // convertHandler should correctly convert km to mi.
  // convertHandler should correctly convert lbs to kg.
  // convertHandler should correctly convert kg to lbs.
});
