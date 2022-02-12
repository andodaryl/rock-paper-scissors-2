// Module for behaviour for input component

// Import dependencies
import {DEV_MODE} from "../module/constants"
import {getAiChoice} from "../module/ai"
import {playerWin, playerLose, isWinningChoice, getCurrentPoints,} from "../module/points"

// Export IIFE
export default (function() {
  
    const bindInputBehaviour = inputContainer => updatePointsDisplay => {

    const rockBtn = inputContainer.querySelector('[data-choice="ROCK"]')
    const paperBtn = inputContainer.querySelector('[data-choice="PAPER"]')
    const scissorsBtn = inputContainer.querySelector('[data-choice="SCISSORS"]')
    const btnList = [rockBtn, paperBtn, scissorsBtn]
    
    const inputBehaviour = () => {
      // Get choices
      const PLAYER = this.dataChoice.value // Get choice type
      const AI = getAiChoice() 
      // Update points
      isWinningChoice(PLAYER, AI) ? playerWin() : playerLose()
      // Update points display
      updatePointsDisplay(getCurrentPoints)
      if (DEV_MODE) console.log(playerChoice)
    }

    // Attach event listener
    btnList.forEach(btn => btn.onclick = () => inputBehaviour)

  } 

// For use in other modules
  return {
    bindInputBehaviour
  }
})()