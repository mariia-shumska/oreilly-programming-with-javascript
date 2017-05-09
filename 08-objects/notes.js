// your notes here!
console.log("hello world!");
console.log("these are the notes for section 8");

var greetings = {
  "spanish"  : "hola",
  "hawaiian" : "aloha",
  "english"  : "hello",
  "french"   : "bonjour",
  "german"  : "hallo"
};

var language = "german";

//console.log(greetings[language]);

var cardHand = [
  {"suit":"spades", "rank":"ten"},
  {"suit":"diamonds", "rank":"ace"},
  {"suit":"hearts", "rank":"ten"},
  {"suit":"clubs", "rank":"two"},
  {"suit":"spades", "rank":"three"}
];

var tweet = {
  "text" : "this is an awesome tweet!",
  "created_at": "Mon Oct 20 14:06:17 +0000 2014",
  "source" : "<a href = 'http://twetter.com' rel='nofollow'>Twitter Web Client</a>",
  "user":{
    "name": "Sam Samovich",
    "screen_name": "samsamovich",
    "followers_count": 483
  }
};

var user = {
  "name": "Sam Samovich",
  "screen_name": "samsamovich",
  "tweets": [
    "this is a tweet.",
    "this is another tweet!",
    "this is third tweet!"
  ]
};

var simpleTweet = {
  "text" : "htis is an awesome tweet lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol",
  "screen_name" : "samsamovich"
};

var isTweet = function (tweet){
  return typeof tweet === "object" &&
      typeof tweet.text === "string" &&
      typeof tweet.screen_name === "string" &&
      tweet.text.length <= 140;
};
