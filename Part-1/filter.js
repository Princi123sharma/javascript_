// const coding=['php','js','c++','python'];

// const value=coding.forEach((item)=>{
//     console.log(item);
//     return item
// })
// console.log(value);

//filter
const num=[1,2,3,4,,5,6,,7,8,9,10];

const val=num.filter((num1)=>{
  if(num1%2==0){
    return num1;
  }

})
console.log(val);
