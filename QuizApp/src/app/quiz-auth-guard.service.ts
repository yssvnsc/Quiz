import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class QuizAuthGuardService implements CanActivate{
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  
  constructor(private myRoute: Router){
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(localStorage.getItem("allQuesAnswered")!="true"){
      this.myRoute.navigate(["/"]);
      return false;
    }
    return true;
  }
}
