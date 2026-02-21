document.getElementById('apply-btn').addEventListener('click', function () {
  var c = document.getElementById('color-input').value;
  document.getElementById('box').style.backgroundColor = c;
});
document.getElementById("new-btn").onclick = () => alert("Clicked!");
