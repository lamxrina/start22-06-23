// task 1

alert('task 1');

let animals = ['cat','cow','fish','chicken','dog','pig'];
function pickAnimal(animalNumber, animalArray){
    if (animalNumber == 'first'){
        alert(`the first one is a ${animalArray[0]}`);
    }
    else if (animalNumber == 'last'){
        alert(`the last one is a ${animalArray[animalArray.length - 1]}`);
    }
    else{
        alert('try "first" or "last"');
    }
}
pickAnimal('first', animals);
pickAnimal('last', animals);

// task 2

alert('task 2');

let smile = [':)','=)',':)','=)',':)','=)'];
function newSmileArray(newSmile, smileArray){
    for(let i=0; i<smile.length; i++){
        if(smileArray[i]==':)'){
            smileArray[i] = newSmile;
        }
        else{
            return
        }
    }
}
newSmileArray('8]', smile);

alert(smile);