const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";
  // loop through hex array
  for (let i = 0; i < 6; i++) {
    // get random number between 0-15
    const randomNumber = getRandomNumber();
    // add random number to hexColor
    hexColor += hex[randomNumber];
  }
  // change background color
  document.body.style.backgroundColor = hexColor;
  // change text color
  color.textContent = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
