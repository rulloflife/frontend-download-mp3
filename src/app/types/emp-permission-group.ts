import { MongoObject } from "./mongo-object";

export interface PermissionGroup extends MongoObject {
    comment: string;
    date: Date;
}
