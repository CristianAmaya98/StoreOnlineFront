class FakeStoreAPI {
  constructor() {
    this.url = "https://fakestoreapi.com";
    this.keyStorage = "token";
  }

  _initHeaders() {
    const fakeStoreHeaders = new Headers();
    fakeStoreHeaders.append("Content-Type", "application/json");

    return fakeStoreHeaders;
  }

  _saveToken(token) {
    localStorage.setItem(this.keyStorage, token);
  }

  async getAllProducts() {
    const response = await fetch(`${this.url}/products`);
    const products = await response.json();
    return products ?? [];
  }

  async getProduct(id) {
    const response = await fetch(`${this.url}/products/${id}`);
    const product = await response.json();
    return product;
  }

  async getAllCategories() {
    const response = await fetch(`${this.url}/products/categories`);
    const categories = await response.json();
    return ["all", ...categories];
  }

  async getProductsToCategory(category) {
    const response = await fetch(`${this.url}/products/category/${category}`);
    const productsCategory = await response.json();
    return productsCategory;
  }

  async verifyUserAutentication(objLogin) {
    const response = await fetch(`https://fakestoreapi.com/auth/login`, {
      method: "POST",
      headers: this._initHeaders(),
      body: JSON.stringify(objLogin)
    });
    const { token } = await response.json();
    this._saveToken(token);
    return token ? true : false;
  }

  verifyToken() {
    return localStorage.getItem(this.keyStorage) ? true : false;
  }
}

export default FakeStoreAPI;
