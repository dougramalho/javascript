var Bacon = require("baconjs");

//subscribing to eventStream to log every event on this stream
bacon.fromArray([1, 2, 3, 4, 5]).onValue((number) => console.log(number));
