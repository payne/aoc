// sum.test.ts
// var fs = require('fs');
import * as fs from 'fs';
import { expect, test } from 'vitest';
import { read, Rock, Paper, Scissors, play } from './index';
import { hasUncaughtExceptionCaptureCallback } from 'process';

test('Paper covers rock', () => {
  expect(play(Paper, Rock)).toBe(8);
})

test('Common thing in play', () => {
  expect(play(Rock, Rock)).toBe(4);
  expect(play(Paper, Paper)).toBe(5);
  expect(play(Scissors, Scissors)).toBe(6);

  expect(play(Rock, Scissors)).toBe(6+1);
  expect(play(Paper, Scissors)).toBe(0+2);
  expect(play(Scissors, Rock)).toBe(0+3);
  // Enough permutations - can add more later to increase confidence
})


