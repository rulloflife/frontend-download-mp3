/**
 * @NOTE: Search by key: 'MAIN' , 'SUB'
 */
export enum PERMISSION {
  // -----------------------------------------------------
  // MAIN: DASHBOARD
  // -----------------------------------------------------
  READ_DASHBOARD = 'READ_DASHBOARD',

  // -----------------------------------------------------
  // MAIN: ENTERPRISE
  // -----------------------------------------------------

  // SUB: Primary WI Request Registration
  ALLOW_CREATE_WI_REQ = 'ALLOW_CREATE_WI_REQ',
  // Inspection Request
  READ_INSPECT_REQ = 'READ_INSPECT_REQ',
  ALLOW_CREATE_INSPECT_REQ = 'ALLOW_CREATE_INSPECT_REQ',
  ALLOW_EDIT_INSPECT_REC = 'ALLOW_EDIT_INSPECT_REC',
  ALLOW_DELETE_INSPECT_REQ = 'ALLOW_DELETE_INSPECT_REQ',

  // Inspection Result
  READ_INSPECT_RESULT = 'READ_INSPECT_RESULT',

  // SUB: Primary WI Request Validation
  READ_WI_REQ = 'READ_WI_REQ',
  ALLOW_ACCEPT_WI_REQ = 'ALLOW_ACCEPT_WI_REQ',
  ALLOW_RETURN_WI_REQ = 'ALLOW_RETURN_WI_REQ',
  ALLOW_REJECT_WI_REQ = 'ALLOW_REJECT_WI_REQ',
  ALLOW_EDIT_WI_REQ = 'ALLOW_EDIT_WI_REQ',
  ALLOW_ALLOCATE_WI_REQ = 'ALLOW_ALLOCATE_WI_REQ',

  // SUB: Merge/Separate Victim
  ALLOW_MERGE_SEPARATE_WI_VICTIM = 'ALLOW_MERGE_SEPARATE_WI_VICTIM',

  // -----------------------------------------------------
  // MAIN: TEMPORARY WI VICTIM
  // -----------------------------------------------------
  READ_TEMP_WI_VICTIM = 'READ_TEMP_WI_VICTIM',
  ALLOW_CREATE_TEMP_WI_VICTIM = 'ALLOW_CREATE_TEMP_WI_VICTIM',
  ALLOW_EDIT_TEMP_WI_VICTIM = 'ALLOW_EDIT_TEMP_WI_VICTIM',
  ALLOW_TRANSFER_TEMP_WI_VICTIM = 'ALLOW_TRANSFER_TEMP_WI_VICTIM',
  ALLOW_COMPLETE_TEMP_WI_VICTIM = 'ALLOW_COMPLETE_TEMP_WI_VICTIM',

  // -----------------------------------------------------
  // MAIN: RETREATMENT REQUEST
  // -----------------------------------------------------
  ALLOW_CREATE_RETREAT_REQ = 'ALLOW_CREATE_RETREAT_REQ',
  READ_RETREAT_REQ = 'READ_RETREAT_REQ',
  ALLOW_ACCEPT_RETREAT_REQ = 'ALLOW_ACCEPT_RETREAT_REQ',
  ALLOW_RETURN_RETREAT_REQ = 'ALLOW_RETURN_RETREAT_REQ',
  ALLOW_REJECT_RETREAT_REQ = 'ALLOW_REJECT_RETREAT_REQ',
  ALLOW_EDIT_RETREAT_REQ = 'ALLOW_EDIT_RETREAT_REQ',
  ALLOW_ALLOCATE_RETREAT_REQ = 'ALLOW_ALLOCATE_RETREAT_REQ',

  // -----------------------------------------------------
  // MAIN: CLAIM REQUEST
  // -----------------------------------------------------

  // SUB: Claim Temporary Request
  READ_CLAIM_TEMP_REQ = 'READ_CLAIM_TEMP_REQ',
  ALLOW_CREATE_CLAIM_TEMP_REQ = 'ALLOW_CREATE_CLAIM_TEMP_REQ',
  ALLOW_ACCEPT_CLAIM_TEMP_REQ = 'ALLOW_ACCEPT_CLAIM_TEMP_REQ',
  ALLOW_RETURN_CLAIM_TEMP_REQ = 'ALLOW_RETURN_CLAIM_TEMP_REQ',
  ALLOW_REJECT_CLAIM_TEMP_REQ = 'ALLOW_REJECT_CLAIM_TEMP_REQ',
  ALLOW_EDIT_CLAIM_TEMP_REQ = 'ALLOW_EDIT_CLAIM_TEMP_REQ',
  ALLOW_ALLOCATE_CLAIM_TEMP_REQ = 'ALLOW_ALLOCATE_CLAIM_TEMP_REQ',

  // SUB: Claim Request
  READ_CLAIM_REQ = 'READ_CLAIM_REQ',
  ALLOW_CREATE_CLAIM_REQ = 'ALLOW_CREATE_CLAIM_REQ',
  ALLOW_ACCEPT_CLAIM_REQ = 'ALLOW_ACCEPT_CLAIM_REQ',
  ALLOW_RETURN_CLAIM_REQ = 'ALLOW_RETURN_CLAIM_REQ',
  ALLOW_REJECT_CLAIM_REQ = 'ALLOW_REJECT_CLAIM_REQ',
  ALLOW_EDIT_CLAIM_REQ = 'ALLOW_EDIT_CLAIM_REQ',
  ALLOW_ALLOCATE_CLAIM_REQ = 'ALLOW_ALLOCATE_CLAIM_REQ',
  ALLOW_TRANSFER_TO_DOCTOR = 'ALLOW_TRANSFER_TO_DOCTOR',
  ALLOW_TRANSFER_TO_CALCULATOR = 'ALLOW_TRANSFER_TO_CALCULATOR',

  // -----------------------------------------------------
  // MAIN: Daily Income Record
  // -----------------------------------------------------
  READ_DAILY_INCOME_REC = 'READ_DAILY_INCOME_REC',
  ALLOW_CREATE_DAILY_INCOME_REC = 'ALLOW_CREATE_DAILY_INCOME_REC',

