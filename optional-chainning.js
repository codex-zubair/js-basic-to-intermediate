obj = {
    name: 'rock',
    value:{
        rdx: 20,
    }
}


console.log(obj.value.rdx);
//! without optional chaining you will get type error


// here alue is undefined in optional chaining...
console.log(obj.name?.alue?.rdx);