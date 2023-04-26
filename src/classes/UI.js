import {
  CATEGORY_CONST,
  addFavoriteProduct,
  addProductCart,
  detailProduct,
  showProductsToCategory
} from "../helpers/funciones";

class UI {
  constructor() {}

  showSectionTitle(containerHTML = undefined, title = "") {
    if (!containerHTML) return;

    const sectionContainer = document.createElement("DIV");
    sectionContainer.className = "section";

    const h2Title = document.createElement("H2");
    h2Title.className = "section__title";
    h2Title.textContent = title;

    containerHTML.appendChild(h2Title);
  }

  showCategories(containerHTML = undefined, categories = []) {
    if (!containerHTML) return;

    const categoriesContainer = document.createElement("DIV");
    categoriesContainer.className = "categories";

    const categoriesUL = document.createElement("UL");
    categoriesUL.className = "categories__grid";

    categories.forEach((category) => {
      const categoryItem = document.createElement("LI");
      categoryItem.classList.add("categories__grid-item");

      if (category === CATEGORY_CONST.ALL) {
        categoryItem.classList.add("categories__grid-item--active");
        categoryItem.classList;
      }

      categoryItem.textContent = category;

      const itemMethod = this;
      categoryItem.onclick = function () {
        itemMethod.removeActiveCategory(
          categoriesUL.childNodes,
          "categories__grid-item--active"
        );
        categoryItem.classList.add("categories__grid-item--active");

        showProductsToCategory(category);
      };

      categoriesUL.appendChild(categoryItem);
    });

    categoriesContainer.appendChild(categoriesUL);
    containerHTML.appendChild(categoriesContainer);
  }

  removeActiveCategory(childrens = [], classCss = "") {
    childrens.forEach((child) => {
      if (child.classList.contains(classCss)) {
        child.classList.remove(classCss);
      }
    });
  }

  showCardProducts(containerHTML = undefined, products = []) {
    if (!containerHTML) return;

    const sectionProducts = document.createElement("SECTION");
    sectionProducts.className = "productos";

    products.forEach((product) => {
      const { title, price, image, id } = product;

      const productDiv = document.createElement("DIV");
      productDiv.className = "producto";

      const productImage = document.createElement("DIV");
      productImage.classList.add("producto__container-image");

      productImage.onclick = function () {
        detailProduct(product);
      };
      const imageEl = document.createElement("IMG");
      imageEl.classList.add("producto__imagen");
      imageEl.src = image;
      imageEl.alt = `product-${id}`;

      productImage.appendChild(imageEl);

      productDiv.appendChild(productImage);

      const productInfo = document.createElement("DIV");
      productInfo.classList.add("producto__info");

      const titleEl = document.createElement("H3");
      titleEl.classList.add("producto__title");
      titleEl.textContent = title;

      const priceEl = document.createElement("SPAN");
      priceEl.classList.add("producto__price");
      priceEl.textContent = `$ ${price}`;

      const buttonAdd = document.createElement("BUTTON");
      buttonAdd.classList.add("producto__button", "producto__button-add");
      buttonAdd.textContent = "AGREGAR";
      buttonAdd.onclick = function () {
        addProductCart(product);
      };

      productInfo.appendChild(titleEl);
      productInfo.appendChild(priceEl);
      productInfo.appendChild(buttonAdd);

      productDiv.appendChild(productInfo);

      sectionProducts.appendChild(productDiv);
    });

    containerHTML.appendChild(sectionProducts);
  }

