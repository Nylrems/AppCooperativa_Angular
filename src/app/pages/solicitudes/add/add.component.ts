import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Solicitudes } from '../solicitudes-models';
import { MatChipInputEvent } from '@angular/material/chips';
import { MainService } from 'src/app/services/main.service';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {

  models: any[] = [];
  patron: any[] = [];
  chipsList: any[] = [];

  addOnBlur = true;



  public formGroup: FormGroup;

  constructor(
    private solicitudes: Solicitudes,
    private fb: FormBuilder,
    private service: MainService,
    private storage: StorageService,
    private client: HttpClient,
    private router: Router,
    private loadingController: LoadingController

  ) { }

  ngOnInit() {
    this.formGroup = this.fb.group(
      {
        tipo: ['', Validators.required]
      });
  }

  ionViewWillEnter() {
    this.service.tabsHide.next(true);
    this.service.getData('solicitudes_tipo');

    this.service.modelo.subscribe(data => {
      data.forEach(i => {
        if (i.activo === 'si') {
          this.models.push(i);
        }
      });
    });

  }

  ionViewWillLeave() {
    this.service.tabsHide.next(false);
    this.formGroup.reset();

  }
  async sendSolicitud(formDirective: FormGroupDirective) {

    const dataList = [];
    const dataJoin: string[] = [];
    const loading = await this.loadingController.create({
      message: 'Cargando',

    });
    await loading.present();

    if (this.formGroup.get('tipo').value === '8') {
      this.chipsList.map(i => {
        dataJoin.push(i.name);
      });
      this.formGroup.get('Familiares Directos').setValue(dataJoin.join(' | '));
    }
    else if (this.formGroup.get('tipo').value === '1') {
      this.chipsList.map(i => {
        dataJoin.push(i.name);
      });
      this.formGroup.get('Información del Garante').setValue(dataJoin.join(' | '));
    }

    Object.keys(this.formGroup.controls).forEach(key => {

      if (key !== 'tipo') {
        dataList.push(`["${key}", "${formDirective.control.get(key)?.value}"]`);
      }
    });

    //formData
    const formData = new FormData();
    formData.append('token', await this.storage.get('token'));
    formData.append('tipo', this.formGroup.get('tipo').value);
    formData.append('datos', `[${dataList.join(',')}]`);

    this.client.post<any>('https://coopdgii.com/coopvirtual/App/solicitudes_registro', formData)
      .pipe(catchError(this.service.handleError))
      .subscribe({
        next: async (data) => {
          if (data.success) {
            //formDirective.resetForm();
            await this.service.getSolicitudes();
            this.router.navigateByUrl('/solicitudes');
            this.service.showToastMessage('Solicitud enviado con exito', 'success');
          }
          else {
            this.service.showToastMessage(data.debug.toString(), 'danger');
          }
        },
        error: async (error) => {
          this.service.showToast(error);
          await loading.dismiss();
        },
        complete: async ()=>{
          await loading.dismiss();
        }

      });


  }

  selectChange(value: any, formDirective: FormGroupDirective) {

    this.patron.forEach(i => {
      this.formGroup.removeControl(i.nombre);
    });

    this.models.forEach((item, i) => {
      if (item.id === value) {
        this.patron = item.campos_data;
      }
    });

    this.patron.forEach(i => {
      this.formGroup.addControl(i.nombre, new FormControl('', Validators.required));
    });
  }


  //CHIPS
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.chipsList.push({ name: value });
    }
    // Clear the input value
    event.chipInput?.clear();
  }
  remove(fruit: any): void {
    const index = this.chipsList.indexOf(fruit);

    if (index >= 0) {
      this.chipsList.splice(index, 1);
    }
  }
}
