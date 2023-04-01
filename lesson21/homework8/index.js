function finishList() {
  const list = document.querySelector(".list");
  const firstItem = list.firstElementChild;
  const lastItem = list.lastElementChild;

  const newItem1 = document.createElement("li");
  const newItem2 = document.createElement("li");
  const newItem3 = document.createElement("li");

  newItem1.textContent = "1";
  newItem2.textContent = "6";
  newItem3.textContent = "8";

  list.insertBefore(newItem1, firstItem);
  lastItem.after(newItem2);
  lastItem.after(newItem3);
}

export { finishList };
