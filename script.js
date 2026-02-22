// ex1
function creezCounter() {
    var count = 0; 
    return function() {
      count++;
      return count;
    }
  }
var counter = creezCounter();

// ex2
function creezCounter(nombre) {
    var count = nombre; 
    return function() {
      count++;
      return count;
    }
  }
var counter = creezCounter(100);

// ex3
function pow(exponent) {
    return function(result) {
      return result ** exponent
    }
}