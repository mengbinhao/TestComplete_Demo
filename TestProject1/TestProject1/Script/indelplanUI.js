let indel = {};

function initUI() {    
    indel.procesName = 'IndelPlanV2.0';
    indel.main = Aliases.INDELP;
    //LOGIN
    indel.login = indel.main.logonClass;
    indel.user_logged_popup = indel.main.user_logged_popup;
    indel.user_non_normal_exit_popup = indel.main.user_non_normal_exit_popup;
    indel.ReloadClass = indel.main.ReloadClass;
    
    //MAIN
    indel.intergratedGamaClass = indel.main.IntergratedGamaClass;
    indel.centralWidget = indel.main.IntergratedGamaClass.centralWidget;
    indel.stackedWidget = indel.centralWidget.stackedWidget;
    indel.patientManagementWidget = indel.stackedWidget.page.PatientManagementWidget;
    indel.tabWidget = indel.centralWidget.tabWidget;   
    
    //CONTOUR
    indel.contourGUIClass = indel.stackedWidget.ContourGUIClass;
    //Import contoour
    indel.gamaImporterClass = indel.main.GamaImporterClass;
     
    //PATIENTMANAGEMENT
    indel.patientDataClass = indel.patientManagementWidget.PatientDataClass;
    indel.newpatient = indel.main.newpatientClass;
    indel.delete_patient_popup = indel.main.delete_patient_popup;
    
    //PLANDESIGN pop_up
    indel.planListClass = indel.main.PlanListClass;
    indel.planGUI = indel.stackedWidget.PlanGUI;
    
    
    //USER MANAGEMENT
    indel.user_management = indel.main.user_management;
    indel.new_user = indel.main.new_user;
    indel.delete_user_popup = indel.main.delete_user_popup;
   
    //POPUP 
    indel.update_popup = indel.main.update_popup;
    indel.contour_to_plan_popup = indel.main.contour_to_plan_popup;
    indel.update_then_save_popup = indel.main.update_then_save_popup;
    indel.save_popup = indel.main.save_popup;
    indel.confirm_popup = indel.main.confirm_popup;
    indel.interpolate_error_popup = indel.main.interpolate_error_popup;
    indel.interpolate_warning_popup = indel.main.interpolate_warning_popup;
    indel.plan_finished_popup = indel.main.plan_finished_popup;
    indel.contour_exist_popup = indel.main.contour_exist_popup;
    indel.contour_load_popup = indel.main.contour_load_popup;
    indel.data_save_pop = indel.main.data_save_pop;
    
    indel.quit_popup = indel.main.quit_popup;
    return indel;
}

function getUI() {
    return indel;
}

module.exports.initUI = initUI;
module.exports.getUI = getUI;