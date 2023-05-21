import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HomeRoutingModule } from './home.routing.module';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { SharedModule } from '../shared/shared.module';
import { ButtonsActionsComponent } from './components/buttons-actions/buttons-actions.component';


@NgModule({
  declarations: [
    HomePageComponent,
    DetailPageComponent,
    CategoriesComponent,
    HeaderSectionComponent,
    ProductsComponent,
    ProductComponent,
    ButtonsActionsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
