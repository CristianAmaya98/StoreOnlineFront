import {
  CATEGORY_CONST,
  addFavoriteProduct,
  addProductCart,
  detailProduct,
  inputType,
  showProductsToCategory
} from "../helpers/funciones";
import { header } from "../helpers/selectores";

class UI {
  constructor() {
    this.showHeader()
  }

  showHeader() {
    const headerContainer = document.createElement("DIV");
    headerContainer.classList.add("header__contenido", "header__container");

    const headerLogoContainer = document.createElement("DIV");
    headerLogoContainer.className = "header__logo-container";

    const h1Title = document.createElement("H1");
    h1Title.className = "header__logo logo-fake-store";
    h1Title.textContent = "StoreOnline";
    h1Title.onclick = function (e) {
      e.preventDefault();
      window.location.href = "/index";
    }

    headerLogoContainer.appendChild(h1Title);
    headerContainer.appendChild(headerLogoContainer);

    const ulNavigationContainer = document.createElement("UL");
    ulNavigationContainer.className = "header__navigation";

    const liNavigationShopping = document.createElement("LI");
    liNavigationShopping.id = "count-shopping";
    liNavigationShopping.className = "header__navigation-item";

    const spanCounterShopping = document.createElement("SPAN");
    spanCounterShopping.className = "header__navigation-count";
    spanCounterShopping.textContent = 0;
    liNavigationShopping.appendChild(spanCounterShopping);
    liNavigationShopping.innerHTML += `
    <svg class="header__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
      stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>`;

    ulNavigationContainer.appendChild(liNavigationShopping);

    const liNavigationFavorite = document.createElement("LI");
    liNavigationFavorite.id = "count-favorite";
    liNavigationFavorite.className = "header__navigation-item";

    const spanCounterFavorite = document.createElement("SPAN");
    spanCounterFavorite.className = "header__navigation-count";
    spanCounterFavorite.textContent = 0;
    liNavigationFavorite.appendChild(spanCounterFavorite);
    liNavigationFavorite.innerHTML += `
    <svg class="header__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
      stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>`;

    ulNavigationContainer.appendChild(liNavigationFavorite);
    headerContainer.appendChild(ulNavigationContainer);
    header.appendChild(headerContainer);
  }

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

  showFormulario(containerHTML = undefined) {
    if (!containerHTML) return;

    const formularioItems = [
      {
        typeInput: inputType.TEXT,
        id: "username",
        name: "username",
        label: "UserName:",
        value: "",
        placeholder: "Ingrese su UserName"
      },
      {
        typeInput: inputType.PASSWORD,
        id: "password",
        name: "password",
        label: "Password:",
        value: "",
        placeholder: "Ingrese su password"
      },
      {
        typeInput: inputType.SUBMIT,
        value: "Ingresar"
      }
    ];

    const formulariContainer = document.createElement("FORM");
    formulariContainer.className = "formulario";
    formulariContainer.id = "formulario";
    formulariContainer.action = "";

    const campoLogoContainer = document.createElement("DIV");
    campoLogoContainer.className = "formulario__campo";
    campoLogoContainer.innerHTML = `
     <svg class="formulario__icon" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-building-store" width="48" height="48"
        viewBox="0 0 24 24" stroke-width="1.5" stroke="#4F49D1" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="3" y1="21" x2="21" y2="21" />
        <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
        <line x1="5" y1="21" x2="5" y2="10.85" />
        <line x1="19" y1="21" x2="19" y2="10.85" />
        <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
      </svg>
      <span class="formulario__title">Store Online</span>
    `;

    formulariContainer.appendChild(campoLogoContainer);

    formularioItems.forEach((itemCampos) => {
      const { id, label, typeInput, name, value, placeholder } = itemCampos;

      const camposFormulario = document.createElement("DIV");
      camposFormulario.className = "formulario__campo";

      if (typeInput === inputType.SUBMIT) {
        const inputSubmit = document.createElement("INPUT");
        inputSubmit.classList.add(
          "formulario__input",
          "formulario__input-submit"
        );
        inputSubmit.type = typeInput;
        inputSubmit.value = value;
        camposFormulario.appendChild(inputSubmit);
      } else {
        const labelInput = document.createElement("LABEL");
        labelInput.className = "formulario__label";
        labelInput.for = id;
        labelInput.textContent = label;

        const inputForm = document.createElement("INPUT");
        inputForm.className = "formulario__input";
        inputForm.type = typeInput;
        inputForm.id = id;
        inputForm.value = value;
        inputForm.name = name;
        inputForm.placeholder = placeholder;

        const validatorULForm = document.createElement("UL");
        validatorULForm.className = "formulario__validators";
        validatorULForm.id = `validator-${id}`;

        camposFormulario.appendChild(labelInput);
        camposFormulario.appendChild(inputForm);
        camposFormulario.appendChild(validatorULForm);
      }

      formulariContainer.appendChild(camposFormulario);
    });

    containerHTML.appendChild(formulariContainer);
  }

  showErrorValidator(containerHTML = undefined, message = "") {
    if (!containerHTML) return;

    const liValidator = document.createElement("LI");
    liValidator.className = "formulario__validator";
    liValidator.innerHTML = `
     <svg class="formulario__validator-icon" xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-mood-crazy-happy" width="48" height="48" viewBox="0 0 24 24"
        stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="12" r="9" />
        <line x1="7" y1="8.5" x2="10" y2="11.5" />
        <path d="M7 11.5l3 -3" />
        <line x1="14" y1="8.5" x2="17" y2="11.5" />
        <path d="M14 11.5l3 -3" />
        <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
      </svg>
      <span class="formulario__validator-text">${message}</span>
    `;

    containerHTML.appendChild(liValidator);
  }
}

export default UI;
