"use strict";

const dialog = document.querySelector(".author__dialog");
const button = document.querySelector(".author__share");

function closeDialog(event) {
  if (dialog.hasAttribute("open") && dialogInner(event)) {
    //dialog.close();
    dialog.removeAttribute("open");
    button.removeAttribute("style");
    button.querySelector("path").removeAttribute("style");
  }
}

function dialogInner(event) {
  const dialogDimensions = dialog.getBoundingClientRect();
  if (event.clientX < dialogDimensions.left ||
    event.clientX > dialogDimensions.right ||
    event.clientY < dialogDimensions.top ||
    event.clientY > dialogDimensions.bottom
  ) return true;
}

button.addEventListener("click", (event) => {
  event.stopPropagation();
  dialog.show();
  document.addEventListener("click", closeDialog);
  button.style.background = "hsl(214, 17%, 51%)";
  button.querySelector("path").style.fill = "white";
})

dialog.addEventListener("mouseleave", (e) => {
  dialog.close();
  button.removeAttribute("style");
  button.querySelector("path").removeAttribute("style");
})