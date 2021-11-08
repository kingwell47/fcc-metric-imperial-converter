function ConvertHandler() {
  const regex =
    /^(\d+|(\d|\d\.\d)\/(\d|\d\.\d)\/?(\d|\d\.\d)?|\d\.\d)?([\w]+)$/;

  this.getNum = function (input) {
    const resultMatch = input.match(regex);

    if (!resultMatch) return null;
    if (!resultMatch[1]) return 1;
    if (resultMatch[1].includes("/")) {
      const res = resultMatch[1].split("/");
      if (res.length > 2) return null;
      return res[0] / res[1];
    }
    return parseFloat(resultMatch[1]);
  };

  this.getUnit = function (input) {
    const resultMatch = input.match(regex);
    if (!resultMatch) return null;
    const inputUnit = resultMatch[resultMatch.length - 1];
    if (!inputUnit.match(/^(gal|[Ll]|mi|km|lbs|kg)$/)) return null;
    if (inputUnit === "l") return "L";
    return inputUnit;
  };

  this.getReturnUnit = function (initUnit) {
    let result = null;
    switch (initUnit.toLowerCase()) {
      case "gal":
        result = "L";
        break;
      case "l":
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
      default:
        break;
    }
    return result;
  };

  this.spellOutUnit = (unit) => {
    let result = null;
    switch (unit.toLowerCase()) {
      case "gal":
        result = "gallons";
        break;
      case "l":
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
      default:
        break;
    }
    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let initialVal = initNum;

    let result = null;
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
      default:
        break;
    }
    return parseFloat(result.toFixed(5));
  };

  this.getString = (initNum, initUnit, returnNum, returnUnit) => {
    const spellOutInitUnit = this.spellOutUnit(initUnit);
    const spellOutReturnUnit = this.spellOutUnit(returnUnit);
    return `${initNum} ${this.spellOutUnit(
      initUnit
    )} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = ConvertHandler;
