import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return;
};

export interface Balls {
  blue;
  red;
  green: number;
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
