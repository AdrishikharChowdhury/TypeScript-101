let salary: number | string;

salary = 60000;
console.log(salary);

salary = "$60k";
console.log(salary);

const items: (number | string | boolean)[] = [
  1,
  2,
  3,
  4,
  "string",
  "hello",
  true,
  "yellow",
  17,
  false,
];

items.map((item) => console.log(item));
