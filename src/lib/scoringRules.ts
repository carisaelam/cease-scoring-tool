import type { Answers } from '@/stores/submission'
import { Q, type QKey } from '@/lib/questionMap'

const isYes = (answers: Answers, id?: QKey | null) => !!id && answers[id] === true
const anyYes = (answers: Answers, ids: (QKey | null | undefined)[]) =>
  ids.some((id) => !!id && answers[id] === true)

// Return true if the person is "screened in"
export function evaluateScreening(answers: Answers): boolean {
  // Sex Trafficking — Rule 1:
  // YES to 1, YES to 1(a), YES to 2, YES to 10
  const sexRule1 =
    isYes(answers, Q.ONE) &&
    isYes(answers, Q.ONE_A) &&
    isYes(answers, Q.TWO) &&
    isYes(answers, Q.TEN)

  // Sex Trafficking — Rule 2:
  // YES to 1, YES to 1(b), YES to (8 OR 9), YES to 10
  const sexRule2 =
    isYes(answers, Q.ONE) &&
    isYes(answers, Q.ONE_B) &&
    anyYes(answers, [Q.EIGHT, Q.NINE]) &&
    isYes(answers, Q.TEN)

  return sexRule1 || sexRule2
}
