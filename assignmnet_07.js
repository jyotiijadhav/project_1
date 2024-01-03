function checkEligibilityForVote(age) {
  if (age === undefined || age === null || age < 0 || age > 130) {
    console.log("Invalid data");
  } else if (age < 18) {
    console.log("Not eligible for vote");
  } else {
    console.log("Eligible for vote");
  }
}

checkEligibilityForVote(45);
checkEligibilityForVote(17);
checkEligibilityForVote(8);
checkEligibilityForVote(20);
checkEligibilityForVote(-10);
checkEligibilityForVote(200);
checkEligibilityForVote(0);
checkEligibilityForVote(undefined);
checkEligibilityForVote(null);
