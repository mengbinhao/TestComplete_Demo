function paramCheck(...args)  {
  if (strictEqual(args.length, 0)) {
      return false;
  }
  return args.every((arg) => {
     return !equal(arg, null) && !equal(arg.trim(), '');
  })
}

function isEmptyObject(obj) {
    if (!obj || typeof obj !== 'object' || Array.isArray(obj))
        return false;

    return !Object.keys(obj).length;
}

function delay(seconds) {
    aqUtils.Delay(seconds);
}

module.exports.paramCheck = paramCheck;
module.exports.isEmptyObject = isEmptyObject;
module.exports.delay = delay;