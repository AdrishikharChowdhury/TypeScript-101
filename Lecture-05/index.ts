type person = {
  firstName: string;
  lastName: string;
  age: number;
};

const John: person = {
  firstName: "John",
  lastName: "Doe",
  age: 21,
};

const user = (): { firstName: string; lastName: string; age: number } => {
  return {
    firstName: "Adrishikhar",
    lastName: "Chowdhury",
    age: 21,
  };
};

const Adrishikhar=user()

console.log(`${John.firstName} ${John.lastName} is ${John.age} years old`)
console.log(`${Adrishikhar.firstName} ${Adrishikhar.lastName} is ${Adrishikhar.age} years old`)
