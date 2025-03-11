import { FormGroup } from "@angular/forms";
import { BadRequestResponse } from "../types/bad-request-response";
import { getMessage } from "./message.util";

export const formRequestErrorHandler = (form: FormGroup) => {
    return (err: string | BadRequestResponse) => {
        if (typeof err !== 'string') {
            let errors = err.errors;
            if (errors?.length) {
                errors.forEach(e => {
                    form.get(e.field)?.setErrors({ message: getMessage(parseInt(e.msgCode)) || e.msgCode });
                });
                form.markAllAsTouched();
            }
        }
    }
}