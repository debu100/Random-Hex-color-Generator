const hex = document.querySelector(".hex");
const btn = document.querySelector(".generate");

const generateColor = () => {
  const randomColor = Math.random().toString(16).substring(2, 8);
  //   toString(16)--to generate numbers containing both numbers and letters 16 is the base 0-9 and then a-f
  //   substring(2, 8)--to extract characters from a string, extracting from the 2nd to 8th which will be excluded to make it a 6 digit hex color code
  document.body.style.backgroundColor = "#" + randomColor;
  hex.innerHTML = "#" + randomColor;
};

btn.addEventListener("click", generateColor);

generateColor();

// let color = Math.random();
// color = Math.random().toString(16);
// color = Math.random().toString(16).substring(2, 8);

// console.log(color);