  // -----------------------------------------------------
  // MAIN: Medical Claim Request
  // -----------------------------------------------------
  // SUB: CLAIM REQUEST HEALTH CARE DOCTOR 
  READ_MEDICAL_DOC_CLAIM_REQ = 'READ_MEDICAL_DOC_CLAIM_REQ',
  ALLOW_CREATE_MEDICAL_DOC_CLAIM_REQ = 'ALLOW_CREATE_MEDICAL_DOC_CLAIM_REQ',
  ALLOW_ACCEPT_MEDICAL_DOC_CLAIM_REQ = 'ALLOW_ACCEPT_MEDICAL_DOC_CLAIM_REQ',
  ALLOW_RETURN_MEDICAL_DOC_CLAIM_REQ = 'ALLOW_RETURN_MEDICAL_DOC_CLAIM_REQ',
  ALLOW_REJECT_MEDICAL_DOC_CLAIM_REQ = 'ALLOW_REJECT_MEDICAL_DOC_CLAIM_REQ',
  ALLOW_EDIT_MEDICAL_DOC_CLAIM_REQ = 'ALLOW_EDIT_MEDICAL_DOC_CLAIM_REQ',
  ALLOW_ALLOCATE_MEDICAL_DOC_CLAIM_REQ = 'ALLOW_ALLOCATE_MEDICAL_DOC_CLAIM_REQ',

  // SUB: CLAIM REQUEST TEMPORARY DOCTOR
  READ_TEMP_DOC_CLAIM_REQ = 'READ_TEMP_DOC_CLAIM_REQ',
  ALLOW_CREATE_TEMP_DOC_CLAIM_REQ = 'ALLOW_CREATE_TEMP_DOC_CLAIM_REQ',
  ALLOW_ACCEPT_TEMP_DOC_CLAIM_REQ = 'ALLOW_ACCEPT_TEMP_DOC_CLAIM_REQ',
  ALLOW_RETURN_TEMP_DOC_CLAIM_REQ = 'ALLOW_RETURN_TEMP_DOC_CLAIM_REQ',
  ALLOW_REJECT_TEMP_DOC_CLAIM_REQ = 'ALLOW_REJECT_TEMP_DOC_CLAIM_REQ',
  ALLOW_EDIT_TEMP_DOC_CLAIM_REQ = 'ALLOW_EDIT_TEMP_DOC_CLAIM_REQ',
  ALLOW_ALLOCATE_TEMP_DOC_CLAIM_REQ = 'ALLOW_ALLOCATE_TEMP_DOC_CLAIM_REQ',

  // SUB: CLAIM REQUEST HEALTH CARE
  READ_MEDICAL_CLAIM_REQ = 'READ_MEDICAL_CLAIM_REQ',
  ALLOW_CREATE_MEDICAL_CLAIM_REQ = 'ALLOW_CREATE_MEDICAL_CLAIM_REQ',
  ALLOW_ACCEPT_MEDICAL_CLAIM_REQ = 'ALLOW_ACCEPT_MEDICAL_CLAIM_REQ',
  ALLOW_RETURN_MEDICAL_CLAIM_REQ = 'ALLOW_RETURN_MEDICAL_CLAIM_REQ',
  ALLOW_REJECT_MEDICAL_CLAIM_REQ = 'ALLOW_REJECT_MEDICAL_CLAIM_REQ',
  ALLOW_EDIT_MEDICAL_CLAIM_REQ = 'ALLOW_EDIT_MEDICAL_CLAIM_REQ',
  ALLOW_ALLOCATE_MEDICAL_CLAIM_REQ = 'ALLOW_ALLOCATE_MEDICAL_CLAIM_REQ',

  // SUB: CLAIM REQUEST TEMPORARY
  READ_TEMP_CLAIM_REQ = 'READ_TEMP_CLAIM_REQ',
  ALLOW_CREATE_TEMP_CLAIM_REQ = 'ALLOW_CREATE_TEMP_CLAIM_REQ',
  ALLOW_ACCEPT_TEMP_CLAIM_REQ = 'ALLOW_ACCEPT_TEMP_CLAIM_REQ',
  ALLOW_RETURN_TEMP_CLAIM_REQ = 'ALLOW_RETURN_TEMP_CLAIM_REQ',
  ALLOW_REJECT_TEMP_CLAIM_REQ = 'ALLOW_REJECT_TEMP_CLAIM_REQ',
  ALLOW_EDIT_TEMP_CLAIM_REQ = 'ALLOW_EDIT_TEMP_CLAIM_REQ',
  ALLOW_ALLOCATE_TEMP_CLAIM_REQ = 'ALLOW_ALLOCATE_TEMP_CLAIM_REQ',

  // SUB: CLAIM REQUEST PERMANENCE
  READ_PERM_CLAIM_REQ = 'READ_PERM_CLAIM_REQ',
  ALLOW_CREATE_PERM_CLAIM_REQ = 'ALLOW_CREATE_PERM_CLAIM_REQ',
  ALLOW_ACCEPT_PERM_CLAIM_REQ = 'ALLOW_ACCEPT_PERM_CLAIM_REQ',
  ALLOW_RETURN_PERM_CLAIM_REQ = 'ALLOW_RETURN_PERM_CLAIM_REQ',
  ALLOW_REJECT_PERM_CLAIM_REQ = 'ALLOW_REJECT_PERM_CLAIM_REQ',
  ALLOW_EDIT_PERM_CLAIM_REQ = 'ALLOW_EDIT_PERM_CLAIM_REQ',
  ALLOW_ALLOCATE_PERM_CLAIM_REQ = 'ALLOW_ALLOCATE_PERM_CLAIM_REQ',

  // SUB: CLAIM REQUEST ALLOWANCE
  READ_ALLOW_CLAIM_REQ = 'READ_ALLOW_CLAIM_REQ',
  ALLOW_CREATE_ALLOW_CLAIM_REQ = 'ALLOW_CREATE_ALLOW_CLAIM_REQ',
  ALLOW_ACCEPT_ALLOW_CLAIM_REQ = 'ALLOW_ACCEPT_ALLOW_CLAIM_REQ',
  ALLOW_RETURN_ALLOW_CLAIM_REQ = 'ALLOW_RETURN_ALLOW_CLAIM_REQ',
  ALLOW_REJECT_ALLOW_CLAIM_REQ = 'ALLOW_REJECT_ALLOW_CLAIM_REQ',
  ALLOW_EDIT_ALLOW_CLAIM_REQ = 'ALLOW_EDIT_ALLOW_CLAIM_REQ',
  ALLOW_ALLOCATE_ALLOW_CLAIM_REQ = 'ALLOW_ALLOCATE_ALLOW_CLAIM_REQ',

