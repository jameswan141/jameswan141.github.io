<script>
function city() {
  var x = document.getElementsByClassName("mayor");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
}
</script>


document.getElementById("demo").innerHTML = "Hello World!";


document.getElementById('myImage').src="picture.gif"


document.getElementById("demo").style.fontSize = "30px";


document.getElementById("demo").style.display = "none";


document.getElementById("demo").style.display = "block";


<script>
document.getElementById("demo").innerHTML = "The second use of script.";
</script>


<!DOCTYPE html>
<html>
<head>
<script>
function changeParagraph() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>
</head>
<body>
<h1>Demo JavaScript in head section.</h1>

<p id="demo">A paragraph</p>
<button type="button" onclick="changeParagraph()">It works</button>

</body>
</html>


function paragraph() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}


<><script src="scriptNumber1.js">
</script><script src="scriptNumber2.js">
</script><script src="scriptNumber3.js">


<script>
<script src="https://jameswan141.github.io"></script>
<script src="/io/jameswan141.github.io"></script>
<script src="jameswan141.github.io"></script>
</script>


const obj = { width: 10, height: 15 };
const area = obj.width * obj.heigth;


console.log(4 / []);


var name = "James";
var score1 = 90;
var score2 = 87.50;
var sum = score1 + score2;
console.log("name" + name);
console.log("first score: " + score1);
console.log("second score : " + score2);
console.log("sum of the scores: " + sum);


"use strict";
var str = '1';
var str2 = str;  
console.log(typeof (str2));


var global_num = 12;              
var Numbers = (function () {
   function Numbers() {
      this.num_val = 13;          
   }
   Numbers.prototype.storeNum = function () {
      var local_num = 14;        
   };
   Numbers.sval = 10;            
   return Numbers;
}());

console.log("Global num: " + global_num);
console.log(Numbers.sval);        

var obj = new Numbers();
console.log("Global num: " + obj.num_val);


var x = 4;
var y = -x;
console.log("value of x: ", x);   
console.log("value of y: ", y);


var msg = "hello" + "world";
console.log(msg);


var num = -2;
var result = num > 0 ? "positive" : "non-positive";
console.log(result);


var num = 12;
console.log(typeof num); 


var n = 5;
while (n > 5) {
   console.log("Enter the while");
}

do {
   console.log("Entered the dolittle");
} while (n > 5);


var i = 1;

while (i <= 10) {
   if (i % 5 == 0) {
      console.log("The first multiple of 5  between 1 and 10 is : " + i);
      break; 
   }
   i++;
} 


var num = 0;
var count = 0;

for (num = 0; num <= 20; num++) {
   if (num % 2 == 0) {
      continue;
   }
   count++;
}
console.log(" The count of odd values between 0 and 20 is: " + count);


function disp_details(id, name, mail_id) {
  console.log("ID:", id);
  console.log("Name", name);
 
  if (mail_id != undefined)
     console.log("Email Id", mail_id);
}
disp_details(123, "Richard");
disp_details(111, "larry", "larry@tuvxyz.com");


function addNumbers() {
  var nums = [];
  for (var _i = 0; _i < arguments.length; _i++) {
     nums[_i - 0] = arguments[_i];
  }
 var i;
  var sum = 0;
 
  for (i = 0; i < nums.length; i++) {
     sum = sum + nums[i];
  }
  console.log("sum of the numbers", sum);
}
addNumbers(1, 3, 5);
addNumbers(15, 15, 15, 15, 15);


function calculate_discount(price, rate) {
  if (rate === void 0) { rate = 0.70; }
  var discount = price * rate;
  console.log("Discount Amount: ", discount);
}
calculate_discount(2000);
calculate_discount(2000, 0.50);


var res = function (a, b) {
  return a * b;
};
console.log(res(12, 2));


var foo = function (x) {
  x = 100 + x;
  console.log(x);
};
foo(150);


var func = function (x) {
  if (typeof x == "number") {
     console.log(x + " is numeric");
  } else if (typeof x == "string") {
     console.log(x + " is a string");
  }
};
func(16);
func("Jennifer");


var display = function (x) {
  console.log("The function got " + x);
};
display(12);


var disp = function () {
  console.log("Function invoked");
};
disp();


function disp(g, h) {
  console.log(g);
  console.log(h);
}
disp("def");
disp(1, "ghi");


var Person = (function () {
  function Person() {
  }
  return Person;
}());


