import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { MainService } from 'src/app/services/main.service';


@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.page.html',
  styleUrls: ['./sugerencias.page.scss'],
})
export class SugerenciasPage implements OnInit {

  public formGroup: FormGroup;

  title = 'Sugerencias';
  constructor(
    private fb: FormBuilder,
    private service: MainService

  ) { }

  get tipo() { return this.formGroup.get('tipo'); }
  get nombres() { return this.formGroup.get('nombres'); }
  get apellidos() { return this.formGroup.get('apellidos'); }
  get localidad() { return this.formGroup.get('localidad'); }
  get comentario() { return this.formGroup.get('comentario'); }

  ngOnInit() {
    this.formGroup = this.fb.group({
      tipo: ['', [Validators.required]],
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      localidad: ['', [Validators.required]],
      comentario: ['', [Validators.required]]
    });
  }

  async sendSugerencia(formDirective: FormGroupDirective) {

    if (this.formGroup.valid) {

      //add date
      this.service.print(JSON.stringify(this.formGroup.value).replace(/,/g,',\n'));
    }
  }
}
