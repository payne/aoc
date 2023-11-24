import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return maxCalories(input)
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return;
};


export function groupCount(input: any) {
  let data = input.split("\n\n");
  return data;
}

export function calorieArray(input: any) {
  let groups = groupCount(input);
  let ca = groups.map(g => {
    let lines = g.split("\n");
    let r =  lines.reduce((sum, line) => { 
      return sum + (1*line); 
    }, 0);
    return r;
  });
  return ca;
}

export function maxCalories(input: any) {
  let ca = calorieArray(input)
  return Math.max(...ca)
}


export function sumOfTopThree(input: any) {
  let ca = calorieArray(input)
  ca.sort()
  ca.forEach(v => console.log(`\t${v}`));
  return ca[0] + ca[1] + ca[2];
}



run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
