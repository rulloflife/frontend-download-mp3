import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
// import { AuthService } from '../services/auth.service';

// export const authChildGuard: CanActivateChildFn = (route, state) => {
  // const authService = inject(AuthService);
  // const router = inject(Router);
  // const hasPermission = true; //TODO: set permission on route data
  // if (!authService.isAuth) {
  //   const returnUrl = state.url;
  //   router.navigate(['/login'], { queryParams: { returnUrl } });
  //   return false;
  // } else if (hasPermission) {
  //   return true;
  // } else {
  //   router.navigate(['/']);
  //   return false;
  // }
// };
