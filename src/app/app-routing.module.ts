import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProteccionGuard } from './guards/proteccion.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'vista-inicio',
    loadChildren: () => import('./vista-inicio/vista-inicio.module').then((m) => m.VistaInicioPageModule),
    canActivate: [ProteccionGuard],
  },
  {
    path: 'restablecer-contra',
    loadChildren: () => import('./restablecer-contra/restablecer-contra.module').then((m) => m.RestablecerContraPageModule),
  },
  {
    path: 'ubicacion',
    loadChildren: () => import('./ubicacion/ubicacion.module').then((m) => m.UbicacionPageModule),
    canActivate: [ProteccionGuard],
  },
  {
    path: 'entrada',
    loadChildren: () => import('./entrada/entrada.module').then((m) => m.EntradaPageModule),
    canActivate: [ProteccionGuard],
  },
  {
    path: 'salida',
    loadChildren: () => import('./salida/salida.module').then((m) => m.SalidaPageModule),
    canActivate: [ProteccionGuard],
  },
  {
    path: 'confi',
    loadChildren: () => import('./confi/confi.module').then((m) => m.ConfiPageModule),
    canActivate: [ProteccionGuard],
  },
  {
    path: 'not-found',
    loadChildren: () => import('./page/not-found/not-found.module').then((m) => m.NotFoundPageModule),
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
