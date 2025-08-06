class car {
    name = "Toyota";
    color = "Red";
    speed = 120;
    constructor(a,b,c){
        console.log("this is constructor" , a,b,c);
        
    }


}

let obj = new car("ALi","ahmad","asad");
// console.log(obj.name);
// let kuchb = new car();
// kuchb.name = "Honda";
// console.log(kuchb.name);
// console.log(obj.name);



// inheritance

class parent{
    x = 10;
    y = 20;
    hello(){
        console.log("how are you");
        
    }
}

class child extends parent{
    z = 30;
    name = "Ali"
}

let obj1 = new child();
console.log(obj1.x);
console.log(obj1.z);

