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


console.log("TypeScript's Numerical Limits: "); 
console.log("Maximum value that a number variable can hold: " + Number.MAX_VALUE); 
console.log("Minimum value that a number variable can hold: " + Number.MIN_VALUE); 
console.log("Value of Negative Infinity: " + Number.NEGATIVE_INFINITY); 
console.log("Value of Negative Infinity:" + Number.POSITIVE_INFINITY);


var month = 0 
if(month <= 0 || month > 12) { 
   month = Number.NaN 
   console.log("Month is "+ month) 
} else { 
   console.log("Value Accepted..") 
}


function employee(id:number,name:string) { 
  this.id = id 
  this.name = name 
} 

var emp = new employee(123,"Steve") 
employee.prototype.email = "mine@craft.com" 

console.log("Employee 's Id: "+emp.id) 
console.log("Employee's name: "+emp.name) 
console.log("Employee's Email ID: "+emp.email)


var alphas:string[]; 
alphas = ["1","2","3","4"] 
console.log(alphas[0]); 
console.log(alphas[3]);


var nums:number[] = [1,2,3,3] 
console.log(nums[0]); 
console.log(nums[1]); 
console.log(nums[2]); 
console.log(nums[3]);


var arr_names:number[] = new Array(4)  

for(var i = 0;i<arr_names.length;i++) { 
   arr_names[i] = i * 2 
   console.log(arr_names[i]) 
}


var names:string[] = new Array("Bugs","Bunny","Daffy","Duck") 

for(var i = 0;i<names.length;i++) { 
   console.log(names[i]) 
}


var arr:number[] = [12,13] 
var[x,y] = arr 
console.log(x) 
console.log(y)


var j:any; 
var nums:number[] = [1001,1002,1003,1004] 

for(j in nums) { 
   console.log(nums[j]) 
} 


var mytuple = [666,"Devil"];


var mytuple = []; 
mytuple[0] = 120 
mytuple[1] = 234


var mytuple = [666,"Devil"]; 
console.log(mytuple[0]) 
console.log(mytuple[1])


var tup = [] 
tup[0] = 12 
tup[1] = 23 

console.log(tup[0]) 
console.log(tup[1])


var mytuple = [10,"Hello","Everybody","Everything"]; 
console.log("Items before push "+mytuple.length)     

mytuple.push(12)                                    
console.log("Items after push "+mytuple.length) 
console.log("Items before pop "+mytuple.length) 
console.log(mytuple.pop()+" popped from the tuple") 
  
console.log("Items after pop "+mytuple.length)


var mytuple = [100,"Hello","Everybody","Everything"];
console.log("Tuple value at index 0 "+mytuple[0]) 

mytuple[0] = 121     
console.log("Tuple value at index 0 changed to "+mytuple[0])


var a =[10,"hello"] 
var [b,c] = a 
console.log( b )    
console.log( c ) 


var val:string|number 
val = 12 
console.log("numeric value of val "+val) 
val = "This is a string" 
console.log("string value of val "+val)


function disp(name:string|string[]) { 
  if(typeof name == "string") { 
     console.log(name) 
  } else { 
     var i; 
     
     for(i = 0;i<name.length;i++) { 
        console.log(name[i])
     } 
  } 
} 
disp("matt") 
console.log("Printing names array....") 
disp(["Matt","Brandon","Elizabeth","David"])


var arr:number[]|string[]; 
var i:number; 
arr = [1,2,4] 
console.log("**numeric array**")  

for(i = 0;i<arr.length;i++) { 
   console.log(arr[i]) 
}  

arr = ["Mumbai","Pune","Delhi"] 
console.log("**string array**")  

for(i = 0;i<arr.length;i++) { 
   console.log(arr[i]) 
} 


var person = { 
  FirstName:"Tom", 
  LastName:"Cruise", 
  sayHi: ()=>{ return "Hi"} 
};


{ 
  FirstName:string, 
  LastName:string, 
  sayHi()=>string 
}


interface IPerson { 
  firstName:string, 
  lastName:string, 
  sayHi: ()=>string 
} 

var customer:IPerson = { 
  firstName:"Tom",
  lastName:"Cruise", 
  sayHi: ():string =>{return "Hi there."} 
} 

console.log("Customer Object ") 
console.log(customer.firstName) 
console.log(customer.lastName) 
console.log(customer.sayHi())  

var employee:IPerson = { 
  firstName:"Jim",
  lastName:"Carrey", 
  sayHi: ():string =>{return "Hello!"} 
} 
 
console.log("Employee  Object ") 
console.log(employee.firstName);
console.log(employee.lastName);


interface RunOptions { 
  program:string; 
  commandline:string[]|string|(()=>string); 
} 

var options:RunOptions = {program:"test1",commandline:"Hello"}; 
console.log(options.commandline)  

options = {program:"test1",commandline:["Hello","World"]}; 
console.log(options.commandline[0]); 
console.log(options.commandline[1]);  

options = {program:"test1",commandline:()=>{return "**Hello World**";}}; 

var fn:any = options.commandline; 
console.log(fn());


interface namelist { 
  [index:number]:string 
} 

var list2:namelist = ["Jack",1,"Gideon"] 
interface ages { 
  [index:string]:number 
} 

var agelist:ages; 
agelist["Jack"] = 20 
agelist[2] = "fourteen"


