var feedback = document.querySelector(".button-feedback");
			
var modal = document.querySelector(".modal-feedback");
var close = modal.querySelector(".modal-close");
			
var form = modal.querySelector("form");
var login = modal.querySelector(".modal-name-input");
var email = modal.querySelector(".modal-email-input");

var overlay = document.querySelector(".overlay");

var isStorageSupport = true;
var storage = "";
  
try {
    storage = localStorage.getItem("login");
  	} catch (err) {
    	isStorageSupport = false;
  	}

feedback.addEventListener("click", function (evt) {
	evt.preventDefault();
	modal.classList.add("modal-show");
	overlay.classList.add("overlay-show");

	if (storage) {
		login.value = storage;
		email.focus();
	} else {
		login.focus();
	}
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove("modal-show");
    modal.classList.remove("modal-error");
    overlay.classList.remove("overlay-show");
});

form.addEventListener("submit", function(evt) {
	if (!login.value || !email.value) {
		evt.preventDefault();
		modal.classList.remove("modal-error");
		modal.offsetWidth = modal.offsetWidth;
		modal.classList.add("modal-error");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("login", login.value);
			localStorage.setItem("email", email.value);
		}
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (modal.classList.contains("modal-show")) {
			modal.classList.remove("modal-show");
			modal.classList.remove("madla-error");
			overlay.classList.remove("overlay-show");
		}
	}
});