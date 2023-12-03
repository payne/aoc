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

export function get(grid: string[], x: number, y: numer) {
  return grid[y].substring(x, x + 1);
}

export function readGrid(input: string): string[] {
  const grid = input
    .trim()
    .split("\n")
    .map((l) => l.trim());
  return grid;
}

const zeroAscii = "0".charCodeAt(0);
export function isDigit(s: string) {
  return s.charCodeAt(0) >= zeroAscii && s.charCodeAt(0) <= zeroAscii + 10;
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
