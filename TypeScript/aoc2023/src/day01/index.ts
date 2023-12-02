import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return sumCalibrationValues(input);
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return sumCalibrationValues(input);
};

// There are two different ways to represent a digit: "4" and "four"
// plan is to search from left to right to get first digit (tens place)
// plan is to search from right to left to get second digit (ones place)

let representationToValue: { [key: string]: number}={'0': 0, 'zero': 0,
'1':1, 'one': 1,
  '2':2, 'two': 2,
  '3':3, 'three': 3,
  '4':4, 'four': 4,
  '5':5, 'five': 5,
  '6':6, 'six': 6,
  '7':7, 'seven': 7,
  '8':8, 'eight': 8,
  '9':9, 'nine': 9,
};

export function getLeftDigit(line: string): number {
  // TODO: Learn how to pass a comparision function make this generic
  let value = 0;
  let leftSpot = line.length + 10; // way big for the first loop
  Object.keys(representationToValue).forEach(token => {
    const location = line.indexOf(token);
    if (-1 != location) {
      if (leftSpot>location) {
        leftSpot = location;
        value = representationToValue[token];
      }
      console.log(`token=${token} leftSpot=${leftSpot} line="${line}" value=${value}`);
    }
  });

  return value;
}

export function getRightDigit(line: string): number {
  // TODO: Learn how to pass a comparision function make this generic
  let value = 0;
  let leftSpot = -1; // way too small
  Object.keys(representationToValue).forEach(token => {
    const location = line.indexOf(token);
    if (-1 != location) {
      if (leftSpot < location) {
        leftSpot = location;
        value = representationToValue[token];
      }
      console.log(`token=${token} leftSpot=${leftSpot} line="${line}" value=${value}`);
    }
  });

  return value;
}

export function sumCalibrationValues(input: string) {
  const lines = input.split("\n");
  // console.log(lines);
  const sum = lines.reduce((total, line) => total + firstAndLastDigit(line), 0);
  return sum;
}

export function firstAndLastDigit(s: string): number {
  if (s.length == 0) return 0;
  const leftDigit = getLeftDigit(s);
  const rightDigit = getRightDigit(s);
 return leftDigit * 10 + rightDigit;
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
