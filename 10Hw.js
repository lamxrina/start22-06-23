//Task 1

alert("Task 1");

let str = prompt("Enter a text: ");

let upperCase = function(text, pattern){
    return text.replace(pattern, "").length;
}

alert(`Number of uppercase letters in the String "${str}" is ${upperCase(str,/[^A-Z]/g)}!`);

//Task 2

alert("Task 2");

let string = prompt("Enter a text with numbers:");
let charArray = [...string];
let numbers = charArray.reduce(function (numberString, element) {
    let numbers = "0123456789";
    if (numbers.includes(element)) {
        return numberString + element;
    }
    return numberString;
}, "");

alert(`Number(s) in the String "${string}" is/are: ${numbers}!`);

//Task 3

alert("Task 3");

let userNameInput = prompt("Enter the desired username:");

let validateUser = function(userName){
    return (/^[a-zA-Z0-9-_]{4,10}$/).test(userName);
}
alert(`Username is: ${validateUser(userNameInput)}`);
if(validateUser = true){
    alert(`Username "${userNameInput}" is validated`);
}
else{
    alert(`Username "${userNameInput}" is not optimal. Try another one!`);
}
