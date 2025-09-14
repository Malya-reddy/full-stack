//calculator for function(+,-,*,/) using javascript
function calculator(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Error: Division by zero!";
            }
        default:
            return "Invalid operator!";
    }
}

// Example usage:
console.log(calculator(10, 5, '+')); 
console.log(calculator(10, 5, '-')); 
console.log(calculator(10, 5, '*')); 
console.log(calculator(10, 5, '/'));

let speed = 30;          
let maxSpeed = 120;      
let totalTime = 96;      
let interval = 10;       
let distance = 0;

let timeLeft = totalTime;

for (let i = 1; timeLeft > 0; i++) {
  
  let step = Math.min(interval, timeLeft);

  
  distance += speed * (step / 60);

 
  timeLeft -= step;

  
  if (timeLeft > 0) {
    speed = Math.min(speed * 2, maxSpeed);
  }
}

console.log(distance); 

//basic pay is 30 rs for 4km for the next 5km prize is 10rs for km for next 10km prize is 15rs for next 15km prize is 20rs user travel 19.5km

let distance1 = 19.5;
let b = 30;   
let fare = b;

if (distance1 > 4) {
  let step = Math.min(distance1 - 4, 5);   
  fare += step * 10;
}

if (distance1 > 9) {
  let step = Math.min(distance1 - 9, 10);  
  fare += step * 15;
}

if (distance1 > 19) {
  let step = distance1 - 19;              
  fare += step * 20;
}

console.log(fare); 

//while loop
let i=0;
while(i<3){
    console.log(i);
    i++;
}

//5 multiplication
n=5;
i=1;
while(i<=10){
  m=n*i;
  i++;
  console.log(m);
}

//do while
let f=0;
do{
    console.log(f);
    f++;
}while(f<3);

//dom manipulation

const mydic=document.getElementById('mydiv');

//add an event listener

myDiv.addEventListener('click',()=>{
  alert("div clicked!");
});
//create paragraph and append it

const paragraph=document.createElement('p');
newParagraph.textContent="this is a new paragraph";
myDiv.appendChild(newParagraph);