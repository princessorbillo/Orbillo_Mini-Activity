/*
  Simple Inventory Management System for Alejo Electrical Supply,
  This system manages the inventory of an electrical heating elements store,
  allowing updates and calculations of product values dynamically.
*/

// Store details
const storeName = "Alejo Electrical Supply"; // Store name
const storeLocation = "Davao City, Davao del Sur"; // Store location
const storeCapacity = 500; // Maximum number of products the store can hold

// Dynamic product inventory
let products = [
  { name: "Bunker Fuel Heater", price: 350000, quantity: 10 },
  { name: "Immersion Heater", price: 50000, quantity: 50 },
  { name: "Flange Heater", price: 15000, quantity: 80 },
// Stretch Goal: Additional Product
  { name: "Cartridge Heater", price: 2000, quantity: 150 },
  { name: "Tubular Heater", price: 10500, quantity: 80 },
];

// Calculate total inventory value
let totalInventoryValue = 0; // Variable for total inventory value
for (let product of products) {
  totalInventoryValue += product.price * product.quantity; // Summing up the value
}

// Update Laptop quantity after receiving new shipment (update the first product here for the example)
products[0].quantity += 10; // Adding 10 more Bunker Fuel Heaters

// Find the most expensive product
let mostExpensiveProduct = products[0]; // Start with the first product
for (let product of products) {
  if (product.price > mostExpensiveProduct.price) {
    mostExpensiveProduct = product; // Update if a more expensive product is found
  }
}

// Output results
console.log("Store Name:", storeName);
console.log("Store Location:", storeLocation);
console.log("Total Number of Products:", products.reduce((sum, product) => sum + product.quantity, 0));
console.log("Total Inventory Value:", totalInventoryValue);
console.log("Updated Bunker Fuel Heater Quantity:", products[0].quantity);
console.log("Most Expensive Product:", mostExpensiveProduct.name);
