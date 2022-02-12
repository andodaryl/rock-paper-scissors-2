// Constant variables for all modules

// Export object
export default {
  DEV_MODE: true,
  ROCK: 'ROCK',
  PAPER: 'PAPER',
  SCISSORS: 'SCISSORS',
  MAX_WIN: 3,
  WIN: 'WIN',
  LOSE: 'LOSE',
  VERSUS: {
    ROCK: {SCISSORS: 'WIN'},
    SCISSORS: {PAPER: 'WIN'},
    PAPER: {ROCK: 'WIN'}
  }
}