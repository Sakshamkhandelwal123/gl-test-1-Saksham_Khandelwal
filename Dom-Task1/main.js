const colors = ["red", "yellow", "blue", "green", "black", "purple", "orange"];
const button = document.getElementById("btn");
const color = document.querySelector(".color");

button.addEventListener("click",  () => {
  const rand = getRandomColor();
  document.body.style.backgroundColor = colors[rand];
  color.innerText = colors[rand];
});

function getRandomColor() {
  return Math.floor(Math.random() * colors.length);
}