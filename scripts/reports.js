import pets from "../data.json";

function summarize(pet) {
  return pet.name + " comes from " + pet.origin + " and weighs up to " + pet.max_weight + " pounds.";
}
 function weightLine(pet) {
  let line = pet.name + " weighs up to ";
  line = line + pet.max_weight + " pounds.";
  return line;
}

function playScore(pet) {
  return pet.playfulness * 2;
}

function scoreLine(score) {
  return "Play score: " + score + " out of 10.";
}
 function playfulVerdict(pet) {
  if (pet.playfulness >= 4) {
    return "very playful";
  } else {
    return "calm";
  }
}
 
 
let first = summarize(pets[0]);
let second = weightLine(pets[1]);
let third = scoreLine(playScore(pets[2]));
let lines = pets.map(summarize);
let report = lines.join("\n");

let playful = pets.filter(function (pet) {
  return pet.playfulness > 3;
});
let playfulLines = playful.map(summarize);
let report2= playfulLines.join("\n");

console.log(first);
console.log(second);
console.log(third);
console.log(playfulVerdict(pets[0]));
console.log(playfulVerdict(pets[3]));
console.log(report);
console.log(report2);