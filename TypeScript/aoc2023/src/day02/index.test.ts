import { expect, test } from "vitest";
import { Balls, countBalls, possible, totalPossibleGames } from "./index";

const exampleData = `
Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
`;

test(`Sample games score 8`, () => {
  expect(totalPossibleGames(exampleData)).to.eq(8);
});

test(`possible game`, () => {
  const gameLine1 = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green`;
  expect(possible(gameLine1)).to.eq(true);
});

test(`game 1 example with three reveals`, () => {
  const gameLine1 = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green`;
  const balls = countBalls(gameLine1); // sorta violates SRP
  expect(balls.length).to.eq(3);

  expect(balls[0].blue).to.eq(3);
  expect(balls[0].red).to.eq(4);
  expect(balls[0].green).to.eq(0);

  expect(balls[1].blue).to.eq(6);
  expect(balls[1].red).to.eq(1);
  expect(balls[1].green).to.eq(2);

  expect(balls[2].blue).to.eq(0);
  expect(balls[2].red).to.eq(0);
  expect(balls[2].green).to.eq(2);
});


