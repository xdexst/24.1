const arr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10]
];
let i = 0;
let j = 0;
let forward = true;
const output = document.getElementById('output');

setInterval(() => {
  const value = `${arr[i][j]} ${arr[i+1][j]}`;
  output.innerText += value + '\n';

  if (forward) {
    j++;
    if (j >= arr[0].length) {
      i++;
      j--;
      forward = false;
    }
  } else {
    j--;
    if (j < 0) {
      i--;
      j++;
      forward = true;
    }
  }

  if (i < 0 || i >= arr.length) {
    clearInterval();
  }
}, 1000);
