let attributeList = ["name", "image"];
// let attributeList = ["name", "sugarFree", "energy"];

const sodas = [
  {
    name: "Pepsi",
    sugarFree: false,
    energy: false,
    image: "fake.cdn/pepsi.jpg"
  },
  {
    name: "Coke",
    sugarFree: false,
    energy: false,
    image: "fake.cdn/coke.jpg"
  },
  {
    name: "NOS",
    sugarFree: false,
    energy: true,
    image: "fake.cdn/nos.jpg"
  },
  {
    name: "Diet Pepsi",
    sugarFree: true,
    energy: false,
    image: "fake.cdn/diet_pepsi.jpg"
  }
];

function displayData(data, attributes) {
  //Loop through data array
  for (let item of data) {
    // Create an empty string to hold the message
    let message = "";
    // Loop through the list of attributes
    for (let attribute of attributes) {
      // Add the key and item to the message string
      message += `${attribute}: ${item[attribute]}, `;
    }
    message = message.slice(0, message.length - 2);
    console.log(message);
  }
}

displayData(sodas, attributeList);
