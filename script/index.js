// Logo section ===================================================
document.querySelector(".footer__button").onclick = function () {
  document
    .querySelector(".footer__button")
    .classList.toggle("footer__button_hidden");
  document
    .querySelector(".footer__copyright")
    .classList.toggle("footer__copyright_active");
  document
    .querySelector(".footer__separator")
    .classList.toggle("footer__separator_active");
  document
    .querySelector(".footer__year")
    .classList.toggle("footer__year_active");
  document
    .querySelector(".footer__authors")
    .classList.toggle("footer__authors_active");
};

//Quotes section ====================================================
function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("quotes__cell_active");
    }
  });
}

let options = {
  threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".quotes__cell");

for (let elm of elements) {
  observer.observe(elm);
}

// Popup section ====================================
let popupBg = document.querySelector(".popup");
let popup = document.querySelector(".popup__form");
let openPopupButtons = document.querySelectorAll(".navbar__link_active");
let closePopupButton = document.querySelector(".popup__close");
openPopupButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    popupBg.classList.add("popup_active");
    popup.classList.add("popup__form_active");
  });
});
closePopupButton.addEventListener("click", () => {
  popupBg.classList.remove("popup_active");
  popup.classList.remove("popup__form_active");
});
document.addEventListener("click", (e) => {
  if (e.target === popupBg) {
    popupBg.classList.remove("popup_active");
    popup.classList.remove("popup__form_active");
  }
});

// Тесты УЖАС ПРОСТО  АААААААААААААААААААААААААААААААААААААААААААААА

// Input_type_name ========================================
let PopupInputName = document.querySelector(".popup__input_type_name");
let PopupTextName = document.querySelector(".popup__text_type_name");
PopupInputName.onblur = function () {
  PopupTextName.classList.remove("popup__text_active");
};
PopupInputName.onfocus = function () {
  PopupTextName.classList.add("popup__text_active");
};

// Input_type_tel ==========================================
let PopupInputTel = document.querySelector(".popup__input_type_tel");
let PopupTextTel = document.querySelector(".popup__text_type_tel");
PopupInputTel.onblur = function () {
  PopupTextTel.classList.remove("popup__text_active");
};
PopupInputTel.onfocus = function () {
  PopupTextTel.classList.add("popup__text_active");
};

//Input_type_message ========================================
let PopupInputMessage = document.querySelector(".popup__message");
let PopupTextMessage = document.querySelector(".popup__text_type_message");
PopupInputMessage.onblur = function () {
  PopupTextMessage.classList.remove("popup__text_active");
};
PopupInputMessage.onfocus = function () {
  PopupTextMessage.classList.add("popup__text_active");
};
