"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();

  app.route("/api/convert").get((req, res) => {
    const { getNum, getUnit, getReturnUnit, spellOutUnit, convert, getString } =
      convertHandler;

    const inputNum = getNum("100kmk");
    // const inputUnit = getUnit(req.query.input);

    // if (!inputNum && !inputUnit) return res.json("invalid number and unit");
    // if (!inputNum) return res.json("invalid number");
    // if (!inputUnit) return res.json("invalid unit");

    console.log(inputNum);
    console.log(inputUnit);
    // console.log(req.query.input);

    // const convertNum;
    // const convertUnit;

    // res.json({ input: req.query.input });
  });
};
