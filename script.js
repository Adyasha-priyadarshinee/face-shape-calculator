document.getElementById('faceForm').addEventListener('submit', function(e) {
  e.preventDefault();
  let forehead = parseFloat(document.getElementById('forehead').value);
  let cheekbones = parseFloat(document.getElementById('cheekbones').value);
  let jawline = parseFloat(document.getElementById('jawline').value);
  let length = parseFloat(document.getElementById('length').value);

  let result = "";

  if (length > cheekbones && cheekbones > jawline && forehead > jawline) {
    result = "Oval Face";
  } else if (length === cheekbones && cheekbones === forehead && forehead === jawline) {
    result = "Square Face";
  } else if (forehead > cheekbones && cheekbones > jawline) {
    result = "Heart Face";
  } else if (length > cheekbones && jawline > forehead) {
    result = "Diamond Face";
  } else {
    result = "Round Face";
  }

  document.getElementById('result').innerText = "Your Face Shape: " + result;
});
