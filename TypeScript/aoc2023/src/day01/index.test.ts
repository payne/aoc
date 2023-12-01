import { expect, test } from 'vitest';
import { firstAndLastDigit } from './index';

const testData = 
`
1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
`;

test(`Simple example of two digits`,() => {
    const number = firstAndLastDigit(`pqr3stu8vwx`);
    expect(number).to.eq(38);
})