document.getElementById('apply-btn').addEventListener('click', function () {
  var c = document.getElementById('color-input').value;
  document.getElementById('box').style.backgroundColor = c;
  console.log("Homepage loads correctly now");
});
document.getElementById("new-btn").onclick = () => alert("Clicked!");
