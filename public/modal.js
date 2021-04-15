/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
let lastFocusedElt;
const modalBtn = document.querySelector("#contact-btn");
const modalBg = document.querySelector("#bGround");
const closeModalBtn = document.querySelectorAll(".close-action");
const submitBtn = document.querySelector("#submit-btn");

modalBtn.addEventListener("click", launchModal);

function launchModal() {
    lastFocusedElt = document.activeElement;
    modalBg.style.display = "block";
    modalBg.focus();
}

function closeModal() {
    modalBg.style.display = "none";
    setTimeout(() => lastFocusedElt.focus(), 10);
}

function closeModalButton() {
    closeModalBtn.forEach((elt) => {
        elt.addEventListener("click",() => {
            closeModal();
        });
        elt.addEventListener("keydown", (event) => {
            if (event.keyCode === 13) {
                closeModal();
            }
        });
    });
}

function displayFormContent() {
    const firstName = document.querySelector("#first-name");
    console.log(firstName.value);
    const lastName = document.querySelector("#last-name");
    console.log(lastName.value);
    const email = document.querySelector("#email");
    console.log(email.value);
    const message = document.querySelector("#message");
    console.log(message.value);
}

function submitModal() {
    submitBtn.addEventListener("click", (event) => {
        displayFormContent();
        event.preventDefault();
    });
    submitBtn.addEventListener("keydown",(event) => {
        displayFormContent();
        event.preventDefault();
    });
}

closeModalButton();
submitModal();
/******/ })()
;
//# sourceMappingURL=modal.js.map