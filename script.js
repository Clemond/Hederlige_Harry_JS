// Krav för G:
// 1. skapa en script.js-fil som anropas från HTML-filen

// 2. Lägg till en eventlyssnare på knappen med t.ex id "button-contact"
// (finns inget ID idag) som kör en funktion när man klickar på knappen.
// Funktionen som körs när man klickar på knappen ska läsa texten från
// text-input:en med id "email" och logga den texten i konsolen med console.log
// Glöm ej pusha till github

const contactButton = document.getElementById("contact-button");

contactButton.addEventListener("click", () => {
  let emailInput = document.getElementById("email_input").value;
  console.log(emailInput);
});

// 3. Skriv en funktion createParagraph som tar emot en text som parameter.
// Funktionen ska sedan skapa en <p>-tag med den inskickade texten som värde.
// Funktionen ska sedan returnera den skapade <p>-taggen.
// Glöm ej pusha till github

function createParagraph(text) {
  let newParagraph = document.createElement("p");
  newParagraph.textContent = text;
  return text;
}

// 4. Varje gång man ÄNDRAR på phone så ska funktionen createParagraph
// anropas - du skickar med värdet i phone och p-taggen som returneras ska
// skrivas till console.log
// Glöm ej pusha till git
