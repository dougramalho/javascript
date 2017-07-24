var Bacon = require("baconjs");

//Bacon.interval(1000).map(() => "a second has passed").onValue((str) => console.log(str));

var emitsEverySecondStream = Bacon.interval(1000);

emitsEverySecondStream.map(
    (i) => new Date()
)
.filter(
    (date) => date.getSeconds() % 2 == 0
)
.map(
    (date) => "The number in the second part of the date " +
    date.toISOString() + " is " + date.getSeconds() + " which is an even number"
)
.onValue((date) => console.log(date));

emitsEverySecondStream.map(
    () => "a second has passed"
)
.onValue((str) => console.log(str));
