var isEvenOrOdd=function(num){
    var returnValue="";
    if(num%2==0){
        returnValue="EVEN"
    }
    else{
        returnValue="ODD" 
    }
    return returnValue;
};
var result=isEvenOrOdd(45);
console.log(`23 is given no...${result}`);
var result=isEvenOrOdd(70);
console.log(`70 is given no...${result}`);
var result=isEvenOrOdd(67);
console.log(`67 is given no...${result}`);
var result=isEvenOrOdd(98);
console.log(`98 is given no...${result}`);