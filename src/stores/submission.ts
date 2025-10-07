import { defineStore } from 'pinia'

export type Demographics = {
  firstName: string
  lastName: string
  dob: string // we'll store as YYYY-MM-DD
  gdcNumber: string
}

export type Answers = Record<string, boolean | null> // q1..q10 keys

function basicScreeningRule(answers: Answers): boolean {
  // TEMP RULE: screen in if 7 or more YES answers
  const yesCount = Object.values(answers).filter((v) => v === true).length
  return yesCount >= 7
}

export const useSubmissionStore = defineStore('submission', {
  state: () => ({
    demographics: {
      firstName: '',
      lastName: '',
      dob: '',
      gdcNumber: '',
    } as Demographics,
    answers: {
      q1: null,
      q2: null,
      q3: null,
      q4: null,
      q5: null,
      q6: null,
      q7: null,
      q8: null,
      q9: null,
      q10: null,
    } as Answers,
    screenedIn: false,
  }),
  actions: {
    computeScreening() {
      this.screenedIn = basicScreeningRule(this.answers)
    },
    reset() {
      this.demographics = { firstName: '', lastName: '', dob: '', gdcNumber: '' }
      this.answers = {
        q1: null,
        q2: null,
        q3: null,
        q4: null,
        q5: null,
        q6: null,
        q7: null,
        q8: null,
        q9: null,
        q10: null,
      }
      this.screenedIn = false
    },
  },
})
