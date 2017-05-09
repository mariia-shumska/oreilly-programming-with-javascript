greetings
Object {spanish: "hola", hawaiian: "aloha", english: "hello", french: "bonjour", german: "hallo"}
Object.keys(greetings);
["spanish", "hawaiian", "english", "french", "german"]
Object.keys(greetings).forEach(function(language){
  console.log(greetings[language]);
});
VM408:2 hola
VM408:2 aloha
VM408:2 hello
VM408:2 bonjour
VM408:2 hallo

cardHand
[Object, Object, Object, Object, Object]0: Objectrank: "ten"suit: "spades"__proto__: Object1: Object2: Object3: Object4: Objectlength: 5__proto__: Array[0]
cardHand.map(function(card){})
[undefined, undefined, undefined, undefined, undefined]
cardHand.map(function(card){
  return card.suit;
});
["spades", "diamonds", "hearts", "clubs", "spades"]
cardHand.map(function(card){
  return card.rank;
});
["ten", "ace", "ten", "two", "three"]

// 46 video
tweet
Object {text: "this is an awesome tweet!", created_at: "Mon Oct 20 14:06:17 +0000 2014", source: "<a href = 'http://twetter.com' rel='nofollow'>Twitter Web Client</a>", user: Object}
tweet.user
Object {name: "Sam Samovich", screen_name: "samsamovich", followers_count: 483}
tweet.user.name
"Sam Samovich"
tweet.user.screen_name
"samsamovich"
tweet.user.followers_count
483
tweet.text
"this is an awesome tweet!"

user
Objectname: "Sam Samovich"screen_name: "samsamovich"tweets: Array[3]0: "this is a tweet."1: "this is another tweet!"2: "this is third tweet!"length: 3__proto__: Array[0]concat: concat()constructor: Array()copyWithin: copyWithin()entries: entries()every: every()fill: fill()filter: filter()find: find()findIndex: findIndex()forEach: forEach()includes: includes()indexOf: indexOf()join: join()keys: keys()lastIndexOf: lastIndexOf()length: 0map: map()pop: pop()push: push()reduce: reduce()reduceRight: reduceRight()reverse: reverse()shift: shift()slice: slice()some: some()sort: sort()splice: splice()toLocaleString: toLocaleString()toString: toString()unshift: unshift()Symbol(Symbol.iterator): values()Symbol(Symbol.unscopables): Object__proto__: Object__proto__: Object
user.tweets
["this is a tweet.", "this is another tweet!", "this is third tweet!"]
user.tweets.forEach(function(tweet){
  console.log(tweet);
})
VM612:2 this is a tweet.
VM612:2 this is another tweet!
VM612:2 this is third tweet!