  // SUB: CLAIM REQUEST SURVIVAL
  READ_SURVIVAL_CLAIM_REQ = 'READ_SURVIVAL_CLAIM_REQ',
  ALLOW_CREATE_SURVIVAL_CLAIM_REQ = 'ALLOW_CREATE_SURVIVAL_CLAIM_REQ',
  ALLOW_ACCEPT_SURVIVAL_CLAIM_REQ = 'ALLOW_ACCEPT_SURVIVAL_CLAIM_REQ',
  ALLOW_RETURN_SURVIVAL_CLAIM_REQ = 'ALLOW_RETURN_SURVIVAL_CLAIM_REQ',
  ALLOW_REJECT_SURVIVAL_CLAIM_REQ = 'ALLOW_REJECT_SURVIVAL_CLAIM_REQ',
  ALLOW_EDIT_SURVIVAL_CLAIM_REQ = 'ALLOW_EDIT_SURVIVAL_CLAIM_REQ',
  ALLOW_ALLOCATE_SURVIVAL_CLAIM_REQ = 'ALLOW_ALLOCATE_SURVIVAL_CLAIM_REQ',

  // SUB: CLAIM REQUEST SURVIVAL
  READ_CALCULATE_REQ = 'READ_CALCULATE_REQ',
  ALLOW_CREATE_CALCULATE_REQ = 'ALLOW_CREATE_CALCULATE_REQ',
  ALLOW_ACCEPT_CALCULATE_REQ = 'ALLOW_ACCEPT_CALCULATE_REQ',
  ALLOW_RETURN_CALCULATE_REQ = 'ALLOW_RETURN_CALCULATE_REQ',
  ALLOW_REJECT_CALCULATE_REQ = 'ALLOW_REJECT_CALCULATE_REQ',
  ALLOW_EDIT_CALCULATE_REQ = 'ALLOW_EDIT_CALCULATE_REQ',
  ALLOW_ALLOCATE_CALCULATE_REQ = 'ALLOW_ALLOCATE_CALCULATE_REQ',

  // -----------------------------------------------------
  // MAIN: Print Info
  // -----------------------------------------------------
  READ_PRINT_INFO_REQ = 'READ_PRINT_INFO_REQ',
  ALLOW_CREATE_PRINT_INFO_REQ = 'ALLOW_CREATE_PRINT_INFO_REQ',
  ALLOW_ACCEPT_PRINT_INFO_REQ = 'ALLOW_ACCEPT_PRINT_INFO_REQ',
  ALLOW_RETURN_PRINT_INFO_REQ = 'ALLOW_RETURN_PRINT_INFO_REQ',
  ALLOW_REJECT_PRINT_INFO_REQ = 'ALLOW_REJECT_PRINT_INFO_REQ',
  ALLOW_EDIT_PRINT_INFO_REQ = 'ALLOW_EDIT_PRINT_INFO_REQ',
  ALLOW_ALLOCATE_PRINT_INFO_REQ = 'ALLOW_ALLOCATE_PRINT_INFO_REQ',

  // -----------------------------------------------------
  // MAIN: benefit aprrove comfirm
  // -----------------------------------------------------
  READ_BNC_REQ = 'READ_BNC_REQ',
  ALLOW_CREATE_BNC_REQ = 'ALLOW_CREATE_BNC_REQ',
  ALLOW_EDIT_BNC_REQ = 'ALLOW_EDIT_BNC_REQ',
  ALLOW_ACCEPT_BNC_REQ = 'ALLOW_ACCEPT_BNC_REQ',
  ALLOW_RETURN_BNC_REQ = 'ALLOW_RETURN_BNC_REQ',
  ALLOW_REJECT_BNC_REQ = 'ALLOW_REJECT_BNC_REQ',
  ALLOW_ALLOCATE_BNC_REQ = 'ALLOW_ALLOCATE_BNC_REQ',
  ALLOW_APPROVE_BNC_REQ = 'ALLOW_APPROVE_BNC_REQ',
  READ_BNC_ASSIGN = 'READ_BNC_ASSIGN',

  // -----------------------------------------------------
  // MAIN: Print Request Info
  // -----------------------------------------------------
  READ_BNV_REQ = 'READ_BNV_REQ',
  ALLOW_CREATE_BNV_REQ = 'ALLOW_CREATE_BNV_REQ',
  ALLOW_EDIT_BNV_REQ = 'ALLOW_EDIT_BNV_REQ',
  ALLOW_ACCEPT_BNV_REQ = 'ALLOW_ACCEPT_BNV_REQ',
  ALLOW_RETURN_BNV_REQ = 'ALLOW_RETURN_BNV_REQ',
  ALLOW_REJECT_BNV_REQ = 'ALLOW_REJECT_BNV_REQ',
  ALLOW_ALLOCATE_BNV_REQ = 'ALLOW_ALLOCATE_BNV_REQ',
  ALLOW_APPROVE_BNV_REQ = 'ALLOW_APPROVE_BNV_REQ',
  READ_BNV_ASSIGN = 'READ_BNV_ASSIGN',

  // -----------------------------------------------------
  // MAIN: Benefit Approval Print
  // -----------------------------------------------------

  // SUB: Benefit Approval Print
  READ_BENEFIT_CONFIRM_REQ = 'READ_BENEFIT_CONFIRM_REQ',
  ALLOW_APPROVE_BENEFIT_APPROVAL_REQ = 'ALLOW_APPROVE_BENEFIT_APPROVAL_REQ',

  // SUB: Benefit Approval Receiver
  READ_BENEFIT_CONFIRM_RECEIVER_REQ = 'READ_BENEFIT_CONFIRM_RECEIVER_REQ',
  ALLOW_CREATE_BENEFIT_CONFIRM_RECEIVER_REQ = 'ALLOW_CREATE_BENEFIT_CONFIRM_RECEIVER_REQ',
  ALLOW_ACCEPT_BENEFIT_CONFIRM_RECEIVER_REQ = 'ALLOW_ACCEPT_BENEFIT_CONFIRM_RECEIVER_REQ',
  ALLOW_RETURN_BENEFIT_CONFIRM_RECEIVER_REQ = 'ALLOW_RETURN_BENEFIT_CONFIRM_RECEIVER_REQ',
  ALLOW_REJECT_BENEFIT_CONFIRM_RECEIVER_REQ = 'ALLOW_REJECT_BENEFIT_CONFIRM_RECEIVER_REQ',
  ALLOW_EDIT_BENEFIT_CONFIRM_RECEIVER_REQ = 'ALLOW_EDIT_BENEFIT_CONFIRM_RECEIVER_REQ',
  ALLOW_ALLOCATE_BENEFIT_CONFIRM_RECEIVER_REQ = 'ALLOW_ALLOCATE_BENEFIT_CONFIRM_RECEIVER_REQ',

