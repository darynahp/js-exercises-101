const year = document.querySelector('.year');
const wrapper = document.querySelector('.wrapper');
const basicColors = [
  "Black",
  "White",
  "Red",
  "Green",
  "Blue",
  "Yellow",
  "Cyan",
  "Magenta",
  "Gray",
  "Orange",
  "Brown",
  "Purple",
  "Pink",
  "Lime",
  "Navy",
  "Teal",
  "Olive",
  "Maroon",
  "Silver",
  "Gold",
  "Coral"
];

function getRandomColor() {
  const i = Math.floor(Math.random() * 20);
  return basicColors[i];
}

/* setInterval(() => {
  year.style.color = getRandomColor();
}, 600); */

function changeElColor(el, property) {
  el.style[property] = getRandomColor();
}

/* setInterval(changeYearColor, 600); */

setInterval(() => {
  changeElColor(year, 'color');
  changeElColor(year, 'backgroundColor');
}, 600);

wrapper.style.maxWidth = '600px';
wrapper.style.margin = 'auto';
wrapper.style.textAlign = 'center';
wrapper.style.fontFamily = 'Arial, sans-serif';
year.style.fontSize = '45px'

document.body.style.height = '100vh'

const listItems = document.querySelectorAll('ul li');

li.style.padding = '17px';
li.style.marginTop = '2px';
li.style.listStyle = 'none';
li.style.fontSize = '18px';
li.style.fontFamily = 'Arial';
li.style.display = 'flex';
li.style.justifyContent = 'space-between';
li.style.alignItems = 'center';

 const timeDisplay = document.createElement('h3');
 
  timeDisplay.style.padding = '10px 20px';
  timeDisplay.style.borderRadius = '8px';
  timeDisplay.style.marginTop = '10px';
  timeDisplay.style.display = 'inline-block';
  timeDisplay.style.fontWeight = 'normal';
  timeDisplay.style.fontFamily = 'Arial';
  timeDisplay.style.fontSize = '16px';
  timeDisplay.style.marginBottom = '10px';