
// !nested object if not same makes problem
const arrayObject = [


    {
        object: {
            name: 'ashiq',
            roll: 25,
            age: 36,
        }
    },


    {
        object:
        {
            mark: [10, 203, 34, 3, 54, 6, 67, 5, 76]
        }
    },

    {
        object:
        {
            mark: [10, 203, 34, 3, 54, 6, 67, 5, 76, 34, 354, 456, 4]
        }
    },
]


// console.log(arrayObject[2].object.mark.includes(456));

// !only taking that values who has mark (Done)
// !Lets try to take the value inside an array specific value..
const value = arrayObject.filter(item => item.object.mark).filter(item => console.log(item.object.mark.indexOf(5)));


const value2 = arrayObject.filter(item => item.object.mark).filter(item => item.object.mark.includes(354));


// .filter(item=> console.log(item));



// .filter(mark=> {
//     mark.includes(10);
//     // arrayObject[2].object.mark.includes(10);
//     item.mark.includes(10);
// });

//  value = arrayObject.map(item=>item).filter(item => {
//     console.log(item.mark);
// });
// console.log(value);






// .forEach(element => {
//     console.log(element);
// });


// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length < 6);

// console.log(result);


console.log(value2);