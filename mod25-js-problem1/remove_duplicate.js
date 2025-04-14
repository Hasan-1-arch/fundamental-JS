let arr = [1, 2, 3, 2, 4, 1, 5, 3];

/* let unique = [];
for (let num of arr) {
  console.log(num);
  if (!unique.includes(num)) {
    unique.push(num);
  }
}
console.log(unique); */

function removeDuplicate(arr) {
  let unique = [];
  for (let num of arr) {
    console.log(num);
    if (!unique.includes(num)) {
      unique.push(num);
    }
  }

  return unique;
}

const result = removeDuplicate(arr);
console.log(result);