var Bus = (function () {
  function Bus(engine) {
     this.engine = engine;
  }
 
  Bus.prototype.disp = function () {
     console.log("Function displays Engine is  :   " + this.engine);
  };
  return Bus;
}());

var obj = new Bus("GRAND");

console.log("Reading attribute value Engine as :  " + obj.engine);

obj.disp();


var __extends = (this && this.__extends) || function (d, b) {
  for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Shape = (function () {
  function Shape(a) {
     this.Area = a;
  }
  return Shape;
}());

var Circle = (function (_super) {
  __extends(Circle, _super);
  function Circle() {
     _super.apply(this, arguments);
  }
 
  Circle.prototype.disp = function () { 
     console.log("Area of the circle:  " + this.Area); 
  };
  return Circle;
}(Shape));

var obj = new Circle(223);
obj.disp();

var __extends = (this && this.__extends) || function (d, b) {
  for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var Root = (function () {
  function Root() {
  }
  return Root;
}());

var Child = (function (_super) {
  __extends(Child, _super);
  function Child() {
     _super.apply(this, arguments);
  }
  return Child;
}(Root));

var Leaf = (function (_super) {
  __extends(Leaf, _super);
  function Leaf() {
     _super.apply(this, arguments);
  }
  return Leaf;
}(Child));

var obj = new Leaf();
obj.str = "hello";
console.log(obj.str);


function employee(id, name) {
  this.id = id;
  this.name = name;
}

var emp = new employee(123, "Steve");
employee.prototype.email = "mine@craft.com";

console.log("Employee 's Id: " + emp.id);
console.log("Employee's name: " + emp.name);
console.log("Employee's Email ID: " + emp.email);


var alphas;
alphas = ["2", "3", "4", "5"];
console.log(alphas[0]);
console.log(alphas[3]);


var nums = [1, 2, 3, 4];
console.log(nums[0]);
console.log(nums[1]);
console.log(nums[2]);
console.log(nums[3]);


var arr_names = new Array(4);

for (var i = 0; i < arr_names.length; i++) {
   arr_names[i] = i * 2;
   console.log(arr_names[i]);
}


var names = new Array("Bugs", "Bunny", "Daffy", "Duck");
for (var i = 0; i < names.length; i++) {
   console.log(names[i]);
}


var arr = [12, 13];
var x = arr[0], y = arr[1];
console.log(x);
console.log(y);


var j;
var nums = [1001, 1002, 1003, 1004];

for (j in nums) {
   console.log(nums[j]);
}


var a = [10, "hello"];
var b = a[0], c = a[1];
console.log(b);
console.log(c);


var val;
val = 12;
console.log("numeric value of val " + val);
val = "This is a string";
console.log("string value of val " + val);


function disp(name) {
  if (typeof name == "string") {
     console.log(name);
  } else {
     var i;
     for (i = 0; i < name.length; i++) {
        console.log(name[i]);
     }
  }
}

disp("mark");
console.log("Printing names array....");
disp(["Matt", "Brandon", "Elizabeth", "David"]);


var arr;
var i;
arr = [1, 2, 4];
console.log("**numeric array**");

for (i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
arr = ["Mumbai", "Pune", "Delhi"];
console.log("**string array**");

for (i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}


var customer = { firstName: "Tom", lastName: "Cruise",
   sayHi: function () { return "Hi there"; }
};
console.log("Customer Object ");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());
var employee = { firstName: "Jim", lastName: "Carrey",
   sayHi: function () { return "Hello!!!"; } };

console.log("Employee  Object ");
console.log(employee.firstName);
console.log(employee.lastName);


var options = { program: "test1", commandline: "Hello" };
console.log(options.commandline);

options = { program: "test1", commandline: ["Hello", "World"] };
console.log(options.commandline[0]);
console.log(options.commandline[1]);

options = { program: "test1", commandline: function () { return "**Hello World**"; } };
var fn = options.commandline;
console.log(fn());


var drummer = {};
drummer.age = 27;
drummer.instrument = "Drums";
console.log("Age:  " + drummer.age);
console.log("Instrument:  " + drummer.instrument);


var Iobj = { v1: 12, v2: 23 };
console.log("value 1: " + this.v1 + " value 2: " + this.v2);


var __extends = (this && this.__extends) || function (d, b) {
  for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var PrinterClass = (function () {
  function PrinterClass() {
  }
  PrinterClass.prototype.doPrint = function () { 
     console.log("doPrint() from Parent called…"); 
  };
  return PrinterClass;
}());

var StringPrinter = (function (_super) {
  __extends(StringPrinter, _super);
 
  function StringPrinter() {
     _super.apply(this, arguments);
  }
 
  StringPrinter.prototype.doPrint = function () {
     _super.prototype.doPrint.call(this);
     console.log("doPrint() is printing a string…");
  };
 
  return StringPrinter;
}(PrinterClass));

var obj = new StringPrinter();
obj.doPrint();


var StaticMem = (function () {
  function StaticMem() {
  }
 
  StaticMem.disp = function () {
     console.log("The value of num is" + StaticMem.num);
  };
 
  return StaticMem;
}());

StaticMem.num = 12;     
StaticMem.disp();  


var Person = (function () {
  function Person() {
  }
  return Person;
}());

var obj = new Person();
var isPerson = obj instanceof Person;
console.log(" obj is an instance of Person " + isPerson);


var AgriLoan = (function () {
  function AgriLoan(interest, rebate) {
     this.interest = interest;
     this.rebate = rebate;
  }
  return AgriLoan;
}());

var obj = new AgriLoan(10, 1);
console.log("Interest is : " + obj.interest + " Rebate is : " + obj.rebate);


var person = { 
  firstname:"Tom", 
  lastname:"Cruise" 
};


person.sayHello = function(){ return "hello";}


var person = {
  firstname: "Tom",
  lastname: "Cruise"
};

var invokeperson = function (obj) {
  console.log("first name :" + obj.firstname);
  console.log("last name :" + obj.lastname);
};

invokeperson(person);


var invokeperson = function (obj) {
  console.log("first name :" + obj.firstname);
  console.log("last name :" + obj.lastname);
};

invokeperson({ firstname: "Sachin", lastname: "Tendulkar" });
invokeperson({ firstname: "Sachin", lastname: "Tendulkar" });


/// <reference path = "IShape.ts" />
var Drawing;
(function (Drawing) {
   var Circle = (function () {
      function Circle() {
      }
      Circle.prototype.draw = function () {
         console.log("Circle is drawn");
      };
      return Circle;
   }());
	
   Drawing.Circle = Circle;
})(Drawing || (Drawing = {}));

/// <reference path = "IShape.ts" />
var Drawing;
(function (Drawing) {
   var Triangle = (function () {
      function Triangle() {
      }
      Triangle.prototype.draw = function () {
         console.log("Triangle is drawn");
      };
      return Triangle;
   }());
   Drawing.Triangle = Triangle;
})(Drawing || (Drawing = {}));

/// <reference path = "IShape.ts" />
/// <reference path = "Circle.ts" />
/// <reference path = "Triangle.ts" />
function drawAllShapes(shape) {
   shape.draw();
}

drawAllShapes(new Drawing.Circle());
drawAllShapes(new Drawing.Triangle());


var tutorialPoint;
(function (tutorialPoint) {
   var invoiceApp;
   (function (invoiceApp) {
      var Invoice = (function () {
         function Invoice() {
         }
         Invoice.prototype.calculateDiscount = function (price) {
            return price * .40;
         };
         return Invoice;
      }());
      invoiceApp.Invoice = Invoice;
   })(invoiceApp = tutorialPoint.invoiceApp || (tutorialPoint.invoiceApp = {}));
	
})(tutorialPoint || (tutorialPoint = {}));
/// <reference path = "Invoice.ts" />

var invoice = new tutorialPoint.invoiceApp.Invoice();
console.log(invoice.calculateDiscount(500));


define(["require", "exports"], function (require, exports) {
});

define(["require", "exports"], function (require, exports) {
  var Circle = (function () {
     function Circle() {
     }
     Circle.prototype.draw = function () {
        console.log("Circle is drawn (external module)");
     };
     return Circle;
  })();
  exports.Circle = Circle;
});

define(["require", "exports"], function (require, exports) {
  var Triangle = (function () {
     function Triangle() {
     }
     Triangle.prototype.draw = function () {
        console.log("Triangle is drawn (external module)");
     };
     return Triangle;
  })();
  exports.Triangle = Triangle;
});

define(["require", "exports", "./Circle", "./Triangle"], 
   function (require, exports, circle, triangle) {
   
   function drawAllShapes(shapeToDraw) {
      shapeToDraw.draw();
   }
   drawAllShapes(new circle.Circle());
   drawAllShapes(new triangle.Triangle());
});