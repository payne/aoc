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

export function isPartNumber(n: number): boolean {
  return true;
}

export function getNumbers(input: string): number[] {
  return input.replace(/\D/g,' ').trim().split(' ').filter(s => s.length > 0)
    .map(s => 1*s);
}

export function isSymbol(c: string): boolean {
  if (c === undefined) return false;
  if (isDigit(c)) return false;
  if (c === '.') return false;
}

export function get(grid: string[], x: number, y: numer) {
  if (x < 0 || y < 0) return undefined;
  if (x >= grid[0].length) return undefined;
  if (y >= grid.length) return undefined;
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
