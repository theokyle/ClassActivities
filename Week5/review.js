const wizardSchool = {
  schoolId: "AAE-1423",
  name: "Arcane Academy of Eldoria",
  motto: "Sapientia per Arcanum",
  foundedYear: 1327,
  term: {
    current: "Autumn 2025",
    startsOn: "2025-08-31",
    endsOn: "2025-12-12",
    examWeek: "2025-12-01"
  },
  location: {
    city: "Moonspire",
    region: "Northern Realms",
    coordinates: { lat: 45.237, lng: -73.491 },
    campus: [
      {
        id: "BLD-TCM",
        name: "Tower of the Crescent Moon",
        type: "administration",
        openHours: ["08:00-18:00"],
        coords: { x: 120, y: 35 }
      },
      {
        id: "BLD-ARC",
        name: "Arcanum Hall",
        type: "classrooms",
        openHours: ["07:30-21:00"],
        coords: { x: 62, y: 88 }
      },
      {
        id: "BLD-LIB",
        name: "Infinite Archive",
        type: "library",
        openHours: ["08:00-22:00"],
        coords: { x: 15, y: 60 }
      },
      {
        id: "BLD-HER",
        name: "Herbarium Domes",
        type: "greenhouse",
        openHours: ["06:00-19:00"],
        coords: { x: 210, y: 145 }
      },
      {
        id: "BLD-ARE",
        name: "Skyball Arena",
        type: "sports",
        openHours: ["09:00-20:00"],
        coords: { x: 300, y: 110 }
      }
    ]
  },

  headmaster: {
    name: "Archmage Thalion Silverwind",
    office: "Tower of the Crescent Moon",
    familiars: ["Raven", "Stag", "Dragonhawk"],
    officeHours: [
      { day: "Tuesday", time: "14:00-16:00" },
      { day: "Thursday", time: "10:00-12:00" }
    ]
  },

  faculty: [
    {
      id: "F-IGN",
      name: "Professor Ignatius Flameheart",
      title: "Chair of Elemental Arts",
      houseAffiliation: "Draconis",
      specialties: ["Fire Magic", "Elemental Control"],
      teaches: ["ELM-201"]
    },
    {
      id: "F-ELO",
      name: "Professor Elowen Mossbloom",
      title: "Chair of Natural Magicks",
      houseAffiliation: "Sylvaris",
      specialties: ["Nature Magic", "Herbology"],
      teaches: ["NAT-204"]
    },
    {
      id: "F-MOR",
      name: "Professor Morcant Duskwraith",
      title: "Defense & Shadows",
      houseAffiliation: "Umbra",
      specialties: ["Shadow Magic", "Wards"],
      teaches: ["DEF-210"]
    },
    {
      id: "F-AUR",
      name: "Professor Aurelia Glassbrew",
      title: "Alchemist Laureate",
      houseAffiliation: null,
      specialties: ["Alchemy", "Transmutation"],
      teaches: ["ALC-101"]
    },
    {
      id: "F-SEL",
      name: "Professor Selwyn Starcaller",
      title: "Runic Scholar",
      houseAffiliation: null,
      specialties: ["Runes", "Divination"],
      teaches: ["RNS-130"]
    },
    {
      id: "F-LYA",
      name: "Professor Lyanna Starfrost",
      title: "Astral & Illusory Arts",
      houseAffiliation: "Aetherion",
      specialties: ["Air & Illusion", "Astronomy"],
      teaches: ["AST-170", "ILL-240"]
    }
  ],

  houses: [
    {
      name: "Draconis",
      colors: ["Crimson", "Gold"],
      crest: { animal: "Dragon", element: "Fire" },
      head: { name: "Professor Ignatius Flameheart", specialty: "Fire Magic" },
      commonRoom: { buildingId: "BLD-ARC", floor: 3, passwordHint: "ember" },
      points: 312,
      dorms: {
        eastWing: {
          prefects: ["Lyra Stormwind"],
          rooms: [
            { room: "E301", beds: 4 },
            { room: "E302", beds: 4 }
          ]
        },
        westWing: {
          prefects: ["Valeria Sunstrike"],
          rooms: [
            { room: "W301", beds: 4 },
            { room: "W302", beds: 4 }
          ]
        }
      },
      students: [
        {
          id: "S-001",
          name: "Lyra Stormwind",
          year: 2,
          wand: { wood: "Rowan", core: "Phoenix Feather", lengthInches: 11.5 },
          familiars: ["Phoenix"],
          electives: ["RNS-130"],
          prefect: true,
          examScores: { "ALC-101": 88, "ELM-201": 91 }
        },
        {
          id: "S-002",
          name: "Kael Ironroot",
          year: 4,
          wand: {
            wood: "Oak",
            core: "Dragon Heartstring",
            lengthInches: 12.25
          },
          familiars: ["Dragonling", "Owl"],
          electives: ["AST-170"],
          prefect: false,
          examScores: { "ELM-201": 95, "DEF-210": 82 }
        },
        {
          id: "S-003",
          name: "Theron Blazehand",
          year: 1,
          wand: { wood: "Cedar", core: "Salamander Scale", lengthInches: 10 },
          familiars: ["Lizard"],
          electives: [],
          prefect: false,
          examScores: {}
        },
        {
          id: "S-004",
          name: "Valeria Sunstrike",
          year: 5,
          wand: { wood: "Yew", core: "Phoenix Feather", lengthInches: 13 },
          familiars: ["Falcon", "Salamander"],
          electives: ["ILL-240"],
          prefect: true,
          examScores: { "ELM-201": 97, "DEF-210": 90, "AST-170": 89 }
        }
      ],
      skyballTeam: {
        captainId: "S-004",
        chaserIds: ["S-001", "S-003"],
        keeperId: "S-002",
        seekerId: "S-004"
      }
    },
    {
      name: "Sylvaris",
      colors: ["Emerald", "Silver"],
      crest: { animal: "Stag", element: "Earth" },
      head: { name: "Professor Elowen Mossbloom", specialty: "Nature Magic" },
      commonRoom: { buildingId: "BLD-HER", floor: 1, passwordHint: "moss" },
      points: 287,
      dorms: {
        groveHall: {
          prefects: ["Seraphina Moondrop"],
          rooms: [
            { room: "G101", beds: 4 },
            { room: "G102", beds: 4 },
            { room: "G103", beds: 2 }
          ]
        }
      },
      students: [
        {
          id: "S-101",
          name: "Rowan Leafwhisper",
          year: 1,
          wand: { wood: "Willow", core: "Unicorn Hair", lengthInches: 9.75 },
          familiars: ["Cat"],
          electives: [],
          prefect: false,
          examScores: {}
        },
        {
          id: "S-102",
          name: "Seraphina Moondrop",
          year: 3,
          wand: { wood: "Hawthorn", core: "Dryad Sap", lengthInches: 11 },
          familiars: ["Deer", "Sprite"],
          electives: ["RNS-130", "NAT-204"],
          prefect: true,
          examScores: { "NAT-204": 92, "ALC-101": 85 }
        },
        {
          id: "S-103",
          name: "Finnian Greenbark",
          year: 2,
          wand: { wood: "Ash", core: "Unicorn Hair", lengthInches: 10.5 },
          familiars: ["Toad", "Owl"],
          electives: ["AST-170"],
          prefect: false,
          examScores: { "NAT-204": 81 }
        },
        {
          id: "S-104",
          name: "Amara Dawnsong",
          year: 4,
          wand: { wood: "Maple", core: "Dryad Sap", lengthInches: 12 },
          familiars: ["Hawk", "Dryad"],
          electives: ["ILL-240"],
          prefect: false,
          examScores: { "NAT-204": 94, "DEF-210": 86 }
        }
      ],
      skyballTeam: {
        captainId: "S-104",
        chaserIds: ["S-101", "S-103"],
        keeperId: "S-102",
        seekerId: "S-104"
      }
    },
    {
      name: "Umbra",
      colors: ["Indigo", "Black"],
      crest: { animal: "Raven", element: "Shadow" },
      head: { name: "Professor Morcant Duskwraith", specialty: "Shadow Magic" },
      commonRoom: { buildingId: "BLD-ARC", floor: -1, passwordHint: "umbra" },
      points: 334,
      dorms: {
        nightVault: {
          prefects: ["Isolde Frostveil"],
          rooms: [
            { room: "N001", beds: 3 },
            { room: "N002", beds: 3 }
          ]
        }
      },
      students: [
        {
          id: "S-201",
          name: "Darius Nightbane",
          year: 5,
          wand: { wood: "Ebony", core: "Basilisk Fang", lengthInches: 13.5 },
          familiars: ["Bat", "Snake"],
          electives: ["DEF-210"],
          prefect: true,
          examScores: { "DEF-210": 98, "RNS-130": 77 }
        },
        {
          id: "S-202",
          name: "Isolde Frostveil",
          year: 2,
          wand: { wood: "Birch", core: "Thestral Hair", lengthInches: 10.25 },
          familiars: ["Wolf"],
          electives: ["AST-170"],
          prefect: true,
          examScores: { "DEF-210": 91 }
        },
        {
          id: "S-203",
          name: "Malrik Shadeborn",
          year: 3,
          wand: {
            wood: "Walnut",
            core: "Shadowglass Shard",
            lengthInches: 11.75
          },
          familiars: ["Crow"],
          electives: [],
          prefect: false,
          examScores: { "DEF-210": 88 }
        },
        {
          id: "S-204",
          name: "Selene Duskbane",
          year: 1,
          wand: { wood: "Hazel", core: "Moonstone", lengthInches: 9.5 },
          familiars: ["Rat", "Shadowcat"],
          electives: [],
          prefect: false,
          examScores: {}
        }
      ],
      skyballTeam: {
        captainId: "S-201",
        chaserIds: ["S-202", "S-203"],
        keeperId: "S-204",
        seekerId: "S-201"
      }
    },
    {
      name: "Aetherion",
      colors: ["Blue", "White"],
      crest: { animal: "Griffin", element: "Air" },
      head: {
        name: "Professor Lyanna Starfrost",
        specialty: "Air & Illusion Magic"
      },
      commonRoom: { buildingId: "BLD-ARE", floor: 2, passwordHint: "zephyr" },
      points: 299,
      dorms: {
        skyLoft: {
          prefects: ["Mirabel Frostwhisper"],
          rooms: [
            { room: "S201", beds: 4 },
            { room: "S202", beds: 4 },
            { room: "S203", beds: 2 }
          ]
        }
      },
      students: [
        {
          id: "S-301",
          name: "Eryndor Skybreaker",
          year: 2,
          wand: {
            wood: "Poplar",
            core: "Hippogriff Feather",
            lengthInches: 10.75
          },
          familiars: ["Griffin"],
          electives: ["AST-170"],
          prefect: false,
          examScores: { "AST-170": 84 }
        },
        {
          id: "S-302",
          name: "Mirabel Frostwhisper",
          year: 4,
          wand: {
            wood: "Spruce",
            core: "Snow Phoenix Feather",
            lengthInches: 12.5
          },
          familiars: ["Snow Owl", "Fox"],
          electives: ["ILL-240"],
          prefect: true,
          examScores: { "ILL-240": 93, "AST-170": 90 }
        },
        {
          id: "S-303",
          name: "Korin Windrider",
          year: 1,
          wand: { wood: "Alder", core: "Sylph Hair", lengthInches: 9.25 },
          familiars: ["Eagle"],
          electives: [],
          prefect: false,
          examScores: {}
        },
        {
          id: "S-304",
          name: "Talia Moonsong",
          year: 5,
          wand: { wood: "Pear", core: "Unicorn Hair", lengthInches: 12.25 },
          familiars: ["Unicorn"],
          electives: ["RNS-130"],
          prefect: true,
          examScores: { "AST-170": 95, "ILL-240": 96 }
        }
      ],
      skyballTeam: {
        captainId: "S-304",
        chaserIds: ["S-301", "S-303"],
        keeperId: "S-302",
        seekerId: "S-304"
      }
    },
    {
      name: "Marellion",
      colors: ["Teal", "Bronze"],
      crest: { animal: "Leviathan", element: "Water" },
      head: {
        name: "Professor Aurelia Glassbrew",
        specialty: "Alchemy & Transmutation"
      },
      commonRoom: { buildingId: "BLD-HER", floor: 0, passwordHint: "tide" },
      points: 276,
      dorms: {
        tideWing: {
          prefects: [],
          rooms: [
            { room: "T001", beds: 6 },
            { room: "T002", beds: 6 }
          ]
        }
      },
      students: [
        {
          id: "S-401",
          name: "Neris Tidemender",
          year: 2,
          wand: { wood: "Reed", core: "Merrow Scale", lengthInches: 10 },
          familiars: ["Otter"],
          electives: ["ALC-101"],
          prefect: false,
          examScores: { "ALC-101": 86 }
        },
        {
          id: "S-402",
          name: "Bren Coralsong",
          year: 3,
          wand: { wood: "Cypress", core: "Kelpie Hair", lengthInches: 11 },
          familiars: ["Seal"],
          electives: ["NAT-204"],
          prefect: false,
          examScores: { "NAT-204": 88 }
        },
        {
          id: "S-403",
          name: "Oriana Wavebinder",
          year: 4,
          wand: { wood: "Driftwood", core: "Kraken Tendril", lengthInches: 13 },
          familiars: ["Cormorant"],
          electives: ["DEF-210"],
          prefect: true,
          examScores: { "DEF-210": 89 }
        },
        {
          id: "S-404",
          name: "Sethis Pearlshade",
          year: 1,
          wand: { wood: "Willow", core: "Merrow Scale", lengthInches: 9.5 },
          familiars: [],
          electives: [],
          prefect: false,
          examScores: {}
        }
      ],
      skyballTeam: {
        captainId: "S-403",
        chaserIds: ["S-401", "S-402"],
        keeperId: "S-404",
        seekerId: "S-401"
      }
    }
  ],

  courses: [
    {
      code: "ALC-101",
      title: "Alchemy & Potions",
      teacherId: "F-AUR",
      schedule: [
        { day: "Monday", time: "10:00" },
        { day: "Thursday", time: "10:00" }
      ],
      classroom: "Arcanum Hall A1",
      credits: 3,
      capacity: 24,
      prerequisites: []
    },
    {
      code: "ELM-201",
      title: "Elemental Control",
      teacherId: "F-IGN",
      schedule: [
        { day: "Tuesday", time: "14:00" },
        { day: "Friday", time: "14:00" }
      ],
      classroom: "Arcanum Hall E2",
      credits: 4,
      capacity: 20,
      prerequisites: ["ALC-101"]
    },
    {
      code: "RNS-130",
      title: "Runes & Ancient Scripts",
      teacherId: "F-SEL",
      schedule: [{ day: "Wednesday", time: "09:00" }],
      classroom: "Arcanum Hall R3",
      credits: 2,
      capacity: 30,
      prerequisites: []
    },
    {
      code: "NAT-204",
      title: "Herbology & Nature Wards",
      teacherId: "F-ELO",
      schedule: [
        { day: "Tuesday", time: "09:30" },
        { day: "Friday", time: "09:30" }
      ],
      classroom: "Herbarium Dome H2",
      credits: 3,
      capacity: 22,
      prerequisites: []
    },
    {
      code: "DEF-210",
      title: "Defense Against Maledictions",
      teacherId: "F-MOR",
      schedule: [{ day: "Thursday", time: "15:00" }],
      classroom: "Arcanum Hall D1",
      credits: 3,
      capacity: 18,
      prerequisites: ["RNS-130"]
    },
    {
      code: "AST-170",
      title: "Astronomy & Celestial Magic",
      teacherId: "F-LYA",
      schedule: [
        { day: "Monday", time: "20:00" },
        { day: "Wednesday", time: "20:00" }
      ],
      classroom: "Observatory O1",
      credits: 2,
      capacity: 26,
      prerequisites: []
    },
    {
      code: "ILL-240",
      title: "Advanced Illusion Weaving",
      teacherId: "F-LYA",
      schedule: [{ day: "Friday", time: "11:00" }],
      classroom: "Illusory Lab I1",
      credits: 4,
      capacity: 16,
      prerequisites: ["ELM-201"]
    }
  ],

  library: {
    name: "The Infinite Archive",
    librarian: { name: "Mistress Calla Inkthorne", strict: true },
    restrictedSection: true,
    rules: [
      "No screaming tomes past dusk",
      "Restricted scrolls require staff signature",
      "Return potions to alchemy desk"
    ],
    books: [
      {
        id: "B-001",
        title: "Codex of Eternal Flames",
        author: "Agnar Pyre",
        topics: ["Elemental", "Fire"],
        dangerLevel: 5,
        copies: 2
      },
      {
        id: "B-002",
        title: "The Whispering Grimoire",
        author: "Unknown",
        topics: ["Curses", "Forbidden"],
        dangerLevel: 4,
        copies: 1
      },
      {
        id: "B-003",
        title: "Herbal Lore of the Ancients",
        author: "Elder Moss",
        topics: ["Herbology"],
        dangerLevel: 1,
        copies: 5
      },
      {
        id: "B-004",
        title: "Chronicles of the Moonspire Wars",
        author: "Selwyn Starcaller",
        topics: ["History"],
        dangerLevel: 2,
        copies: 3
      },
      {
        id: "B-005",
        title: "Forbidden Shadows: A Study of Necromancy",
        author: "Morcant D.",
        topics: ["Necromancy"],
        dangerLevel: 5,
        copies: 1
      },
      {
        id: "B-006",
        title: "Wings of the Skyborn",
        author: "Lyanna Starfrost",
        topics: ["Air", "Illusion"],
        dangerLevel: 2,
        copies: 2
      }
    ],
    openHours: { weekday: "08:00-22:00", weekend: "10:00-18:00" }
  },

  spellsCatalog: [
    {
      id: "SP-IGNIS",
      name: "Ignis Orbis",
      incantation: "IGNIS ORBIS",
      type: "Offensive",
      difficulty: 3,
      effects: ["Conjures a ring of fire"],
      bannedInDuels: false
    },
    {
      id: "SP-LUMOS",
      name: "Lumos Aeon",
      incantation: "LUMOS AEON",
      type: "Utility",
      difficulty: 1,
      effects: ["Sustained light aura"],
      bannedInDuels: false
    },
    {
      id: "SP-UMBRA",
      name: "Umbra Veil",
      incantation: "UMBRA VELARE",
      type: "Defensive",
      difficulty: 4,
      effects: ["Shroud of shadows"],
      bannedInDuels: false
    },
    {
      id: "SP-SILEN",
      name: "Silens Scriptum",
      incantation: "SILENS",
      type: "Control",
      difficulty: 2,
      effects: ["Silences chattering books"],
      bannedInDuels: true
    }
  ],

  potionsInventory: [
    {
      id: "P-HEAL",
      name: "Mending Draught",
      rarity: "Common",
      ingredients: ["Moonblossom", "Silverleaf", "Pure Water"],
      stock: 37
    },
    {
      id: "P-INVIS",
      name: "Veil Tonic",
      rarity: "Rare",
      ingredients: ["Shadecap", "Gloomroot", "Mist Essence"],
      stock: 5
    },
    {
      id: "P-FIRE",
      name: "Ember Elixir",
      rarity: "Uncommon",
      ingredients: ["Salamander Scale", "Cinnamon Ash", "Heat Salt"],
      stock: 12
    }
  ],

  clubs: [
    {
      id: "CL-AST",
      name: "Astronomy Society",
      advisorId: "F-LYA",
      meets: [{ day: "Wednesday", time: "21:00", place: "Observatory O1" }],
      memberIds: ["S-301", "S-302", "S-304", "S-102"]
    },
    {
      id: "CL-DUE",
      name: "Dueling League",
      advisorId: "F-MOR",
      meets: [{ day: "Thursday", time: "17:00", place: "Arcanum Hall D1" }],
      memberIds: ["S-201", "S-004", "S-102", "S-403"]
    },
    {
      id: "CL-HER",
      name: "Herbology Circle",
      advisorId: "F-ELO",
      meets: [{ day: "Monday", time: "08:00", place: "Herbarium Dome H2" }],
      memberIds: ["S-101", "S-103", "S-401", "S-402"]
    }
  ],

  sports: {
    skyball: {
      rulesBrief: [
        "Score through floating rings",
        "Catcher may not cast offensive spells",
        "Seeker ends match by catching Aether Wisp"
      ],
      fixtures: [
        {
          id: "FX-01",
          date: "2025-09-12",
          teams: ["Draconis", "Umbra"],
          result: { winner: "Umbra", score: "210-190" }
        },
        {
          id: "FX-02",
          date: "2025-09-26",
          teams: ["Sylvaris", "Aetherion"],
          result: { winner: "Aetherion", score: "180-160" }
        },
        {
          id: "FX-03",
          date: "2025-10-10",
          teams: ["Marellion", "Draconis"],
          result: null
        }
      ]
    }
  },

  dining: {
    hall: "Arcanum Refectory",
    weeklyMenu: {
      Monday: {
        breakfast: ["Sunrise Porridge", "Berry Compote"],
        dinner: ["Dragonfire Stew", "Herb Loaves"]
      },
      Tuesday: {
        breakfast: ["Moon Eggs", "Oat Cakes"],
        dinner: ["Garden Roast", "Root Mash"]
      },
      Wednesday: {
        breakfast: ["Starfruit Tarts"],
        dinner: ["Skyfish Pie", "Crystal Greens"]
      },
      Thursday: {
        breakfast: ["Arcane Granola"],
        dinner: ["Shadow Noodles", "Ginger Broth"]
      },
      Friday: {
        breakfast: ["Honey Buns"],
        dinner: ["Phoenix Pepper Pasta", "Frostleaf Salad"]
      }
    },
    curfew: { firstYears: "21:00", others: "22:00" }
  },

  policies: {
    dressCode: [
      "House colors on formal days",
      "Wands sheathed in halls",
      "No levitation of cutlery"
    ],
    detentionExamples: [
      "Cataloging cursed tomes",
      "De-icing observatory mirrors",
      "Tending nightshade beds"
    ]
  }
};

