// messenger
// let message = "Hi!";

const createMessenger = () => {
  let message = "Hi!";

  function sendMessage(name) {
    const sender = "Gromecode";

    console.log(`${name}, ${message}. You ${sender}`);
  }

  function setMessage(text) {
    message = text;
  }

  return {
    sendMessage,
    setMessage,
  };
};

const messanger1 = createMessenger();

messanger1.sendMessage("Bob");

const messanger2 = createMessenger();

messanger2.sendMessage("Tom");

messanger2.setMessage("Hello!");

messanger1.sendMessage("Ann!");
