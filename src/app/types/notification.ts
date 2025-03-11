
import { MessageCodeEnum } from "./enums/message-code.enum";
import { NotificationTypeEnum } from "./enums/notification-type.enum";
import { MongoObject } from "./mongo-object";
import { User } from "./user";

export interface MyNotification extends MongoObject {
    receiver: string & User;
    sender: string & User;
    type: NotificationTypeEnum
    msg_code: MessageCodeEnum
    is_read: boolean
    data: any
    createdAt: Date | string
}