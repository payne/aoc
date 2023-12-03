import { expect, test } from "vitest";
import { readGrid } from "./index";

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

test(`read the grid`, () => {
  const grid = readGrid(exampleData)
  expect(grid.length).to.eq(10);
  grid.forEach( row => expect(row.length).to.eq(10));
});


