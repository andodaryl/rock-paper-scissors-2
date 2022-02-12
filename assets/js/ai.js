// Module for AI choice

// Import dependencies
import {ROCK, PAPER, SCISSORS} from "./constants"

export default (function() {
  const getAiChoice = () => {
    const outcomes = [ROCK, PAPER, SCISSORS]
    const randomChoice = Math.floor(Math.random() * outcomes.length)
    return outcomes[randomChoice] 
  }
  return {
    getAiChoice
  }
})()