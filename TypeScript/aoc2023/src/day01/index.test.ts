import { expect, test } from "vitest";
import { getLeftDigit, getRightDigit, firstAndLastDigit, sumCalibrationValues } from "./index";

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


test(`get left digit happy path`, () => {
  expect(getLeftDigit(`xtwone3four`)).to.eq(2);
  expect(getLeftDigit(`two1nine`)).to.eq(2);
  expect(getLeftDigit(`4nineeightseven2`)).to.eq(4)
})

test(`get right digit happy path`, () => {
  expect(getRightDigit(`xtwone3four`)).to.eq(4);
  expect(getRightDigit(`two1nine`)).to.eq(9);
  expect(getRightDigit(`4nineeightseven2`)).to.eq(2)
})

test(`Part 2 sample calibration values`, () => {
  const sum = sumCalibrationValues(part2testData);
  expect(sum).to.eq(281);
});

test(`Sample calibration values`, () => {
  const sum = sumCalibrationValues(testData);
  expect(sum).to.eq(142);
});

test(`digit at the end`, () => {
  const number = firstAndLastDigit(`onellbgsvseven9`);
  expect(number).to.eq(19);
});

test(`eightwothree should be 83`, () => {
  const number = firstAndLastDigit(`eightwothree`);
  expect(number).to.eq(83);
});

test(`zoneight234 should be 14`, () => {
  const number = firstAndLastDigit(`zoneight234`);
  expect(number).to.eq(14);
});

test(`Simple example of two digits`, () => {
  const number = firstAndLastDigit(`a1b2c3d4e5f`);
  expect(number).to.eq(15);
});

test(`Simple example of two digits`, () => {
  const number = firstAndLastDigit(`pqr3stu8vwx`);
  expect(number).to.eq(38);
});

test(`example with just one digit`, () => {
  const number = firstAndLastDigit("treb7uchet");
  expect(number).to.eq(77);
});
