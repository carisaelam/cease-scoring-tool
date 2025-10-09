// Map the legal shorthand from the About page to your actual question IDs.
// 👉 Replace every 'q?' string with your real IDs from QUESTIONS.

export const Q = {
  // Sex trafficking references
  ONE: '1', // 1
  ONE_A: '1a', // 1(a)
  ONE_B: '1b', // 1(b)
  TWO: '2', // 2
  EIGHT: '8', // 8 (coercion indicators)
  NINE: '9', // 9 (deception indicators)
  TEN: '10', // 10

  // Labor trafficking references
  THREE: '3', // 3
  FOUR: '4', // 4 (debt-bondage)
  FIVE: '5', // 5 (pressure/force/manipulation)
  SIX: '6', // 6 (false/purported documents)
  SEVEN: '7', // 7 (passport/ID confiscation)
} as const

export type QKey = (typeof Q)[keyof typeof Q]
