/* eslint-disable no-console */
const process = require("process");

console.log("---- process.memoryUsage() ----");

Object.entries(process.memoryUsage()).forEach((element) => {
  const [key, value] = element;
  let spacing = "\t";

  if (key === "rss") {
    spacing = "\t\t";
  }

  console.log(`Memory usage by ${key}: ${spacing} ${value / 1024 / 1024} GB `);
});
/**
 * Simply print out the current Node memory usage
 * and allocation limits
 *
 */

console.log();
console.log("---- v8.getHeapStatistics() ----");
const v8 = require("node:v8");

Object.entries(v8.getHeapStatistics()).forEach((element) => {
  const [key, value] = element;

  let valToPrint = "";
  let spacing = "\t";

  switch (key) {
    case "total_heap_size":
    case "total_physical_size":
    case "blah":
    case "total_available_size":
    case "used_heap_size":
    case "heap_size_limit":
    case "malloced_memory":
    case "peak_malloced_memory":
    case "does_zap_garbage":
    case "external_memory":
      spacing = "\t\t";

      break;
    default:
  }

  if (key === "does_zap_garbage") {
    valToPrint = value === 0 ? "false" : "true";
  } else {
    valToPrint = `${value / 1024 / 1024} GB `;
  }

  console.log(`${key}: ${spacing} ${valToPrint}`);
});
