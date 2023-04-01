function squaredNumbers() {
  const numberElements = document.querySelectorAll(".number");

  numberElements.forEach((element) => {
    const number = parseInt(element.dataset.number);
    const squaredNumber = number * number;
    element.dataset.squaredNumber = squaredNumber;
  });
}

export { squaredNumbers };
