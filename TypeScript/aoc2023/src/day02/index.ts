import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return totalPossibleGames(input);
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return totalMinBalls(input);
};

export interface Balls {
  blue;
  red;
  green: number;
}

const bagContents = { blue: 14, red: 12, green: 13 };

export function totalPossibleGames(input: string): number {
  // Don't know how to get an index from reduce (& too lazy to lookup)
  let total = 0;
  input.trim().split('\n').forEach( (line, index) => {
    console.log(`${index}: ${line}`);
    if (possible(line)) total += (index+1);
  });
  return total;
}

export function possible(gameLine: string) {
  const balls = countBalls(gameLine); // sorta violates SRP
  const isPossible = balls.reduce((acc, g) => {
    const bc = bagContents;
    return acc && (bc.blue >= g.blue && bc.red >= g.red && bc.green >= g.green);
  }, true);
  console.log(`isPossible=${isPossible}`);
  return isPossible;
}

export function totalMinBalls(input: string): number {
  return input.trim().split('\n').reduce( (acc, line) => {
   return acc + minBallsPower(line); 
  }, 0);
}

export function minBallsPower(line: string): number {
  const m = minBalls(line);
  return m.blue * m.red * m.green;
}

export function minBalls(line: string): Balls {
  const balls = countBalls(line);
  return balls.reduce( (a, b) => {
    console.log(`a=${a} b=${b}`);
    a.blue = a.blue < b.blue ? b.blue : a.blue;
    a.red = a.red < b.red ? b.red : a.red;
    a.green = a.green < b.green ? b.green : a.green;
    return a;
  }, {blue: 0, red: 0, green: 0});
}

export function countBalls(line: string): Balls[] {
  const reveals = line.substring(line.indexOf(":") + 1).split(";");
  // console.log(reveals);
  const balls = reveals.map((r) => normalizeReveal(r));
  // console.log(balls);
  return balls;
  /* the balls array looks like: 
 return [ { blue: 3, red: 4, green: 0 }, 
          { blue: 0, red: 0, green: 0 },
          { blue: 0, red: 0, green: 0 }
        ];
 */
}
function normalizeReveal(reveal: string): Ball {
  // reveal is like:
  // ' 3 blue, 4 red'
  const pairs = reveal.trim().split(",");
  const ball: Ball = { blue: 0, red: 0, green: 0 };
  pairs.forEach((p) => {
    const [numStr, color] = p.trim().split(" ");
    ball[color] = 1 * numStr;
  });
  return ball;
}

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
