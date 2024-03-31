console.log(1);
console.log(2);
setTimeout(() =>{
    console.log(3)
},3000);
console.log(4);
console.log(5);
console.log(6);

let num=0;
const clockId = setInterval(() => {
    num++;
    clearInterval(clockId)
    console.log(clockId,num)
}, 2000);

/**
 * * kono ekta kaj ke nidestho time por gotaile chaile "settimeout" use kora hoy.

*kono ekta kaj ke nidestho time por bar bar gotaile chaile "setinterval" use kora hoy

 */