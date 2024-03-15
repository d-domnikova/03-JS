//5.2.1
function getProperty(object, property){
    return object[property];
}
var obj = {
    key: 'value'
};
var output = getProperty(obj, 'key');
console.log(output); //value


//5.2.2
function addProperty(object, property){
object[property] = true;
}
var myObj = {};
addProperty(myObj, "myProperty");
console.log(myObj.myProperty); //true


//5.2.3
function removeProrerty(object, property){
    delete object[property];
}
var Obj = {
    name: 'Sam',
    age: 20
};
removeProrerty(Obj, "name");
console.log(Obj.name); //undefined


//5.2.4
function getFullName(name, surname){
    return name + ' ' + surname
}
output = getFullName("Daria", "Domnikova");
console.log(output); //Daria Domnikova


//5.2.5
function getLengthOfWord(word1){
    return word1.length
}
output = getLengthOfWord("OMORI");
console.log(output); //5


//5.2.6
function getLengthOfTwoWords(word1, word2){
    return word1.length + word2.length
}
output = getLengthOfTwoWords("good", "morning");
console.log(output); //11


//5.2.7
function isGreaterThan(number1, number2){
    if (number1 < number2) {return true} 
    else {return false}
    }
output = isEvenAndGreaterThanTen(87, 123);
console.log(output); //true


//5.2.8
function isEven(number){
    if (number%2 == 0) {return true} 
    else {return false}
    }
output = isEvenAndGreaterThanTen(256);
console.log(output); //true


//5.2.9
function isSameLength(word1, word2){
    if (word1.length == word2.length) {return true} 
    else {return false}
    }
output = isSameLength("be", "success");
console.log(output); //false


//5.2.10
function isEvenAndGreaterThanTen(number){
if (number%2 == 0 && number > 10) {return true} 
else {return false}
}
output = isEvenAndGreaterThanTen(18);
console.log(output); //true


//5.2.11
function computeAreaOfATriangle(a, h) {
    return (a*h)/2
}
output = computeAreaOfATriangle(8,15);
console.log(output); //60