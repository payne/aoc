import { expect, test } from "vitest";
import { readGrid, isDigit, get, isSymbol } from "./index";

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

test(`isSymbol is handy`, () => {
  expect(isSymbol('9')).to.eq(false);
});

test(`get x,y should return undefined sometimes`, () => {
  const grid = readGrid(exampleData);
  expect(get(grid, -1, 0)).to.eq(undefined);
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
