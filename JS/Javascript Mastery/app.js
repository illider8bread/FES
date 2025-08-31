function addition(a, b) {
    return a + b;
}

console.log(addition(-3, -5));

function hoursIntoSeconds(hours) {
    return hours * 3600 
}

console.log(hoursIntoSeconds(24))

function calcPerimeter(width, height) {
    return (width * 2) + (height * 2);
}

console.log(calcPerimeter(2, 9))

function calcTriangleArea(base, height) {
    return 0.5 * base * height;
}

console.log(calcTriangleArea(20,20))

function appendFrontend(string) {
    return string + "Frontend";
}

console.log(appendFrontend("apple"))

function sumGreaterThan100(num1, num2) {
    let sum = num1 + num2;
    return sum > 100;
}

console.log(sumGreaterThan100(110, 7))

function oppositeBoolean(bool){
    return !bool;
}

console.log(oppositeBoolean(true))

function isNotZero(num){
    return num !== 0;
}

console.log(isNotZero(7))

return (num % 2) === 1;