import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryElem = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (item) => `<li><a class="class="gallery__item" href="${item.original}">
  <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
  />
</a></li>`
  )
  .join("");

galleryElem.insertAdjacentHTML("beforeend", markup);

galleryElem.addEventListener("click", onImageClick);

function onImageClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const lightbox = new SimpleLightbox(".gallery a", {});
}
