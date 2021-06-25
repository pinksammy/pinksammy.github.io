function treasureHoardTier1() {
  var diceRoll = diceRollD100();
  console.log(diceRoll);
  if (diceRoll <= 36) {
    return "Nothing!"
  }
  if (diceRoll <= 60) {
    return "Roll 1d6 times on Magic Item Table A"
  }
  if (diceRoll <= 75) {
    return "Roll 1d4 times on Magic Item Table B"
  }
  if (diceRoll <= 85) {
    return "Roll 1d4 times on Magic Item Table C"
  }
  if (diceRoll <= 97) {
    return "Roll 1d4 times on Magic Item Table F"
  }
  return "Roll once on Magic Item Table G"
}

function diceRollD100() {
  return Math.floor(Math.random() * 100) + 1
}
function magicTableA() {
  var diceRoll = diceRollD100();
  console.log(diceRoll);
  if (diceRoll <= 50) {
    return "01-50 Potion of healing"
  }
  if (diceRoll <= 60) {
    return "51-60 Spell scroll(cantrip)"
  }
  if (diceRoll <= 70) {
    return "61-70 Potion of climbing"
  }
  if (diceRoll <= 90) {
    return "71-90 Spell scroll (1st level)"
  }
  if (diceRoll <= 94) {
    return "91-94 Spell scroll (2nd level)"
  }
  if (diceRoll <= 98) {
    return "95-98 Potion of greater healing"
  }
  if (diceRoll === 99) {
    return "99 Bag of holding"
  }
  return "100 Driftglobe"
}

console.log(treasureHoardTier1());
