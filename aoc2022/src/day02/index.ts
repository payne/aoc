import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return;
};

export const Rock = "Rock";
export const Paper = "Paper";
export const Scissors = "Scissors";
/* -- why can't I use symbols?
export const Rock = Symbol("Rock");
export const Paper = Symbol("Paper");
export const Scissors = Symbol("Scissors");
*/

const rules:{[key:string]:any} = { Rock: { defeats: Scissors, score: 1  },
                Paper: { defeats: Rock, score: 2 },
                Scissors: { defeats: Paper, score: 3 }, 
             };

export function play(myChoice: string, theirChoice: string) { // TODO: type RPS
   console.log(rules);
   const rule = rules[myChoice];
   console.log(`For myChoice=${myChoice.toString()} rule is ${rule}`);
   if (myChoice === theirChoice) return 3 + rule.score;
   if (rule.defeats === theirChoice) return 6 + rule.score;
   return 0 + rule.score;
}

const codeToChoice:{[key:string]:string} = { 'A': Rock, 'B': Paper, 'C': Scissors, 'X': Rock, 'Y': Paper, 'Z': Scissors};

export function strategyGuideScore(multiLineStragegyGuide: string): number {
  const rounds = multiLineStragegyGuide.split('\n');
  return rounds.reduce((total, round) => total + playRound(round), 0);
}

function playRound(round: string) {
  const parts = round.split(' ');
  const theyPlay = codeToChoice[parts[0]]; // what is a more idiomatic way to do these three steps?
  const wePlay = codeToChoice[parts[0]];
  return play(wePlay, theyPlay);
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
