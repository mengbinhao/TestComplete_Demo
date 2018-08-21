var indelplanUI = require("indelplanUI");
var utilsfunction = require("utilsfunction");
var imagesfunction = require("imagesfunction");
var findItemInList = require("findItemInList");

function addcontour(treatPart) {
    let field = 'Treat Part';
    let indel = Project.Variables.indel;

    if(!utilsfunction.paramCheck(treatPart)) {
        Log.Error("Please input valid treatPart");
        //Runner.Stop(true) do not pass globle param (like indel), after cases all fail
        //Runner.Stop(true) do not pass globle param (like indel), after cases all fail
        Runner.Stop(true);
    }
    
    let count = indel.patientDataClass.groupBox.treeWidget_StudyList.wItems;
    
    aqObject.CheckProperty(count, "Count", cmpEqual, 0);
  
    //Only add contout when patient does not have one
    if (strictEqual(count.Count, 0)) {
        //Goto contour
        indel.patientDataClass.groupBox.pushButton_AddStudy.ClickButton();
  
        let imageList = indel.gamaImporterClass.treeWidget;
        
        if (!findItemInList.isItemExist(treatPart, field, imageList)) {
            Log.Error('Can not find images with treat part ' + treatPart);
            //Runner.Stop(true) do not pass globle param (like indel), after cases all fail
            //Runner.Stop(true) do not pass globle param (like indel), after cases all fail
            Runner.Stop(true);
        }
  
        imagesfunction.openImages(treatPart, field, imageList);
  
        let tab = indel.gamaImporterClass.tabWidget.qt_tabwidget_stackedwidget.tab;
        tab.toolButton.ClickButton();
  
        LLPlayer.MouseMove(1920 / 2, 1080 / 2, 2000);
        indel.gamaImporterClass.wdMainView.ClickR();
        utilsfunction.delay(30000);
  
        tab.pushButton.ClickButton();
        indel.main.CDeviationTableDlg.Close();
  
        tab.ConfirmRegisterBotton.ClickButton();
        utilsfunction.delay(30000)
  
        indel.gamaImporterClass.pbSaveStudy.ClickButton();
  
        indel.main.save_study_popup_1.qt_msgbox_buttonbox.buttonIgnore.ClickButton();
  
        indel.main.save_study_popup_2.qt_msgbox_buttonbox.buttonYes.ClickButton();
  
        utilsfunction.delay(30000)
  
        indel.main.save_study_popup_3.qt_msgbox_buttonbox.buttonOk.ClickButton();
  
        indel.gamaImporterClass.pbClose.ClickButton();
  
        aqObject.CheckProperty(count, "Count", cmpEqual, 1);
    }
}