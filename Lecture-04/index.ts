const numbers: number[] = [12, 23, 43, 45, 55, 67, 78, 89, 90];

const names: Array<string> = ["Shayne", "Ian", "Damien", "Arasha"];

numbers.forEach((number) => console.log(number));
names.map((user) => console.log(user));
console.log(numbers);
console.log(names);

names.push("Tanisha");

names.map((user) => console.log(user));

let matrix: number[][];

matrix = [
  [0, 1, 0, 1],
  [1, 0, 1, 0],
];

matrix.map((row) => row.map((elem) => console.log(elem)));

let threeDi: number[][][];

threeDi = [
  [
    [12, 23, 34],
    [23, 34, 45],
    [34, 45, 56],
  ],
  [
    [45, 56, 67],
    [56, 67, 78],
    [67, 78, 89],
  ],
  [
    [78, 89, 90],
    [89, 90, 10],
    [10, 20, 30],
  ],
];

threeDi.map((row) => row.map((col) => col.map((elem) => console.log(elem))));
