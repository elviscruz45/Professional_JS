const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

console.log(target);
const returnedTarget = Object.assign(target, source);
console.log(target);
console.log(returnedTarget);

console.log(target===returnedTarget);



// expected output: Object { a: 1, b: 4, c: 5 }

//console.log(returnedTarget === target);
// expected output: true

