// Write your solution here!
const cats = [`Milo`, `Otis`, `Garfield`];

function destructivelyAppendCat(name){
    cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}

let newCats;
function appendCat(name){
    return newCats = [...cats, name];
}
function prependCat(name){
    return newCats = [name, ...cats];
}
function removeLastCat(){
    return newCats = [...cats.slice(0, -1)];
}
function removeFirstCat(){
    return newCats = [...cats.slice(1)];
}
console.log(removeFirstCat());