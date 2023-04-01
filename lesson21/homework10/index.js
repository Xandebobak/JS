function manageClasses() {
  const oneElement = document.querySelector(".one");
  oneElement.classList.add("selected");

  const twoElement = document.querySelector(".two");
  twoElement.classList.remove("selected");

  const threeElement = document.querySelector(".three");
  threeElement.classList.toggle("three_done");

  const fourElement = document.querySelector(".four");
  if (fourElement.classList.contains("some-class")) {
    fourElement.classList.add("another-class");
  }
}

export { manageClasses };
