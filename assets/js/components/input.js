// Module for behaviour for input component

// Import dependencies
import constantsJS from "../module/constants.js"
import aiJS from "../module/ai.js"
import pointsJS from "../module/points.js"

// Export IIFE
export default (function() {
    // Get exports
    const {ROCK, PAPER, SCISSORS, TIE} = constantsJS
    const {getAiChoice} = aiJS
    const {playerWin, playerLose, isWinningChoice, getCurrentPoints} = pointsJS

    // Main Behaviors
    const bindInputBehaviour = inputContainer => (updatePointsDisplay, updateChoiceDisplay) => {
      const rockBtn = inputContainer.querySelector('[data-choice="ROCK"]')
      const paperBtn = inputContainer.querySelector('[data-choice="PAPER"]')
      const scissorsBtn = inputContainer.querySelector('[data-choice="SCISSORS"]')
          
      const inputBehaviour = choice => {
        // Get choices
        const PLAYER = choice // Get choice type
        const AI = getAiChoice() 
        // Update points
        updateChoiceDisplay(PLAYER, AI)
        if (isWinningChoice(PLAYER, AI) !== TIE) isWinningChoice(PLAYER, AI) ? playerWin() : playerLose()
        // Update points display
        updatePointsDisplay(getCurrentPoints())
      }
      
      // Attach event listener
      rockBtn.addEventListener('click', () => inputBehaviour(ROCK))
      paperBtn.addEventListener('click', () => inputBehaviour(PAPER))
      scissorsBtn.addEventListener('click', () => inputBehaviour(SCISSORS))

  } 

// For use in other modules
  return {
    bindInputBehaviour
  }
})()