/*
Interview Question:- Check Type of Triangle

Write a function called checkTriangleType that takes three parameters representing the lengths of the sode of a triangle. The function should return a string indicating the type of tringle: "equilateral","isosceles", "scalene"

*/

const checkTriangleType=(side1,side2,side3)=>{
    if(side1===side2 && side2===side3){
        return "Equilateral";
    }
    else if(side1===side2 || side2===side3 || side1===side3){
        return "Isosceles";
    }
    else{
        return "scalene";
    }

}

console.log(checkTriangleType(3,3,5));
console.log(checkTriangleType(3,4,3));
console.log(checkTriangleType(4,5,5));
console.log("--------------------------------");
console.log(checkTriangleType(5,5,5));
console.log(checkTriangleType(4,3,5));