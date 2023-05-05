import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'products',
    component: HomePageComponent
  },
  {
    path: 'detail',
    component: DetailPageComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products'
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
