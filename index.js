// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push('Ralph');
};

function destructivelyPrependCat(name) {
    cats.unshift('Bob');
};
function destructivelyRemoveLastCat() {
    cats.pop('Ralph');
};

function destructivelyRemoveFirstCat() {
    cats.shift('Bob');
};

function appendCat(name) {
    var newCats = cats.slice();
  
    newCats.push(name)
    return newCats
};

function prependCat(name) {
    var newCats = cats.slice();
  
    newCats.unshift(name)
    return newCats
};

function removeLastCat(name) {
    var newCats = cats.slice();
  
    newCats.pop(name)
    return newCats
};

function removeFirstCat(name) {
    var newCats = cats.slice();
  
    newCats.shift(name)
    return newCats
};