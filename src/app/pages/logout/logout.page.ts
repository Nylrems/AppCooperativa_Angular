import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MainService } from 'src/app/services/main.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-logout',
  template: '',
})
export class LogoutPage {
  subscription: Subscription;

  constructor(
    private storage: StorageService,
    private router: Router,
    private service: MainService,
  ) { }


  async ionViewWillEnter() {

    await this.storage.remove('token');
    await this.storage.remove('user');
    this.service.cookie.next(false);
    this.service.usuario.next('');
    this.router.navigate(['/login']);
  }
}
