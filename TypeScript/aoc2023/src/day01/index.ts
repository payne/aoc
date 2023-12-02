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

export function getLeftDigit(line: string): number {
  return 4;
}
export function getRightDigit(line: string): number {
  return 2;
}

export function sumCalibrationValues(input: string) {
  const lines = input.split("\n");
  console.log(lines);
  const sum = lines.reduce((total, line) => total + firstAndLastDigit(line), 0);
  return sum;
}

const zeroCharCode = "0".charCodeAt(0);
export function firstAndLastDigit(s: string): number {
  if (s.length == 0) return 0;
  const origS = s;
  s = wordsToDigits(s);
  const digits: number[] = s
    .split("")
    .filter((c) => isDigit(c))
    .map((c) => c.charCodeAt(0) - zeroCharCode);
  let answer = digits[0] * 10;
  if (digits.length > 1) {
    answer += digits[digits.length - 1];
  } else {
    answer += digits[0];
  }
  console.log(`answer=${answer} s="${s}" origS="${origS}"`);
  return answer;
}

const digitNames: { [key: string]: number } = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

function wordsToDigits(line: string) {
  let newLine = line;
  for (let p = 0; p < newLine.length; p++) {
    Object.keys(digitNames)
      .reverse()
      .forEach((word) => {
        const digit = digitNames[word] + "";
        if (p === newLine.indexOf(word)) {
          console.log(`found ${word} at location ${p} in "${newLine}"`);
          newLine = newLine.replace(word, digit);
          console.log(`\tnewLine=${newLine}`);
          return newLine;
        }
      });
  }
  return newLine;
}

function isDigit(c: string) {
  const ascii = c.charCodeAt(0);
  const n = ascii - zeroCharCode;
  return n >= 0 && n <= 9;
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
