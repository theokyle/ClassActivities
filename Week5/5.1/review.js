const wizardSchool = {
  name: "Arcane Academy of Eldoria",
  location: {
    city: "Moonspire",
    region: "Northern Realms",
    coordinates: {
      lat: 45.237,
      lng: -73.491
    }
  },
  houses: [
    {
      name: "Draconis",
      colors: ["Crimson", "Gold"],
      head: {
        name: "Professor Ignatius Flameheart",
        specialty: "Fire Magic"
      },
      students: [
        { name: "Lyra Stormwind", year: 2, familiars: ["Phoenix"] },
        { name: "Kael Ironroot", year: 4, familiars: ["Dragonling", "Owl"] },
        { name: "Theron Blazehand", year: 1, familiars: ["Lizard"] },
        {
          name: "Valeria Sunstrike",
          year: 5,
          familiars: ["Falcon", "Salamander"]
        }
      ]
    },
    {
      name: "Sylvaris",
      colors: ["Emerald", "Silver"],
      head: {
        name: "Professor Elowen Mossbloom",
        specialty: "Nature Magic"
      },
      students: [
        { name: "Rowan Leafwhisper", year: 1, familiars: ["Cat"] },
        { name: "Seraphina Moondrop", year: 3, familiars: ["Deer", "Sprite"] },
        { name: "Finnian Greenbark", year: 2, familiars: ["Toad", "Owl"] },
        { name: "Amara Dawnsong", year: 4, familiars: ["Hawk", "Dryad"] }
      ]
    },
    {
      name: "Umbra",
      colors: ["Indigo", "Black"],
      head: {
        name: "Professor Morcant Duskwraith",
        specialty: "Shadow Magic"
      },
      students: [
        { name: "Darius Nightbane", year: 5, familiars: ["Bat", "Snake"] },
        { name: "Isolde Frostveil", year: 2, familiars: ["Wolf"] },
        { name: "Malrik Shadeborn", year: 3, familiars: ["Crow"] },
        { name: "Selene Duskbane", year: 1, familiars: ["Rat", "Shadowcat"] }
      ]
    },
    {
      name: "Aetherion",
      colors: ["Blue", "White"],
      head: {
        name: "Professor Lyanna Starfrost",
        specialty: "Air & Illusion Magic"
      },
      students: [
        { name: "Eryndor Skybreaker", year: 2, familiars: ["Griffin"] },
        {
          name: "Mirabel Frostwhisper",
          year: 4,
          familiars: ["Snow Owl", "Fox"]
        },
        { name: "Korin Windrider", year: 1, familiars: ["Eagle"] },
        { name: "Talia Moonsong", year: 5, familiars: ["Unicorn"] }
      ]
    }
  ],
  courses: [
    {
      title: "Alchemy & Potions",
      teacher: "Professor Aurelia Glassbrew",
      schedule: ["Monday", "Thursday"]
    },
    {
      title: "Elemental Control",
      teacher: "Professor Ignatius Flameheart",
      schedule: ["Tuesday", "Friday"]
    },
    {
      title: "Runes & Ancient Scripts",
      teacher: "Professor Selwyn Starcaller",
      schedule: ["Wednesday", "Saturday"]
    },
    {
      title: "Astronomy & Celestial Magic",
      teacher: "Professor Lyanna Starfrost",
      schedule: ["Monday", "Wednesday"]
    },
    {
      title: "Defense Against Dark Arts",
      teacher: "Professor Morcant Duskwraith",
      schedule: ["Thursday", "Friday"]
    }
  ],
  library: {
    name: "The Infinite Archive",
    restrictedSection: true,
    books: [
      { title: "Codex of Eternal Flames", dangerLevel: 5 },
      { title: "The Whispering Grimoire", dangerLevel: 4 },
      { title: "Herbal Lore of the Ancients", dangerLevel: 1 },
      { title: "Chronicles of the Moonspire Wars", dangerLevel: 2 },
      { title: "Forbidden Shadows: A Study of Necromancy", dangerLevel: 5 },
      { title: "Wings of the Skyborn", dangerLevel: 2 }
    ]
  },
  headmaster: {
    name: "Archmage Thalion Silverwind",
    office: "Tower of the Crescent Moon",
    familiars: ["Raven", "Stag", "Dragonhawk"]
  }
};

// const students = [];
// wizardSchool.houses.forEach(house => {
//   console.log(`House ${house.name}`);
//   house.students.forEach(student => {
//     console.log(`Student ${student.name}`);
//     students.push(student.name);
//   });
// });
// console.log(students);

// wizardSchool.houses.forEach(house => {
//   let description = `The colors of house ${house.name} are:`;
//   house.colors.forEach(color => {
//     description += ` ${color}`;
//   });
//   description += ".";
//   console.log(description);
// });

// const courseTitles = wizardSchool.courses.map(course => course.title);
// console.log(courseTitles);

// const dangerBooks = wizardSchool.library.books.filter(
//   book => book.dangerLevel >= 4
// );
// console.log(dangerBooks);

// const sortedBooks = wizardSchool.library.books.sort(
//   (a, b) => b.dangerLevel - a.dangerLevel
// );
// console.log(sortedCourses);

const sortedCourses = wizardSchool.courses.sort((a, b) =>
  a.title.localeCompare(b.title)
);

console.log(sortedCourses);
