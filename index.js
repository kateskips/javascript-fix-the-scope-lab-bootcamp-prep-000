var animal = 'dog';

function myAnimal() {
  return animal;
}

function yourAnimal(cat) {
  var gato = 'cat';
  return gato;
}

function add2(n) {
  const two = 20
  return two + n;

}

var funkyFunction = function () {
  return function() {
    return "FUNKY!";
  };
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction();
theFunk=theFunk();