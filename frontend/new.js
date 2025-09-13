console.log("hello world")
num=12;
str="hi";
bol=true;
age=19;
bigint=12344758468338885939250;

//student info
function stuinfo(name, rollNumber, branch) {
    return `Name: ${name}, Roll Number: ${rollNumber}, Branch: ${branch}`;
}

let welcome = stuinfo("Rahul", 101, "CSE");
console.log(welcome);
//arthimetic operations
let addage=age+2;
let subage=age-2;
let mulage=age*2;
let divage=age/2;
console.log(addage);
console.log(subage);
console.log(divage);
console.log(mulage);

//area and perimeter of rectangle

l=4;
b=5;
function rectangle(l, b) {
    let area = l * b;
    let perimeter = 2 * (l + b);

    return `Area: ${area}, Perimeter: ${perimeter}`;
}

let result = rectangle(l, b);  
console.log(result);

//factorial number

function factorial(n) {
  if (n < 0) {
    return undefined; 
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(`factorial number ${factorial(5)}`)



//compound interest 
let p = 1000;
let t = 5;
let r = 0.02;  
let n = 3;

function interest(p, t, r, n) {
    let amount = p * Math.pow((1 + r / n), n * t);
    return amount;
    
}
function simple(p,t,r){
  let simple=p*r*t;
  return simple;
}

let sim=simple(p,t,r);
console.log(`simple interset:${sim}`)

let amt = interest(p, t, r, n);
console.log(`compound interest: ${amt.toFixed(2)}`);

//if condition
 let age=18;
if(age>=18){
  console.log.apply("you are eligible");
}

// person is travlling for a to b speed 30 km speed double every 10 min distance a to b max speed 120 travel 96 min

let s=30;
let maxspeed=120;
let interval=10/60; 
let t1=96/10;
for(i=1;i<=10;i++){
let distance=distance+Math(s*i*t1);
}
console.log(distance);