  // SUB: Benefit Approval Yearly Report
  READ_BENEFIT_CONFIRM_YEARLY_REPORT_REQ = 'READ_BENEFIT_CONFIRM_YEARLY_REPORT_REQ',
  ALLOW_CREATE_BENEFIT_CONFIRM_YEARLY_REPORT_REQ = 'ALLOW_CREATE_BENEFIT_CONFIRM_YEARLY_REPORT_REQ',
  ALLOW_ACCEPT_BENEFIT_CONFIRM_YEARLY_REPORT_REQ = 'ALLOW_ACCEPT_BENEFIT_CONFIRM_YEARLY_REPORT_REQ',
  ALLOW_RETURN_BENEFIT_CONFIRM_YEARLY_REPORT_REQ = 'ALLOW_RETURN_BENEFIT_CONFIRM_YEARLY_REPORT_REQ',
  ALLOW_REJECT_BENEFIT_CONFIRM_YEARLY_REPORT_REQ = 'ALLOW_REJECT_BENEFIT_CONFIRM_YEARLY_REPORT_REQ',
  ALLOW_EDIT_BENEFIT_CONFIRM_YEARLY_REPORT_REQ = 'ALLOW_EDIT_BENEFIT_CONFIRM_YEARLY_REPORT_REQ',
  ALLOW_ALLOCATE_BENEFIT_CONFIRM_YEARLY_REPORT_REQ = 'ALLOW_ALLOCATE_BENEFIT_CONFIRM_YEARLY_REPORT_REQ',

  // -----------------------------------------------------
  // MAIN: Benefit Non Occupate
  // -----------------------------------------------------

  // SUB: victim
  READ_BNO_VICTIM_REQ = 'READ_BNO_VICTIM_REQ',
  ALLOW_CREATE_BNO_VICTIM_REQ = 'ALLOW_CREATE_BNO_VICTIM_REQ',
  ALLOW_ACCEPT_BNO_VICTIM_REQ = 'ALLOW_ACCEPT_BNO_VICTIM_REQ',
  ALLOW_RETURN_BNO_VICTIM_REQ = 'ALLOW_RETURN_BNO_VICTIM_REQ',
  ALLOW_REJECT_BNO_VICTIM_REQ = 'ALLOW_REJECT_BNO_VICTIM_REQ',
  ALLOW_EDIT_BNO_VICTIM_REQ = 'ALLOW_EDIT_BNO_VICTIM_REQ',
  ALLOW_ALLOCATE_BNO_VICTIM_REQ = 'ALLOW_ALLOCATE_BNO_VICTIM_REQ',

  // SUB: medical benefit
  READ_BNO_MEDICAL_REQ = 'READ_BNO_MEDICAL_REQ',
  ALLOW_CREATE_BNO_MEDICAL_REQ = 'ALLOW_CREATE_BNO_MEDICAL_REQ',
  ALLOW_ACCEPT_BNO_MEDICAL_REQ = 'ALLOW_ACCEPT_BNO_MEDICAL_REQ',
  ALLOW_RETURN_BNO_MEDICAL_REQ = 'ALLOW_RETURN_BNO_MEDICAL_REQ',
  ALLOW_REJECT_BNO_MEDICAL_REQ = 'ALLOW_REJECT_BNO_MEDICAL_REQ',
  ALLOW_EDIT_BNO_MEDICAL_REQ = 'ALLOW_EDIT_BNO_MEDICAL_REQ',
  ALLOW_ALLOCATE_BNO_MEDICAL_REQ = 'ALLOW_ALLOCATE_BNO_MEDICAL_REQ',

  // SUB: no refund
  READ_BNO_NO_REFUND_REQ = 'READ_BNO_NO_REFUND_REQ',
  ALLOW_CREATE_BNO_NO_REFUND_REQ = 'ALLOW_CREATE_BNO_NO_REFUND_REQ',
  ALLOW_ACCEPT_BNO_NO_REFUND_REQ = 'ALLOW_ACCEPT_BNO_NO_REFUND_REQ',
  ALLOW_RETURN_BNO_NO_REFUND_REQ = 'ALLOW_RETURN_BNO_NO_REFUND_REQ',
  ALLOW_REJECT_BNO_NO_REFUND_REQ = 'ALLOW_REJECT_BNO_NO_REFUND_REQ',
  ALLOW_EDIT_BNO_NO_REFUND_REQ = 'ALLOW_EDIT_BNO_NO_REFUND_REQ',
  ALLOW_ALLOCATE_BNO_NO_REFUND_REQ = 'ALLOW_ALLOCATE_BNO_NO_REFUND_REQ',

  // -----------------------------------------------------
  // MAIN: Shipping Benefit
  // -----------------------------------------------------

  // SUB: fee
  READ_SHIPPING_FEE_REQ = 'READ_SHIPPING_FEE_REQ',
  ALLOW_CREATE_SHIPPING_FEE_REQ = 'ALLOW_CREATE_SHIPPING_FEE_REQ',
  ALLOW_ACCEPT_SHIPPING_FEE_REQ = 'ALLOW_ACCEPT_SHIPPING_FEE_REQ',
  ALLOW_RETURN_SHIPPING_FEE_REQ = 'ALLOW_RETURN_SHIPPING_FEE_REQ',
  ALLOW_REJECT_SHIPPING_FEE_REQ = 'ALLOW_REJECT_SHIPPING_FEE_REQ',
  ALLOW_EDIT_SHIPPING_FEE_REQ = 'ALLOW_EDIT_SHIPPING_FEE_REQ',
  ALLOW_ALLOCATE_SHIPPING_FEE_REQ = 'ALLOW_ALLOCATE_SHIPPING_FEE_REQ',

  // SUB: shipping request
  READ_SHIPPING_REQ = 'READ_SHIPPING_REQ',
  ALLOW_CREATE_SHIPPING_REQ = 'ALLOW_CREATE_SHIPPING_REQ',
  ALLOW_ACCEPT_SHIPPING_REQ = 'ALLOW_ACCEPT_SHIPPING_REQ',
  ALLOW_RETURN_SHIPPING_REQ = 'ALLOW_RETURN_SHIPPING_REQ',
  ALLOW_REJECT_SHIPPING_REQ = 'ALLOW_REJECT_SHIPPING_REQ',
  ALLOW_EDIT_SHIPPING_REQ = 'ALLOW_EDIT_SHIPPING_REQ',
  ALLOW_ALLOCATE_SHIPPING_REQ = 'ALLOW_ALLOCATE_SHIPPING_REQ',

  // SUB: shipping decision
  READ_SHIPPING_DECISION_REQ = 'READ_SHIPPING_DECISION_REQ',
  ALLOW_CREATE_SHIPPING_DECISION_REQ = 'ALLOW_CREATE_SHIPPING_DECISION_REQ',
  ALLOW_ACCEPT_SHIPPING_DECISION_REQ = 'ALLOW_ACCEPT_SHIPPING_DECISION_REQ',
  ALLOW_RETURN_SHIPPING_DECISION_REQ = 'ALLOW_RETURN_SHIPPING_DECISION_REQ',
  ALLOW_REJECT_SHIPPING_DECISION_REQ = 'ALLOW_REJECT_SHIPPING_DECISION_REQ',
  ALLOW_EDIT_SHIPPING_DECISION_REQ = 'ALLOW_EDIT_SHIPPING_DECISION_REQ',
  ALLOW_ALLOCATE_SHIPPING_DECISION_REQ = 'ALLOW_ALLOCATE_SHIPPING_DECISION_REQ',

