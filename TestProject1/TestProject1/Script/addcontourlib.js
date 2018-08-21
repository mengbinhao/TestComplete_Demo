var findItemInList = require("findItemInList");

function addContourLib(type, contourLibList, indel) {
    //Click add
    indel.contourGUIClass.groupBox_4.AddToLib.ClickButton();
    
    //Choice SKIN
    if (strictEqual(type, 'SKIN')) {
        indel.main.DlgContourItemClass.ContourType.setCurrentIndex(2);
    }
  
    indel.main.DlgContourItemClass.OperationDone.ClickButton();
  
    //handle exist name
    while (indel.contour_exist_popup.Exists) {
        indel.contour_exist_popup.qt_msgbox_buttonbox.buttonOk.ClickButton();
        changeContourName(indel);
    }
    
    return findItemInList.isItemExistReturnIndex(type, 'Type', contourLibList);
}

function changeContourName(indel) {
    indel.main.DlgContourItemClass.ContourName.SetText('CTV' + parseInt(Math.random() * 1000000));
    indel.main.DlgContourItemClass.OperationDone.ClickButton();
}

module.exports.addContourLib = addContourLib;