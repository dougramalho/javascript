var Rx = require("rx");

// Rx.Observable
//     .just(1)
//     .concat(Rx.Observable.just(2))
//     .subscribe((k) => console.log(k));

// Rx.Observable
// .just(1)
// .concat(
//     Rx.Observable.just(2),
//     Rx.Observable.just("Hello World!!!")
// )
// .subscribe((k) => console.log(k));

// Rx.Observable
// .just(1)
// .concat(
//     Rx.Observable.just(2)
// )
// .concat(Rx.Observable.just("Hello World!!!"))
// .subscribe((k) => console.log(k));

// Rx.Observable
// .just(1)
// .merge(Rx.Observable.just(2))
// .subscribe((k) => console.log(k));

Rx.Observable
.just(1)
.merge(Rx.Observable.interval(1000))
.merge(Rx.Observable.just("Hello World"))
.subscribe((k) => console.log(k));

