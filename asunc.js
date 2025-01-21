console.log(20);
console.log(30);
console.l0g(40);
console.log(50);
console.log(60);

// setTimeOut methood

console.log(20);
console.log(30);
setTimeOut(()=>{
    console.l0g(40);
},500)
console.log(50);
console.log(60);

// setIntervel

console.log(20);
console.log(30);
setInterval(()=>{ 
    console.l0g(40);
},1500)
console.log(50);
console.log(60);

//promise

let p2 = new Promise((  resolved , reject) => { 
    resolved("successfull");

})
p2.then((response)=> console.log(response))
p2.catch((error)=> console.log(error))
p2.finally(()=> console.log("finally for both "))
