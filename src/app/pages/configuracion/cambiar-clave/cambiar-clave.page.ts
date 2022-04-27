import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-cambiar-clave',
  templateUrl: './cambiar-clave.page.html',
  styleUrls: ['./cambiar-clave.page.scss'],
})
export class CambiarClavePage implements OnInit {

  title = 'Cambiar clave';
  hide = true;
  hidePassword = true;
  hideConfirmPassword = true;

  formGroup: FormGroup;
  constructor(
    private service: MainService,
    private fb: FormBuilder
  ) { }


  get claveActual() { return this.formGroup.get('claveActual'); }
  get claveNueva() { return this.formGroup.get('claveNueva'); }
  get claveVerificar() { return this.formGroup.get('claveVerificar'); }

  ngOnInit() {

    this.formGroup = this.fb.group({
      claveActual: ['', [Validators.required, Validators.maxLength(30)]],
      claveNueva: ['', [Validators.required, Validators.maxLength(30)]],
      claveVerificar: ['', [Validators.required, Validators.maxLength(30)]]
    }, { validators: this.confirmedValidator('claveNueva', 'claveVerificar') });
  }

  ionViewWillEnter() {
    this.service.tabsHide.next(true);
  }

  ionViewWillLeave() {
    this.service.tabsHide.next(false);
    this.formGroup.reset();

  }

  submit() {

    if (this.formGroup.valid) {

      this.service.print(JSON.stringify(this.formGroup.value).replace(/,/g, ',\n'));
    }
  }

  confirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.notMacth) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ notMacth: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}
