var data = [3, 4, 5];
var doubled = data.reduce(function(acc, value) {
  acc.push(value * 2);

  return acc;
}, []);

var doubleMapped = data.map(function(item) {
  return item * 2;
});

var data02 = [1, 2, 3, 4, 5, 6, 7, 8];
var evens = data02.reduce(function(acc, value) {
  if (value % 2 === 0) {
    acc.push(value);
  }

  return acc;
}, []);

var evenFiltered = data02.filter(function(item) {
  return (item % 2 === 0);
});

var filterMapped = data02.filter(function(value) {
  return value % 2 === 0;
}).map(function(value) {
  return value * 2;
});

var bigData = [];
for (var i = 0; i < 1000000; i++) {
  bigData[i] = i;
}


let filterBegin = Date.now()
var filterMappedBigData = bigData.filter(function(value) {
  return value % 2 === 0;
}).map(function(value) {
  return value * 2;
});
let filterEnd = Date.now()
let filtertimeSpent = (filterEnd-filterBegin)/1000 + " secs";


let reducedBegin=Date.now();
var reducedBigData = bigData.reduce(function(acc, value) {
  if (value % 2 === 0) {
    acc.push(value * 2);
  }
  return acc;
}, []);
let reducedEnd = Date.now();
let reducedtimeSpent = (reducedEnd-reducedBegin)/1000 + " secs";

console.log("filtered Data:", filtertimeSpent)
console.log("reduced Data:", reducedtimeSpent)
