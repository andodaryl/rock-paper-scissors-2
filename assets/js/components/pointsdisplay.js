// Module for points display component

// Import dependencies
import constantsJS from "../module/constants.js";
import pointsJS from "../module/points.js";

// Export IIFE
export default (function () {
    // Get exports
    const { MAX_WIN } = constantsJS;
    const { isGameOver } = pointsJS;

    const bindPointsDisplayBehaviour = (title, node, gameoverContainer) => (currentPoints) => {
        // Safe data
        const safePoints = currentPoints || {};
        const PLAYER = safePoints.PLAYER || 0;
        const AI = safePoints.AI || 0;
        // Display logic
        if (PLAYER >= MAX_WIN) {
            // Celebrate player win
            title.innerText = `YOU WIN - Rock Paper Scissors`;
            node.innerText = `YOU WIN`;
        } else if (AI >= MAX_WIN) {
            // Celebrate ai win
            title.innerText = `AI WINS - Rock Paper Scissors`;
            node.innerText = `AI WINS`;
        } else {
            title.innerText = `${PLAYER}:${AI} - Rock Paper Scissors`; // Update Title
            node.innerText = `${PLAYER}:${AI}`; // Update Score Node
        }
        // Show restart button
        if (isGameOver()) gameoverContainer.classList.remove("visually-hidden");
    };
    // API
    return {
        bindPointsDisplayBehaviour,
    };
})();