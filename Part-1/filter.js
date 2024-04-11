// const coding=['php','js','c++','python'];

// const value=coding.forEach((item)=>{
//     console.log(item);
//     return item
// })
// console.log(value);

//filter
// const num=[1,2,3,4,,5,6,,7,8,9,10];

// const val=num.filter((num1)=>{
//   if(num1%2==0){
//     return num1;
//   }

// })
// console.log(val);

//books collection 

const books=[
    {title:"book1",genre:"C++",publish:"2001",edition:"19th"},
    {title:"book2",genre:"java",publish:"2013",edition:2000},
    {title:"book3",genre:"js",publish:"2008",edition:"18th"},
    {title:"book4",genre:"php",publish:"2009",edition:"19th"},
    {title:"book5",genre:"C",publish:"2010",edition:"18th"},
    {title:"book6",genre:"Ruby",publish:"2011",edition:"19th"},
    {title:"book7",genre:"C#",publish:"2001",edition:"19th"},
]

const userbooks=books.filter((bks)=>{
    // if(bks.edition==="19th"){
    //     return bks
    // }
    return bks.edition===2000 && bks.genre==="java";
})

console.log(userbooks);
