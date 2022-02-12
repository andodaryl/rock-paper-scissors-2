// Module for points display component

// Import dependencies
import constantsJS from "../module/constants.js";
import pointsJS from "../module/points.js";

// Export IIFE
export default (function () {
    // Get exports
    const { PLAYER, AI } = constantsJS;
    const { isGameOver } = pointsJS;

    const bindChoiceDisplayBehaviour = (choiceContainer) => (playerChoice, aiChoice) => {
        // Main behaviour
        const showChoice = (owner, choice) => {
            // Get element nodes
            const ownerAttribute = `[data-choice="${owner}"]`;
            const playerChoiceContainer = choiceContainer.querySelector(ownerAttribute);
            const rockNode = playerChoiceContainer.querySelector('[data-choice="ROCK"]');
            const paperNode = playerChoiceContainer.querySelector('[data-choice="PAPER"]');
            const scissorsNode = playerChoiceContainer.querySelector('[data-choice="SCISSORS"]');
            const choiceAttribute = `[data-choice="${choice}"]`;
            const choiceNode = playerChoiceContainer.querySelector(choiceAttribute);

            // Hide all nodes
            rockNode.classList.add("visually-hidden");
            paperNode.classList.add("visually-hidden");
            scissorsNode.classList.add("visually-hidden");

            // Display chosen node
            choiceNode.classList.remove("visually-hidden");
        };
        // Activate behaviour
        const gameIsNotOver = !isGameOver();
        if (gameIsNotOver) {
            showChoice(PLAYER, playerChoice);
            showChoice(AI, aiChoice);
        }
    };
    // API
    return {
        bindChoiceDisplayBehaviour,
    };
})();