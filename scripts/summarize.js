import pets from "../data.json";

function summarize(pet) {
  return pet.name + " comes from " + pet.origin + ".";
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

	function summarize(pet) {
  return pet.name + " comes from " + pet.origin + " and weighs up to " + pet.max_weight + " pounds.";
}
 
 
let first = summarize(pets[0]);
let second = weightLine(pets[1]);
let third = scoreLine(playScore(pets[2]));


console.log(first);
console.log(second);
console.log(third);
console.log(playfulVerdict(pets[0]));
console.log(playfulVerdict(pets[3]));