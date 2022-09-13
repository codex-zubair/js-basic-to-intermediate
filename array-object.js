// !Arguments doesn't work in arrow function.
// const arrayObject = () => {


//     console.log(arguments[1]);

// }

// arrayObject(53, 45, 4, 5);
// console.clear();

function example() {
	console.log(arguments[0]);
} // Console outputs an array of each argument with its value

example('hi', 'hello'); 
// Outputs: 
// ['hi', 'hello']
// 'hi'



function arrayObject () {

    console.log(arguments);
    // Convert into array like object into array.

    convertedArray = [...arguments]
    console.log(convertedArray);

}
arrayObject(53, 45, 4, obj={name: 'abul kalam Ajad'});