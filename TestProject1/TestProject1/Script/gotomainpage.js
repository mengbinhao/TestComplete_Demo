var indelplanUI = require("indelplanUI");
var utilsfunction = require("utilsfunction");

function gotomainpage() {
    let indel = Project.Variables.indel;
    
    indel.intergratedGamaClass.Close();
    
    if (indel.update_popup.Exists) {
        indel.update_popup.qt_msgbox_buttonbox.buttonYes.ClickButton();
        utilsfunction.delay(60000)
    }
    
    if (indel.contour_to_plan_popup.Exists) {
        indel.contour_to_plan_popup.qt_msgbox_buttonbox.buttonYes.ClickButton();   
    }
    
    if (indel.update_popup.Exists) {
        indel.update_popup.qt_msgbox_buttonbox.buttonYes.ClickButton();   
        utilsfunction.delay(60000)
    }
    
    if (indel.update_then_save_popup.Exists) {
        indel.update_then_save_popup.qt_msgbox_buttonbox.buttonYes.ClickButton();   
    }

    if (indel.plan_finished_popup.Exists) {
        indel.plan_finished_popup.qt_msgbox_buttonbox.buttonYes.ClickButton();   
    }    
    
    //Here is a bug
    //Here is a bug
    while (indel.save_popup.Exists) {
        indel.save_popup.qt_msgbox_buttonbox.buttonOk.ClickButton();   
    }
    
    if (indel.confirm_popup.Exists) {
        indel.confirm_popup.qt_msgbox_buttonbox.buttonOk.ClickButton();   
    }
    
    indel.quit_popup.qt_msgbox_buttonbox.buttonCancel.ClickButton();
    aqObject.CheckProperty(indel.patientManagementWidget.groupBox.frame.pushButton_SystemLog, "Visible", cmpEqual, true);
}