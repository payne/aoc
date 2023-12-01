import { expect, test} from "vitest";
import { firstAndLastDigit, sumCalibrationValues } from "./index";

const testData = `
1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
`;

const part2testData = `
two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen
`;

test.skip(`Part 2 sample calibration values`, () => {
  const sum = sumCalibrationValues(part2test.skipData);
  expect(sum).to.eq(281);
});


test.skip(`Sample calibration values`, () => {
  const sum = sumCalibrationValues(test.skipData);
  expect(sum).to.eq(142);
});

test.skip(`digit at the end`, () => {
  const number = firstAndLastDigit(`onellbgsvseven9`)
  expect(number).to.eq(19);
});


test(`eightwothree should be 83`, () => {
  const number = firstAndLastDigit(`eightwothree`);
  expect(number).to.eq(83);
});

test(`zoneight234 should be 14`, () => {
  const number = firstAndLastDigit(`zoneight234`)
  expect(number).to.eq(14);
});



test.skip(`Simple example of two digits`, () => {
  const number = firstAndLastDigit(`a1b2c3d4e5f`);
  expect(number).to.eq(15);
});


test.skip(`Simple example of two digits`, () => {
  const number = firstAndLastDigit(`pqr3stu8vwx`);
  expect(number).to.eq(38);
});

test.skip(`example with just one digit`, () => {
  const number = firstAndLastDigit("treb7uchet");
  expect(number).to.eq(77);
});
