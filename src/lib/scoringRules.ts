import type { Answers } from '@/stores/submission'
import { Q, type QKey } from '@/lib/questionMap'

const isYes = (answers: Answers, id?: QKey | null) => !!id && answers[id] === true
const anyYes = (answers: Answers, ids: (QKey | null | undefined)[]) =>
  ids.some((id) => !!id && answers[id] === true)

export function evaluateScreening(answers: Answers): {
  screenedIn: boolean
  reasons: string[]
} {
  const reasons: string[] = []

  // Sex – Rule 1: 1 + 1(a) + 2 + 10
  const sexRule1 =
    isYes(answers, Q.ONE) &&
    isYes(answers, Q.ONE_A) &&
    isYes(answers, Q.TWO) &&
    isYes(answers, Q.TEN)
  if (sexRule1) reasons.push('Sex Trafficking — Rule 1 (1 + 1(a) + 2 + 10)')

  // Sex – Rule 2: 1 + 1(b) + (8 or 9) + 10
  const sexRule2 =
    isYes(answers, Q.ONE) &&
    isYes(answers, Q.ONE_B) &&
    anyYes(answers, [Q.EIGHT, Q.NINE]) &&
    isYes(answers, Q.TEN)
  if (sexRule2) reasons.push('Sex Trafficking — Rule 2 (1 + 1(b) + (8 or 9) + 10)')

  // Labor – Rule 1: 3 + (8 or 9) + 10
  const laborRule1 =
    isYes(answers, Q.THREE) && anyYes(answers, [Q.EIGHT, Q.NINE]) && isYes(answers, Q.TEN)
  if (laborRule1) reasons.push('Labor Trafficking — Rule 1 (3 + (8 or 9) + 10)')

  // Labor – Rule 2: 4 + (8 or 9) + 10
  const laborRule2 =
    isYes(answers, Q.FOUR) && anyYes(answers, [Q.EIGHT, Q.NINE]) && isYes(answers, Q.TEN)
  if (laborRule2) reasons.push('Labor Trafficking — Rule 2 (4 + (8 or 9) + 10)')

  // Labor – Rule 3: 5 + (8 or 9) + 10
  const laborRule3 =
    isYes(answers, Q.FIVE) && anyYes(answers, [Q.EIGHT, Q.NINE]) && isYes(answers, Q.TEN)
  if (laborRule3) reasons.push('Labor Trafficking — Rule 3 (5 + (8 or 9) + 10)')

  // Labor – Rule 4: 6 + (8 or 9) + 10
  const laborRule4 =
    isYes(answers, Q.SIX) && anyYes(answers, [Q.EIGHT, Q.NINE]) && isYes(answers, Q.TEN)
  if (laborRule4) reasons.push('Labor Trafficking — Rule 4 (6 + (8 or 9) + 10)')

  // Labor – Rule 5: 7 + (8 or 9) + 10
  const laborRule5 =
    isYes(answers, Q.SEVEN) && anyYes(answers, [Q.EIGHT, Q.NINE]) && isYes(answers, Q.TEN)
  if (laborRule5) reasons.push('Labor Trafficking — Rule 5 (7 + (8 or 9) + 10)')

  return { screenedIn: reasons.length > 0, reasons }
}
