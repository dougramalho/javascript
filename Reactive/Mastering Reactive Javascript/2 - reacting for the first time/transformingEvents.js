var Bacon = require("baconjs");

//var eventSource = Bacon.interval(1000).map((i) => new Date()).onValue((date) => console.log("without filter: " + date));

//var eventSourceWithFIlter = Bacon.interval(1000).map((i) => new Date()).filter((date) => date.getSeconds() % 2 == 0).onValue((date) => console.log("with filter: " + date));

var eventSourceWithFilterAndMap = Bacon.interval(1000)
.map((i) => new Date())
.filter((date) => date.getSeconds() % 2 == 0)
.map((date) => "The number in the second part " + date.toISOString() + " is " + date.getSeconds() + " which is an even number")
.onValue((date) => console.log(date));
