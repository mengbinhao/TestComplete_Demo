var globalconstant = require("globalconstant");

function getProjectVariableValue(variableName) {
    let ret = globalconstant.obj.emptyStr;
    var Variables = Project.Variables;
    if (Variables.VariableExists(variableName)) {
      ret = Variables.GetVariableDefaultValue(variableName);
    }
    return ret; 
}

module.exports.getProjectVariableValue = getProjectVariableValue;