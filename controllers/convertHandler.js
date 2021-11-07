function ConvertHandler() {
  this.getNum = function (input) {
    let result;
    const resultMatch = input.match(/^(\d+|\d\/\d)?(gal|L|mi|km|lbs|kg)$/);
    resultMatch[1] ? (result = resultMatch[1]) : (result = 1);

    return result;
  };

  this.getUnit = function (input) {
    const resultMatch = input.match(/^(\d+|\d\/\d)?(gal|L|mi|km|lbs|kg)$/);
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

    if (initNum.includes("/")) {
      const res = initNum.split("/");
      initialVal = res[0] / res[1];
    }

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
