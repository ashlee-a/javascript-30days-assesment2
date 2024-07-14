const container = document.getElementById('container');

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

for (let i = 1; i <= 100; i++) {
  const numberDiv = document.createElement('div');
  numberDiv.className = 'number';
  
  if (i % 2 === 0) {
    numberDiv.classList.add('even');
  } else {
    numberDiv.classList.add('odd');
  }
  
  if (isPrime(i)) {
    numberDiv.classList.add('prime');
  }
  
  numberDiv.textContent = i;
  container.appendChild(numberDiv);
}