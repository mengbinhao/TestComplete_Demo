﻿let obj = {}

//patient detail tab
obj.patientManagement = 'PatientManagement';
obj.contour = 'Contour';
obj.planDesign = 'PlanDesign';


//file related
obj.indelPath = 'D:\\IndelPlan\\';
obj.systemConfigFile = 'SystemConfig.ini';
obj.temp = '_temp';
obj.doubleBackslashes = '\\\\';
obj.backslash = '\\';
obj.exportFolder = 'AutoTested';


//list column
obj.machineConfigNameColumn = 'Config Name';
obj.itemColumn = 'Item';
obj.currentColumn = 'Current';
obj.userNameColumn = 'User Name';
obj.userTypeColumn = 'User Type';
obj.patientName = 'Name';
obj.patientID = 'ID';
obj.contourLibName = 'Name';


//property prefix
obj.inputPrefix = 'lineEdit_';
//TC property name
obj.objectName = 'objectName';


//for magic number or string
obj.userMaxLength = 30,
obj.passMaxLength = 10,
obj.numberAndLetter = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
//Note: ! and ^ has special meaning while passing to Keys as parameter
//so need to write at the end of wrongInput
obj.wrongInput = '@#$%&* ()-_=+.`,<>/?\'\"[]{}\\|~^!';
obj.spaceStr = ' ';
obj.emptyStr = '';
obj.configFileSuffix = '.cfg';
obj.notFoundIndex = -1;


//dirty data
obj.user = 'user';
obj.machine = 'machine';
obj.patient = 'patient';
obj.contourLib = 'contourLib';

module.exports.obj = obj;