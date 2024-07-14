// Get the year element
const yearElement = document.querySelector('h1');

// Get the date and time element
const dateTimeElement = document.querySelector('h2');

// Get the list items
const listItems = document.querySelectorAll('li');

// Function to change the year color every 1 second
function changeYearColor() {
  const randomColor = getRandomColor();
  yearElement.style.color = randomColor;
}

// Function to change the date and time background color every 1 second
function changeDateTimeBackground() {
  const randomColor = getRandomColor();
  dateTimeElement.style.background = randomColor;
}

// Function to get a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Set interval to change the year color and date and time background every 1 second
setInterval(changeYearColor, 1000);
setInterval(changeDateTimeBackground, 1000);

// Add background colors to the list items based on their status
listItems.forEach((item, index) => {
  if (item.textContent.includes('Done')) {
    item.style.background = 'green';
  } else if (item.textContent.includes('Ongoing')) {
    item.style.background = 'yellow';
  } else {
    item.style.background = 'ed';
  }
});