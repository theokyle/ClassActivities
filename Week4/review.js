const movieDB = {
  studio: "Aurora Pictures",
  genres: ["Action", "Comedy", "Drama", "Sci-Fi", "Documentary"],
  screens: [1, 2, 3, 4],
  snacks: {
    combos: [
      ["Popcorn", "Soda"],
      ["Nachos", "Soda", "Candy"]
    ],
    prices: [5.5, 7.0, 9.0]
  },
  movies: [
    {
      id: "A100",
      title: "Nebula Knights",
      year: 2022,
      tags: ["space", "hero", "pg-13"],
      cast: [
        { name: "Lena Ray", role: "Captain Vale" },
        { name: "Dax Kade", role: "AI Drone" }
      ],
      ratings: [4, 5, 5, 3, 4],
      showtimes: ["10:00", "13:00", "16:00"],
      relatedIds: ["C300", "S900"]
    },
    {
      id: "C300",
      title: "City of Echoes",
      year: 2021,
      tags: ["noir", "mystery", "r"],
      cast: [
        { name: "Mara Chen", role: "Detective Lin" },
        { name: "Owen Hale", role: "Archivist" }
      ],
      ratings: [5, 4, 4, 4],
      showtimes: ["12:00", "18:30"],
      relatedIds: ["A100"]
    },
    {
      id: "S900",
      title: "Starlight Express",
      year: 2023,
      tags: ["music", "family", "pg"],
      cast: [
        { name: "Lena Ray", role: "Conductor" },
        { name: "Zed Fox", role: "Rival" }
      ],
      ratings: [3, 3, 4, 2, 5, 4],
      showtimes: ["09:30", "14:15", "20:00"],
      relatedIds: []
    }
  ]
};

// movieDB.genres.push("Thriller");
// console.log(movieDB.genres);
// console.log(movieDB.genres.indexOf("Thriller"));
// console.log(movieDB.genres.slice(1, 4));
// movieDB.movies[1].tags.splice(1, 0, "crime");
// movieDB.movies[1].tags.splice(3, 1);
// console.log(movieDB.movies[1].tags);

// for (let i = 0; i < movieDB.snacks.combos.length; i++) {
//   movieDB.snacks.combos[i].reverse();
// }

// movieDB.snacks.combos.splice(2, 0, ["Pretzels", "Water"]);
// console.log(movieDB.snacks.combos);

// console.log(
//   movieDB.movies[0].title.concat(" of the ", movieDB.movies[1].title)
// );
// console.log(
//   movieDB.movies[0].title
//     .split(" ")
//     .reverse()
//     .join(" ")
// );

// let title = movieDB.movies[0].title;
// let split = title.split("");
// let reverse = split.reverse();
// console.log(reverse.join(""));

// const allIds = [];

// for (let i = 0; i < movieDB.movies.length; i++) {
//   allIds.push(movieDB.movies[i].id);
// }
// console.log(allIds);

// const morningTitles = [];

// for (let i = 0; i < movieDB.movies.length; i++) {
//   for (let x = 0; x < movieDB.movies[i].showtimes.length; x++) {
//     if (movieDB.movies[i].showtimes[x] < "12:00") {
//       morningTitles.push(movieDB.movies[i].title);
//       break;
//     }
//   }
// }

// console.log(morningTitles);
