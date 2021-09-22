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
