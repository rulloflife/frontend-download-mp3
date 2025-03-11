export enum RolePermissionEnum {
    // spacial permission
    update_approved_request = 'update_approved_request',

    view_role_setting = 'view_role_setting',
    add_role_setting = 'add_role_setting',
    edit_role_setting = 'edit_role_setting',
    delete_role_setting = 'delete_role_setting',

    view_org = 'view_org',
    add_org = 'add_org',
    edit_org = 'edit_org',
    delete_org = 'delete_org',

    view_org_place = 'view_org_place',
    add_org_place = 'add_org_place',
    edit_org_place = 'edit_org_place',
    delete_org_place = 'delete_org_place',

    view_org_place_setting = 'view_org_place_setting',
    add_org_place_setting = 'add_org_place_setting',
    edit_org_place_setting = 'edit_org_place_setting',
    delete_org_place_setting = 'delete_org_place_setting',

    view_status_setting = 'view_status_setting',
    add_status_setting = 'add_status_setting',
    self_add_status_setting = 'self_add_status_setting',
    edit_status_setting = 'edit_status_setting',
    delete_status_setting = 'delete_status_setting',

    view_personal_info_setting = 'view_personal_info_setting',
    add_personal_info_setting = 'add_personal_info_setting',
    self_add_personal_info_setting = 'self_add_personal_info_setting',
    edit_personal_info_setting = 'edit_personal_info_setting',
    delete_personal_info_setting = 'delete_personal_info_setting',

    view_background_setting = 'view_background_setting',
    add_background_setting = 'add_background_setting',
    self_add_background_setting = 'self_add_background_setting',
    edit_background_setting = 'edit_background_setting',
    delete_background_setting = 'delete_background_setting',

    view_document_setting = 'view_document_setting',
    add_document_setting = 'add_document_setting',
    self_add_document_setting = 'self_add_document_setting',
    edit_document_setting = 'edit_document_setting',
    delete_document_setting = 'delete_document_setting',

    view_employee = "view_employee",
    add_employee = "add_employee",
    edit_employee = "edit_employee",
    delete_employee = "delete_employee",
    employee_request_update = "employee_request_update",
    validate_employee_request_update = "validate_employee_request_update",
    view_dashboard = "view_dashboard",

    view_employee_auth = "view_employee_auth",
    add_employee_auth = "add_employee_auth",
    edit_employee_auth = "edit_employee_auth",

    view_employee_bank = "view_employee_bank",
    edit_employee_bank = "edit_employee_bank",

    view_employee_family = "view_employee_family",
    add_employee_family = "add_employee_family",
    edit_employee_family = "edit_employee_family",
    delete_employee_family = "delete_employee_family",

    view_job_setting = "view_job_setting",
    add_job_setting = "add_job_setting",
    self_add_job_setting = "self_add_job_setting",
    edit_job_setting = "edit_job_setting",
    delete_job_setting = "delete_job_setting",

    view_school_setting = "view_school_setting",
    add_school_setting = "add_school_setting",
    self_add_school_setting = "self_add_school_setting",
    edit_school_setting = "edit_school_setting",
    delete_school_setting = "delete_school_setting",

    view_address_setting = "view_address_setting",
    add_address_setting = "add_address_setting",
    edit_address_setting = "edit_address_setting",
    delete_address_setting = "delete_address_setting",

    view_language_setting = "view_language_setting",
    add_language_setting = "add_language_setting",
    self_add_language_setting = "self_add_language_setting",
    edit_language_setting = "edit_language_setting",
    delete_language_setting = "delete_language_setting",

    view_employee_background = "view_employee_background",
    add_employee_background = "add_employee_background",
    edit_employee_background = "edit_employee_background",
    delete_employee_background = "delete_employee_background",

    view_employee_board_director = "view_employee_board_director",
    add_employee_board_director = "add_employee_board_director",
    edit_employee_board_director = "edit_employee_board_director",
    delete_employee_board_director = "delete_employee_board_director",

    view_employee_self_registration = "view_employee_self_registration",
    add_employee_self_registration = "add_employee_self_registration",
    edit_employee_self_registration = "edit_employee_self_registration",
    delete_employee_self_registration = "delete_employee_self_registration",

    validate_employee_self_registration = "validate_employee_self_registration",

    view_contract_setting = "view_contract_setting",
    add_contract_setting = "add_contract_setting",
    edit_contract_setting = "edit_contract_setting",
    delete_contract_setting = "delete_contract_setting",

    view_overtime_setting = "view_overtime_setting",
    add_overtime_setting = "add_overtime_setting",
    self_add_overtime_setting = "self_add_overtime_setting",
    edit_overtime_setting = "edit_overtime_setting",
    delete_overtime_setting = "delete_overtime_setting",

    view_employee_contract = "view_employee_contract",
    add_employee_contract = "add_employee_contract",
    delete_employee_contract = "delete_employee_contract",

    request_employee_contract = "request_employee_contract",
    validate_employee_contract = "validate_employee_contract",
    force_update_employee_contract = "force_update_employee_contract",

    view_employee_wage = "view_employee_wage",
    add_employee_wage = "add_employee_wage",
    delete_employee_wage = "delete_employee_wage",

    request_employee_wage = "request_employee_wage",
    validate_employee_wage = "validate_employee_wage",
    force_update_employee_wage = "force_update_employee_wage",

    view_leave_setting = "view_leave_setting",
    add_leave_setting = "add_leave_setting",
    edit_leave_setting = "edit_leave_setting",
    delete_leave_setting = "delete_leave_setting",

    view_termination_setting = "view_termination_setting",
    add_termination_setting = "add_termination_setting",
    self_add_termination_setting = "self_add_termination_setting",
    edit_termination_setting = "edit_termination_setting",
    delete_termination_setting = "delete_termination_setting",

    view_employee_termination = "view_employee_termination",
    add_employee_termination = "add_employee_termination",
    delete_employee_termination = "delete_employee_termination",

    request_employee_termination = "request_employee_termination",
    validate_employee_termination = "validate_employee_termination",
    force_update_employee_termination = "force_update_employee_termination",

    view_warning_setting = "view_warning_setting",
    add_warning_setting = "add_warning_setting",
    self_add_warning_setting = "self_add_warning_setting",
    edit_warning_setting = "edit_warning_setting",
    delete_warning_setting = "delete_warning_setting",

    view_employee_warning = "view_employee_warning",
    add_employee_warning = "add_employee_warning",
    delete_employee_warning = "delete_employee_warning",

    request_employee_warning = "request_employee_warning",
    validate_employee_warning = "validate_employee_warning",
    force_update_employee_warning = "force_update_employee_warning",

    view_training_setting = "view_training_setting",
    add_training_setting = "add_training_setting",
    self_add_training_setting = "self_add_training_setting",
    edit_training_setting = "edit_training_setting",
    delete_training_setting = "delete_training_setting",

    view_employee_training = "view_employee_training",
    add_employee_training = "add_employee_training",
    self_add_employee_training = "self_add_employee_training",
    delete_employee_training = "delete_employee_training",

    request_employee_training = "request_employee_training",
    self_request_employee_training = "self_request_employee_training",
    validate_employee_training = "validate_employee_training",
    force_update_employee_training = "force_update_employee_training",

    view_employee_leave = "view_employee_leave",
    add_employee_leave = "add_employee_leave",
    self_add_employee_leave = "self_add_employee_leave",
    delete_employee_leave = "delete_employee_leave",

    request_employee_leave = "request_employee_leave",
    self_request_employee_leave = "self_request_employee_leave",
    validate_employee_leave = "validate_employee_leave",

    view_employee_overtime = "view_employee_overtime",
    add_employee_overtime = "add_employee_overtime",
    self_add_employee_overtime = "self_add_employee_overtime",
    delete_employee_overtime = "delete_employee_overtime",

    request_employee_overtime = "request_employee_overtime",
    self_request_employee_overtime = "self_request_employee_overtime",
    validate_employee_overtime = "validate_employee_overtime",

    view_reward_setting = "view_reward_setting",
    add_reward_setting = "add_reward_setting",
    self_add_reward_setting = "self_add_reward_setting",
    edit_reward_setting = "edit_reward_setting",
    delete_reward_setting = "delete_reward_setting",

    view_employee_reward = "view_employee_reward",
    add_employee_reward = "add_employee_reward",
    self_add_employee_reward = "self_add_employee_reward",
    delete_employee_reward = "delete_employee_reward",

    request_employee_reward = "request_employee_reward",
    self_request_employee_reward = "self_request_employee_reward",
    validate_employee_reward = "validate_employee_reward",
    force_update_employee_reward = "force_update_employee_reward",

    view_assessment_setting = "view_assessment_setting",
    add_assessment_setting = "add_assessment_setting",
    edit_assessment_setting = "edit_assessment_setting",
    delete_assessment_setting = "delete_assessment_setting",

    view_employee_assessment = "view_employee_assessment",
    add_employee_assessment = "add_employee_assessment",
    self_add_employee_assessment = "self_add_employee_assessment",
    delete_employee_assessment = "delete_employee_assessment",

    request_employee_assessment = "request_employee_assessment",
    self_request_employee_assessment = "self_request_employee_assessment",
    validate_employee_assessment = "validate_employee_assessment",

    view_employee_leave_type = "view_employee_leave_type",
    add_employee_leave_type = "add_employee_leave_type",
    edit_employee_leave_type = "edit_employee_leave_type",
    delete_employee_leave_type = "delete_employee_leave_type",

    view_employee_other_earning = "view_employee_other_earning",
    add_employee_other_earning = "add_employee_other_earning",
    edit_employee_other_earning = "edit_employee_other_earning",
    delete_employee_other_earning = "delete_employee_other_earning",

    request_employee_other_earning = "request_employee_other_earning",
    self_request_employee_other_earning = "self_request_employee_other_earning",
    validate_employee_other_earning = "validate_employee_other_earning",
    approve_employee_other_earning = "approve_employee_other_earning",
    force_update_employee_other_earning = "force_update_employee_other_earning",

    view_employee_other_deduction = "view_employee_other_deduction",
    add_employee_other_deduction = "add_employee_other_deduction",
    edit_employee_other_deduction = "edit_employee_other_deduction",
    delete_employee_other_deduction = "delete_employee_other_deduction",

    request_employee_other_deduction = "request_employee_other_deduction",
    self_request_employee_other_deduction = "self_request_employee_other_deduction",
    validate_employee_other_deduction = "validate_employee_other_deduction",
    approve_employee_other_deduction = "approve_employee_other_deduction",
    force_update_employee_other_deduction = "force_update_employee_other_deduction",

    view_employee_attendance = "view_employee_attendance",
    add_employee_attendance = "add_employee_attendance",
    edit_employee_attendance = "edit_employee_attendance",
    delete_employee_attendance = "delete_employee_attendance",

    view_employer_setting = "view_employer_setting",
    add_employer_setting = "add_employer_setting",
    self_add_employer_setting = "self_add_employer_setting",
    edit_employer_setting = "edit_employer_setting",
    delete_employer_setting = "delete_employer_setting",

    view_employee_mission = "view_employee_mission",
    add_employee_mission = "add_employee_mission",
    self_add_employee_mission = "self_add_employee_mission",
    delete_employee_mission = "delete_employee_mission",

    request_employee_mission = "request_employee_mission",
    self_request_employee_mission = "self_request_employee_mission",
    validate_employee_mission = "validate_employee_mission",

    view_employee_report = "view_employee_report",
    view_attendance_report = "view_attendance_report",

    view_board_director_setting = "view_board_director_setting",
    add_board_director_setting = "add_board_director_setting",
    self_add_board_director_setting = "self_add_board_director_setting",
    edit_board_director_setting = "edit_board_director_setting",
    delete_board_director_setting = "delete_board_director_setting",

    view_earning_setting = "view_earning_setting",
    add_earning_setting = "add_earning_setting",
    self_add_earning_setting = "self_add_earning_setting",
    edit_earning_setting = "edit_earning_setting",
    delete_earning_setting = "delete_earning_setting",

    view_other_deduction_setting = "view_other_deduction_setting",
    add_other_deduction_setting = "add_other_deduction_setting",
    self_add_other_deduction_setting = "self_add_other_deduction_setting",
    edit_other_deduction_setting = "edit_other_deduction_setting",
    delete_other_deduction_setting = "delete_other_deduction_setting",

    view_wage_setting = "view_wage_setting",
    add_wage_setting = "add_wage_setting",
    self_add_wage_setting = "self_add_wage_setting",
    edit_wage_setting = "edit_wage_setting",
    delete_wage_setting = "delete_wage_setting",

    view_currency_setting = "view_currency_setting",
    add_currency_setting = "add_currency_setting",
    edit_currency_setting = "edit_currency_setting",
    delete_currency_setting = "delete_currency_setting",
    set_default_currency = "set_default_currency",

    view_deduction_rule_setting = "view_deduction_rule_setting",
    add_deduction_rule_setting = "add_deduction_rule_setting",
    edit_deduction_rule_setting = "edit_deduction_rule_setting",
    delete_deduction_rule_setting = "delete_deduction_rule_setting",

    view_attendance_device_setting = "view_attendance_device_setting",
    add_attendance_device_setting = "add_attendance_device_setting",
    edit_attendance_device_setting = "edit_attendance_device_setting",
    delete_attendance_device_setting = "delete_attendance_device_setting",

    view_employee_payslip = "view_employee_payslip",
    add_employee_payslip = "add_employee_payslip",
    delete_employee_payslip = "delete_employee_payslip",

    request_employee_payslip = "request_employee_payslip",
    validate_employee_payslip = "validate_employee_payslip",
    approve_employee_payslip = "approve_employee_payslip",
    force_update_employee_payslip = "force_update_employee_payslip",
}