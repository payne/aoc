import * as fs from 'fs';
import { expect, test } from 'vitest'

const read = () => {
    let fileName = 'example1.data'
    fileName = 'input.txt' // aka the real test data
    let contents = fs.readFileSync(`./src/day01/${fileName}`,'utf8');
    // console.log(contents);
    return contents;
}

test('can read the file', () => {
    let contents = read();
    expect(contents.length).to.eq(21728)
})

test(`make CSV output showing the work`, () => {
    let contents = read();
    let lines = contents.split('\n');
    let csv = lines.map((line) => {
        // TODO
        return line;
    })
    console.log(csv.join('\n'))
})




