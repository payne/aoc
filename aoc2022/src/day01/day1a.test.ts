// sum.test.ts
// var fs = require('fs');
import * as fs from 'fs';
import { expect, test } from 'vitest'
import { read, groupCount, calorieArray, maxCalories } from './index'

read = () => {
  let fileName = 'example1.data'
  // fileName = 'test.data' // aka the real test data
  let contents = fs.readFileSync(`src/day01/./${fileName}`,'utf8');
  // console.log(contents);
  return contents;
}


test('can read the file', () => {
  let contents = read();
  expect(contents.length).toBe(55)
})

test('can count the groups', () => {
  let contents = read();
  let groups = groupCount(contents);
  expect(groups.length).toBe(5)
})

test('calorieArray works with example data', () => {
  let contents = read();
  let ca = calorieArray(contents)
  expect(ca).toStrictEqual([6000, 4000, 11000, 24000, 10000])
})

test('maxCalories test with sample data', () => {
 let contents = read();
 expect(maxCalories(contents)).toBe(24000)
})

