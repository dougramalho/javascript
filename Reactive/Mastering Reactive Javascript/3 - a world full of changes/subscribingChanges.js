var Rx = require("rx");

// observable.subscribe(onNext,onError,onCompleted); 

// Rx.Observable.just("Hello World!!").subscribe((message) => console.log(message));

// Rx.Observable.throw(new Error("ops")).subscribe((message) => console.log(message), (err) => console.log("An error happened: " + err.message));

var subscription = Rx.Observable.interval(100)
.subscribe(
        (message) => console.log(message), 
        (err) => console.log("An error happened: " + err.message), 
        () => console.log("END")
);

setTimeout(() => subscription.dispose(), 290);


