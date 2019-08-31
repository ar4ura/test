let button = document.querySelector(".button");
let list = document.querySelector('.results');

function randomResult(min, max) {
  let result = min - 0.5 + Math.random() * (max - min + 1);;
  return Math.round(result);
}

button.addEventListener('click', function(event) {
  let minNumber = document.getElementById('min').value;
  let maxNumber = document.getElementById('max').value;
  //alert(randomResult(minNumber, maxNumber));


  let newResult = document.createElement('li');
  newResult.innerHTML = randomResult(minNumber, maxNumber);
  list.prepend(newResult);

})
