// Module for AI choice

// Import dependencies
import constantsJS from "./constants.js"

// Export IIFE
export default (function() {
  // Get exports
  const {ROCK, PAPER, SCISSORS} = constantsJS

  // Mai behaviour
  const getAiChoice = () => {
    const outcomes = [ROCK, PAPER, SCISSORS]
    const randomChoice = Math.floor(Math.random() * outcomes.length)
    return outcomes[randomChoice] 
  }

// For use in other modules
  return {
    getAiChoice
  }
})()