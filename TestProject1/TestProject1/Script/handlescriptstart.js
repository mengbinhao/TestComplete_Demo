var indelplanUI = require("indelplanUI");

function GeneralEvents_OnStartTest(Sender) {
    if (!Project.Variables.VariableExists('indel')) {
        Project.Variables.AddVariable("indel", "Object");  
    }
    Project.Variables.indel = indelplanUI.initUI();
}