

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
  return magicItemList.map(function () {
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
// function magicTableA() {
//   var diceRoll = diceRollD100();
//   console.log(diceRoll);
//   if (diceRoll <= 50) {
//     return "01-50 Potion of healing"
//   }
//   if (diceRoll <= 60) {
//     return "51-60 Spell scroll(cantrip)"
//   }
//   if (diceRoll <= 70) {
//     return "61-70 Potion of climbing"
//   }
//   if (diceRoll <= 90) {
//     return "71-90 Spell scroll (1st level)"
//   }
//   if (diceRoll <= 94) {
//     return "91-94 Spell scroll (2nd level)"
//   }
//   if (diceRoll <= 98) {
//     return "95-98 Potion of greater healing"
//   }
//   if (diceRoll === 99) {
//     return "99 Bag of holding"
//   }
//   return "100 Driftglobe"
// }

var magicTableAData = [
  {
    name: "Potion of healing",
    minimumValue: 1,
    maximumValue: 50,
  },
  {
    name: "Spell scroll(cantrip)",
    minimumValue: 51,
    maximumValue: 60,
  },
  {
    name: "Potion of climbing",
    minimumValue: 61,
    maximumValue: 70,
  },
  {
    name: "Spell scroll (1st level)",
    minimumValue: 71,
    maximumValue: 90,
  },
  {
    name: "Spell scroll (2nd level)",
    minimumValue: 91,
    maximumValue: 94,
  },
  {
    name: "Potion of Greater Healing",
    minimumValue: 95,
    maximumValue: 98,
  },
  {
    name: "Bag of Holding",
    minimumValue: 99,
    maximumValue: 99,
  },
  {
    name: "Driftglobe",
    minimumValue: 100,
    maximumValue: 100,
  }
];

function genericTable(magicTableData) {
  var diceRoll = diceRollD100();
  console.log(diceRoll);

  magicTableData.find(function (magicItemData) {
    var min = magicItemData.minimumValue;
    var max = magicItemData.maximumValue;
    var name = magicItemData.name;

    if (min <= diceRoll && diceRoll <= max) {
      console.log(min + "-" + max + " " + name)
      return true;
    }

    return false;
  })
}

genericTable(magicTableAData);
