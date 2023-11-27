// sum.test.ts
// var fs = require('fs');
import * as fs from 'fs';
import { expect, test } from 'vitest';
import { read, Rock, Paper, Scissors, play } from './index';

test('Paper covers rock', () => {
  expect(play(Paper, Rock)).toBe(9);
})
