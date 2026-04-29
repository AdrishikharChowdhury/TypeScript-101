const add = (x: number, y: number): number => x + y;
const sub = (x: number, y: number): number => x - y;
const multi = (x: number, y: number): number => x * y;
const divide = (x: number, y: number): number => x / y;
const rem = (x: number, y: number): number => x % y;
const sentence = (res: number = 0): string => {
  return `The result is ${res}`;
};

const greet = (): void => {
  console.log("Hello World");
};

console.log(greet())
console.log(sentence(add(5, 6)));
console.log(sentence(sub(5, 6)));
console.log(sentence(multi(5, 6)));
console.log(sentence(divide(15, 6)));
console.log(sentence(rem(5, 6)));
console.log(sentence());