import { defineStore } from 'pinia'
import { QUESTIONS } from '@/lib/questions' // 👈 add

export type Demographics = {
  firstName: string
  lastName: string
  dob: string
  gdcNumber: string
}

// derive the keys from QUESTIONS so q1..q10 stay in sync with your loop
type AnswerId = (typeof QUESTIONS)[number]['id']
export type Answers = Record<AnswerId, boolean | null>

// small helper to build an answers object like { q1:null, ... }
const initAnswers = (): Answers => Object.fromEntries(QUESTIONS.map((q) => [q.id, null])) as Answers

function basicScreeningRule(answers: Answers): boolean {
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
    answers: initAnswers(), // 👈 use helper
    screenedIn: false,
  }),
  actions: {
    computeScreening() {
      this.screenedIn = basicScreeningRule(this.answers)
    },
    reset() {
      this.demographics = { firstName: '', lastName: '', dob: '', gdcNumber: '' }
      this.answers = initAnswers() // 👈 keep in sync with QUESTIONS
      this.screenedIn = false
    },
  },
})
