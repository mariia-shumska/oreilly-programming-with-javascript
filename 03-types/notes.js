//video 18
// your notes here!
console.log("hello world!");
console.log("this is the types section");

var isNumber = function (potentialNumber){
  return typeof potentialNumber === "number";
};

var isPositiveNumber = function(number){
//  return typeof number === "number" && number > 0;
  return isNumber(number) && number>0;
};

var isYear = function (potentialYear){
  return isPositiveNumber(potentialYear) && potentialYear <=9999;
};

var isTweet = function (potentialTweet){
  return potentialTweet.length <=140;
  };

var isTweetWithLol = function(tweetWithLol){
  return isTweet(tweetWithLol) && tweetWithLol.indexOf("lol") > -1;
}
