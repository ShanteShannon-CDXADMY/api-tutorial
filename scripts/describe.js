import pets from "../data.json";

function sayLength(size) {
  console.log("This cat measures " + size + ".");
}

function describe(pet) {
  console.log(pet.name + " comes from " + pet.origin + ".");
}

function sayOrigin(origin) {
console.log("This cat's origin is " + origin + ".");		
}
sayLength("12 to 16 inches");
sayLength("15 to 20 inches");
sayLength("30 to 40 inches");

describe(pets[0]);
describe(pets[1]);
describe(pets[2]);

sayOrigin("Ethopia");
sayOrigin("Thailand");
sayOrigin("United States");