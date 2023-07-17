// Task 1
alert("Task 1: Гра 'Камінь Ножиці Папір'");

let UserSelectTool = prompt("Виберіть чим ходитимете (Варіанти: 'камінь'/'ножиці'/'папір'):");

function game(UserData){
    let GameOptions = ['камінь','ножиці','папір'];
    let RandomChoice = GameOptions[Math.floor(Math.random()*3)];
    let UserChoice = UserData.toLowerCase();
    if(UserChoice === RandomChoice){
        alert(`you: ${UserChoice} VS computer: ${RandomChoice} - Нічия`);
    }
    else if((UserChoice === 'камінь' && RandomChoice === 'ножиці') || 
            (UserChoice === 'папір' && RandomChoice === 'камінь') || 
            (UserChoice === 'ножиці' && RandomChoice === 'папір')){
        alert(`you: ${UserChoice} VS computer: ${RandomChoice} - Ви виграли, щирі вітання!`);
    }
    else{
        alert(`you: ${UserChoice} VS computer: ${RandomChoice} - Ви програли, нічого страшного!`);
    }
}
console.log(game(UserSelectTool));

// Task 2

alert("Task 2: Рік в Сторіччя");

let UserYear = prompt("Enter any year:");

function convertYear(year){
    alert(`We are converting year to century: ${year} -> ${Math.ceil(year/100)}`);
}

console.log(convertYear(UserYear));

// Task 3

alert("Task 3");

function ArrayType(array){
    const typeArray = [];

    for(let i=0; i<array.length; i++){
        const type = typeof array[i];
        typeArray.push(type);
    }
    return typeArray;
}
const sort = [true, 'false', 111, -0, 'true', false, {a:false},[true,'false']];
const newArray = ArrayType(sort);

console.log(sort);
console.log(newArray);