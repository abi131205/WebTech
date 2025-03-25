const moment = require("moment");

// Get the current date and time
console.log("Current Date & Time:", moment().format("MMMM Do YYYY, h:mm:ss a"));

// Format a specific date
const customDate = moment("2025-01-01");
console.log("Formatted Date:", customDate.format("dddd, MMMM Do YYYY"));

// Get the difference between two dates
const startDate = moment("2024-01-01");
const endDate = moment("2025-01-01");
console.log("Days Difference:", endDate.diff(startDate, "days"), "days");

// Add and subtract time
console.log("One Week Later:", moment().add(7, "days").format("YYYY-MM-DD"));
console.log("One Week Ago:", moment().subtract(7, "days").format("YYYY-MM-DD"));
