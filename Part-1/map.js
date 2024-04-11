// const num=[1,3,4,5,7,5,4,2];

// const result=num.map((val)=>{
//     return val+10;
// })

//chaining
// const result=num
// .map((val)=>val*10)
// .map((val)=>val+1)
// .filter((val)=>val>=40)


// console.log(result);


//reduce 

// const num=[3,5,3];
// const result=num.reduce((acc,curval)=>{
//     console.log(`acc value ${acc},curval value ${curval}`)
//     return acc+curval;
// },0)
// console.log(result);

const course=[
    {itemname:"js course",price:2000},
    {itemname:"react course",price:2900},
    {itemname:"datascience course",price:12000},
    {itemname:"MERN course",price:1800},
];
const payrup=course.reduce((acc,item)=>acc+item.price,0)
console.log(payrup);