interface Person { 
  age:number 
} 

interface Musician extends Person { 
  instrument:string 
} 

var drummer = <Musician>{}; 
drummer.age = 27 
drummer.instrument = "Drums" 
console.log("Age:  "+drummer.age) console.log("Instrument:  "+drummer.instrument)


interface IParent1 { 
  v1:number 
} 

interface IParent2 { 
  v2:number 
} 

interface Child extends IParent1, IParent2 { } 
var Iobj:Child = { v1:12, v2:23} 
console.log("value 1: "+this.v1+" value 2: "+this.v2)


class PrinterClass { 
  doPrint():void {
     console.log("doPrint() from Parent called…") 
  } 
} 

class StringPrinter extends PrinterClass { 
  doPrint():void { 
     super.doPrint() 
     console.log("doPrint() is printing a string…")
  } 
} 

var obj = new StringPrinter() 
obj.doPrint()


class StaticMem {  
  static num:number; 
  
  static disp():void { 
     console.log("The value of num is"+ StaticMem.num) 
  } 
} 

StaticMem.num = 12     
StaticMem.disp()


class Person{ } 
var obj = new Person() 
var isPerson = obj instanceof Person; 
console.log(" obj is an instance of Person " + isPerson);


class Encapsulate { 
  str:string = "hello" 
  private str2:string = "world" 
}

var obj = new Encapsulate() 
console.log(obj.str)      
console.log(obj.str2) 


interface ILoan { 
  interest:number 
} 

class AgriLoan implements ILoan { 
  interest:number 
  rebate:number 
  
  constructor(interest:number,rebate:number) { 
     this.interest = interest 
     this.rebate = rebate 
  } 
} 

var obj = new AgriLoan(10,1) 
console.log("Interest is : "+obj.interest+" Rebate is : "+obj.rebate )


var person = { 
  firstname:"Tom", 
  lastname:"Cruise" 
}; 
console.log(person.firstname) 
console.log(person.lastname)


var person = {
  firstName:"Tom", 
  lastName:"Cruise", 
  sayHello:function() {  }  
} 
person.sayHello = function() {  
  console.log("hello "+person.firstName)
}  
person.sayHello()


var person = { 
  firstname:"Tom", 
  lastname:"Cruise" 
}; 
var invokeperson = function(obj: { firstname:string, lastname :string }) { 
  console.log("first name :"+obj.firstname) 
  console.log("last name :"+obj.lastname) 
} 
invokeperson(person)


var invokeperson = function(obj:{ firstname:string, lastname :string}) { 
  console.log("first name :"+obj.firstname) 
  console.log("last name :"+obj.lastname) 
} 
invokeperson({firstname:"Sachin",lastname:"Tendulkar"});


interface IPoint { 
  x:number 
  y:number 
} 
function addPoints(p1:IPoint,p2:IPoint):IPoint { 
  var x = p1.x + p2.x 
  var y = p1.y + p2.y 
  return {x:x,y:y} 
} 

var newPoint = addPoints({x:3,y:4},{x:5,y:1})  

var newPoint2 = addPoints({x:1},{x:4,y:3})


FileName :IShape.ts 
---------- 
namespace Drawing { 
   export interface IShape { 
      draw(); 
   }
}  

FileName :Circle.ts 
---------- 
/// <reference path = "IShape.ts" /> 
namespace Drawing { 
   export class Circle implements IShape { 
      public draw() { 
         console.log("Circle is drawn"); 
      }  
      
      FileName :Triangle.ts 
      ---------- 
      /// <reference path = "IShape.ts" /> 
      namespace Drawing { 
         export class Triangle implements IShape { 
            public draw() { 
               console.log("Triangle is drawn"); 
            } 
         } 
         
         FileName : TestShape.ts 
         /// <reference path = "IShape.ts" />   
         /// <reference path = "Circle.ts" /> 
         /// <reference path = "Triangle.ts" />  
         function drawAllShapes(shape:Drawing.IShape) { 
            shape.draw(); 
         } 
         drawAllShapes(new Drawing.Circle());
         drawAllShapes(new Drawing.Triangle());
      }
   }
}


FileName : Invoice.ts  
namespace tutorialPoint { 
   export namespace invoiceApp { 
      export class Invoice { 
         public calculateDiscount(price: number) { 
            return price * .40; 
         } 
      } 
   } 
} 
FileName: InvoiceTest.ts 

/// <reference path = "Invoice.ts" />
var invoice = new tutorialPoint.invoiceApp.Invoice(); 
console.log(invoice.calculateDiscount(500));


export interface IShape { 
  draw(); 
}

import shape = require("./IShape"); 
export class Circle implements shape.IShape { 
  public draw() { 
     console.log("Circle is drawn (external module)"); 
  } 
} 

import shape = require("./IShape"); 
export class Triangle implements shape.IShape { 
  public draw() { 
     console.log("Triangle is drawn (external module)"); 
  } 
}
  
import shape = require("./IShape"); 
import circle = require("./Circle"); 
import triangle = require("./Triangle");  

function drawAllShapes(shapeToDraw: shape.IShape) {
  shapeToDraw.draw(); 
} 

drawAllShapes(new circle.Circle()); 
drawAllShapes(new triangle.Triangle()); 
