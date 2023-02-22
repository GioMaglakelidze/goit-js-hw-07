import { galleryItems } from "./gallery-items.js";
// Change code below this line
// Вибираємо потрібне місце для нової розмітки
const galleryContainer = document.querySelector(".gallery");
// Створюємо нову розмітку галареї за шаблоном задачі
const galeryMarkupString = galleryItems
  .map(
    (item) =>
      `<div class="gallery__item"><a class="gallery__link" href="${item.original}"><img class="gallery__image lazyload" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/></a></div>`
  )
  .join("");
// Додаємо розмітку в ДОМ
galleryContainer.insertAdjacentHTML("beforeend", galeryMarkupString);
// Описуємо колбек-функцію для відкриття модального вікна зі збільшеним зображенням по делегованому кліку і додатковим закритям клавішою Escape
const openModalClick = (e) => {
  // відміняємо дію браузера за замовчуванням по кліку на посилання
  e.preventDefault();
  // якщо клік мимо картинки (на предка картинки) виходимо з функції
  if (e.target.nodeName !== "IMG") {
    return;
  }
  // Деструктиризуємо параметри датасет для читаємості коду
  const { source, alt } = e.target.dataset;
  // використовуємо бібліотеку basicLightbox для показування модального вікна
  const imageInstance = basicLightbox.create(`    
      <img src="${source}" alt="${alt}" />    
  `);
  imageInstance.show();
  // Добавляємо можливість закриття модального вікна/зображення при натисканні Escape
  // описуємо дію колбека
  const handleKeyPress = (e) => {
    if (e.code === "Escape") {
      imageInstance.close();
      document.removeEventListener("keydown", handleKeyPress);
    }
  };
  // вішаємо слухача на натискання кнопок клавіатури
  document.addEventListener("keydown", handleKeyPress);
};
// Вішаємо слухача на натискання по контейнеру галереї
galleryContainer.addEventListener("click", openModalClick);
