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

test.skip('can count the groups', () => {
  let groups = groupCount();
  expect(groups.length).toBe(5)
})

test.skip('calorieArray works with example data', () => {
  let ca = calorieArray()
  expect(ca).toStrictEqual([6000, 4000, 11000, 24000, 10000])
})

test.skip('maxCalories test with sample data', () => {
 expect(maxCalories()).toBe(24000)
})

