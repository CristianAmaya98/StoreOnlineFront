class FakeStoreAPI {
  constructor() {
    this.url = "https://fakestoreapi.com";
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
}

export default FakeStoreAPI;
