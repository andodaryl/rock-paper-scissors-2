// Module for points display component

// Import dependencies

// Export IIFE
export default (function() {
  const bindPointsDisplayBehaviour = (title, node) => (currentPoints) => {
    // Safe data
    const safePoints = currentPoints || {}
    const PLAYER = safePoints.PLAYER || 0
    const AI = safePoints.AI || 0
    // Display logic
    title.innerText = `${PLAYER}:${AI} - Rock Paper Scissors` // Update Title
    node.innerText = `${PLAYER}:${AI}` // Update Score Node
  }
  // API
  return {
    bindPointsDisplayBehaviour
  }
})()