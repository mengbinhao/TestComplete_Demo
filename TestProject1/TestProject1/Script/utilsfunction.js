var globalconstant = require("globalconstant");

function checkParamNull(...args)  {
    if (strictEqual(args.length, 0)) {
        return false;
    }
    return args.every((arg) => {
       return !equal(arg, null) && !equal(arg.trim(), globalconstant.obj.emptyStr);
    })
}

function checkParamRange(args, min, max)  {
  if (isNaN(args) || args < min || args > max) {
      return false;
  }
  return true;
}

function findChildObjectByRegex(parent, propName, propValue, isPartial) {
    let ret = parent.FindChild(propName, isPartial ? `regexp:${propValue}`: `regexp:^${propValue}$`);
    return (typeof ret === 'object') ? ret : null;
}

function findChildObject(parent, propNames, propValues) {
    let ret = parent.FindChild(propNames, propValues);
    return (typeof ret === 'object') ? ret : null;
}

function findChildObjectText(parent, propNames, propValues) {
    let ret = findChildObject(parent, propNames, propValues);
    return (typeof ret == null) ? globalconstant.obj.emptyStr : ret.wText;
}

function isEmptyObject(obj) {
    if (!obj || typeof obj !== 'object' || Array.isArray(obj))
        return false;
    return !Object.keys(obj).length;
}

function delay(seconds) {
    aqUtils.Delay(seconds);
}

function strReplace(str, stringToReplace, subString) {
    return aqString.Replace(str, stringToReplace, subString);
}

function getRandom() {
    return Math.random();
}
 
function getRandomArbitrary(min, max) {
    return Math.random()*(max-min)+min;
}
 
function getRandomInt(min, max) {
    return Math.round(Math.random()*(max-min)+min);
}

//like 2018/11/14 11:44:57
function getTimeAsStr() {
    return aqConvert.DateTimeToStr(aqDateTime.Now());
}

//43418.4895486111
function getTimeAsFloat() {
    return aqConvert.FloatToStr(aqDateTime.Now());
}

//support.smartbear.com/testcomplete/docs/reference/program-objects/aqdatetime/date-and-time-format-specifiers.html
//"%Y-%m-%d-%H-%M-%S"
function getTimeAsFormatStr(formatStr) {
    return aqConvert.DateTimeToFormatStr(aqDateTime.Now(), formatStr);
}

module.exports.checkParamNull = checkParamNull;
module.exports.checkParamRange = checkParamRange;
module.exports.findChildObject = findChildObject;
module.exports.findChildObjectText = findChildObjectText;
module.exports.isEmptyObject = isEmptyObject;
module.exports.delay = delay;
module.exports.strReplace = strReplace;
module.exports.getRandomInt = getRandomInt;
module.exports.getTimeAsStr = getTimeAsStr;
module.exports.getTimeAsFloat = getTimeAsFloat;
module.exports.getTimeAsFormatStr = getTimeAsFormatStr;