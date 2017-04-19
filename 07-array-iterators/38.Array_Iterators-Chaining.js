var double = function (number){
    return number * 2;
}
undefined
[1,2,3,4,5].map(double);
[2, 4, 6, 8, 10]
[1,2,3,4,5].map(double).forEach(function (number){
   console.log("this is the number: " + number);
});
VM360:2 this is the number: 2
VM360:2 this is the number: 4
VM360:2 this is the number: 6
VM360:2 this is the number: 8
VM360:2 this is the number: 10
undefined

var range = function(max){
  var result = [];
  var index;
  for (index = 0; index <= max; index = index +1){
    result.push(index);
  };
  return result;
};

range(10)
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
range(50)
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
range(10).map(function(number){
    return number * 2
})
[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

range(100).forEach(function(number){
   console.log(number)
})


range(100).map(function(number){
  if (number % 3 === 0){
    return "FIZZ";
  } else {
    return number;
  }
}).forEach(function(number){
   console.log(number)
});
VM362:8 FIZZ
VM362:8 1
VM362:8 2
VM362:8 FIZZ
...
VM362:8 FIZZ
VM362:8 97
VM362:8 98
VM362:8 FIZZ
VM362:8 100

range(10).map(function(number){
  if (number % 3 === 0){
    return "FIZZ";
  } else {
    return number;
  }
});
["FIZZ", 1, 2, "FIZZ", 4, 5, "FIZZ", 7, 8, "FIZZ", 10]
