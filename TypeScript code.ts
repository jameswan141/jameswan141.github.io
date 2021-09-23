const roar: any = "roar";
const far: unknown = "far";

roar.length; 
far.length;

if (typeof far === 'string') {
  far.length; 
}

const obj = { width: 10, height: 15 };
const area = obj.width * obj.heigth;


console.log(4 / []);


let helloWorld = "Hello World";


const user = {
  name: "James",
  id: 3,
};


interface User {
  name: string;
  id: number;
}


const user: User = {
  name: "James",
  id: 3,
};


interface User {
  name: string;
  id: number;
}
 
const user: User = {
  name: "James",
  id: 3,
};


interface User {
  name: string;
  id: number;
}
 
class UserAccount {
  name: string;
  id: number;
 
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
 
const user: User = new UserAccount("James", 3);


var name:string = "James"; 
var score1:number = 90;
var score2:number = 87.50
var sum = score1 + score2 
console.log("name"+name) 
console.log("first score: "+score1) 
console.log("second score: "+score2) 
console.log("sum of the scores: "+sum)


var str = "1"
var str2:number = <number> <any> str   
console.log(typeof(str2))


var global_num = 12           
class Numbers { 
   num_val = 13;              
   static sval = 10;          
   
   storeNum():void { 
      var local_num = 14;    
   } 
} 
console.log("Global num: "+global_num)  
console.log(Numbers.sval)     
var obj = new Numbers(); 
console.log("Global num: "+obj.num_val) 


var x:number = 4 
var y = -x; 
console.log("value of x: ",x);   
console.log("value of y: ",y);


var msg:string = "hello"+"world" 
console.log(msg)


var num:number = -2 
var result = num > 0 ?"positive":"non-positive" 
console.log(result)


var num = 12 
console.log(typeof num);


var n:number = 5 
while(n > 5) { 
   console.log("Enter the while") 
} 
do { 
   console.log("Entered the dolittle") 
} 
while(n>5)


var i:number = 1 
while(i<=10) { 
   if (i % 5 == 0) {   
      console.log ("The first multiple of 5  between 1 and 10 is : "+i) 
      break     
   } 
   i++ 
}  


var num:number = 0
var count:number = 0;

for(num=0;num<=20;num++) {
   if (num % 2==0) {
      continue
   }
   count++
}
console.log (" The count of odd values between 0 and 20 is: "+count)


for(;;) { 
  console.log(“It goes on and on and on.”) 
}


while(true) { 
  console.log(“This is an endless loop”) 
}


function disp_details(id:number,name:string,mail_id?:string) { 
  console.log("ID:", id); 
  console.log("Name",name); 
  
  if(mail_id!=undefined)  
  console.log("Email Id",mail_id); 
}
disp_details(123,"Richard");
disp_details(111,"larry","larry@tuvxyz.com");


function addNumbers(...nums:number[]) {  
  var i;   
  var sum:number = 0; 
  
  for(i = 0;i<nums.length;i++) { 
     sum = sum + nums[i]; 
  } 
  console.log("sum of the numbers",sum) 
} 
addNumbers(1,3,5) 
addNumbers(15,15,15,15,15)


function calculate_discount(price:number,rate:number = 0.70) { 
  var discount = price * rate; 
  console.log("Discount Amount: ",discount); 
} 
calculate_discount(2000) 
calculate_discount(2000,0.50)


var msg = function() { 
  return "hello world";  
} 
console.log(msg())


var res = function(a:number,b:number) { 
  return a*b;  
}; 
console.log(res(18,13)) 


var myFunction = new Function("a", "b", "return a * b"); 
var x = myFunction(9, 7); 
console.log(x);


function factorial(number) {
  if (number <= 0) {         
     return 1; 
  } else {     
     return (number * factorial(number - 1));     
  } 
}; 
console.log(factorial(12));  


(function () { 
  var x = "Hello!!";   
  console.log(x)     
})()  


var foo = (x:number)=>100 + x 
console.log(foo(150))


var foo = function (x) { return 10o + x; };
console.log(foo(150)); 


var foo = (x:number)=> {    
  x = 100 + x 
  console.log(x)  
} 
foo(150)


var func = (x)=> { 
  if(typeof x=="number") { 
     console.log(x+" is numeric") 
  } else if(typeof x=="string") { 
     console.log(x+" is a string") 
  }  
} 
func(16) 
func("Jennifer")


var display = x=> { 
  console.log("The function got "+x) 
} 
display(12)


var disp =()=> { 
  console.log("Function invoked"); 
} 
disp();


function disp(string):void; 
function disp(number):void;

function disp(n1:number):void; 
function disp(x:number,y:number):void;

function disp(n1:number,s1:string):void; 
function disp(s:string,n:number):void;


function disp(s1:string):void; 
function disp(n1:number,s1:string):void; 

function disp(g:any,h?:any):void { 
   console.log(g); 
   console.log(h); 
} 
disp("def") 
disp(1,"ghi");


class Person {
}


class Bus { 
  engine:string; 
  
  constructor(engine:string) { 
     this.engine = engine 
  }  
  
  disp():void { 
     console.log("Function displays Engine is  :   "+this.engine) 
  } 
} 

var obj = new Bus("GRAND")

console.log("Reading attribute value Engine as :  "+obj.engine)  

obj.disp()


class Shape { 
  Area:number 
  
  constructor(a:number) { 
     this.Area = a 
  } 
} 

class Circle extends Shape { 
  disp():void { 
     console.log("Area of the circle:  "+this.Area) 
  } 
}
 
var obj = new Circle(223); 
obj.disp()


class Root { 
  str:string; 
} 

class Child extends Root {} 
class Leaf extends Child {} 

var obj = new Leaf(); 
obj.str ="hello" 
console.log(obj.str)