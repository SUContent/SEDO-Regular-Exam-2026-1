<<<<<<< HEAD
document.getElementById('apply-btn').addEventListener('click', function () {
  var c = document.getElementById('color-input').value;
  document.getElementById('box').style.backgroundColor = c;
});
=======
const $ = sel => document.querySelector(sel);
const box = $('#box');
const input = $('#color-input');
const applyBtn = $('#apply-btn');
const randomBtn = $('#random-btn');

const setColor = c => box.style.backgroundColor = c;

applyBtn.addEventListener('click', () => setColor(input.value));

randomBtn.addEventListener('click', () => {
  const color = `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6,'0')}`;
  setColor(color);
});
>>>>>>> 6215427 (Refactor UserService class)
