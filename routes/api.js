"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();

  app.route("/api/convert").get((req, res) => {
    const { getNum, getUnit, getReturnUnit, spellOutUnit, convert, getString } =
      convertHandler;

    const inputNum = getNum(req.query.input);
    const inputUnit = getUnit(req.query.input);

    if (!inputNum && !inputUnit) return res.json("invalid number and unit");
    if (!inputNum) return res.json("invalid number");
    if (!inputUnit) return res.json("invalid unit");

    const convertNum = convert(inputNum, inputUnit);
    const convertUnit = getReturnUnit(inputUnit);

    const stringVal = getString(inputNum, inputUnit, convertNum, convertUnit);

    res.json({
      initNum: inputNum,
      initUnit: inputUnit,
      returnNum: convertNum,
      returnUnit: convertUnit,
      string: stringVal,
    });
  });
};
