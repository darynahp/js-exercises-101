//1. Declare a function name _printArray_. It takes array as a parameter and it prints out each value of the array.

function printArray (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
// printArray(['HTML', 'CSS', 'JS', 'React', 'Python'])

// 1. Write a function name _showDateTime_ which shows time in this format: 08/01/2020 04:08 using the Date object.

//     ```sh
//     showDateTime()
//     08/01/2020 04:08
//     ```

function showDateTime() {
  const now = new Date();

  const month = now.getMonth() + 1;
  const day = now.getDate();
  const year = now.getFullYear();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  return `${month}/${day}/${year} ${hours}:${minutes}`;
}

// console.log(showDateTime());
