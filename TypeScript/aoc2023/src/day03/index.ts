import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return sumPartNumbers(input);
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return;
};

export function sumPartNumbers(input: string): number {
  const grid = readGrid(input);
  return getNumbers(input)
    .reduce( (acc, n) =>  (isPartNumber(grid, n)) ? acc+n : acc, 0);
}

function findX(grid: string[], y: number, nstr: string):number {
  const x = grid[y].indexOf(nstr);
  if (-1 === x) return -1;
  const left = get(grid, x-1, y);
  const right = get(grid, x+nstr.length, y);
  if ( isDigit(left) || isDigit(right) ) return -1;
  return x;
}
export function isPartNumber(grid: string[], n: number): boolean {
  const nstr = "" + n;
  for (let y=0; y < grid.length; y++) {
    // const x = grid[y].indexOf(nstr);
    const x = findX(grid, y, nstr);
    if (-1 != x) {
      const s = isSymbolAdjacent(grid, nstr, x, y);
      // console.log(`isPartNumber returning ${s}`);
      if (s) return true;
    }
  }
  return false;
}

function check(grid, x, y): boolean {
    const c = get(grid, x, y);
    const s = isSymbol(c);
    // console.log(`grid(${x},${y})=${c} isSymbol=${s}`);
    return s;
}

export function isSymbolAdjacent(grid: string[], nstr: string, x: number, y: number) {
  // console.log(`isSymbolAdjacent(grid, ${nstr}, ${x}, ${y}`);
  // check up and down for each digit in nstr
  for (let xd=0; xd < nstr.length; xd++) {
    // output nstr locations:
    check(grid, x+xd, y);
    if (check(grid, x+xd, y-1)) return true;
    if (check(grid, x+xd, y+1)) return true;
  }
  // just to the left of the number
  if (check(grid, x-1, y)) return true;
  // just to the right of the number
  if (check(grid, x+nstr.length, y)) return true;

  // right diagonal down
  // const s = check(grid, x+nstr.length, y+1);
  // console.log(`EXPECT THIS TO BE TRUE ${s}`);
  if (check(grid, x+nstr.length, y+1)) return true;
  // right diagonal up
  if (check(grid, x+nstr.length, y-1)) return true;
  // left diagonal down
  if (check(grid, x-1, y+1)) return true;
  // left diagonal up
  if (check(grid, x-1, y-1)) return true;

  return false;
}

export function getNumbers(input: string): number[] {
  return input.replace(/\D/g,' ').trim().split(' ').filter(s => s.length > 0)
    .map(s => 1*s);
}

export function isSymbol(c: string): boolean {
  if (c === undefined) return false;
  if (isDigit(c)) return false;
  if (c === '.') return false;
  return true;
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
  return s !== undefined && s.charCodeAt(0) >= zeroAscii && s.charCodeAt(0) <= zeroAscii + 10;
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
