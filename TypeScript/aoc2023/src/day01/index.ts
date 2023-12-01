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

const zeroCharCode = '0'.charCodeAt(0);
export function firstAndLastDigit(s: string): number {
  const digits: number[] = s.split('').filter(c => isDigit(c)).map(c => c.charCodeAt(0)-zeroCharCode);
  return digits[0]*10+digits[1];
}

function isDigit(c:string) {
  const ascii = c.charCodeAt(0);
  const n = ascii - zeroCharCode;
  return (n >=0 && n <= 9);
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
