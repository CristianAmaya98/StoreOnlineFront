import "../style.css";
import { showAllProducts, showDetailProduct } from "./helpers/funciones";
import { fakeStoreLogo } from "./helpers/selectores";

fakeStoreLogo.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "/index";
});

window.onload = async function () {
  const endPoint = window.location.pathname;
  const path = endPoint.split(".")[0];
  console.log(path);

  switch (path) {
    case "/":
    case "/index":
      showAllProducts();
      break;

    case "/detalles":
      const parametrosURL = new URLSearchParams(window.location.search);
      showDetailProduct(parametrosURL.get("id"));
      break;

    default:
      break;
  }
};
