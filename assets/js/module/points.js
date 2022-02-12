// Module to keep track of points

// Import dependencies
import {DEV_MODE, VERSUS, WIN, LOSE} from "./constants"

// Export IIFE
export default (function() {

  // Data Integrity Check
  const isPoints = input => !!parseInt(input) // Check if int & convert truthy to boolean

  // Classes
  class Data {
    #_Points = {
      AI: 0,
      PLAYER: 0
    }
    constructor(pointsObj) {
      // Initial input
      const safeObj = pointsObj || {}
      const AI = safeObj.AI
      const PLAYER = safeObj.PLAYER
      // Sanitize input i.e. use default if unsafe
      const SAFE_AI = isPoints(AI) ? AI : this.#_Points.AI 
      const SAFE_PLAYER = isPoints(PLAYER) ? PLAYER : this.#_Points.PLAYER 
      // Use safe inputs
      this.AI = SAFE_AI
      this.PLAYER = SAFE_PLAYER
    }
    // Getters & setters with error checking
    get AI() {
      return this.#_Points.AI
    }
    set AI(input) {
      // Only update if safe input
      if (isPoints(input)) this.#_Points.AI = input
    }
    get PLAYER(){
      return this.#_Points.PLAYER
    }
    set PLAYER(input) {
      // Only update if safe input
      if (isPoints(input)) this.#_Points.PLAYER = input
    }
  }

  // Data
  const currentPoints = new Data()

  // Points logic
  const playerWin = () => ++currentPoints.PLAYER // Increase player points
  const playerLose = () => ++currentPoints.AI // Increase ai points

  // Read only data
  const getCurrentPoints = () => ({...currentPoints})

  // Check if player choice is sucessful
  const isWinningChoice = (PLAYER, AI) => {
    result = VERSUS[PLAYER][AI]
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
    isWinningChoice,
    getCurrentPoints,
  }
})()