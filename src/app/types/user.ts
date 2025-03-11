import { MongoObject } from "./mongo-object";
import { RequestStatusEnum } from "./request-status.enum";
import { Role } from "./role";

export interface User extends MongoObject {
    username: string;
    password?: string;
    firstNameEn: string;
    lastNameEn: string;
    firstNameKh: string;
    lastNameKh: string;
    roles: (string | Role)[];
    phone: string;
    email?: string;
    force_change_password?: boolean;
    self_registration?: boolean;
    status?: RequestStatusEnum
    forceChangePassword?: boolean;
}