  // -----------------------------------------------------
  // MAIN: Work Activity
  // -----------------------------------------------------
  READ_WORK_ACTIVITY_REQ = 'READ_WORK_ACTIVITY_REQ',
  ALLOW_CREATE_WORK_ACTIVITY_REQ = 'ALLOW_CREATE_WORK_ACTIVITY_REQ',
  ALLOW_ACCEPT_WORK_ACTIVITY_REQ = 'ALLOW_ACCEPT_WORK_ACTIVITY_REQ',
  ALLOW_RETURN_WORK_ACTIVITY_REQ = 'ALLOW_RETURN_WORK_ACTIVITY_REQ',
  ALLOW_REJECT_WORK_ACTIVITY_REQ = 'ALLOW_REJECT_WORK_ACTIVITY_REQ',
  ALLOW_EDIT_WORK_ACTIVITY_REQ = 'ALLOW_EDIT_WORK_ACTIVITY_REQ',
  ALLOW_ALLOCATE_WORK_ACTIVITY_REQ = 'ALLOW_ALLOCATE_WORK_ACTIVITY_REQ',
  ALLOW_DOWNLOAD_WORK_ACTIVITY_REQ = 'ALLOW_DOWNLOAD_WORK_ACTIVITY_REQ',

  // -----------------------------------------------------
  // MAIN: Health Care Benefit
  // -----------------------------------------------------

  // SUB: receiver
  READ_HEALTH_CARE_RECEIVER_REQ = 'READ_HEALTH_CARE_RECEIVER_REQ',
  ALLOW_CREATE_HEALTH_CARE_RECEIVER_REQ = 'ALLOW_CREATE_HEALTH_CARE_RECEIVER_REQ',
  ALLOW_ACCEPT_HEALTH_CARE_RECEIVER_REQ = 'ALLOW_ACCEPT_HEALTH_CARE_RECEIVER_REQ',
  ALLOW_RETURN_HEALTH_CARE_RECEIVER_REQ = 'ALLOW_RETURN_HEALTH_CARE_RECEIVER_REQ',
  ALLOW_REJECT_HEALTH_CARE_RECEIVER_REQ = 'ALLOW_REJECT_HEALTH_CARE_RECEIVER_REQ',
  ALLOW_EDIT_HEALTH_CARE_RECEIVER_REQ = 'ALLOW_EDIT_HEALTH_CARE_RECEIVER_REQ',
  ALLOW_ALLOCATE_HEALTH_CARE_RECEIVER_REQ = 'ALLOW_ALLOCATE_HEALTH_CARE_RECEIVER_REQ',

  // SUB: transfer doc
  READ_HEALTH_CARE_TRANSFER_REQ = 'READ_HEALTH_CARE_TRANSFER_REQ',
  ALLOW_CREATE_HEALTH_CARE_TRANSFER_REQ = 'ALLOW_CREATE_HEALTH_CARE_TRANSFER_REQ',
  ALLOW_ACCEPT_HEALTH_CARE_TRANSFER_REQ = 'ALLOW_ACCEPT_HEALTH_CARE_TRANSFER_REQ',
  ALLOW_RETURN_HEALTH_CARE_TRANSFER_REQ = 'ALLOW_RETURN_HEALTH_CARE_TRANSFER_REQ',
  ALLOW_REJECT_HEALTH_CARE_TRANSFER_REQ = 'ALLOW_REJECT_HEALTH_CARE_TRANSFER_REQ',
  ALLOW_EDIT_HEALTH_CARE_TRANSFER_REQ = 'ALLOW_EDIT_HEALTH_CARE_TRANSFER_REQ',
  ALLOW_ALLOCATE_HEALTH_CARE_TRANSFER_REQ = 'ALLOW_ALLOCATE_HEALTH_CARE_TRANSFER_REQ',

  // SUB: received
  READ_HEALTH_CARE_RECEIVED_REQ = 'READ_HEALTH_CARE_RECEIVED_REQ',
  ALLOW_CREATE_HEALTH_CARE_RECEIVED_REQ = 'ALLOW_CREATE_HEALTH_CARE_RECEIVED_REQ',
  ALLOW_ACCEPT_HEALTH_CARE_RECEIVED_REQ = 'ALLOW_ACCEPT_HEALTH_CARE_RECEIVED_REQ',
  ALLOW_RETURN_HEALTH_CARE_RECEIVED_REQ = 'ALLOW_RETURN_HEALTH_CARE_RECEIVED_REQ',
  ALLOW_REJECT_HEALTH_CARE_RECEIVED_REQ = 'ALLOW_REJECT_HEALTH_CARE_RECEIVED_REQ',
  ALLOW_EDIT_HEALTH_CARE_RECEIVED_REQ = 'ALLOW_EDIT_HEALTH_CARE_RECEIVED_REQ',
  ALLOW_ALLOCATE_HEALTH_CARE_RECEIVED_REQ = 'ALLOW_ALLOCATE_HEALTH_CARE_RECEIVED_REQ',

  // -----------------------------------------------------
  // MAIN : HC
  // -----------------------------------------------------
  //SUB : HC Emergency Claim Request Doctor
  READ_EMERGENCY_DOC_CLAIM_REQ = 'READ_EMERGENCY_DOC_CLAIM_REQ',
  ALLOW_CREATE_EMERGENCY_DOC_CLAIM_REQ = 'ALLOW_CREATE_EMERGENCY_DOC_CLAIM_REQ',
  ALLOW_ACCEPT_EMERGENCY_DOC_CLAIM_REQ = 'ALLOW_ACCEPT_EMERGENCY_DOC_CLAIM_REQ',
  ALLOW_RETURN_EMERGENCY_DOC_CLAIM_REQ = 'ALLOW_RETURN_EMERGENCY_DOC_CLAIM_REQ',
  ALLOW_REJECT_EMERGENCY_DOC_CLAIM_REQ = 'ALLOW_REJECT_EMERGENCY_DOC_CLAIM_REQ',
  ALLOW_EDIT_EMERGENCY_DOC_CLAIM_REQ = 'ALLOW_EDIT_EMERGENCY_DOC_CLAIM_REQ',
  ALLOW_ALLOCATE_EMERGENCY_DOC_CLAIM_REQ = 'ALLOW_ALLOCATE_EMERGENCY_DOC_CLAIM_REQ',

