const array = [192392, 232, 3, 24, 3, 54, 35, 4, 56];


[, z, x, , , y] = array;

// console.log(z, x, y);




const arrayObject = [


    {object:{
        name: 'ashiq',
    roll: 25,
    age: 36,
    }
    },


    { 
        object:
        {
        mark: [10,203,34,3,54,6,67,5,76]
        }
    },

    { 
        object:
        {
        mark: [10,203,34,3,54,6,67,5,76,34,354,456,4]
        }
    },
]




const {mark}  = arrayObject[2].object;

// console.log(mark);



// Destructuring object form return value...
obj = {

    name: 'rocko',
    roll: 25,
}



function objectDestructuring(obj)
{
    return obj;
}





const {name} = objectDestructuring(obj);

console.log(name);