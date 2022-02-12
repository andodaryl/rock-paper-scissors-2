// Constant variables for all modules

// Export object
export default {
  PLAYER: "PLAYER",
  AI: "AI",
  DEV_MODE: true,
  ROCK: "ROCK",
  PAPER: "PAPER",
  SCISSORS: "SCISSORS",
  MAX_WIN: 3,
  WIN: "WIN",
  LOSE: "LOSE",
  TIE: "TIE",
  VERSUS: {
      ROCK: { SCISSORS: "WIN", PAPER: "LOSE", ROCK: "TIE" },
      SCISSORS: { PAPER: "WIN", ROCK: "LOSE", SCISSORS: "TIE" },
      PAPER: { ROCK: "WIN", SCISSORS: "LOSE", PAPER: "TIE" },
  },
};