  //SUB : HC Sick Leave Request Doctor
  READ_SICK_LEAVE_DOC_CLAIM_REQ = 'READ_SICK_LEAVE_DOC_CLAIM_REQ',
  ALLOW_CREATE_SICK_LEAVE_DOC_CLAIM_REQ = 'ALLOW_CREATE_SICK_LEAVE_DOC_CLAIM_REQ',
  ALLOW_ACCEPT_SICK_LEAVE_DOC_CLAIM_REQ = 'ALLOW_ACCEPT_SICK_LEAVE_DOC_CLAIM_REQ',
  ALLOW_RETURN_SICK_LEAVE_DOC_CLAIM_REQ = 'ALLOW_RETURN_SICK_LEAVE_DOC_CLAIM_REQ',
  ALLOW_REJECT_SICK_LEAVE_DOC_CLAIM_REQ = 'ALLOW_REJECT_SICK_LEAVE_DOC_CLAIM_REQ',
  ALLOW_EDIT_SICK_LEAVE_DOC_CLAIM_REQ = 'ALLOW_EDIT_SICK_LEAVE_DOC_CLAIM_REQ',
  ALLOW_ALLOCATE_SICK_LEAVE_DOC_CLAIM_REQ = 'ALLOW_ALLOCATE_SICK_LEAVE_DOC_CLAIM_REQ',

  //SUB : HC Emergency Claim Request
  READ_EMERGENCY_CLAIM_REQ = 'READ_EMERGENCY_CLAIM_REQ',
  ALLOW_CREATE_EMERGENCY_CLAIM_REQ = 'ALLOW_CREATE_EMERGENCY_CLAIM_REQ',
  ALLOW_ACCEPT_EMERGENCY_CLAIM_REQ = 'ALLOW_ACCEPT_EMERGENCY_CLAIM_REQ',
  ALLOW_RETURN_EMERGENCY_CLAIM_REQ = 'ALLOW_RETURN_EMERGENCY_CLAIM_REQ',
  ALLOW_REJECT_EMERGENCY_CLAIM_REQ = 'ALLOW_REJECT_EMERGENCY_CLAIM_REQ',
  ALLOW_EDIT_EMERGENCY_CLAIM_REQ = 'ALLOW_EDIT_EMERGENCY_CLAIM_REQ',
  ALLOW_ALLOCATE_EMERGENCY_CLAIM_REQ = 'ALLOW_ALLOCATE_EMERGENCY_CLAIM_REQ',

  //SUB : HC Maternity Claim Request
  READ_MATERNITY_CLAIM_REQ = 'READ_MATERNITY_CLAIM_REQ',
  ALLOW_CREATE_MATERNITY_CLAIM_REQ = 'ALLOW_CREATE_MATERNITY_CLAIM_REQ',
  ALLOW_ACCEPT_MATERNITY_CLAIM_REQ = 'ALLOW_ACCEPT_MATERNITY_CLAIM_REQ',
  ALLOW_RETURN_MATERNITY_CLAIM_REQ = 'ALLOW_RETURN_MATERNITY_CLAIM_REQ',
  ALLOW_REJECT_MATERNITY_CLAIM_REQ = 'ALLOW_REJECT_MATERNITY_CLAIM_REQ',
  ALLOW_EDIT_MATERNITY_CLAIM_REQ = 'ALLOW_EDIT_MATERNITY_CLAIM_REQ',
  ALLOW_ALLOCATE_MATERNITY_CLAIM_REQ = 'ALLOW_ALLOCATE_MATERNITY_CLAIM_REQ',

  //SUB : HC Sick Leave Claim Request
  READ_SICK_LEAVE_CLAIM_REQ = 'READ_SICK_LEAVE_CLAIM_REQ',
  ALLOW_CREATE_SICK_LEAVE_CLAIM_REQ = 'ALLOW_CREATE_SICK_LEAVE_CLAIM_REQ',
  ALLOW_ACCEPT_SICK_LEAVE_CLAIM_REQ = 'ALLOW_ACCEPT_SICK_LEAVE_CLAIM_REQ',
  ALLOW_RETURN_SICK_LEAVE_CLAIM_REQ = 'ALLOW_RETURN_SICK_LEAVE_CLAIM_REQ',
  ALLOW_REJECT_SICK_LEAVE_CLAIM_REQ = 'ALLOW_REJECT_SICK_LEAVE_CLAIM_REQ',
  ALLOW_EDIT_SICK_LEAVE_CLAIM_REQ = 'ALLOW_EDIT_SICK_LEAVE_CLAIM_REQ',
  ALLOW_ALLOCATE_SICK_LEAVE_CLAIM_REQ = 'ALLOW_ALLOCATE_SICK_LEAVE_CLAIM_REQ',

  //SUB : HC Transport Claim Request
  READ_TRANSPORT_CLAIM_REQ = 'READ_TRANSPORT_CLAIM_REQ',
  ALLOW_CREATE_TRANSPORT_CLAIM_REQ = 'ALLOW_CREATE_TRANSPORT_CLAIM_REQ',
  ALLOW_ACCEPT_TRANSPORT_CLAIM_REQ = 'ALLOW_ACCEPT_TRANSPORT_CLAIM_REQ',
  ALLOW_RETURN_TRANSPORT_CLAIM_REQ = 'ALLOW_RETURN_TRANSPORT_CLAIM_REQ',
  ALLOW_REJECT_TRANSPORT_CLAIM_REQ = 'ALLOW_REJECT_TRANSPORT_CLAIM_REQ',
  ALLOW_EDIT_TRANSPORT_CLAIM_REQ = 'ALLOW_EDIT_TRANSPORT_CLAIM_REQ',
  ALLOW_ALLOCATE_TRANSPORT_CLAIM_REQ = 'ALLOW_ALLOCATE_TRANSPORT_CLAIM_REQ',

  // SUB : HC Funeral Claim Request
  READ_FUNERAL_CLAIM_REQ = 'READ_FUNERAL_CLAIM_REQ',
  ALLOW_CREATE_FUNERAL_CLAIM_REQ = 'ALLOW_CREATE_FUNERAL_CLAIM_REQ',
  ALLOW_ACCEPT_FUNERAL_CLAIM_REQ = 'ALLOW_ACCEPT_FUNERAL_CLAIM_REQ',
  ALLOW_RETURN_FUNERAL_CLAIM_REQ = 'ALLOW_RETURN_FUNERAL_CLAIM_REQ',
  ALLOW_REJECT_FUNERAL_CLAIM_REQ = 'ALLOW_REJECT_FUNERAL_CLAIM_REQ',
  ALLOW_EDIT_FUNERAL_CLAIM_REQ = 'ALLOW_EDIT_FUNERAL_CLAIM_REQ',
  ALLOW_ALLOCATE_FUNERAL_CLAIM_REQ = 'ALLOW_ALLOCATE_FUNERAL_CLAIM_REQ',

