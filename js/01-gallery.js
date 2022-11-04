import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryElem = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (item) => `<div class="gallery__item">
<a class="gallery__link" href="${item.original}">
  <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
  />
</a>
</div>`
  )
  .join("");

galleryElem.insertAdjacentHTML("beforeend", markup);

galleryElem.addEventListener("click", onImageClick);

function onImageClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
  <img src = "${e.target.dataset.source}" width="800" height="600">
`);
  instance.show();
  galleryElem.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  });
  galleryElem.removeEventListener("keydown", onKeyClose);
}
