var Bacon = require("baconjs");
var $ = requite("jquery");

//Creating an eventStream
var clickEventStream = $("#myButton").asEventStream("click");

//If we want to execute an action every time this button is clicked, we will need to use the onValue() method from this event stream.

clickEventStream.onValue(function(){
    alert("button clicked");
});


var myCustomEventStream = Bacon.fromBinder(function(push){
    push("some value");
    push("other value");
    push(new Bacon.Error("NOW AN ERROR HAPPENED"));
    push("now the stream will finish");
    push(new Bacon.End());
}).endOnError();

myCustomEventStream.onValue((value) => console.log(value));