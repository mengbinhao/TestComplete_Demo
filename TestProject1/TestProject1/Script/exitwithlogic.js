﻿function exitWithLogic() {
    let indel = Project.Variables.indel;
    //need logonClass active and at front
    //indel.logonClass.Close();
    
    //too violence, unnormal exit, will have popup unnormal when next login
    //Sys.Process(indel.procesName).Terminate();
    
    //close INDELP~1 process 
    //can not close due to pupup a comfirm popup
    Sys.Process(indel.procesName).Close();
  
    //handle locate main UI
    //do not save any data
    if (indel.patient_update_popup.Exists) {
        indel.patient_update_popup.qt_msgbox_buttonbox.buttonNo.ClickButton();
        utilsfunction.delay(5000);
    }
        
    if (indel.quit_popup.Exists) {
        indel.quit_popup.qt_msgbox_buttonbox.buttonYes.ClickButton();
    }
}

module.exports.exitWithLogic = exitWithLogic;