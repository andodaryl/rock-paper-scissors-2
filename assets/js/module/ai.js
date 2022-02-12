// Module for AI choice

// Import dependencies
import {ROCK, PAPER, SCISSORS} from "./constants"

// Export IIFE
export default (function() {
  
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