var Rx = require("rx");

// Creating an observable from iterable objects
// Rx.Observable
// .from([0, 1, 2], (a) => a*2)
// .subscribe((a) => console.log(a));

// var observableFromArgumentsFactory = function(){
//     return Rx.Observable.from(arguments);
// };

// observableFromArgumentsFactory(0, 1, 2)
// .subscribe((a) => console.log(a));

// var set = new Set([0, 1, 2]);
// Rx.Observable
// .from(set)
// .subscribe((a) => console.log(a));

// var map = new Map([['key0',0],['key1',1],['key2',2]]); 
// Rx.Observable
// .from(map)
// .subscribe((a) => console.log(a));

//Creating an observable from a sequence factory
// Rx.Observable.generate(
//     0,
//     (i) => i<3,
//     (i) => i+1,
//     (i) => i
// ).subscribe((i) => console.log(i));

//Creating an observable using range
// Rx.Observable
// .range(0, 4)
// .subscribe((i) => console.log(i));

// Creating an observable using period of time
// Rx.Observable.interval(1000).subscribe((i) => console.log(i));

// Rx.Observable
// .timer(1000, 500)
// .subscribe((i) => console.log(i));

// Rx.Observable
// .timer(1000)
// .subscribe((i) => console.log(i));

//Creating an observable from callbacks
// var myAsyncComputation = function(name, callback){
//     setTimeout(() => {
//         callback(null, "Finished computation for " + name);
//     }), 100;
// };

// myAsyncComputation("John Doe", (err, result) => console.log(result));

// // var observableFromCallback = Rx.Observable.fromCallback(myAsyncComputation);
// // observableFromCallback("John Doe")
// // .subscribe((result) => console.log(result));

// var observableFromCallback = Rx.Observable.fromCallback(myAsyncComputation, null, (error, result) => result);
// observableFromCallback("John Doe")
// .subscribe((result) => console.log(result));

// Creating an observable from a promise
Rx.Observable
.fromPromise(Promise.resolve("Hello World"))
.subscribe((result) => console.log(result));


