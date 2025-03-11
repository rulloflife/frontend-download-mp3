import { CommonSetting } from "./common-setting";
import { RolePermissionEnum } from "./enums/role-permission.enum";

export interface Role extends CommonSetting {
    permissions: RolePermissionEnum[],
    is_admin: boolean
}
