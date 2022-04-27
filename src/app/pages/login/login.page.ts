import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { MainService } from 'src/app/services/main.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginPage implements OnInit {

  title = 'Login';
  hide = true;
  formGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private client: HttpClient,
    private service: MainService,
    private router: Router,
    private storage: Storage
  ) { }


  get id() { return this.formGroup.get('id'); }
  get password() { return this.formGroup.get('password'); }

  ngOnInit() {

    this.formGroup = this.fb.group({
      id: ['', [Validators.required, Validators.max(99999999999), Validators.min(10000000)]],
      password: ['', [Validators.required, Validators.maxLength(30)]],
    });

  }

  async handleButtonClick(): Promise<void> {
    const loading = await this.loadingController.create({
      message: 'Por favor, espere...',

    });
    await loading.present();

    const formData: any = new FormData();
    formData.append('usuario', `${this.id.value}`);
    formData.append('clave', `${this.password.value}`);

    await this.client.post<any>('https://coopdgii.com/coopvirtual/App/login', formData)
      .pipe(catchError(this.service.handleError))
      .subscribe({
        next: async (data) => {
          if (data.success) {

            await this.storage.set('token', data.data.token);
            await this.storage.set('user', data.data.nombre + ' ' + data.data.apellido);
            this.service.cookie.next(true);
            this.service.usuario.next(data.data.nombre + ' ' + data.data.apellido);
          }
          else {
            this.service.showToastMessage(data.mensaje, 'danger');
            this.id.setErrors({ incorrect: true });
            this.password.setErrors({ incorrect: true });
          }
        },
        error: async (error) => {
          this.service.showToast(error);
          await loading.dismiss();
        },
        complete: async () => {
          this.router.navigate(['./home']);
          await loading.dismiss();
        }

      });
  }

}
