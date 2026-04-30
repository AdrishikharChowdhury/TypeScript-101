type id = string | number;

const identifyId = (id: id): void => {
  if (typeof id === "string") {
    console.log(`${id} is string`);
  } else {
    console.log(`${id} is number`);
  }
};

identifyId(123);
identifyId("123");

console.log("=".repeat(80));

class Dog {
  bark(): void {
    console.log("Woof!");
  }
}

class Cat {
  meow(): void {
    console.log("Meow!");
  }
}

const moose = new Dog();
const freya = new Cat();

const callOfTheWild = (animal: Dog | Cat): void => {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
};

callOfTheWild(moose);
callOfTheWild(freya);

console.log("=".repeat(80));

type Person = {
  name: string;
  age: number;
};

type Account = {
  accountId: string;
  email: string;
  password: string;
  accountBalance: number;
};

type AccountHolder = Person & Account;

const accountDetailsOne: AccountHolder = {
  accountId: "jd0mltAqM8wRNNIr",
  name: "Adrishikhar Chowdhury",
  email: "test@mail.com",
  password: "supersecret!",
  age: 21,
  accountBalance: 10000,
};

console.log(accountDetailsOne)

console.log("=".repeat(80));
