let indel = {};

function initUI() {    
    indel.procesName = 'IndelPlanV2.0';
    indel.main = Aliases.INDELP;
    indel.dirtyData = new Map(); //clear test data
   
     
    //Login
    indel.logonClass = indel.main.logonClass;
    indel.ReloadClass = indel.main.ReloadClass; //abort、save、continue UI
    indel.login_data_save_popup = indel.main.login_data_save_popup;
    indel.login_illegal_popup = indel.main.login_illegal_popup;
    indel.login_logged_popup = indel.main.login_logged_popup;
    indel.login_nonnormal_popup = indel.main.login_nonnormal_popup;
    indel.login_wrong_password_popup = indel.main.login_wrong_password_popup;
    indel.login_wrong_username_popup = indel.main.login_wrong_username_popup;
   
         
    //patient detail tab
    indel.contour_switchtab_popup = indel.main.contour_switchtab_popup;
 
       
    //Main
    indel.IntergratedGamaClass = indel.main.IntergratedGamaClass;
    indel.centralWidget = indel.main.IntergratedGamaClass.centralWidget;
    indel.stackedWidget = indel.centralWidget.stackedWidget;
    indel.PatientManagementWidget = indel.stackedWidget.page.PatientManagementWidget;
    indel.groupBox = indel.PatientManagementWidget.groupBox; //below is each main UI part
    indel.tabWidget = indel.centralWidget.tabWidget; //upper system button and three tabs

    
    //Contour
    indel.GamaImporterClass = indel.main.GamaImporterClass;  //import images
    indel.ContourGUIClass = indel.stackedWidget.ContourGUIClass; //sketch contour UI
    indel.contour_draw_skin_popup = indel.main.contour_draw_skin_popup;
    indel.contour_exist_popup = indel.main.contour_exist_popup; //exist in contourLib
    indel.contour_interpolate_error_popup = indel.main.contour_interpolate_error_popup;
    indel.contour_interpolate_warning_popup = indel.main.contour_interpolate_warning_popup;
    indel.contour_load_popup = indel.main.contour_load_popup;
    indel.contour_no_skin_popup = indel.main.contour_no_skin_popup;
    indel.contour_save_popup = indel.main.contour_save_popup;
    indel.contour_save_study_popup_1 = indel.main.contour_save_study_popup_1;
    indel.contour_save_study_popup_2 = indel.main.contour_save_study_popup_2;
    indel.contour_save_study_popup_3 = indel.main.contour_save_study_popup_3;
    indel.contour_skin_incomplete_popup = indel.main.contour_skin_incomplete_popup; // from contour to plan
    indel.contour_switchtab_nostudy_popup = indel.main.contour_switchtab_nostudy_popup; // switch to contour
    indel.contour_choose_patient_popup = indel.main.contour_choose_patient_popup; // switch to contour
    indel.DlgContourItemClass = indel.main.DlgContourItemClass;  //add contourlib
    indel.contour_chooseitem_popup = indel.main.contour_chooseitem_popup;  //choose contour item for operate
    
    
    //Patient Management
    indel.PatientDataClass = indel.PatientManagementWidget.PatientDataClass;   //patient detail
    indel.newpatientClass = indel.main.newpatientClass;
    indel.patient_delete_popup = indel.main.patient_delete_popup;
    indel.patient_update_popup = indel.main.patient_update_popup;
    
    
    //Plan
    indel.PlanListClass = indel.main.PlanListClass;  //add plan UI
    indel.PlanGUI = indel.stackedWidget.PlanGUI;  //make plan UI
    indel.plan_add_popup = indel.main.plan_add_popup;
    indel.plan_confirm_popup = indel.main.plan_confirm_popup;
    indel.plan_finished_popup = indel.main.plan_finished_popup;
    indel.plan_irradiatingtime_popup = indel.main.plan_irradiatingtime_popup; //irradiatingtime too short
    indel.plan_reconfirm_popup = indel.main.plan_reconfirm_popup;
    indel.plan_save_popup = indel.main.plan_save_popup;
    indel.plan_nomodule_popup = indel.main.plan_nomodule_popup;  //switch to plandesign
    indel.plan_want_save_popup = indel.main.plan_want_save_popup; //from plandesign switch to others
    indel.plan_nocontourstudy_popup = indel.main.plan_nocontourstudy_popup; //add plan
    
    
    //User Management
    indel.user_management = indel.main.user_management;
    indel.new_user = indel.main.new_user;
    indel.user_delete_current_pop = indel.main.user_delete_current_pop;
    indel.user_delete_popup = indel.main.user_delete_popup;
    indel.user_incorrectconfirmedpassword_popup = indel.main.user_incorrectconfirmedpassword_popup;
    indel.user_password_cannot_be_null_popup = indel.main.user_password_cannot_be_null_popup;
    
    
    //System Setting
    indel.DlgOptionClass = indel.main.DlgOptionClass;
    indel.settings_update_popup = indel.main.settings_update_popup;
    
    
    //Physical Data
    indel.machine_management = indel.main.machine_management;
    indel.InputMachineDialog = indel.main.InputMachineDialog;
    indel.machine_physical_configs = indel.main.machine_physical_configs;
    indel.PhyDataChangeViewerClass = indel.main.PhyDataChangeViewerClass;
    indel.machine_dlgExportConfigs = indel.main.machine_dlgExportConfigs;
    indel.machine_add_existing_popup = indel.main.machine_add_existing_popup;
    indel.machine_confirm_popup = indel.main.machine_confirm_popup;
    indel.machine_delete_default_config_popup = indel.main.machine_delete_default_config_popup;
    indel.machine_delete_popup = indel.main.machine_delete_popup;
    indel.machine_delete_usepan_popup = indel.main.machine_delete_usepan_popup;
    indel.machine_edit_default_popup = indel.main.machine_edit_default_popup;
    indel.machine_export_exist_popup = indel.main.machine_export_exist_popup;
    indel.machine_import_exist_popup = indel.main.machine_import_exist_popup;
    indel.machine_OAR_popup = indel.main.machine_OAR_popup;
    indel.machine_setCurrent_popup = indel.main.machine_setCurrent_popup;
    indel.machine_TMR_popup = indel.main.machine_TMR_popup;
    
    
    //Common Popup
    indel.TPS_started_popup = indel.main.TPS_started_popup;
    indel.quit_popup = indel.main.quit_popup;
    
    return indel;
}

function getUI() {
    return indel;
}

module.exports.initUI = initUI;
module.exports.getUI = getUI;