// List houses for which every student has one familiar
// const housesWithFamiliar = wizardSchool.houses
//   .filter(house => {
//     return house.students.every(student => student.familiars.length > 0);
//   })
//   .map(house => house.name);
// console.log(housesWithFamiliar);

// const houseNames = wizardSchool.houses.map(house => house.name);
// console.log(houseNames);

// const goldHouses = wizardSchool.houses
//   .filter(house => house.colors.includes("Gold"))
//   .map(house => house.name);
// console.log(goldHouses);

// const prefects = [];
// wizardSchool.houses.forEach(house => {
//   house.students.forEach(student => {
//     if (student.prefect == true) {
//       prefects.push({ house: house.name, prefect: student.name });
//     }
//   });
// });
// console.log(prefects);

// const points = wizardSchool.houses.map(house => house.points);
// const sortedPoints = points.sort((a,b) => b - a);
// console.log(sortedPoints);

// const duelingClubIds = wizardSchool.clubs[1].memberIds;

// const duelingClubStudents = [];
// wizardSchool.houses.forEach(house => {
//   house.students.forEach(student => {
//     if (duelingClubIds.includes(student.id)) {
//       duelingClubStudents.push(student.name);
//     }
//   });
// });
// console.log(duelingClubStudents);

// const fridayClasses = wizardSchool.courses
//   .filter(course => {
//     return course.schedule.some(session => session.day === "Friday");
//   })
//   .map(course => course.title);
// console.log(fridayClasses);

// const familiars = [];
// wizardSchool.houses.forEach(house => {
//   house.students.forEach(student => {
//     student.familiars.forEach(familiar => {
//       familiars.push(familiar);
//     });
//   });
// });
// console.log(familiars);

const books = wizardSchool.library.books.slice(0, 3).map(book => book.title);
console.log(books);
