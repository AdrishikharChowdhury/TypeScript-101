interface Computer {
  name: string;
  ram: number;
  hdd: number;
}

const computerOne: Computer = {
  name: "HP Omnibook X ",
  ram: 16,
  hdd: 1024,
};

console.log("Device Specifications:");
console.log(`Computer Name: ${computerOne.name}`);
console.log(`RAM: ${computerOne.ram} GB    HDD: ${computerOne.hdd} GB`);

console.log("=".repeat(80));

interface Anime {
  readonly name: string;
  genre: string[];
  episodes: number;
  seasons: number;
  ratings: number;
  startofSeason():void
}

class DoctorStone implements Anime {
  name: string;
  genre: string[];
  episodes: number;
  seasons: number;
  ratings: number;
  constructor(
    name: string,
    genre: string[],
    episodes: number,
    seasons: number,
    ratings: number,
  ) {
    this.name = name;
    this.genre = genre;
    this.episodes = episodes;
    this.seasons = seasons;
    this.ratings = ratings;
    console.log(`${"=".repeat(20)}[ ${name} ]${"=".repeat(20)}`);
    console.log(`Genre: ${genre.map((item) => `${item}`)}`);
    console.log(`Season: ${seasons}     Episodes: ${episodes}`);
    console.log(`Ratings: ${ratings}`);
  }
  startofSeason(): void {
      console.log(`Season ${this.seasons} has started`)
  }
}

const drStone = new DoctorStone(
  "Dr. Stone",
  ["Animation", "Action", "Adventure", "Sci-fi"],
  24,
  1,
  8.1,
);

drStone.startofSeason()

const drStoneStoneWars = new DoctorStone(
  "Dr. Stone: Stone Wars",
  ["Animation", "Action", "Adventure", "Sci-fi"],
  11,
  2,
  8.1,
);

console.log("=".repeat(80));

interface Calculator {
  (x: number, y: number): number;
}

const add: Calculator = (num1, num2) => num1 + num2;
const sub: Calculator = (num1, num2) => num1 - num2;
const mul: Calculator = (num1, num2) => num1 * num2;
const div: Calculator = (num1, num2) => num1 / num2;
const rem: Calculator = (num1, num2) => num1 % num2;

console.log(`Addition: ${add(12,23)}`)
console.log(`Subtraction: ${sub(12,23)}`)
console.log(`Multiplication: ${mul(12,23)}`)
console.log(`Division: ${div(12,23)}`)
console.log(`Remainder: ${rem(12,23)}`)

console.log("=".repeat(80));