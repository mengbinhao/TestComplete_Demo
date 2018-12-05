var globalconstant = require("globalconstant");

//for user_manager/machine list
function getColumnHearders(list) {
    let ret = [];
    for (let i = 0; i < list.wColumnCount; i++) {
      ret.push(list.wColumn(i));
    }
    return ret;
}

//for user_manager/machine list
function isItemInList(fieldValue, field, list) {
    let rows = list.wRowCount - 1;
    while (rows >= 0) {
      let val = list.wValue(rows, field);
      if (strictEqual(val, fieldValue)) {
          return true;
      }
      rows--;
    }
    return false;
}

//for user_manager/machine list
function isItemInListReturnIndex(fieldValue, field, list) {
    let rows = list.wRowCount - 1;
    while (rows >= 0) {
      let val = list.wValue(rows, field);
      if (strictEqual(val, fieldValue)) {
          return rows;
      }
      rows--;
    }
    return globalconstant.obj.notFoundIndex;
}

//for user_manager/machine list
function getFieldValue(row, wantField, list) {
    return list.wValue(row, wantField) || globalconstant.obj.emptyStr;
}

//for patient/images/contour/settingcheck/machine_change_view list
function getFieldValueForMoreList(row, col, list) {
    return list.wItems.Item(row).Text(col) || globalconstant.obj.emptyStr;
}

//for patient/images/contour/settingcheck/machine_change_view list
function isItemExist(val, field, list) {
  let rows = list.wItems.count - 1;
  for (let i = 0; i <= rows; i++) {
    if (strictEqual(list.wItems.item(i).Text(field), val)) {
      return true;
    }
  }
  return false;
}

//for patient/images/contour/settingcheck/machine_change_view list
function isItemExistReturnIndex(val, field, list) {
    let rows = list.wItems.count - 1;
    for (let i = 0; i <= rows; i++) {
        if (strictEqual(list.wItems.item(i).Text(field), val)) {
            return i;
        }
    }
    return globalconstant.obj.notFoundIndex;
}

//for patient/images/contour/settingcheck/machine_change_view list
function getFieldValueForList(propertyValue, getField, wantField, list) {
    let rows = list.wItems.count - 1;
    for (let i = 0; i <= rows; i++) {
        if (strictEqual(list.wItems.item(i).Text(getField), propertyValue)) {
            return list.wItems.item(i).Text(wantField);
        }
    }
    return globalconstant.obj.emptyStr;
}

//for patient/images/contour/settingcheck list
function getPatientReturnObject(id, patientList) {
  let ret = {};
  let rows = patientList.wItems.count - 1;
  for (let i = 0; i <= rows; i++) {
    let findId = patientList.wItems.item(i).Text('ID');
    if (strictEqual(findId, id)) {
      ret.id = patientList.wItems.item(i).Text('ID');
      ret.name = patientList.wItems.item(i).Text('Name');
      ret.gender = patientList.wItems.item(i).Text('Gender');
      ret.age = patientList.wItems.item(i).Text('Age');
      ret.height = patientList.wItems.item(i).Text('Height');
      ret.weight = patientList.wItems.item(i).Text('Weight');
      ret.phone = patientList.wItems.item(i).Text('Phone');
      ret.address = patientList.wItems.item(i).Text('Address');
      ret.createTime = patientList.wItems.item(i).Text('Create Time');
      return ret;
    }
  }
  return ret;
}

module.exports.isItemInListReturnIndex = isItemInListReturnIndex;
module.exports.getFieldValue = getFieldValue;
module.exports.getFieldValueForMoreList = getFieldValueForMoreList;
module.exports.isItemExist = isItemExist;
module.exports.isItemExistReturnIndex = isItemExistReturnIndex;
module.exports.getFieldValueForList = getFieldValueForList;
module.exports.getColumnHearders = getColumnHearders;