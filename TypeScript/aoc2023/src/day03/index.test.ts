import { expect, test } from "vitest";
import * as fs from 'fs';
import {
  readGrid,
  isDigit,
  get,
  isSymbol,
  getNumbers,
  isPartNumber,
  sumPartNumbers,
} from "./index";

const exampleData = `
467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..
`;

const read = () => {
  let fileName = 'input.txt';
  let contents = fs.readFileSync(`src/day03/${fileName}`, 'utf8');
  return contents;
}

test(`explore is part number with real data`, () => {
  const realInput = read(); 
  const grid = readGrid(realInput);
  const eg = 904;
  expect(isPartNumber(grid, eg)).to.eq(true);
  // since 904 happens twice
  expect(isPartNumber(grid, eg)).to.eq(true);
});

test(`sum of partNumbers`, () => {
  expect(sumPartNumbers(exampleData)).to.eq(4361);
});

test(`sum of partNumber works with edges ok`, () => {
  const edgeData = `
****
*35*
****
`;
  expect(sumPartNumbers(edgeData)).to.eq(35);
});

test(`partNumber only counts once when there are multiple adjacent special characters`, () => {
  const manyAdjacentData = `
..........
.****.....
.*35*.....
.****.#...
..........
`;
  expect(sumPartNumbers(manyAdjacentData)).to.eq(35);
});

test(`isPartNumber works`, () => {
  const grid = readGrid(exampleData);
  expect(isPartNumber(grid, 467)).to.eq(true);
  expect(isPartNumber(grid, 35)).to.eq(true);
  expect(isPartNumber(grid, 114)).to.eq(false);
  expect(isPartNumber(grid, 58)).to.eq(false);
});

test(`get numbers from input`, () => {
  const numbers = getNumbers(exampleData);
  expect(numbers[0]).to.eq(467);
});

test(`isSymbol is handy`, () => {
  expect(isSymbol("9")).to.eq(false);
  expect(isSymbol(".")).to.eq(false);
  expect(isSymbol(undefined)).to.eq(false);
});

test(`get x,y should return undefined sometimes`, () => {
  const grid = readGrid(exampleData);
  expect(get(grid, -1, 0)).to.eq(undefined);
  expect(get(grid, 0, -1)).to.eq(undefined);
  expect(get(grid, 20, 11)).to.eq(undefined);
  expect(get(grid, 10, 10)).to.eq(undefined);
});

test(`get string at x,y`, () => {
  const grid = readGrid(exampleData);
  expect(get(grid, 0, 0)).to.eq("4");
  expect(get(grid, 1, 0)).to.eq("6");
  expect(get(grid, 2, 2)).to.eq("3");
});

test(`read the grid`, () => {
  const grid = readGrid(exampleData);
  expect(grid.length).to.eq(10);
  grid.forEach((row) => expect(row.length).to.eq(10));
});

test(`isDigit should be built in but I don't see it in the docs - blush!`, () => {
  expect(isDigit("A")).to.eq(false);
  expect(isDigit("0")).to.eq(true);
  expect(isDigit("2")).to.eq(true);
  expect(isDigit("9")).to.eq(true);
});
