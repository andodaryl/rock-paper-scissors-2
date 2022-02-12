// Module to keep track of points

// Import dependencies
import {DEV_MODE, VERSUS, WIN, LOSE} from "./constants"

// Export IIFE
export default (function() {

  const Data = {
    AI: 0,
    PLAYER: 0,
  }

  const playerWin = () => ++Data.PLAYER // Increase player points
  const playerLose = () => ++Data.AI // Increase ai points

  // Check if player choice is sucessful
  const isWinningChoice = input => {
    result = VERSUS[input]
    switch(result) {
      case WIN:
        return true
      case LOSE:
        return false
      default:
        if (DEV_MODE) console.error('Invalid input') // Error check
    }
  }

  // For use in other modules
  return {
    playerWin,
    playerLose,
    isWinningChoice
  }
})()