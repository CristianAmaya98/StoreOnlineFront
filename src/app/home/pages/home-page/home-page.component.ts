import { Component, OnInit } from '@angular/core';
import { FakeStoreService } from '../../services/fake-store.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  titleProduct: string = 'Productos.';
  showAnimation: boolean = false;

  public get categories(): string[] {
    return ['all', ...this.fakeStoreService.categories];
  }


  public get products(): any[] {
    return this.fakeStoreService.products;
  }


  constructor(private fakeStoreService: FakeStoreService) { }

  ngOnInit(): void {
    this.fakeStoreService.getAllCategories();
    this.fakeStoreService.getAllProducts();
  }


  onCategorySelect(categorySelect: string) {
    this.showAnimation = true;
    if (categorySelect === 'all') {
      this.titleProduct = 'Productos.'
      this.fakeStoreService.getAllProducts();
      setTimeout(() => {
        this.showAnimation = false;
      }, 1000);
      return
    }

    this.titleProduct = `Productos ${categorySelect}.`
    this.fakeStoreService.getProductsToCategory(categorySelect);
    setTimeout(() => {
      this.showAnimation = false;
    }, 1000);
  }

}
