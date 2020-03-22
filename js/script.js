var link = document.querySelector(".button-link");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal-close");

link.addEventListener("click", function (evt) {
   evt.preventDefault();
   popup.classList.remove("hidden");
 });
 close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("hidden");
});
