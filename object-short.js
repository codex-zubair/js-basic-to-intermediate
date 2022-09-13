const obj = [
    {
        name: 'rdx1',
        views: 20307880,
    },
    {
        name: 'rdx2',
        views: 203600,
    },
    {
        name: 'rdx3',
        views: 20400,
    },
    {
        name: 'rdx4',
        views: 20070,
    },
    {
        name: 'rdx5',
        views: 20900,
    },
]


value = obj.map(object=> object.views).sort((a,b)=> a-b);



// !sort object.
// value = obj.views.sort((a,b)=>{
//     return b-a;
// })


// !Filter object
// .filter(item => {
//     return item.name === 'rdx2';
// })
console.log(value);


// console.log(value[2]);




// obj.forEach((element1,element2) => {

//     console.log(element1.views);
//     console.log(element2);

//     // console.log(element1,element2);
//     // sort(element1,element2);
// });








const array = [10, 343, 3, 534, 56, 4, 6, 5];
array.sort((a, b) => {
    return b - a
    // console.log(a);
  
});

// console.log(array);





const points = [40, 100, 1, 5, 25, 10];
points.sort(
    function (a, b) { return a - b }
);


// console.log(points);