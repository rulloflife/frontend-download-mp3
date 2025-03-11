import { RequestOption } from "./request-option";

export interface RequestParam{
   data?:any;
   option?: RequestOption,
   isLoading?: boolean, 
   isAlertError?: boolean
}