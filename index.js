

function treasureHoardTier1() {
  var diceRoll = diceRollD100();
  console.log("initial hoard roll: ", diceRoll);
  if (diceRoll <= 36) {
    console.log("Nothing!")
    return
  }
  if (diceRoll <= 60) {
    var diceRoll6 = diceRollD6();
    console.log("Roll " + diceRoll6 + " times on Magic Item Table A")
    console.log(rollOnTableA(diceRoll6))
    return
  }
  if (diceRoll <= 75) {
    var diceRoll4 = diceRollD4();
    console.log("Roll " + diceRoll4 + " times on Magic Item Table B")
    console.log("dont have this table yet")
    return
  }
  if (diceRoll <= 85) {
    var diceRoll4 = diceRollD4();
    console.log("Roll " + diceRoll4 + " times on Magic Item Table C")
    console.log("dont have this table yet")
    return
  }
  if (diceRoll <= 97) {
    var diceRoll4 = diceRollD4();
    console.log("Roll " + diceRoll4 + " times on Magic Item Table F")
    console.log("dont have this table yet")
    return
  }
  console.log("Roll once on Magic Item Table G")
  console.log("dont have this table yet")
  return
}

function rollOnTableA(diceRoll6) {
  var magicItemList = new Array(diceRoll6).fill(null);

  return magicItemList.map(element => {
    return magicTableA();
  });
}

function diceRollD6() {
  return Math.floor(Math.random() * 6) + 1
}
function diceRollD4() {
  return Math.floor(Math.random() * 4) + 1
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

treasureHoardTier1()