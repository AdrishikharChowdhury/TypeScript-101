const printInfo = <T>(x: T): T => {
  return x;
};

console.log(printInfo<string>("Hello World"));
console.log(printInfo<number>(67));
console.log(printInfo<boolean>(false));
console.log(printInfo<number[]>([12, 23, 34, 45]));
console.log(printInfo<string[]>(["Solo Levelling", "Dracula", "Harry Potter"]));

interface Actor {
  name: string;
  field: string;
  isActing: boolean;
  ratings: number;
}

const ritabhari = printInfo<Actor>({
  name: "Ritabhari Chakraborty",
  field: "Tollywood",
  isActing: true,
  ratings: 10,
});

console.log(ritabhari)