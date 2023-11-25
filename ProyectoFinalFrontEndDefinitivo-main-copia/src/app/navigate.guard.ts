import { CanActivateFn } from '@angular/router';

export const navigateGuard: CanActivateFn = (route, state) => {
  return true;
};
