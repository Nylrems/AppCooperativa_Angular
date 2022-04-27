import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(
    private router: Router,
    private storage: StorageService
  ) { }


  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {

    const data = await this.storage.get('token');
    console.log(data, 'guard');

    if (!data) {
      this.router.navigateByUrl('/login');
      return false;
    }
    else {
      return true;
    }
  }

}
