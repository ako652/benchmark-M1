let x="john"
let y="doe"
console.log(`${x} <> ${y}`)

my ={
    first:"name",
    second:"surname", 
    email:"@gmail"

}
console.log(my)
delete my.email
console.log(my)
MyArray =["one","google","world","down","middle"]
console.log(MyArray)
function giveMeRandom(n) {
    const arr = [];
    for (let i = 0; i <= n; i++) {
      arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
  }
  console.log(giveMeRandom(100));
MaxArray= function(){
    const arr = [];
    for (let i = 0; i <= n; i++) {
      arr.push(Math.floor(Math.random() * 100));
    }
    return Math.max(arr)
}
console.log(arr)