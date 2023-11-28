import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const score = strategyGuideScore(input);
  return score;
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
   const rule = rules[myChoice];
   if (rule === undefined) {
     console.log(`myChoice="${myChoice}" theirChoice="${theirChoice}"`);
     console.log(rules);
     console.log(`For myChoice=${myChoice} rule is ${rule}`);
   }
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
  if (round.length==0) return 0;
  const parts = round.trim().split(' ').map(s => s.trim())
  const theyPlay = codeToChoice[parts[0]]; // what is a more idiomatic way to do these three steps?
  const wePlay = codeToChoice[parts[1]];
  if (theyPlay===undefined) { console.log(`round="${round}" Could not find entry for "${parts[0]}"`) }
  if (wePlay===undefined) { console.log(`round="${round}" Could not find entry for "${parts[1]}"`) }
  if (parts[0].length === 0 || parts[1].length ===0 ) return 0;
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
