import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FakeStoreService {

  private url = environment.url;

  private _categories: string[] = [];
  private _products: any[] = [];

  public get categories(): string[] {
    return [...this._categories]
  }


  public get products(): any[] {
    return [...this._products];
  }



  constructor(private _http: HttpClient) { }

  getAllCategories() {
    this._http.get(`${this.url}/products/categories`).subscribe(response => {
      this._categories = response as string[];
    })
  }

  getAllProducts() {
    this._http.get(`${this.url}/products`).subscribe(response => {
      this._products = response as any[]
    });
  }

  getProductsToCategory(category: string) {
    this._http.get(`${this.url}/products/category/${category}`).subscribe(response => {
      this._products = response as any[]
    })
  }
}
