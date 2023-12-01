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

export function sumCalibrationValues(input: string) {
  const lines = input.split("\n");
  console.log(lines);
  const sum = lines.reduce((total, line) => total + firstAndLastDigit(line), 0);
  return sum;
}

const zeroCharCode = "0".charCodeAt(0);
export function firstAndLastDigit(s: string): number {
  if (s.length == 0) return 0;
  const digits: number[] = s
    .split("")
    .filter((c) => isDigit(c))
    .map((c) => c.charCodeAt(0) - zeroCharCode);
  let answer = digits[0] * 10;
  if (digits.length > 1) {
    answer += digits[digits.length-1];
  } else {
    answer += digits[0];
  }
  console.log(`answer=${answer} s="${s}"`);
  return answer;
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
