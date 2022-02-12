// Module for points display component

// Import dependencies
import {MAX_WIN} from "../module/constants"

// Export IIFE
export default (function() {
  const bindPointsDisplayBehaviour = (title, node) => (currentPoints) => {
    // Safe data
    const safePoints = currentPoints || {}
    const PLAYER = safePoints.PLAYER || 0
    const AI = safePoints.AI || 0
    // Display logic
    if (PLAYER >= MAX_WIN) {
      // Celebrate player win
      title.innerText = `YOU WIN - Rock Paper Scissors`
      node.innerText = `YOU WIN`
    } else if (PLAYER >= MAX_WIN) {
      // Celebrate ai win
      title.innerText = `AI WINS - Rock Paper Scissors`
      node.innerText = `AI WINS`
    } else {
      title.innerText = `${PLAYER}:${AI} - Rock Paper Scissors` // Update Title
      node.innerText = `${PLAYER}:${AI}` // Update Score Node
    }
  }
  // API
  return {
    bindPointsDisplayBehaviour
  }
})()