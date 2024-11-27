import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const studentGuard: CanActivateFn = (route, state) => {
  let student = JSON.parse(localStorage.getItem('studentdetails')!)
  let router = inject(Router)

  if (!student) {
    router.navigate([''])
  } 
  return true;
};