  showSectionDetailProduct(containerHTML = undefined, product) {
    if (!containerHTML) return;

    const actionsDetail = Object.freeze({
      COMPRAR: "comprar",
      AGREGAR: "agregar",
      FAVORITO: "favorito"
    });

    const buttons = [
      {
        title: "Comprar Ahora",
        icon: ` <svg class="product-detail__actions-icon" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
              </svg>`,
        event: actionsDetail.COMPRAR
      },
      {
        title: "Agregar al Carrito",
        icon: ` <svg class="product-detail__actions-icon" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>`,
        event: actionsDetail.AGREGAR
      },
      {
        title: "Agregar a Favorito",
        icon: ` <svg class="product-detail__actions-icon" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>`,
        event: actionsDetail.FAVORITO
      }
    ];

    const {
      id,
      image,
      title,
      price,
      description,
      rating: { rate, count }
    } = product;

    const productDetailContainer = document.createElement("DIV");
    productDetailContainer.className = "product-detail";

    const productDetailImagenContainer = document.createElement("DIV");
    productDetailImagenContainer.className = "product-detail__container-imagen";

    const productImagen = document.createElement("IMG");
    productImagen.className = "product-detail__imagen";
    productImagen.src = image;
    productImagen.alt = `product-${id}`;

    productDetailImagenContainer.appendChild(productImagen);
    productDetailContainer.appendChild(productDetailImagenContainer);

    const productDetailInfo = document.createElement("DIV");
    productDetailInfo.className = "product-detail__info";

    const titleEl = document.createElement("H2");
    titleEl.className = "product-detail__info-title";
    titleEl.textContent = title;
    productDetailInfo.appendChild(titleEl);

    const priceEl = document.createElement("P");
    priceEl.className = "product-detail__info-price";
    priceEl.textContent = `$ ${price}`;
    productDetailInfo.appendChild(priceEl);

    const rankingEl = document.createElement("DIV");
    rankingEl.className = "product-detail__info-ranking";
    rankingEl.textContent = `Calificacion: ${rate}`;
    productDetailInfo.appendChild(rankingEl);

    const reviewsEl = document.createElement("DIV");
    reviewsEl.className = "product-detail__info-reviews";
    reviewsEl.textContent = `Reseñas: ${count}`;
    productDetailInfo.appendChild(reviewsEl);

    const ulButtonActions = document.createElement("UL");
    ulButtonActions.className = "product-detail__actions";

    buttons.forEach((buttons) => {
      const { title, icon, event } = buttons;
      const liProductActionItem = document.createElement("LI");
      liProductActionItem.className = "product-detail__actions-item";

      liProductActionItem.onclick = function () {
        console.log("Click...  " + event);
        switch (event) {
          case actionsDetail.FAVORITO:
            addFavoriteProduct(product);
            break;

          default:
            break;
        }
      };

      const spanTitleEl = document.createElement("SPAN");
      spanTitleEl.className = "product-detail__actions-text";
      spanTitleEl.textContent = title;

      liProductActionItem.appendChild(spanTitleEl);
      liProductActionItem.innerHTML += icon;

      ulButtonActions.appendChild(liProductActionItem);
    });

    productDetailInfo.appendChild(ulButtonActions);
    productDetailContainer.appendChild(productDetailInfo);

    const descriptionDetail = document.createElement("DIV");
    descriptionDetail.className = "product-detail__description";

    const h2DescriptionTitle = document.createElement("H2");
    h2DescriptionTitle.className = "product-detail__description-title";
    h2DescriptionTitle.textContent = "Descripcion.";
    descriptionDetail.appendChild(h2DescriptionTitle);

    const pDescriptionTextEl = document.createElement("P");
    pDescriptionTextEl.className = "product-detail__description-text";
    pDescriptionTextEl.textContent = description;
    descriptionDetail.appendChild(pDescriptionTextEl);

    productDetailContainer.appendChild(descriptionDetail);
    containerHTML.appendChild(productDetailContainer);
  }

  showSpinner(containerHTML = undefined, mensaje = "Cargando....") {
    this.limpiarHTML(containerHTML);

    const containerProgress = document.createElement("DIV");

    const spinerContainer = document.createElement("DIV");
    spinerContainer.className = "sk-chase";

    for (let i = 1; i <= 5; i++) {
      const spinerItem = document.createElement("DIV");
      spinerItem.className = `sk-chase-dot`;
      spinerContainer.appendChild(spinerItem);
    }

    containerProgress.appendChild(spinerContainer);

    const pMensaje = document.createElement("P");
    pMensaje.className = "text-center";
    pMensaje.textContent = mensaje;
    containerProgress.appendChild(pMensaje);

    containerHTML.appendChild(containerProgress);
  }
  limpiarHTML(selector) {
    while (selector.firstChild) {
      selector.removeChild(selector.firstChild);
    }
  }
}

export default UI;
