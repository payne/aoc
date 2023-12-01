import { expect, test } from "vitest";
import { firstAndLastDigit, sumCalibrationValues } from "./index";

const testData = `
1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
`;

test(`Sample calibration values`, () => {
  const sum = sumCalibrationValues(testData);
  expect(sum).to.eq(142);
});

test(`digit at the end`, () => {
  const number = firstAndLastDigit(`onellbgsvseven9`)
  expect(number).to.eq(99);
});

test(`Simple example of two digits`, () => {
  const number = firstAndLastDigit(`a1b2c3d4e5f`)
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
