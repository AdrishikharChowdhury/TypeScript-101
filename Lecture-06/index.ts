type Employee = {
  id: string;
  role: string;
  salary: number;
};

type Person = {
  firstName: string;
  lastName: string;
  age: number;
};

type worker = Employee & Person;

const Adrishikhar: worker = {
  firstName: "Adrishikhar",
  lastName: "Chowdhury",
  age: 21,
  role: "Fullstack Dev",
  salary: 60000,
  id: "lisufgpiug454556lkigsubdvsk",
};

console.log(Adrishikhar)