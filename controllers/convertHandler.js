function ConvertHandler() {
  const regex = /^(\d+|(\d|\d\.\d)\/(\d|\d\.\d)|\d\.\d)?(gal|L|mi|km|lbs|kg)$/;

  this.getNum = function (input) {
    let result = 1;
    const resultMatch = input.match(regex);

    if (resultMatch[1]) {
      if (resultMatch[1].includes("/")) {
        const res = resultMatch[1].split("/");
        result = res[0] / res[1];
      } else {
        result = resultMatch[1];
      }
    }

    return result;
  };

  this.getUnit = function (input) {
    const resultMatch = input.match(regex);
    return resultMatch[2];
  };

  this.getReturnUnit = function (initUnit) {
    let result;
    switch (initUnit) {
      case "gal":
        result = "L";
        break;
      case "L":
        result = "gal";
        break;
      case "mi":
        result = "km";
        break;
      case "km":
        result = "mi";
        break;
      case "lbs":
        result = "kg";
        break;
      case "kg":
        result = "lbs";
        break;
    }
    return result;
  };

  this.spellOutUnit = function (unit) {
    let result;
    switch (unit) {
      case "gal":
        result = "gallons";
        break;
      case "L":
        result = "liters";
        break;
      case "mi":
        result = "miles";
        break;
      case "km":
        result = "kilometers";
        break;
      case "lbs":
        result = "pounds";
        break;
      case "kg":
        result = "kilograms";
        break;
    }
    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let initialVal = initNum;

    let result;
    switch (initUnit) {
      case "gal":
        result = initialVal * galToL;
        break;
      case "L":
        result = initialVal / galToL;
        break;
      case "mi":
        result = initialVal * miToKm;
        break;
      case "km":
        result = initialVal / miToKm;
        break;
      case "lbs":
        result = initialVal * lbsToKg;
        break;
      case "kg":
        result = initialVal / lbsToKg;
        break;
    }
    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(
      initUnit
    )} converts to ${returnNum.toFixed(5)} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = ConvertHandler;
