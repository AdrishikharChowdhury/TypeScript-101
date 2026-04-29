class Pokemon {
  readonly name: string;
  readonly hp: number;
  readonly attack: number;
  readonly defense: number;
  moves: string[];
  type: string[];
  constructor(
    name: string,
    hp: number,
    attack: number,
    defense: number,
    moves: string[],
    type: string[],
  ) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.moves = moves;
    this.type = type;
    console.log(
      `Arceus has created pokemon ${name} and they are ${type} type pokemon `,
    );
  }
}

const Pikachu = new Pokemon(
  "Pikachu",
  200,
  16,
  20,
  ["Thundershock", "Quick ATtack", "Iron Tail", "Thunderbolt"],
  ["Electric"],
);

const Bulbasaur = new Pokemon(
  "Bulbasaur",
  200,
  16,
  20,
  ["Vine Whip", "Seed Bomb", "Razor Leaf"],
  ["Grass"],
);

// =======================================================================

class Animal {
  public name: string;
  private age: number;
  protected species: string;
  constructor(name: string, age: number, species: string) {
    this.name = name;
    this.age = age;
    this.species = species;
  }

  public getName(): string {
    console.log(`The name of the animal is ${this.name}`);
    return this.name;
  }

  protected getAge(): number {
    return this.age;
  }

  protected getSpecies(): string {
    console.log(`The species of the animal is ${this.species}`);
    return this.species;
  }
}

class Cat extends Animal {
  constructor(name: string, age: number) {
    super(name, age, "Feline");
  }
  public getInfo() {
    return `${this.getName()} is a ${this.getSpecies()} and is ${this.getAge()} years old`;
  }
}

const amanda = new Cat("Amanda", 34);

console.log(amanda.getInfo());

// =============================================================================

class Account {
  public email: string;
  private password: string;
  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
    console.log(`Account created:`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${"*".repeat(password.length)}`);
  }

  get myPassword(): string {
    return this.password;
  }

  set myPassword(password: string) {
    if (password.length < 8) {
      throw new Error(`Password length small try again`);
    }
    this.password = password;
  }
}

const Adrishikhar = new Account("amiadrishikhar@gmail.com", "supersecret!");
console.log(Adrishikhar.myPassword)
Adrishikhar.myPassword="supersecret!69"
console.log(Adrishikhar.myPassword)

// =============================================================================

