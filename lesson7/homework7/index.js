function filterNames(arr, text) {
  console.log(arr);
  const array = arr.filter((item) => {
    console.log(item);
    console.log(item.includes(text));
    return item.includes(text);
  });
  console.log(array);
  return array;
}

//Input: filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'], 'ya')
console.log(
  filterNames(
    ["John", "Olivya", "Oleksandr", "Emanuel", "Vanya", "Nastya"],
    "ya"
  )
);