  // -----------------------------------------------------
  // MAIN: Benefit Table
  // -----------------------------------------------------
  READ_BEN_TABLE_REQ = 'READ_BEN_TABLE_REQ',
  ALLOW_CREATE_BEN_TABLE_REQ = 'ALLOW_CREATE_BEN_TABLE_REQ',
  ALLOW_ACCEPT_BEN_TABLE_REQ = 'ALLOW_ACCEPT_BEN_TABLE_REQ',
  ALLOW_RETURN_BEN_TABLE_REQ = 'ALLOW_RETURN_BEN_TABLE_REQ',
  ALLOW_REJECT_BEN_TABLE_REQ = 'ALLOW_REJECT_BEN_TABLE_REQ',
  ALLOW_EDIT_BEN_TABLE_REQ = 'ALLOW_EDIT_BEN_TABLE_REQ',
  ALLOW_ALLOCATE_BEN_TABLE_REQ = 'ALLOW_ALLOCATE_BEN_TABLE_REQ',

  // -----------------------------------------------------
  // MAIN: SYSTEM TRACKING
  // -----------------------------------------------------
  // READ_TRACKING = "READ_TRACKING",

  // -----------------------------------------------------
  // MAIN: NSSF USER
  // -----------------------------------------------------
  READ_NSSF_USER = 'READ_NSSF_USER',
  ALLOW_CREATE_NSSF_USER = 'ALLOW_CREATE_NSSF_USER',
  ALLOW_EDIT_NSSF_USER = 'ALLOW_EDIT_NSSF_USER',
  ALLOW_DISABLE_NSSF_USER = 'ALLOW_DISABLE_NSSF_USER',

  // -----------------------------------------------------
  // MAIN: Health Care Benefit Note
  // -----------------------------------------------------
  READ_HC_BEN_NOTE = 'READ_HC_BEN_NOTE',
  ALLOW_CREATE_HC_BEN_NOTE = 'ALLOW_CREATE_HC_BEN_NOTE',
  ALLOW_ACCEPT_HC_BEN_NOTE = 'ALLOW_ACCEPT_HC_BEN_NOTE',
  ALLOW_REJECT_HC_BEN_NOTE = 'ALLOW_REJECT_HC_BEN_NOTE',
  ALLOW_PRINT_HC_BEN_NOTE = 'ALLOW_PRINT_HC_BEN_NOTE',

  // -----------------------------------------------------
  // MAIN: Health Care Benefit Approval
  // -----------------------------------------------------
  READ_HC_BEN_APP = 'READ_HC_BEN_APP',
  ALLOW_CREATE_HC_BEN_APP = 'ALLOW_CREATE_HC_BEN_APP',
  ALLOW_APPROVE_HC_BEN_APP = 'ALLOW_APPROVE_HC_BEN_APP',
  ALLOW_REJECT_HC_BEN_APP = 'ALLOW_REJECT_HC_BEN_APP',
  ALLOW_PRINT_HC_BEN_APP = 'ALLOW_PRINT_HC_BEN_APP',

  // -----------------------------------------------------
  // MAIN: SETTINGS
  // -----------------------------------------------------
  READ_SETTING = 'READ_SETTING',
  ALLOW_CREATE_SETTING = 'ALLOW_CREATE_SETTING',
  ALLOW_EDIT_SETTING = 'ALLOW_EDIT_SETTING',
  ALLOW_DISABLE_SETTING = 'ALLOW_DISABLE_SETTING',

  // -----------------------------------------------------
  // MAIN: REPORTS
  // -----------------------------------------------------
  // READ_ALL_REPORT = "READ_ALL_REPORT"

  READ_WI_CLAIM_REQ_REPORT = 'READ_WI_CLAIM_REQ_REPORT',
  READ_WI_CLAIM_AMOUNT_REPORT = 'READ_WI_CLAIM_AMOUNT_REPORT',
  READ_HC_CLAIM_REQ_REPORT = 'READ_HC_CLAIM_REQ_REPORT',
  READ_HC_CLAIM_AMOUNT_REPORT = 'READ_HC_CLAIM_AMOUNT_REPORT',

  READ_WI_CLAIMANT_REPORT = 'READ_WI_CLAIMANT_REPORT',
  READ_WI_CLAIM_BY_ENT_ADDR_REPORT = 'READ_WI_CLAIM_BY_ENT_ADDR_REPORT',
  READ_WI_CLAIM_APPROVAL_REPORT = 'READ_WI_CLAIM_APPROVAL_REPORT',
  READ_WI_CLAIM_EXPANSE_REPORT = 'READ_WI_CLAIM_EXPANSE_REPORT',
  READ_HC_CLAIM_BY_ENT_ADDR_REPORT = 'READ_HC_CLAIM_BY_ENT_ADDR_REPORT',
  READ_HC_CLAIM_APPROVAL_REPORT = 'READ_HC_CLAIM_APPROVAL_REPORT',
  READ_HC_CLAIM_EXPANSE_REPORT = 'READ_HC_CLAIM_EXPANSE_REPORT',
}

/**
 * @NOTE: Search by key: 'MAIN'
 */
export enum SECTION {
  // -----------------------------------------------------
  // MAIN: DASHBOARD
  // -----------------------------------------------------
  DASHBOARD = 'menu.dashboard',
  DASHBOARD_WORK = 'dashboard.dashboard_work',

  // -----------------------------------------------------
  // MAIN: INSPECTION REQUEST
  // -----------------------------------------------------
  INSPECTION_REQUEST_HEAD = 'menu.inspection.title',
  INSPECTION_REQUEST = 'menu.inspection.inspection_request',
  INSPECTION_RESULT = 'menu.inspection.inspection_result',

  // -----------------------------------------------------
  // MAIN: PRIMARY WI REQUEST
  // -----------------------------------------------------
  PRIMARY_WI_REQUEST = 'menu.injury_Request.injury_Request',
  PRIMARY_WI_REGISTRATION = 'menu.injury_Request.injury_Report',
  PRIMARY_WI_VALIDATION = 'menu.injury_Request.injury_list',
  MERGE_SEPARATE_VICTIM = 'menu.injury_Request.injury_list_Control',

  // -----------------------------------------------------
  // MAIN: TEMPORARY WI VICTIM
  // -----------------------------------------------------
  TEMP_WI_VICTIM = 'menu.temp_wi_victim.title',

