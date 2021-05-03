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

// Add your functions here
const map = (arr, fx) => {
    const newArray = []; 
    for(let x of arr){
        newArray.push((fx)(x)) 
    }
    return newArray; 
}

const reduce = (arr, fx, startingValue) => {
    let value = (!!startingValue) ? startingValue : arr[0]
    let i = (!!startingValue) ? 0 : 1
  
    for (; i < arr.length; i++) {
      value = fx(arr[i], value)
    }
  
    return value;
  }