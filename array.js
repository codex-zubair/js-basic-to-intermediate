const array = [10,20,30];
const stringArray = 'im string array';


array.push('3000');
array.push(obj={nickName:'rick', age:27});
array.unshift(firstObj={age:27});
// console.log(array);


// speared we can take for each item operation...
// let's try.
// so we can do operation for each item easily...
// let's see how easy it's.
console.log(...array);

const array2 = [...array.splice(0,2)];

// Let's take object from array.
const object = [...array.slice(2,3)] 
console.log(array2);
console.log(array2.length);
console.log(object);


// console.log(Math.max(...array));