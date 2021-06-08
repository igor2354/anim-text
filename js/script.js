document.addEventListener(
	"DOMContentLoaded",
	function () {
		let arrText = Array.prototype.slice.call(document.querySelectorAll(".animtext span"));

		arrText.forEach((element, i) => {
			element.style.transition = `all 1.5s ease-out ${i / 36}s`;
		});

		document.querySelector("body").addEventListener("click", () => {
			arrText.forEach((element) => {
				setTimeout(() => {
					let angle = (Math.random() + 0.5) * 2 * Math.PI;

					element.style.transform = `rotate(${15 * Math.random() - 0.5}deg) translate(${60 * Math.cos(angle)}px, ${60 * Math.sin(angle)}px)`;
					element.style.opacity = "0";
				});
			});
		});
	},
	false
);
