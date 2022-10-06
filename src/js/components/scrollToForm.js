const scrollBtns = document.querySelectorAll(".makeOrderBtn");
const orderForm = document.getElementById("orderForm");

scrollBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		orderForm.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	});
});
