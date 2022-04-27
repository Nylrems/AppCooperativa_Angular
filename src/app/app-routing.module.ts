import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UserGuard } from './guards/user.guard';
import { LogoutPage } from './pages/logout/logout.page';



const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [UserGuard]
  },
  {
    path: 'cuentas',
    loadChildren: () => import('./pages/cuentas/cuentas.module').then( m => m.CuentasPageModule),
    canActivate: [UserGuard]
  },
  {
    path: 'prestamos',
    loadChildren: () => import('./pages/prestamos/prestamos.module').then( m => m.PrestamosPageModule),
    canActivate: [UserGuard]
  },
  {
    path: 'inversiones',
    loadChildren: () => import('./pages/inversiones/inversiones.module').then( m => m.InversionesPageModule),
    canActivate: [UserGuard]
  },
  {
    path: 'solicitudes',
    loadChildren: () => import('./pages/solicitudes/solicitudes.module').then( m => m.SolicitudesPageModule),
    canActivate: [UserGuard]
  },
  {
    path: 'descuentos',
    loadChildren: () => import('./pages/descuentos/descuentos.module').then( m => m.DescuentosPageModule),
    canActivate: [UserGuard]
  },
  {
    path: 'noticias',
    loadChildren: () => import('./pages/noticias/noticias.module').then( m => m.NoticiasPageModule)
  },
  {
    path: 'sugerencias',
    loadChildren: () => import('./pages/sugerencias/sugerencias.module').then( m => m.SugerenciasPageModule)
  },
  {
    path: 'ayuda',
    loadChildren: () => import('./pages/ayuda/ayuda.module').then( m => m.AyudaPageModule)
  },
  {
    path: 'tasas',
    loadChildren: () => import('./pages/tasas/tasas.module').then( m => m.TasasPageModule),
    canActivate: [UserGuard]
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./pages/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule),
    canActivate: [UserGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'recuperar-cuenta',
    loadChildren: () => import('./pages/recuperar-cuenta/recuperar-cuenta.module').then( m => m.RecuperarCuentaPageModule)
  },
  {
    path: 'contactos',
    loadChildren: () => import('./pages/contacto/contacto.module').then( m => m.ContactoPageModule)
  },
  {
    path: 'logout',
    component: LogoutPage
  },
  {
    path: 'cambiar-clave',
    loadChildren: () => import('./pages/configuracion/cambiar-clave/cambiar-clave.module').then( m => m.CambiarClavePageModule),
    canActivate: [UserGuard]
  },
  {
    path: 'preguntas-frecuentes',
    loadChildren: () => import('./pages/preguntas-frecuentes/preguntas-frecuentes.module').then( m => m.PreguntasFrecuentesPageModule)
  },
  {
    path: 'videos',
    loadChildren: () => import('./pages/videos/videos.module').then( m => m.VideosPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
