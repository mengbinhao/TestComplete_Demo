var indelplanUI = require("indelplanUI");

function exit() {
    let indel = Project.Variables.indel;
    //need logonClass active and at front
    //indel.login.Close();
    
    //too violence, unnormal exit, will have unnormal popup when next login
    //Sys.Process(indel.procesName).Terminate();
    
    //close INDELP~1 process 
    //can not close due to pupup a comfirm popup
    Sys.Process(indel.procesName).Close();
    
    //Checks whether the 'Exists' property of the Aliases.INDELP_1.logonClass object equals False.
    aqObject.CheckProperty(indel.login, "Exists", cmpEqual, false);
}

module.exports.exit = exit;