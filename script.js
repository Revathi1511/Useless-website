// Spinner functionality
const spinnerImage = document.getElementById("spinner-image");
const spinButton = document.getElementById("spin-button");

spinButton.addEventListener("click", () => {
  const randomRotation = Math.floor(Math.random() * 360);
  spinnerImage.style.transform = `rotate(${randomRotation}deg)`;
});

// Hand-clapping game functionality
const clapButton = document.getElementById("clap-button");

clapButton.addEventListener("click", () => {
  alert("Clap your hands!");
});

// Fortune teller functionality
const fortuneButton = document.getElementById("fortune-button");
const fortuneResult = document.getElementById("fortune-result");

const fortunes = [
  "You will have a great day!",
  "Expect a pleasant surprise!",
  "Beware of the color red today.",
  "Your dreams will come true!",
  "A new opportunity will present itself.",
];

fortuneButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  const fortune = fortunes[randomIndex];
  fortuneResult.textContent = fortune;
});
