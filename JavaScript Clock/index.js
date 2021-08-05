const secondHand = document.querySelector(".seconds");
const minHand = document.querySelector(".mins");
const hourHand = document.querySelector(".hour");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();

  const secondDegress = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegress}deg)`;

  const mins = now.getMinutes();
  const minDegress = (mins / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minDegress}deg)`;

  const hours = now.getHours();
  const hourDegress = (hours / 60) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegress}deg)`;
}

setInterval(setDate, 1000);
