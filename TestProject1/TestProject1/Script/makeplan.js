var utilsfunction = require("utilsfunction");
var addtargetpoint = require("addtargetpoint");

function makeplan(percentage, doseValue, confirmUserName, confirmPassword, x, y) {
    let indel = Project.Variables.indel;
    let splitter = indel.PlanGUI.widget.splitter;   

    if(!utilsfunction.checkParamNull(percentage, doseValue, confirmUserName, confirmPassword, x, y)) {
        Log.Error(`Please input valid percentage=${percentage} or dosevalue=${doseValue} or confirmusername=${confirmUserName} or confirmpassword=${confirmPassword} or x=${x} or y=${y}`);
        //Runner.Stop(true) do not pass globle param (like indel), after cases all fail
        Runner.Stop(true);
    }
    
    addtargetpoint.addtargetpoint(x, y)
  
    splitter.widget_2.pbCalDose.ClickButton();
    utilsfunction.delay(5000);
    splitter.widget_2.cbSample.setCurrentIndex(1);
    splitter.widget_2.pbCalDose.ClickButton();
    utilsfunction.delay(5000);
  
    splitter.widget_4.groupBox_5.tableWidget_PD.qt_scrollarea_viewport.SpinBox.qt_spinbox_lineedit.SetText(percentage);
    splitter.widget_4.groupBox_5.tableWidget_PD.qt_scrollarea_viewport.SpinBox2.qt_spinbox_lineedit.SetText(doseValue);
    indel.PlanGUI.widget.splitter.widget_4.pbSetPD.ClickButton();
    utilsfunction.delay(10000);
  
    splitter.widget_4.pbFraction.ClickButton();
    utilsfunction.delay(5000);
    indel.main.dlgfractionClass.Close();
  
    splitter.widget_4.pbConfirm.ClickButton();
    
    aqObject.CheckProperty(indel.main.plandlgConformClass.sigList.wItems, "Count", cmpEqual, 0);
    
    indel.main.plandlgConformClass.pbConfirm.ClickButton();
    indel.main.AuthorityCheckDlgClass.lineEdit.SetText(confirmUserName);
    indel.main.AuthorityCheckDlgClass.lineEdit_2.SetText(confirmPassword);
    indel.main.AuthorityCheckDlgClass.pushButton.ClickButton();
    indel.main.plan_confirm_popup.qt_msgbox_buttonbox.buttonOk.ClickButton();
  
    aqObject.CheckProperty(indel.main.plandlgConformClass.sigList.wItems, "Count", cmpEqual, 1);
    indel.main.plandlgConformClass.Close();
}
