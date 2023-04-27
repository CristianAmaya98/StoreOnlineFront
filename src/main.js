import "../style.css";
import { showAllProducts, showAuthLogin, showDetailProduct } from "./helpers/funciones";



window.onload = async function () {
  const endPoint = window.location.pathname;
  const path = endPoint.split(".")[0];
  console.log(path);

  switch (path) {
    case "/":
    case "/index":
      showAuthLogin();
      break;
    
    case '/home':
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
