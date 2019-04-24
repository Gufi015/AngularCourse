import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { LoginService } from "./login.service";
import { Injectable } from "@angular/core";

Injectable()
export class LoginGuardian implements CanActivate {
  private loginService: LoginService;
  private router: Router;

  //constructor(private loginService: LoginService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.loginService.isAuth()) {
      //this.loginService.isAuth();
      return true;
    } else {
      this.router.navigate(["login"]);
      return false;
    }
  }
}
