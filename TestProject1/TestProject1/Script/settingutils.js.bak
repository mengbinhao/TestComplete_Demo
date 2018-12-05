function checkSystemConfigFile(content, trurOrFalse, ...properties) {
    for (let property of properties) {
        aqObject.CompareProperty(content, trurOrFalse ? cmpContains : cmpNotContains, property, true, 3);
    }
}

module.exports.checkSystemConfigFile = checkSystemConfigFile;