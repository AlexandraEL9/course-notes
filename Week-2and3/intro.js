//document.write("Hello, World! This is a simple JavaScript program.");

//let messageDiv = document.getElementById("message");
//messageDiv.textContent = "The Message should be updated!";

// Repeat message 10 times
const value = document.getElementById("message").textContent;
let result = "";
for (let i = 0; i < 10; i++) {
  result += value + " ";
}
document.getElementById("repeated-message").textContent = result;

// Currency converter
function convertCurrency() {
  const gbpAmount = document.getElementById("gbp-input").value;
  const conversionRate = 38.5;
  const egpAmount = gbpAmount * conversionRate;
  document.getElementById("egp-output").textContent = egpAmount.toFixed(2);
}

// Create an element with JS
let paragraph2 = document.createElement("p");
paragraph2.textContent = "This is a new paragraph created using JavaScript.";
document.body.appendChild(paragraph2);

// Spice generator
const spices = [
  "Cinnamon", "Cumin", "Paprika", "Turmeric", "Ginger",
  "Cardamom", "Cloves", "Nutmeg", "Black Pepper", "Chili Powder"
];

function generateSpice() {
  const spiceList = document.getElementById("spice-list");
  spiceList.innerHTML = ""; // Clear previous list

  const randomSpices = getRandomSpices(3);

  randomSpices.forEach(spice => {
    const listItem = document.createElement("li");
    listItem.textContent = spice;
    spiceList.appendChild(listItem);
  });
}

function getRandomSpices(count) {
  const spiceCopy = [...spices];
  const selected = [];

  for (let i = 0; i < count; i++) {
    const index = Math.floor(Math.random() * spiceCopy.length);
    selected.push(spiceCopy.splice(index, 1)[0]);
  }

  return selected;
}

// styling css with js
