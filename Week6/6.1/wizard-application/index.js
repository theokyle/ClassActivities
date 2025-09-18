const form = document.querySelector("form");
form.addEventListener("submit", event => {
  event.preventDefault();

  const display = document.getElementById("applications");
  display.textContent = "";

  const inputs = event.target.elements;

  const table = document.createElement("table");
  const header = document.createElement("tr");
  header.innerHTML = "<th>Name</th><th>Value</th>";
  table.appendChild(header);

  for (let input of inputs) {
    if (input.type !== "submit") {
      if (
        (input.type === "checkbox" || input.type === "radio") &&
        !input.checked
      ) {
        continue;
      }

      const row = document.createElement("tr");

      const name = document.createElement("td");
      name.textContent = input.name;
      const value = document.createElement("td");
      value.textContent = input.value;

      row.appendChild(name);
      row.appendChild(value);
      table.appendChild(row);
    }
  }

  display.appendChild(table);
  form.reset();
});
