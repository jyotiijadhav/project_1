var isEligibleForVote = function (age) {
  var returnValue = "";
  if (age >= 18) {
    returnValue = "you are eligible for vote";
  } else {
    returnValue = "you are  not eligible for vote";
  }
  return returnValue;
};
console.log("============================");
var result = isEligibleForVote(18);
console.log(`  ${result}`);
var result = isEligibleForVote(20);
console.log(` your age is    ${result}`);

var result = isEligibleForVote(17);
console.log(`  your age is 17 ${result}`);

var result = isEligibleForVote(40);
console.log(`your age is 40  ${result}`);
console.log("================== result 1 ====================");
 var checkStart=function(word){
  if(word.startsWith("Java")) {
    console.log(`Given word-${word}  starts with "Java"`);
  } else{
    console.log(`Given word-${word},does not starts with "Java"`); 
  }
 }
 checkStart("Javascript Language");
 checkStart("UI  Developer");
 console.log("=================== result 2 ======================");


var checkLength=function(length){
    if(length>=10("Javascript-ES6")){
        console.log(`Given word-${result} contains more than 10 length`);
    }
    else{
        console.log(`Given word-${result}  does not contains more than 10 length`);
    }
}
checkLength("Javascript Language");
console.log(`${result}`);