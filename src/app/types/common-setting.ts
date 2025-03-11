import { MongoObject } from "./mongo-object";
import { Translatable } from "./translatable";

export interface CommonSetting extends MongoObject {
    code: string;
    name: string;
    name_tr?: Translatable;
    description?: string;
    order: number,
    is_active: boolean;
}
