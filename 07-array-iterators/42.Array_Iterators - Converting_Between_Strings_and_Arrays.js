var greeting = "hello world";
undefined
greeting
"hello world"
greeting[1]
"e"
greeting.map
undefined
greeting.split("");
["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]
greeting.split();
["hello world"]
greeting.split("");
["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]
greeting.split("").forEach(function(letter){
    console.log(letter)
});
VM1627:2 h
VM1627:2 e
2VM1627:2 l
VM1627:2 o
VM1627:2
VM1627:2 w
VM1627:2 o
VM1627:2 r
VM1627:2 l
VM1627:2 d
undefined

var dogNames = "gracie,loki,dahlia,ally,layla";;
undefined
dogNames
"gracie,loki,dahlia,ally,layla"
dogNames.split("")
["g", "r", "a", "c", "i", "e", ",", "l", "o", "k", "i", ",", "d", "a", "h", "l", "i", "a", ",", "a", "l", "l", "y", ",", "l", "a", "y", "l", "a"]

dogNames.split(",")
["gracie", "loki", "dahlia", "ally", "layla"]

dogNames.split(",").map(capitalize)
["Gracie", "Loki", "Dahlia", "Ally", "Layla"]

var tweet = "this is a tweet";
undefined
tweet.split(" ")
["this", "is", "a", "tweet"]

tweet.split(" ").map(capitalize);
["This", "Is", "A", "Tweet"]

tweet.split(" ").map(capitalize).join(" ")
"This Is A Tweet"
tweet.split(" ").map(capitalize).join("--")
"This--Is--A--Tweet"
tweet.split(" ").map(capitalize).join(" -- ")
"This -- Is -- A -- Tweet"
tweet.split(" ").map(capitalize).join("")
"ThisIsATweet"
