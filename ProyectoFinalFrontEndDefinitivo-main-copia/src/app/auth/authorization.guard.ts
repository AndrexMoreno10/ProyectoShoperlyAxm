import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Utils } from '../utils/utils';

export const authorizationGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const rol = Utils.getRole()
  console.log(rol);

  if (rol !== '') {
    if(rol == localStorage.getItem('user') )
    return true;
  }
  router.navigate(['/ventanaEmergente']);
  return false

};
