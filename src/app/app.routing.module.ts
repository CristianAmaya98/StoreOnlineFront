import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerificationTokenGuard } from './shared/guards/verification-token.guard';
import { VerificationSeccionGuard } from './auth/guards/verification-seccion.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canLoad: [VerificationTokenGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canActivate: [VerificationSeccionGuard],
    canLoad: [VerificationSeccionGuard]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
