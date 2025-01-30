"use strict";

// 1. Opret variabler med startværdier
let subtotal = 50;
let shipping = 10;
let quantity = 3;

// 2. Læg $20 til subtotal
subtotal += 20;

// 3. Beregn total uden moms
let totalExclusivTax = (quantity * subtotal) + shipping;

// 4. Beregn total inkl. 25% moms
let totalInclusivTax = totalExclusivTax * 1.25;

// 5. Find HTML-elementerne
let subtotalElement = document.getElementById("subtotal");
let shippingElement = document.getElementById("shipping");
let totalElement = document.getElementById("total");

// 6. Opdater HTML med de nye værdier
subtotalElement.textContent = subtotal.toFixed(2); // Viser subtotal med 2 decimaler
shippingElement.textContent = shipping.toFixed(2); // Viser shipping med 2 decimaler
totalElement.textContent = totalInclusivTax.toFixed(2); // Viser total inkl. moms med 2 decimaler

// 7. Vis resultaterne i konsollen
console.log("Subtotal:", subtotal);
console.log("Shipping:", shipping);
console.log("Total inkl. moms:", totalInclusivTax);
