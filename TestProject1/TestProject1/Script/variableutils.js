function getVariableValue(variableName) {
    let ret = '';
    var Variables = Project.Variables;
    if (Variables.VariableExists(variableName)) {
      ret = Variables.GetVariableDefaultValue(variableName);
    }
    return ret; 
}

module.exports.getVariableValue = getVariableValue;