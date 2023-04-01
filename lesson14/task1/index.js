// sendMessage
"use strict";

let message = "Just learn it! ";

function sendMessage(name) {
  const sender = "Gromecode";

  console.log(`${name}, ${message}. You ${sender}`);
}

//sendMessage(Tom);

function setMessage(text) {
  message = text;
}

sendMessage("Tom");

setMessage("Hello");

sendMessage("Tom");

// another.js
// import { sendMessage } from index.js
// let message = "Bay";
//sendMessage('Bob');
