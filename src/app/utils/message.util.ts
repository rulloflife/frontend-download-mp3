import { MessageCodeEnum } from "../types/enums/message-code.enum";

const Message: {
    [Property in MessageCodeEnum]: string;
} = {
    [MessageCodeEnum.required]: 'm.required'
}

export const getMessage = (code: MessageCodeEnum) => {
    return Message[code];
}

