// two parameter are one for string another one for function. (call back function)
function work(a,arrowFunction)
{
 
    console.log(a,arrowFunction());
}



const arrow = ()=>
{
    return "working 2?";
}


// Arguments are Function and string
work('working 1?', arrow);