  // -----------------------------------------------------
  // MAIN: RETREATMENT REQUEST
  // -----------------------------------------------------
  RETREATMENT_REQUEST = 'menu.retreatment.retreatment_injury',

  // -----------------------------------------------------
  // MAIN: CLAIM REQUEST
  // -----------------------------------------------------
  MAIN_CLAIM_REQUEST = 'menu.claim_report.receipt',
  CLAIM_TEMP_REQUEST = 'menu.claim_report.temporary',
  CLAIM_REQUEST = 'menu.claim_report.receive',

  // -----------------------------------------------------
  // MAIN: Daily Income Record
  // -----------------------------------------------------
  DAILY_INCOME_RECORD = 'menu.victim_ben.victim_ben_cal',

  // -----------------------------------------------------
  // MAIN: Medical Claim Request
  // -----------------------------------------------------
  MEDICAL_CLAIM_REQUEST_MAIN = 'menu.ben_cal.ben_cal_job',
  MEDICAL_CLAIM_REQUEST_MAIN_HOST = 'menu.ben_cal.ben_host',
  MEDICAL_CLAIM_REQUEST = 'menu.ben_cal.ben_treatment',
  MEDICAL_CLAIM_REQUEST_DOC = 'menu.ben_cal.ben_treatment_doc',
  TEMPORARY_CLAIM_REQUEST = 'menu.ben_cal.ben_temporary',
  TEMPORARY_CLAIM_REQUEST_DOC = 'menu.ben_cal.ben_temporary_doc',
  PERMANENT_CLAIM_REQUEST = 'menu.ben_cal.ben_permanent',
  ALLOWANCE_CLAIM_REQUEST = 'menu.ben_cal.ben_cremental',
  SURVIVAL_CLAIM_REQUEST = 'menu.ben_cal.ben_dead',
  CALCULATE_CLAIM_REQUEST = 'menu.ben_cal.ben_cal_job',

  // -----------------------------------------------------
  // MAIN: PRINT INFO
  // -----------------------------------------------------
  PRINT_INOF_HEAD = 'menu.print.title',
  PRINT_INFO = 'menu.print.print_info',
  REQUEST_INFO = 'menu.print.request_info',

  // -----------------------------------------------------
  // MAIN: Benefit Approval Print
  // -----------------------------------------------------
  MAIN_BENEFIT_APPROVAL = 'menu.ben_con.ben_confirm_req',
  BENEFIT_APPROVAL_PRINT = 'menu.ben_con.print_ben_con',
  BENEFIT_APPROVAL_RECEIVER = 'menu.ben_con.ben_con_transfer',
  BENEFIT_APPROVAL_YEARLY_REPORT = 'menu.ben_con.ben_yearly_report',

  // -----------------------------------------------------
  // MAIN: Benefit Non Occupate
  // -----------------------------------------------------
  MAIN_BENEFIT_NON_OCCUPATION = 'menu.non_ben.non_ben_job',
  BENEFIT_NON_OCCUPATION_VICTIM = 'menu.non_ben.non_ben_victim',
  BENEFIT_NON_OCCUPATION_MEDICAL = 'menu.non_ben.med_ben',
  BENEFIT_NON_OCCUPATION_NO_REFUND = 'menu.non_ben.ben_non_req',

  // -----------------------------------------------------
  // MAIN: Shipping Benefit
  // -----------------------------------------------------
  MAIN_BENEFIT_SHIPPING = 'menu.ship_ben.ship_cal',
  BENEFIT_SHIPPING_FEE = 'menu.ship_ben.ship_ben_info',
  BENEFIT_SHIPPING = 'menu.ship_ben.ship_detail',
  BENEFIT_SHIPPING_DECISION = 'menu.ship_ben.approval',

  // -----------------------------------------------------
  // MAIN: Work Activity
  // -----------------------------------------------------
  WORK_ACTIVITY_REQUEST = 'menu.work_data.work_act_data',

  // -----------------------------------------------------
  // MAIN: Health Care Benefit
  // -----------------------------------------------------
  MAIN_BENEFIT_HEALTH_CARE = 'menu.care_ben.ben_health',
  BENEFIT_HEALTH_CARE_RECEIVER = 'menu.care_ben.ben_health_receive',
  BENEFIT_HEALTH_CARE_TRANSFER_DOC = 'menu.care_ben.ben_health_transfer',
  BENEFIT_HEALTH_CARE_RECEIVED = 'menu.care_ben.ben_receive_list',
  // -----------------------------------------------------
  // MAIN: HC
  // -----------------------------------------------------
  HC = 'menu.health_cal.health_cal',
  HC_EMERGENCY_CLAIM_REQUEST = 'menu.health_cal.emergency',
  HC_EMERGENCY_CLAIM_REQUEST_DOC = 'menu.health_cal.emergency_doc',
  HC_MATERNITY_CLAIM_REQUEST = 'menu.ben_cal.ben_maternity',
  HC_SICK_LEAVE_CLAIM_REQUEST = 'menu.health_cal.sick_leave',
  HC_SICK_LEAVE_CLAIM_REQUEST_DOC = 'menu.health_cal.sick_leave_doc',
  HC_TRANSPORT_CLAIM_REQUEST = 'menu.health_cal.transportation',
  HC_FUNERAL_CLAIM_REQUEST = 'menu.health_cal.funeral',
  // -----------------------------------------------------
  // MAIN: Benefit Table
  // ----------------------------------------------------sick_leave-
  BENEFIT_TABLE = 'menu.ben_list.ben_list_app',

  // -----------------------------------------------------
  // MAIN: HC Benefit Note
  // -----------------------------------------------------
  HC_BENEFIT_NOTE = 'hc_benefit_note.hc_benefit_note_list',
  NOTE = 'hc_benefit_note.note',
  APPROVAL = 'hc_benefit_note.approval',

  // -----------------------------------------------------
  // MAIN: SYSTEM TRACKING
  // -----------------------------------------------------
  // SYSTEM_TRACKING = "menu.tracking_system",

  // -----------------------------------------------------
  // MAIN: NSSF USER
  // -----------------------------------------------------
  NSSF_USER = 'menu.user_admin',

  // -----------------------------------------------------
  // MAIN: SETTINGS
  // -----------------------------------------------------
  SETTING = 'menu.setting',

  // -----------------------------------------------------
  // MAIN: REPORTS
  // -----------------------------------------------------
  ALL_REPORT = 'menu.report',
  // REPORT_ENTERPRISE = "menu.report_enterprise"
  REPORT = 'menu.occupational_risk_claims',
  REPORT_ENTERPRISE = 'menu.provision_occupational_risk_assessment',
  REPORT_CLAIM_HC = 'menu.health_care_claim',
  REPORT_SUMMARY_TYPE = 'menu.summary_request',
}
