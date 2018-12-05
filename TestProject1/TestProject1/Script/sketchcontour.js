var utilsfunction = require("utilsfunction");
var addtargetarea = require("addtargetarea");
var addcontourlib = require("addcontourlib");
var finditeminlist = require("finditeminlist");

function sketchcontour(x1, y1, x2, y2, x3, y3) {
    let indel = Project.Variables.indel;

    if(!utilsfunction.checkParamNull(x1, y1, x2, y2, x3, y3)) {
        Log.Error(`Please input three point's coordinate x1=${x1} y1=${y1} x2=${x2} y2=${y2} x3=${x3} y3=${y3}`);
        //Runner.Stop(true) do not pass globle param (like indel), after cases all fail
        Runner.Stop(true);
    }
    
    //Goto contour
    indel.PatientDataClass.groupBox_6.pushButton_Contour.ClickButton();
  
    let contourLibList = indel.ContourGUIClass.groupBox_4.ContourLib;
  
    addOneTypeContour(contourLibList, indel, 'SKIN', x1, y1, x2, y2, x3, y3);
    addOneTypeContour(contourLibList, indel, 'TARGET', x1, y1, x2, y2, x3, y3);
    
    //Save
    indel.centralWidget.tabWidget.qt_tabwidget_stackedwidget.tab_2.toolButton_20.ClickButton();
    //Here is a bug
    //Here is a bug
    while (indel.main.save_contour_popup.Exists) {
        indel.main.save_contour_popup.qt_msgbox_buttonbox.buttonOk.ClickButton();
    }
}

function addOneTypeContour(contourLibList, indel, type, x1, y1, x2, y2, x3, y3) {

    let ret = finditeminlist.isItemExistReturnIndex(type, 'Type', contourLibList);
    
    if (strictEqual(ret, -1)) {
       ret = addcontourlib.addContourLib(type, contourLibList,indel)
    }
    
    contourLibList.ClickItem(ret);
    indel.ContourGUIClass.groupBox_4.LoadToPlanLib.ClickButton();
    
    if (strictEqual(type, 'SKIN')) {
        indel.centralWidget.tabWidget.qt_tabwidget_stackedwidget.tab_2.toolButton_17.ClickButton();
        if (indel.contour_load_popup.Exists) {
            indel.contour_load_popup.qt_msgbox_buttonbox.buttonOk.ClickButton();
        }
        LLPlayer.MouseMove(1920 / 2, 1080 / 2, 2000);
        indel.ContourGUIClass.canvas.C2DViewer.ClickR();
        utilsfunction.delay(180000)
    } else if (strictEqual(type, 'TARGET')) {
        addtargetarea.addTargetarea(x1, y1, x2, y2, x3, y3, indel);
    } else {
        Log.Error(`Please input valid contour type=${type}`);
        Runner.Stop(true);
    }
}