const container = document.getElementById('container');

for (let i = 1; i <= 100; i++) {
  const numberDiv = document.createElement('div');
  numberDiv.className = 'number';
  numberDiv.textContent = i;

  if (isEven(i)) {
    numberDiv.style.background = 'green';
  } else if (isOdd(i)) {
    numberDiv.style.background = 'yellow';
  }

  if (isPrime(i)) {
    numberDiv.style.background = 'red';
  }

  container.appendChild(numberDiv);
}

function isEven(n) {
  return n % 2 === 0;
}

function isOdd(n) {
  return n % 2 !== 0;
}

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}