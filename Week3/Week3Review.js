const zoo = {
  name: "Wild Wonders Conservation Park",
  founded: 1985,
  location: {
    city: "Savannah",
    country: "USA",
    coordinates: { lat: 32.0809, lng: -81.0912 },
    contact: {
      phone: "+1-555-999-2025",
      email: "info@wildwonders.com"
    }
  },
  departments: [
    {
      name: "Mammals",
      headKeeper: "Dr. Emily Rhodes",
      species: [
        {
          commonName: "Lion",
          scientificName: "Panthera leo",
          population: 5,
          individuals: [
            {
              name: "Simba",
              age: 8,
              diet: ["meat", "bones"],
              medicalRecords: [
                { date: "2024-01-12", checkup: "Healthy" },
                { date: "2025-05-02", checkup: "Minor paw injury" }
              ],
              habitat: {
                name: "Savannah Lands",
                sizeSqMeters: 5000,
                enrichment: ["climbing rocks", "sunbathing spots"]
              },
              caretakers: [
                { name: "Alice", shift: "morning" },
                { name: "Bob", shift: "evening" }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Birds",
      headKeeper: "Luis Hernandez",
      species: [
        {
          commonName: "Penguin",
          scientificName: "Spheniscidae",
          population: 12,
          individuals: [
            {
              name: "Pingu",
              age: 4,
              diet: ["fish", "krill"],
              medicalRecords: [{ date: "2024-03-10", checkup: "Healthy" }],
              habitat: {
                name: "Arctic Coast",
                sizeSqMeters: 1200,
                enrichment: ["ice slides", "cold pool"]
              },
              caretakers: [
                { name: "Carla", shift: "morning" },
                { name: "David", shift: "evening" }
              ]
            },
            {
              name: "Pebbles",
              age: 2,
              diet: ["fish"],
              medicalRecords: [],
              habitat: {
                name: "Arctic Coast",
                sizeSqMeters: 1200,
                enrichment: ["ice slides", "cold pool"]
              },
              caretakers: [
                { name: "Carla", shift: "morning" },
                { name: "David", shift: "evening" }
              ]
            }
          ]
        }
      ]
    }
  ],
  ticketPrices: {
    adult: 25,
    child: 12,
    senior: 18
  },
  events: [
    {
      name: "Night Safari",
      days: ["Friday", "Saturday"],
      priceMultiplier: 1.5
    },
    {
      name: "Bird Feeding",
      days: ["Wednesday", "Sunday"],
      priceMultiplier: 1.2
    }
  ]
};

for (let x in zoo.ticketPrices) {
  console.log(`${x}: ${zoo.ticketPrices[x]}`);
}

for (let caretaker of zoo.departments[0].species[0].individuals[0].caretakers) {
  console.log(`${caretaker.name}`);
}
