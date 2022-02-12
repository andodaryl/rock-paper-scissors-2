// Module in which component behaviours are bound to DOM elements + other behaviours
 
// Import dependencies
import inputJS from "./components/input.js";
import pointsdisplayJS from "./components/pointsdisplay.js";
import choicedisplayJS from "./components/choicedisplay.js";

// Get imports
const {bindInputBehaviour} = inputJS
const {bindPointsDisplayBehaviour} = pointsdisplayJS
const {bindChoiceDisplayBehaviour} = choicedisplayJS 


// DOM Elements
const title = document.getElementsByTagName('title')[0]
const node = document.getElementById('score-node')
const gameoverContainer = document.getElementById('container-gameover')
const inputContainer = document.getElementById('container-input')
const choiceContainer = document.getElementById('container-choice')

// Bind Behaviours to DOM Elements
const updatePointsDisplay = bindPointsDisplayBehaviour(title, node, gameoverContainer)
const updateChoiceDisplay = bindChoiceDisplayBehaviour(choiceContainer)
const activateInputBehaviour = bindInputBehaviour(inputContainer)

// Game Logic
activateInputBehaviour(updatePointsDisplay, updateChoiceDisplay)