import * as d3 from "d3";

const width = window.innerWidth;
const height = window.innerHeight;

// Create SVG
const svg = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// Create Rect for Testing
svg.append("rect").attr("width", 10).attr("height", 10).attr("x", 10);
console.log("Hello");
