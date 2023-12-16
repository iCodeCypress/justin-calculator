const text = document.querySelector(".text");
const parL = document.querySelector(".parL");
const parR = document.querySelector(".parR");
const mod = document.querySelector(".mod");
const clear = document.querySelector(".clear");
const nine = document.querySelector(".nine");
const eight = document.querySelector(".eight");
const seven = document.querySelector(".seven");
const six = document.querySelector(".six");
const five = document.querySelector(".five");
const four = document.querySelector(".four");
const three = document.querySelector(".three");
const two = document.querySelector(".two");
const one = document.querySelector(".one");
const add = document.querySelector(".add");
const sub = document.querySelector(".sub");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const equals = document.querySelector(".equals");
const dot = document.querySelector(".dot");
const zero = document.querySelector(".zero");

let equation;

function changeText(num){
    text.innerHTML = text.innerHTML + num; 
    equation = text.innerHTML;
}

zero.addEventListener("click", ()=>{
    changeText(0);
});

nine.addEventListener("click", ()=>{
    changeText(9);
});

eight.addEventListener("click", ()=>{
    changeText(8);
});

seven.addEventListener("click", ()=>{
    changeText(7);
});

six.addEventListener("click", ()=>{
    changeText(6);
});

five.addEventListener("click", ()=>{
    changeText(5);
});

four.addEventListener("click", ()=>{
    changeText(4);
});

three.addEventListener("click", ()=>{
    changeText(3);
});

two.addEventListener("click", ()=>{
    changeText(2);
});

one.addEventListener("click", ()=>{
    changeText(1);
});

add.addEventListener("click", ()=>{
    changeText(" + ");
});

sub.addEventListener("click", ()=>{
    changeText(" - ");
});

multiply.addEventListener("click", ()=>{
    changeText(" * ");
});

divide.addEventListener("click", ()=>{
    changeText(" / ");
});

equals.addEventListener("click", ()=>{
    text.innerHTML = eval(equation);
});

clear.addEventListener("click", ()=>{
    text.innerHTML = "";
    equation = "";
});

parL.addEventListener("click", ()=>{
    changeText("(");
});

parR.addEventListener("click", ()=>{
    changeText(")");
});

dot.addEventListener("click", ()=>{
    changeText(".");
});
