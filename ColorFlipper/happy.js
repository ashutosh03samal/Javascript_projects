const ashu = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let colorUpdate = "#";
  for (let i = 0; i < 6; i++) {
    colorUpdate += ashu[getRandomNumber()];
  }
  // console.log(colorUpdate);

  color.textContent = colorUpdate;
  document.body.style.backgroundColor = colorUpdate;
});

function getRandomNumber() {
  return Math.floor(Math.random() * ashu.length);
}