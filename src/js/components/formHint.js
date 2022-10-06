const orderForm = document.getElementById("orderForm");
const inputs = orderForm.querySelectorAll(".form__input");
const hintElem = orderForm.querySelector(".form__hint");

inputs.forEach((input) => {
	input.addEventListener("focus", (e) => {
		let hint = e.currentTarget.getAttribute("data-hint");
		hintElem.innerHTML = hint;
		hintElem.classList.add("form__hint-active");
		setTimeout(() => {
			hintElem.classList.remove("form__hint-active");
		}, 3000);
	});
});
