const keycodeElement = document.getElementById('keycode');

document.addEventListener('keydown', (event) => {
  const keycode = event.keyCode;
  const key = event.key;
  const code = `Key: ${key} | Code: ${keycode}`;
  keycodeElement.textContent = code;
});