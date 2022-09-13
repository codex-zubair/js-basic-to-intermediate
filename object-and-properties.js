obj = {
    name: 'rock',
    id: 20,
    result: [1232.2,232,43,534,5,4,],
    obj2:{
        name: 'wife'
    }
}

console.log(obj);
console.log('-----------------')
console.log(Object.keys(obj));
console.log('-----------------')
console.log(Object.values(obj));
console.log('-----------------')
console.log(Object.entries(obj));
console.log('-----------------')

// console.clear();

const anotherObj={
    roll: 20,
}
const newObj = [obj, anotherObj];
console.log(newObj);


console.clear();
const {obj2} = obj;
// !pass by reference....
obj2.age = 254;

console.log(obj2);