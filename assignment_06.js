var myFunction = "JavaScript - ES6";

if (myFunction.length > 10) {
  console.log("The string contains more than 10 characters.");
} else {
  console.log("The string does not contain more than 10 characters.");
}
console.log(
  " ==========================step 1 ==================================="
);
var Check = "JavaScript Language";

if (Check.startsWith("Java")) {
  console.log("The string starts with 'Java'.");
} else {
  console.log("The string does not start with 'Java'.");
}
console.log("=============================step3=============================");
function ischeckEvenOrOdd(num) {
  if (num % 2 === 0) {
    return "EVEN";
  } else {
    return "ODD";
  }
}
console.log(ischeckEvenOrOdd(45));
console.log(ischeckEvenOrOdd(70));
console.log(ischeckEvenOrOdd(67));
console.log(ischeckEvenOrOdd(98));

//Eligible for vote

function ischeckEligibilityForVote(age) {
  if (age >= 18) {
    return "Eligible to vote";
  } else {
    return "Not eligible to vote";
  }
}
console.log(ischeckEligibilityForVote(18));
console.log(ischeckEligibilityForVote(20));
console.log(ischeckEligibilityForVote(17));
console.log(ischeckEligibilityForVote(40));
console.log("==================step 4 ==========================");
function ischeckEvenOrOdd(number) {
  return number % 2 === 0 ? "EVEN" : "ODD";
}

console.log(ischeckEvenOrOdd(45));
console.log(ischeckEvenOrOdd(67));
console.log(ischeckEvenOrOdd(98));
