

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
    rollOnTableA(diceRoll6)
    return
  }
  if (diceRoll <= 75) {
    var diceRoll4 = diceRollD4();
    console.log("Roll " + diceRoll4 + " times on Magic Item Table B")
    rollOnTableB(diceRoll4)
    return
  }
  if (diceRoll <= 85) {
    var diceRoll4 = diceRollD4();
    console.log("Roll " + diceRoll4 + " times on Magic Item Table C")
    rollOnTableC(diceRoll4)
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
    return genericTable(magicTableAData);
  });
}
function rollOnTableB(diceRoll4) {
  var magicItemList = new Array(diceRoll4).fill(null);
  return magicItemList.map(function () {
    return genericTable(magicTableBData);
  });
}
function rollOnTableC(diceRoll4) {
  var magicItemList = new Array(diceRoll4).fill(null);
  return magicItemList.map(function () {
    return genericTable(magicTableCData);
  });
}

function diceRollD6() {
  return Math.floor(Math.random() * 6) + 1
}
function diceRollD4() {
  return Math.floor(Math.random() * 4) + 1
}
function diceRollD8() {
  return Math.floor(Math.random() * 8) + 1
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
var magicTableBData = [
  {
    name: "Potion of greater healing",
    minimumValue: 1,
    maximumValue: 15,
  },
  {
    name: "Potion of fire breath",
    minimumValue: 16,
    maximumValue: 22,
  },
  {
    name: "Potion of resistance",
    minimumValue: 23,
    maximumValue: 29,
  },
  {
    name: "Ammunition, +1",
    minimumValue: 30,
    maximumValue: 34,
  },
  {
    name: "Potion of Animal Friendship",
    minimumValue: 35,
    maximumValue: 39,
  },
  {
    name: "Potion of hill giant strength",
    minimumValue: 40,
    maximumValue: 44,
  },
  {
    name: "Potion of growth",
    minimumValue: 45,
    maximumValue: 49,
  },
  {
    name: "Potion of water breathing",
    minimumValue: 50,
    maximumValue: 54,
  },
  {
    name: "Spell scroll (2nd level)",
    minimumValue: 55,
    maximumValue: 59,
  },
  {
    name: "Spell scroll (3rd level)",
    minimumValue: 60,
    maximumValue: 64,
  },
  {
    name: "Bag of holding",
    minimumValue: 65,
    maximumValue: 67,
  },
  {
    name: "Keoghtom's ointment",
    minimumValue: 68,
    maximumValue: 70,
  },
  {
    name: "Oil of slipperiness",
    minimumValue: 71,
    maximumValue: 73,
  },
  {
    name: "Dust of disappearance",
    minimumValue: 74,
    maximumValue: 75,
  },
  {
    name: "Dust of dryness",
    minimumValue: 76,
    maximumValue: 77,
  },
  {
    name: "Dust of sneezing and choking",
    minimumValue: 78,
    maximumValue: 79,
  },
  {
    name: "Elemental gem",
    minimumValue: 80,
    maximumValue: 81,
  },
  {
    name: "Philter of love",
    minimumValue: 82,
    maximumValue: 83,
  },
  {
    name: "Alchemy jug",
    minimumValue: 84,
    maximumValue: 84,
  },
  {
    name: "Cap of water breathing",
    minimumValue: 85,
    maximumValue: 85,
  },
  {
    name: "Cloak of the manta ray",
    minimumValue: 86,
    maximumValue: 86,
  },
  {
    name: "Driftglobe",
    minimumValue: 87,
    maximumValue: 87,
  },
  {
    name: "Goggles of night",
    minimumValue: 88,
    maximumValue: 88,
  },
  {
    name: "Helm of comprehending languages",
    minimumValue: 89,
    maximumValue: 89,
  },
  {
    name: "Immovable rod",
    minimumValue: 90,
    maximumValue: 90,
  },
  {
    name: "Lantern of revealing",
    minimumValue: 91,
    maximumValue: 91,
  },
  {
    name: "Mariner's armor",
    minimumValue: 92,
    maximumValue: 92,
  },
  {
    name: "Mithral armor",
    minimumValue: 93,
    maximumValue: 93,
  },
  {
    name: "Potion of poison",
    minimumValue: 94,
    maximumValue: 94,
  },
  {
    name: "Ring of swimming",
    minimumValue: 95,
    maximumValue: 95,
  },
  {
    name: "Robe of useful items",
    minimumValue: 96,
    maximumValue: 96,
  },
  {
    name: "Rope of climbing",
    minimumValue: 97,
    maximumValue: 97,
  },
  {
    name: "Saddle of the cavalier",
    minimumValue: 98,
    maximumValue: 98,
  },
  {
    name: "Wand of magic detection",
    minimumValue: 99,
    maximumValue: 99,
  },
  {
    name: "Wand of secrets",
    minimumValue: 100,
    maximumValue: 100,
  }
];
var magicTableCData = [
  {
    name: "Potion of superior healing",
    minimumValue: 1,
    maximumValue: 15,
  },
  {
    name: "Spell scroll (4th level)",
    minimumValue: 16,
    maximumValue: 22,
  },
  {
    name: "Ammunition, +2",
    minimumValue: 23,
    maximumValue: 27,
  },
  {
    name: "Potion of clairvoyance",
    minimumValue: 33,
    maximumValue: 37,
  },
  {
    name: "Potion of dimunition",
    minimumValue: 33,
    maximumValue: 37,
  },
  {
    name: "Potion of gaseous form",
    minimumValue: 38,
    maximumValue: 42,
  },
  {
    name: "Potion of frost giant strength",
    minimumValue: 43,
    maximumValue: 47,
  },
  {
    name: "Potion of stone giant strength",
    minimumValue: 48,
    maximumValue: 52,
  },
  {
    name: "Potion of heroism",
    minimumValue: 53,
    maximumValue: 57,
  },
  {
    name: "Potion of invulnerability",
    minimumValue: 58,
    maximumValue: 62,
  },
  {
    name: "Potion of mind reading",
    minimumValue: 63,
    maximumValue: 67,
  },
  {
    name: "Spell scroll (5th level)",
    minimumValue: 68,
    maximumValue: 72,
  },
  {
    name: "Elixir of health",
    minimumValue: 73,
    maximumValue: 75,
  },
  {
    name: "Oil of etherealness",
    minimumValue: 76,
    maximumValue: 78,
  },
  {
    name: "Potion of fire giant strength",
    minimumValue: 79,
    maximumValue: 81,
  },
  {
    name: "Quaal's feather token",
    minimumValue: 82,
    maximumValue: 84,
  },
  {
    name: "Scroll of protection",
    minimumValue: 85,
    maximumValue: 87,
  },
  {
    name: "Bag of beans",
    minimumValue: 88,
    maximumValue: 89,
  },
  {
    name: "Bead of force",
    minimumValue: 90,
    maximumValue: 91,
  },
  {
    name: "Chime of opening",
    minimumValue: 92,
    maximumValue: 92,
  },
  {
    name: "Decanter of endless water",
    minimumValue: 93,
    maximumValue: 93,
  },
  {
    name: "Eyes of minute seeing",
    minimumValue: 94,
    maximumValue: 94,
  },
  {
    name: "Folding boat",
    minimumValue: 95,
    maximumValue: 95,
  },
  {
    name: "Heward's handy haversack",
    minimumValue: 96,
    maximumValue: 96,
  },
  {
    name: "Horseshoes of speed",
    minimumValue: 97,
    maximumValue: 97,
  },
  {
    name: "Necklace of fireballs",
    minimumValue: 98,
    maximumValue: 98,
  },
  {
    name: "Periapt of health",
    minimumValue: 99,
    maximumValue: 99,
  },
  {
    name: "Sending stones",
    minimumValue: 100,
    maximumValue: 100,
  }
];
var magicTableFData = [
  {
    name: "Weapon, +1",
    minimumValue: 1,
    maximumValue: 15,
  },
  {
    name: "Shield, +1",
    minimumValue: 16,
    maximumValue: 18,
  },
  {
    name: "Sentinel shield",
    minimumValue: 19,
    maximumValue: 21,
  },
  {
    name: "Amulet of proof against detection and location",
    minimumValue: 22,
    maximumValue: 23,
  },
  {
    name: "Boots of elvenkind",
    minimumValue: 24,
    maximumValue: 25,
  },
  {
    name: "Boots of striding and springing",
    minimumValue: 26,
    maximumValue: 27,
  },
  {
    name: "Bracers of archery",
    minimumValue: 28,
    maximumValue: 29,
  },
  {
    name: "Brooch of shielding",
    minimumValue: 30,
    maximumValue: 31,
  },
  {
    name: "Broom of flying",
    minimumValue: 32,
    maximumValue: 33,
  },
  {
    name: "Cloak of elvenkind",
    minimumValue: 34,
    maximumValue: 35,
  },
  {
    name: "Cloak of protection",
    minimumValue: 36,
    maximumValue: 37,
  },
  {
    name: "Gauntlets of ogre power",
    minimumValue: 38,
    maximumValue: 39,
  },
  {
    name: "Hat of disguise",
    minimumValue: 40,
    maximumValue: 41,
  },
  {
    name: "Javelin of lightning",
    minimumValue: 42,
    maximumValue: 43,
  },
  {
    name: "Pearl of power",
    minimumValue: 44,
    maximumValue: 45,
  },
  {
    name: "Rod of the pact keeper, +1",
    minimumValue: 46,
    maximumValue: 47,
  },
  {
    name: "Slippers of spider climbing",
    minimumValue: 48,
    maximumValue: 49,
  },
  {
    name: "Staff of the adder",
    minimumValue: 50,
    maximumValue: 51,
  },
  {
    name: "Staff of the python",
    minimumValue: 52,
    maximumValue: 53,
  },
  {
    name: "Sword of vengeance",
    minimumValue: 54,
    maximumValue: 55,
  },
  {
    name: "Trident of fish command",
    minimumValue: 56,
    maximumValue: 57,
  },
  {
    name: "Wand of magic missiles",
    minimumValue: 58,
    maximumValue: 59,
  },
  {
    name: "Wand of the war mage, +1",
    minimumValue: 60,
    maximumValue: 61,
  },
  {
    name: "Wand of web",
    minimumValue: 62,
    maximumValue: 63,
  },
  {
    name: "Weapon of warning",
    minimumValue: 64,
    maximumValue: 65,
  },
  {
    name: "Adamantine armor (chain mail)",
    minimumValue: 66,
    maximumValue: 66,
  },
  {
    name: "Adamantine armor (chain shirt)",
    minimumValue: 67,
    maximumValue: 67,
  },
  {
    name: "Adamantine armor (scale mail)",
    minimumValue: 68,
    maximumValue: 68,
  },
  {
    name: "Bag of tricks (gray)",
    minimumValue: 69,
    maximumValue: 69,
  },
  {
    name: "Bag of tricks (rust)",
    minimumValue: 70,
    maximumValue: 70,
  },
  {
    name: "Bag of tricks (tan)",
    minimumValue: 71,
    maximumValue: 71,
  },
  {
    name: "Boots of the winterlands",
    minimumValue: 72,
    maximumValue: 72,
  },
  {
    name: "Circlet of blasting",
    minimumValue: 73,
    maximumValue: 73,
  },
  {
    name: "Deck of illusions",
    minimumValue: 74,
    maximumValue: 74,
  },
  {
    name: "Eversmoking bottle",
    minimumValue: 75,
    maximumValue: 75,
  },
  {
    name: "Eyes of charming",
    minimumValue: 76,
    maximumValue: 76,
  },
  {
    name: "Eyes of the eagle",
    minimumValue: 77,
    maximumValue: 77,
  },
  {
    name: "Figurine of wondrous power (silver raven)",
    minimumValue: 78,
    maximumValue: 78,
  },
  {
    name: "Gem of brightness",
    minimumValue: 79,
    maximumValue: 79,
  },
  {
    name: "Gloves of missle snaring",
    minimumValue: 80,
    maximumValue: 80,
  },
  {
    name: "Gloves of swimming and climbing",
    minimumValue: 81,
    maximumValue: 81,
  },
  {
    name: "Gloves of thievery",
    minimumValue: 82,
    maximumValue: 82,
  },
  {
    name: "Headband of intellect",
    minimumValue: 83,
    maximumValue: 83,
  },
  {
    name: "Helm of telepathy",
    minimumValue: 84,
    maximumValue: 84,
  },
  {
    name: "Instrument of the bards (Doss lute)",
    minimumValue: 85,
    maximumValue: 85,
  },
  {
    name: "Instrument of the bards (Fochlucan bandore)",
    minimumValue: 86,
    maximumValue: 86,
  },
  {
    name: "Instrument of the bards (Mac-Fuimidh cittern)",
    minimumValue: 87,
    maximumValue: 87,
  },
  {
    name: "Medallion of thoughts",
    minimumValue: 88,
    maximumValue: 88,
  },
  {
    name: "Necklace of adaptation",
    minimumValue: 89,
    maximumValue: 89,
  },
  {
    name: "Periapt of wound closure",
    minimumValue: 90,
    maximumValue: 90,
  },
  {
    name: "Pipes of haunting",
    minimumValue: 91,
    maximumValue: 91,
  },
  {
    name: "Pipes of the sewers",
    minimumValue: 92,
    maximumValue: 92,
  },
  {
    name: "Ring of jumping",
    minimumValue: 93,
    maximumValue: 93,
  },
  {
    name: "Ring of mind shielding",
    minimumValue: 94,
    maximumValue: 94,
  },
  {
    name: "Ring of warmth",
    minimumValue: 95,
    maximumValue: 95,
  },
  {
    name: "Ring of water walking",
    minimumValue: 96,
    maximumValue: 96,
  },
  {
    name: "Quiver of Ehlonna",
    minimumValue: 97,
    maximumValue: 97,
  },
  {
    name: "Stone of good luck",
    minimumValue: 98,
    maximumValue: 98,
  },
  {
    name: "Wind fan",
    minimumValue: 99,
    maximumValue: 99,
  },
  {
    name: "Winged boots",
    minimumValue: 100,
    maximumValue: 100,
  }
];
var magicTableGData = [
  {
    name: "Weapon, +2",
    minimumValue: 1,
    maximumValue: 11,
  },
  {
    name: "Figurine of wondrous power (ROLL d8)", // TODO: mini table with list
    minimumValue: 12,
    maximumValue: 14,
  },
  {
    name: "Adamantine armor (breastplate)",
    minimumValue: 15,
    maximumValue: 15,
  },
  {
    name: "Adamantine armor (splint)",
    minimumValue: 16,
    maximumValue: 16,
  },
  {
    name: "Amulet of health",
    minimumValue: 17,
    maximumValue: 17,
  },
  {
    name: "Armor of vulnerability",
    minimumValue: 18,
    maximumValue: 18,
  },
  {
    name: "Arrow-catching shield",
    minimumValue: 19,
    maximumValue: 19,
  },
  {
    name: "Belt of dwarvenkind",
    minimumValue: 20,
    maximumValue: 20,
  },
  {
    name: "Belt of hill giant strength",
    minimumValue: 21,
    maximumValue: 21,
  },
  {
    name: "Berserker axe",
    minimumValue: 22,
    maximumValue: 22,
  },
  {
    name: "Boots of levitation",
    minimumValue: 23,
    maximumValue: 23,
  },
  {
    name: "Boots of speed",
    minimumValue: 24,
    maximumValue: 24,
  },
  {
    name: "Bowl of commanding water elementals",
    minimumValue: 25,
    maximumValue: 25,
  },
  {
    name: "Bracers of defense",
    minimumValue: 26,
    maximumValue: 26,
  },
  {
    name: "Brazier of commanding fire elementals",
    minimumValue: 27,
    maximumValue: 27,
  },
  {
    name: "Cape of the mountebank",
    minimumValue: 28,
    maximumValue: 28,
  },
  {
    name: "Censer of controlling air elementals",
    minimumValue: 29,
    maximumValue: 29,
  },
  {
    name: "Armor, +1 chain mail",
    minimumValue: 30,
    maximumValue: 30,
  },
  {
    name: "Armor of resistance (chain mail)",
    minimumValue: 31,
    maximumValue: 31,
  },
  {
    name: "Armor, +1 chain shirt",
    minimumValue: 32,
    maximumValue: 32,
  },
  {
    name: "Armor of resistance (chain shirt)",
    minimumValue: 33,
    maximumValue: 33,
  },
  {
    name: "Cloak of displacement",
    minimumValue: 34,
    maximumValue: 34,
  },
  {
    name: "Cloak of the bat",
    minimumValue: 35,
    maximumValue: 35,
  },
  {
    name: "Cube of force",
    minimumValue: 36,
    maximumValue: 36,
  },
  {
    name: "Daern's instant fortress",
    minimumValue: 37,
    maximumValue: 37,
  },
  {
    name: "Dagger of venom",
    minimumValue: 38,
    maximumValue: 38,
  },
  {
    name: "Dimensional shackles",
    minimumValue: 39,
    maximumValue: 39,
  },
  {
    name: "Dragon slayer",
    minimumValue: 40,
    maximumValue: 40,
  },
  {
    name: "Elven chain",
    minimumValue: 41,
    maximumValue: 41,
  },
  {
    name: "Flame tongue",
    minimumValue: 42,
    maximumValue: 42,
  },
  {
    name: "Gem of seeing",
    minimumValue: 43,
    maximumValue: 43,
  },
  {
    name: "Giant slayer",
    minimumValue: 44,
    maximumValue: 44,
  },
  {
    name: "Glamoured studded leather",
    minimumValue: 45,
    maximumValue: 45,
  },
  {
    name: "Helm of teleportation",
    minimumValue: 46,
    maximumValue: 46,
  },
  {
    name: "Horn of blasting",
    minimumValue: 47,
    maximumValue: 47,
  },
  {
    name: "Horn of Valhalla (silver or brass)",
    minimumValue: 48,
    maximumValue: 48,
  },
  {
    name: "Instrument of the bards (Canaith mandolin)",
    minimumValue: 49,
    maximumValue: 49,
  },
  {
    name: "Instrument of the bards (Cli lyre)",
    minimumValue: 50,
    maximumValue: 50,
  },
  {
    name: "Ioun stone (awareness)",
    minimumValue: 51,
    maximumValue: 51,
  },
  {
    name: "Ioun stone (awareness)",
    minimumValue: 52,
    maximumValue: 52,
  },
  {
    name: "Ioun stone (protection)",
    minimumValue: 53,
    maximumValue: 53,
  },
  {
    name: "Ioun stone (reserve)",
    minimumValue: 53,
    maximumValue: 53,
  },
  {
    name: "Ioun stone (sustenance)",
    minimumValue: 54,
    maximumValue: 54,
  },
  {
    name: "Iron bands of Bilarro",
    minimumValue: 55,
    maximumValue: 55,
  },
  {
    name: "Armor, +1 leather",
    minimumValue: 56,
    maximumValue: 56,
  },
  {
    name: "Armor of resistance (leather)",
    minimumValue: 57,
    maximumValue: 57,
  },
  {
    name: "Mace of disruption",
    minimumValue: 58,
    maximumValue: 58,
  },
  {
    name: "Mace of smiting",
    minimumValue: 59,
    maximumValue: 59,
  },
  {
    name: "Mace of terror",
    minimumValue: 60,
    maximumValue: 60,
  },
  {
    name: "Mantle of spell resistance",
    minimumValue: 61,
    maximumValue: 61,
  },
  {
    name: "Necklace of prayer beads",
    minimumValue: 62,
    maximumValue: 62,
  },
  {
    name: "Periapt of proof against poison",
    minimumValue: 63,
    maximumValue: 63,
  },
  {
    name: "Ring of animal influence",
    minimumValue: 64,
    maximumValue: 64,
  },
  {
    name: "Ring of evasion",
    minimumValue: 65,
    maximumValue: 65,
  },
  {
    name: "Ring of feather falling",
    minimumValue: 66,
    maximumValue: 66,
  },
  {
    name: "Ring of free action",
    minimumValue: 67,
    maximumValue: 67,
  },
  {
    name: "Ring of protection",
    minimumValue: 68,
    maximumValue: 68,
  },
  {
    name: "Ring of resistance",
    minimumValue: 69,
    maximumValue: 69,
  },
  {
    name: "Ring of spell storing",
    minimumValue: 70,
    maximumValue: 70,
  },
  {
    name: "Ring of the ram",
    minimumValue: 71,
    maximumValue: 71,
  },
  {
    name: "Ring of X-ray vision",
    minimumValue: 72,
    maximumValue: 72,
  },
  {
    name: "Robe of eyes",
    minimumValue: 73,
    maximumValue: 73,
  },
  {
    name: "Rod of rulership",
    minimumValue: 74,
    maximumValue: 74,
  },
  {
    name: "Rod of the pact keeper, +2",
    minimumValue: 75,
    maximumValue: 75,
  },
  {
    name: "Rope of entanglement",
    minimumValue: 76,
    maximumValue: 76,
  },
  {
    name: "Armor, +1 scale mail",
    minimumValue: 77,
    maximumValue: 77,
  },
  {
    name: "Armor of resistance (scale mail)",
    minimumValue: 78,
    maximumValue: 78,
  },
  {
    name: "Shield, +2",
    minimumValue: 79,
    maximumValue: 79,
  },
  {
    name: "Shield of missile attraction",
    minimumValue: 80,
    maximumValue: 80,
  },
  {
    name: "Staff of charming",
    minimumValue: 81,
    maximumValue: 81,
  },
  {
    name: "Staff of healing",
    minimumValue: 82,
    maximumValue: 82,
  },
  {
    name: "Staff of swarming insects",
    minimumValue: 83,
    maximumValue: 83,
  },
  {
    name: "Staff of the woodlands",
    minimumValue: 84,
    maximumValue: 84,
  },
  {
    name: "Staff of withering",
    minimumValue: 85,
    maximumValue: 85,
  },
  {
    name: "Stone of controlling earth elementals",
    minimumValue: 86,
    maximumValue: 86,
  },
  {
    name: "Sun blade",
    minimumValue: 87,
    maximumValue: 87,
  },
  {
    name: "Sword of life stealing",
    minimumValue: 88,
    maximumValue: 88,
  },
  {
    name: "Sword of wounding",
    minimumValue: 89,
    maximumValue: 89,
  },
  {
    name: "Tentacle rod",
    minimumValue: 90,
    maximumValue: 90,
  },
  {
    name: "Vicious weapon",
    minimumValue: 91,
    maximumValue: 91,
  },
  {
    name: "Wand of binding",
    minimumValue: 92,
    maximumValue: 92,
  },
  {
    name: "Wand of enemy detection",
    minimumValue: 93,
    maximumValue: 93,
  },
  {
    name: "Wand of fear",
    minimumValue: 94,
    maximumValue: 94,
  },
  {
    name: "Wand of fireballs",
    minimumValue: 95,
    maximumValue: 95,
  },
  {
    name: "Wand of lightning bolts",
    minimumValue: 96,
    maximumValue: 96,
  },
  {
    name: "Wand of paralysis",
    minimumValue: 97,
    maximumValue: 97,
  },
  {
    name: "Wand of the war mage, +2",
    minimumValue: 98,
    maximumValue: 98,
  },
  {
    name: "Wand of wonder",
    minimumValue: 99,
    maximumValue: 99,
  },
  {
    name: "Wings of flying",
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

treasureHoardTier1()
