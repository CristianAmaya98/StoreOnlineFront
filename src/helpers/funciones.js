import FakeStoreAPI from "../classes/FakeStore";
import Favorite from "../classes/Favorite";
import ShoppingCart from "../classes/ShoppingCart";
import UI from "../classes/UI";
import { Product } from "../models";
import { AppContainer } from "./selectores";

const fakestoreapi = new FakeStoreAPI();
const shoppingCart = new ShoppingCart();
const favorite = new Favorite();
const ui = new UI();

const containerCategories = document.createElement("DIV");
const containerProducts = document.createElement("DIV");

export const CATEGORY_CONST = Object.freeze({
  ALL: "all",
  OTHER: "other"
});

export async function showAllProducts() {
  ui.showSpinner(AppContainer);
  const [products, categories] = await Promise.all([
    fakestoreapi.getAllProducts(),
    fakestoreapi.getAllCategories()
  ]);
  ui.limpiarHTML(AppContainer);

  ui.showSectionTitle(containerCategories, "Categorias.");
  ui.showCategories(containerCategories, categories);
  AppContainer.appendChild(containerCategories);

  ui.showSectionTitle(containerProducts, "Productos.");
  ui.showCardProducts(containerProducts, products);
  AppContainer.appendChild(containerProducts);
}

export function addProductCart(product) {
  const { id, image, price, title } = product;
  shoppingCart.addProduct(new Product(id, image, price, title));
}

export function detailProduct(product) {
  const { id } = product;
  window.location.href = `/detalles?id=${id}`;
}

export async function showDetailProduct(id) {
  ui.showSpinner(AppContainer);
  const product = await fakestoreapi.getProduct(id);
  ui.limpiarHTML(AppContainer);

  ui.showSectionTitle(AppContainer, "Detalles.");
  ui.showSectionDetailProduct(AppContainer, product);

  switchStyleFavorite(AppContainer, id);
}

export async function showProductsToCategory(category) {
  ui.showSpinner(containerProducts);

  let products = [];

  if (category === CATEGORY_CONST.ALL) {
    products = await fakestoreapi.getAllProducts();
  } else {
    products = await fakestoreapi.getProductsToCategory(category);
  }

  ui.limpiarHTML(containerProducts);
  ui.showSectionTitle(
    containerProducts,
    category === CATEGORY_CONST.ALL ? `Productos.` : `Productos ${category}.`
  );

  ui.showCardProducts(containerProducts, products);
  AppContainer.appendChild(containerProducts);
}

export async function addFavoriteProduct(product) {
  const { id, image, price, title } = product;
  favorite.addFavorite(new Product(id, image, price, title));
  switchStyleFavorite(AppContainer, id);
}

export function switchStyleFavorite(containerHtml = undefined, id) {
  if (!containerHtml) return;

  const buttonActions = containerHtml.querySelectorAll(
    ".product-detail__actions .product-detail__actions-item"
  );

  if (favorite.verifyIDFavorite(id) && buttonActions[2]) {
    buttonActions[2].classList.add("product-detail__actions-item--active");
    buttonActions[2].querySelector(
      ".product-detail__actions-text"
    ).textContent = "Quitar de Favorito";
  } else {
    buttonActions[2].classList.remove("product-detail__actions-item--active");
    buttonActions[2].querySelector(
      ".product-detail__actions-text"
    ).textContent = "Agregar a Favorito";
  }
}
