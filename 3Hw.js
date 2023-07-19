// Task 1

alert("Task 1");

let emptyArray = new Array();

for(let i=0; i<21; i+=2) {
    emptyArray.push(i);
}
alert(emptyArray);

// Task 2

alert("Task 2");

let StartArray = ["Keep","Remove","Keep","Remove","Keep","Keep","Remove","Remove"];
let KeepArray = [];

for(let i=0; i<StartArray.length; i++){
    if(StartArray[i]==="Keep"){
        KeepArray.push(StartArray[i]);
    }
}
alert(KeepArray);

// Task 3

alert("Task 3");

checkArray = [69, 96, -66, 77, 85, -85, 14, -20, 90, -36];

for(let i=0; i<checkArray.length; i++){
    if(checkArray[i]<0){
        checkArray[i]=0;
    }
}
alert(checkArray);

// Task 4 (*)

alert("Task 4 (*)");

let days = ["Monday","Wednesday","Sunday"];
let plans = ["Lesson 03","Lesson 04","Weekend"];

for(let i=0; i<days.length; i++){
    alert(`Today (${days[i]}) you have this: ${plans[i]}`);
}

// Task 5 (**)

alert("Task 5 (**)");

let FirstNumber = Number(prompt("Enter first number:"));
let OperationSign = prompt("Enter operation sign:");
let SecondNumber = Number(prompt("Enter second number:"));

    switch(OperationSign){
    case '+':
        alert(`${FirstNumber} + ${SecondNumber} = ${FirstNumber + SecondNumber}`);
    break;
    case '-':
        alert(`${FirstNumber} - ${SecondNumber} = ${FirstNumber - SecondNumber}`);
    break;
    case '➗':
    case '/':   
    if(SecondNumber == 0 && (OperationSign == "/" || OperationSign == "➗")){
        alert("The division is not possible.");
    }
    else{
        alert(`${FirstNumber} ➗ ${SecondNumber} = ${FirstNumber / SecondNumber}`);
    }    
    break;
    case '*':
    case '×':
        alert(`${FirstNumber} × ${SecondNumber} = ${FirstNumber * SecondNumber}`);
    break;
    case '+':
        alert(`${FirstNumber} + ${SecondNumber} = ${FirstNumber + SecondNumber}`);
    break;
    default:
        alert("The calculator is not that evolved yet, sorry!");
    }

