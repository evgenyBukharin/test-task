const targetDate = new Date(new Date().getTime() + 30 * 60000);

const minutesValue = document.querySelector(".timer__minutes .timer__value");
const secondsValue = document.querySelector(".timer__seconds .timer__value");

const minutesLabel = document.querySelector(".timer__minutes .timer__label");
const secondsLabel = document.querySelector(".timer__seconds .timer__label");

const countTime = () => {
	let now = new Date();
	let leftUntil = targetDate - now;

	if (leftUntil > 0) {
		let minutes = Math.floor(leftUntil / 1000 / 60);
		let seconds = Math.floor((leftUntil / 1000) % 60);

		if (minutes > 10) {
			minutesValue.innerHTML = minutes;
		} else {
			minutesValue.innerHTML = `0${minutes}`;
		}
		minutesLabel.innerHTML = declOfNum(minutes, [
			"минута",
			"минуты",
			"минут",
		]);
		if (seconds >= 10) {
			secondsValue.innerHTML = seconds;
		} else {
			secondsValue.innerHTML = `0${seconds}`;
		}
		secondsLabel.innerHTML = declOfNum(seconds, [
			"секунда",
			"секунды",
			"секунд",
		]);
	} else {
		clearInterval(intId);
	}
};

function declOfNum(number, titles) {
	cases = [2, 0, 1, 1, 1, 2];
	return titles[
		number % 100 > 4 && number % 100 < 20
			? 2
			: cases[number % 10 < 5 ? number % 10 : 5]
	];
}

countTime();
let intId = setInterval(countTime, 1000);
