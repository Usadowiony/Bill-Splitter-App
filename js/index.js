const price = document.querySelector("#price");
const people = document.querySelector("#people");
const tip = document.querySelector("#tip");

const btn = document.querySelector(".main__btn");
const error = document.querySelector(".main__info--error");
const info = document.querySelector(".main__info--cost");
const resultSpan = document.querySelector(".main__info--span");

const countBill = () => {
	const newPrice = parseFloat(price.value);
	const newPeople = parseInt(people.value);
	const newTip = parseFloat(tip.value);

	const resultValue = (newPrice + newPrice * newTip) / newPeople;
	resultSpan.textContent = resultValue.toFixed(2);
	console.log(resultValue);
};

btn.addEventListener("click", () => {
	if (price.value === "" || people.value === "" || tip.value === 0) {
		info.style.display = "none";
		error.innerHTML = "Complete all fields!";
	} else if (people.value === "1") {
		info.style.display = "none";
		error.innerHTML = "You can't split the bill only with yourself!";
	} else {
		info.style.display = "block";
		error.innerHTML = "";

		countBill();
	}
});
