// Module to keep track of points

// Import dependencies
import constantsJS from "./constants.js"

// Export IIFE
export default (function() {
  // Get exports
  const {DEV_MODE, VERSUS, WIN, LOSE, TIE, MAX_WIN} = constantsJS

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
  // Check if max points reached
  const isGameOver = () => currentPoints.PLAYER >= MAX_WIN || currentPoints.AI >= MAX_WIN
  // Increase player points until max win
  const playerWin = () =>  isGameOver() ? 'MAX REACHED' : ++currentPoints.PLAYER
  // Increase ai points until max win
  const playerLose = () =>  isGameOver() ? 'MAX REACHED' : ++currentPoints.AI

  // Read only data
  const getCurrentPoints = () => ({PLAYER: currentPoints.PLAYER, AI: currentPoints.AI})

  // Check if player choice is sucessful
  const isWinningChoice = (PLAYER, AI) => {
    const result = VERSUS[PLAYER][AI]
    switch(result) {
      case WIN:
        return true
      case LOSE:
        return false
      case TIE:
        return TIE
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
    isGameOver
  }
})()