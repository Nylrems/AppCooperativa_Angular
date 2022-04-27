import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-recuperar-cuenta',
  templateUrl: './recuperar-cuenta.page.html',
  styleUrls: ['./recuperar-cuenta.page.scss'],
})



export class RecuperarCuentaPage implements OnInit {

  title = 'Recuperar Cuenta';

  formGroup: FormGroup;
  constructor(
    private fb: FormBuilder,
    private service: MainService
  ) { }

  get cedula() { return this.formGroup.get('cedula'); }
  get email() { return this.formGroup.get('email'); }

  ngOnInit() {
    this.formGroup = this.fb.group({
      cedula: ['', [Validators.required, Validators.max(99999999999), Validators.min(100000000)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }


  ionViewWillEnter() {
    this.service.tabsHide.next(true);
  }


  ionViewWillLeave() {
    this.service.tabsHide.next(false);
    this.formGroup.reset();
  }

  submit(form: FormGroupDirective) {

    if (this.formGroup.valid) {
      this.service.print(JSON.stringify(this.formGroup.value));
      //this.formGroup.reset();
    }
  }
}
