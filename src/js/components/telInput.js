const telInput = orderForm.querySelector("#telInput");

telInput.addEventListener("input", (e) => {
	e.target.value = e.target.value.replace(/[^.\d]+/g, "");
	if (
		e.data == "." &&
		e.target.value.split("").filter((elem) => elem == ".").length > 1
	) {
		e.target.value = e.target.value
			.split("")
			.slice(0, e.target.value.split("").lastIndexOf("."))
			.join("");
	}
});
