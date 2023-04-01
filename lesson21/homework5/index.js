function setButton(buttonText) {
  const body = document.querySelector("body");
  body.innerHTML = `<button>${buttonText}</button>`;
}

export { setButton };

setButton("Click me!");
