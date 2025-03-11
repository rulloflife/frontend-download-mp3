
import { RolePermission } from "./enums/role-permission";


export interface PermissionSection {
    title: string;
    children: PermissionGroup[]
}

export interface PermissionGroup {
    title: string,
    permissions: Permission[]
}

export interface Permission{
    name?: string,
    permission?: RolePermission ,
    requiredPermissions?: RolePermission[],
    new_line?: boolean
}