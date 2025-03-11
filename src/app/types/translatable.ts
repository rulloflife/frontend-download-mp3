import { LanguageEnum } from "./enums/language.enum";

export type Translatable = {
    [key in LanguageEnum]?: string
}