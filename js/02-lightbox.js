import { galleryItems } from "./gallery-items.js";
// Change code below this line

// Вибираємо потрібне місце для нової розмітки
const galleryContainer = document.querySelector(".gallery");
// Створюємо нову розмітку галареї за шаблоном 2ої задачі
const galeryMarkupString = galleryItems
  .map(
    (item) =>
      `<a class="gallery__item" href="${item.original}"><img class="gallery__image lazyload" src="${item.preview}" alt="${item.description}"/></a>`
  )
  .join("");
// Додаємо розмітку в ДОМ
galleryContainer.insertAdjacentHTML("beforeend", galeryMarkupString);

// Ініціалізуємо бібліотеку SimpleLightbox з потрібними атрибутами
let lightbox = new SimpleLightbox(".gallery a", {
  //   scrollZoom: false,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
