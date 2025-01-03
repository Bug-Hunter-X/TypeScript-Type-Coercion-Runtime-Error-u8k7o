function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both parameters must be numbers');
  }
  return a + b;
}

let result1 = add(5, 5); // Correct usage
console.log(result1); // Output: 10

try {
  let result2 = add("hello", 5); // Incorrect usage
  console.log(result2); 
} catch (error) {
  console.error(error.message); // Output: Both parameters must be numbers
}

//Alternative solution using type guards:
function isNumber(x: any): x is number {
    return typeof x === 'number';
}

function add2(a: any, b: any): number {
    if (!isNumber(a) || !isNumber(b)) {
        throw new Error('Both parameters must be numbers');
    }
    return a + b;
}

let result3 = add2(5,5);
console.log(result3); //Output: 10

try{
    let result4 = add2("hello", 5);
    console.log(result4);
} catch (error) {
    console.error(error.message); //Output: Both parameters must be numbers
}