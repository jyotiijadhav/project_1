//Function Expression - FE
//FE -
var display=function(){
console.log("display");
}
display();
//console.log(display);
var maleMarriageEligibilty = function(gender,age ,boyName){
  var result=gender==male && age>=21 
 ?`hey$[{boyName}you are eligible for marrige`:"unfortunately you are not eligible"  
 console.log(result);
}
maleMarriageEligibilty("male",'21',"sushant");