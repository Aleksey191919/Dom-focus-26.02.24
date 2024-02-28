/** @format */

const textInput = document.getElementById('userData');
const focusDiv = document.getElementById('focusDiv');

textInput.addEventListener('focus', function () {
  focusDiv.style.display = 'block';
});

textInput.addEventListener('blur', function () {
  focusDiv.style.display = 'none';
});
