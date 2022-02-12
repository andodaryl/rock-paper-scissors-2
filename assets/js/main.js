// Module in which component behaviours are bound to DOM elements + other behaviours
 
// Import dependencies
import inputJS from "./components/input.js";
import pointsdisplayJS from "./components/pointsdisplay.js";

// Get imports
const {bindInputBehaviour} = inputJS
const {bindPointsDisplayBehaviour} = pointsdisplayJS

// DOM Elements
const title = document.getElementsByTagName('title')[0]
const node = document.getElementById('score-node')
const inputContainer = document.getElementById('container-input')

// Bind Behaviours to DOM Elements
const updatePointsDisplay = bindPointsDisplayBehaviour(title, node)
const activateInputBehaviour = bindInputBehaviour(inputContainer)

// Game Logic
activateInputBehaviour(updatePointsDisplay)