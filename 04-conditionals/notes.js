// your notes here!
console.log("hello world!");
console.log("these are my notws for section 4");
// getTagName("<p>");
// => p

// getTagName("</p>");
// => p

// getTagName("<article>");
// => article

// getTagName("</article>");
// => article

var getTagName = function(tag) {
  var result
  if (tag.charAt(1) !== "/"){
     result = tag.slice(1, tag.length - 1);
  } else {
     result = tag.slice(2, tag.length - 1);
  }
  return result
};

getTagName("<article>");
"article"
getTagName("</article>");
"article"
getTagName("<p>");
"p"
getTagName("</p>");
"p"
getTagName("<div>");
"div"
getTagName("</div>");
"div"

//improveTweet("hello world");
// => hello world lol

// improveTweet("this is funny lol");
// => this is funny lol

var improveTweet = function(tweet){
  var result = tweet;

  if (tweet.toLowerCase().indexOf("lol") === -1){
    result = tweet + " lol";
  }
  return result;
}

improveTweet ("hello world");
"hello world lol"
improveTweet ("this is funny lol");
"this is funny lol"
improveTweet ("my car wos stolen today");
"my car wos stolen today lol"
improveTweet ("LOL this is hilarious");
"LOL this is hilarious lol"

var greetingByHour = function (hour){
  var result;  // we'll define this variable below
  if (0 <= hour && hour <=5){
      result = "Wow, it's early!";
  } else if (5 < hour && hour <=12) {
      result = "Good Morning!";
  } else if (12 < hour && hour <=17) {
      result = "Good Afternoon!";
  } else if (17 < hour && hour <=20) {
      result = "Good Evening!";
  } else if (20 < hour && hour <=24) {
      result = "Shouldn't you be in bed?";
  } else {
    result = "Oh gosh, this is awkward -- that's not a time.";
  }
  return result;
}

var classifyTweet = function (tweet) {
  var rez;
  if (tweet.length >= 100){
    rez = "awesome";
  } else if (50 <= tweet.length && tweet.length < 100) {
    rez = "sorta-good"
  } else {
    rez = "not great";
  }
  return rez
}
