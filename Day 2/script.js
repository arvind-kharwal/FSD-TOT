var a = 10;
var a = 12;
console.log("This is: "+a);
const b = 13;
//const b = 20;
console.log("This is: "+b);
let c = 20;
//let c = 30;
console.log("This is: "+c);
console.log("New Line\n");
var a = 2;
if(a<5){
    var a = 45;
    console.log("a"+a);
}
console.log("a\n"+a);
console.log("Line Break\n");
var a = 2;
if(a<5){
    let a = 45;
    console.log("\na"+a);
}
console.log("a"+a);

console.log("== Line Break\n");
let n = 12;
let m = "12";
if(n==m)
{
    console.log("Hello");
}
else
{
    console.log("World");
}

console.log("Function Line Break\n");

function sum(){
    return(10);
}
let v = sum();
console.log(v);

console.log("Function Line Break\n");

let v1 = sum(20,10);
console.log(v1);

function sum(a,b){
    let s = a+b;
    return(s);
}

console.log("Function 3 Line Break\n");

const data = function(){
    console.log("Hi Arvind");
}
data();
console.log("==============\n");

const data1=()=>{
    return " Hi New";
}
console.log(data1());

console.log("==============\n");

const add=(a,b)=>a+b;
console.log(add(22,34));

console.log("==============\n");

function greet(msg="Hello"){
    return "HI"+msg;
}
//greet();
console.log(greet("Welcome"));
console.log("\nSelect Compiler: \n");
function selectlanguage(lang){
    let data;
    if(lang=="java"){
        function javacompiler(){
            console.log("java Compiler");
        }
        data = javacompiler();
    }
    else if(lang=="C")
    {
        function Ccompiler(){
            console.log("C Compiler");
        }
        data = Ccompiler();
    }
    else
    {
        console.log("No Compiler Found");
    }
}
selectlanguage("java");
selectlanguage("C");
selectlanguage();