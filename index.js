// Add your functions here
// Add your functions here


function mapToNegativize(sourceArray) {
  return sourceArray.map(x => x * -1);
}

function mapToNoChange(sourceArray) {
  return sourceArray.map(x => x);
}

function mapToDouble(sourceArray) {
  return sourceArray.map(x => x * 2);
}

function mapToSquare(sourceArray) {
  return map(sourceArray, function(x){ return x * x })
}


const initialValue = 0;

/* numbers array */
const numbers = [5, 10, 15];

/* reducer method that takes in the accumulator and next item */
const reducer = (accumulator, item) => {
  return accumulator + item;
};

/* we give the reduce method our reducer function
  and our initial value */
const total = numbers.reduce(reducer, initialValue)
