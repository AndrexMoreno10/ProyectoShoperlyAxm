import { CanActivateFn, Router } from '@angular/router';
import { Utils } from '../utils/utils';
import { inject } from '@angular/core';

export const authorizationUserGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const user = JSON.parse(Utils.getRole())

  if(!user.admin){
    return true
  }
  router.navigate(['/ventanaEmergente']);
  return false

};

