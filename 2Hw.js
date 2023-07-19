// Task 1

alert("Task 1");

let loginName = prompt('enter your username:');
let password = prompt('enter your password:');

if(loginName == 'admin' && password == 12345){
    alert("welcome back in the system!");
}
else{
    alert("your username or/and password is not correct :(");
}

// Task 2

alert("Task 2");

let UserAge = prompt('enter your age:');
let AcceptableAge;

AcceptableAge = UserAge>18 ? true : false;
alert(`Is user age acceptable? ${AcceptableAge}`);

// Task 3

alert("Task 3");

let DayOfTheWeek = prompt('what day of the week is it today?');

switch (DayOfTheWeek) {
    case 'tuesday':
    case 'Tuesday':
    case 'thursday':
    case 'Thursday':
        console.log(`Today (${DayOfTheWeek}) you have a lesson at 19:00`);
        alert(`Today (${DayOfTheWeek}) you have a lesson at 19:00`);
    break;
    case 'saturday':
    case 'Saturday':
    case 'sunday':
    case 'Sunday':
        console.log(`Today is ${DayOfTheWeek}! Relax!`);
        alert(`Today is ${DayOfTheWeek}! Relax!`);
    break;
    case 'monday':
    case 'Monday':
        console.log(`Today is ${DayOfTheWeek}! Make sure to start your week right!`);
        alert(`Today is ${DayOfTheWeek}! Make sure to start your week right!`);
    break;
    case 'wednesday':
    case 'Wednesday':
    case 'friday':
    case 'Friday':   
        console.log(`Today  ${DayOfTheWeek}, you have your tennis training. Good luck!`);
        alert(`Today  ${DayOfTheWeek}, you have your tennis training. Good luck!`);
    break;
    default:
        console.log(`${DayOfTheWeek} - is not a day of the week, don't mess with us!`);
        alert(`${DayOfTheWeek} - is not a day of the week, don't mess with us!`)
}