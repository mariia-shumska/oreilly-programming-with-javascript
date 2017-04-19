Console was cleared
undefined
var data = [50,10,100,150,1000,1,2,8,1001,200,250]
undefined
data
[50, 10, 100, 150, 1000, 1, 2, 8, 1001, 200, 250]
data.length
11

data.filter(function (number){
    return number >= 100;
})
[100, 150, 1000, 1001, 200, 250]
data
[50, 10, 100, 150, 1000, 1, 2, 8, 1001, 200, 250]

data.filter(function (number){
    return number >= 100;
}).length
6

range(100).filter(function(number){
  return number % 2 === 0;
})
[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100]

var isEven = function (number){
    return number % 2 ===0
}
undefined
range(100).filter(isEven)
[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100]

range(50).filter(isPrime)
[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]
