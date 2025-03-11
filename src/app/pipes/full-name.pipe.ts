import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../types/user';
import { LanguageEnum } from '../types/enums/language.enum';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(user: User, lang: LanguageEnum): unknown {
    switch (lang) {
      case LanguageEnum.EN:
        return `${user.lastNameEn} ${user.firstNameEn}`;
      case LanguageEnum.KM:
        return `${user.lastNameKh} ${user.firstNameKh}`;
      default:
        return `${user.lastNameKh} ${user.firstNameKh}`;
    }
  }

}
