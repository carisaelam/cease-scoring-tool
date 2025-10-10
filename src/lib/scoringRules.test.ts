import { describe, it, expect } from 'vitest'
import { evaluateScreening } from '@/lib/scoringRules'
import { QUESTIONS } from '@/lib/questions'
import type { Answers } from '@/stores/submission'

// helper: build a full Answers object with all questions = false
function makeAnswers(): Answers {
  const base = Object.fromEntries(QUESTIONS.map((q) => [q.id, false]))
  return base as Answers
}

describe('screening rules', () => {
  it('screens in for Sex Trafficking — Rule 1 (1 + 1(a) + 2 + 10)', () => {
    const a = makeAnswers()

    // set up answers to screen in
    a['1'] = true
    a['1a'] = true
    a['2'] = true
    a['10'] = true

    const { screenedIn, reasons } = evaluateScreening(a)
    expect(screenedIn).toBe(true)
    expect(reasons.some((r) => r.includes('Sex Trafficking — Rule 1'))).toBe(true)
  })

  it('screens in for Sex Trafficking — Rule 2: 1 + 1(b) + 8 + 10', () => {
    const a = makeAnswers()

    // set up answers to screen in
    a['1'] = true
    a['1b'] = true
    a['8'] = true
    a['10'] = true

    const { screenedIn, reasons } = evaluateScreening(a)
    expect(screenedIn).toBe(true)
    expect(reasons.some((r) => r.includes('Sex Trafficking — Rule 2'))).toBe(true)
  })

  it('screens in for Sex Trafficking — Rule 2: 1 + 1(b) + 9 + 10', () => {
    const a = makeAnswers()

    // set up answers to screen in
    a['1'] = true
    a['1b'] = true
    a['9'] = true
    a['10'] = true

    const { screenedIn, reasons } = evaluateScreening(a)
    expect(screenedIn).toBe(true)
    expect(reasons.some((r) => r.includes('Sex Trafficking — Rule 2'))).toBe(true)
  })

  it('screens in for Sex Trafficking — Rule 2: 1 + 1(b) + (8 AND 9) + 10', () => {
    const a = makeAnswers()

    // set up answers to screen in
    a['1'] = true
    a['1b'] = true
    a['8'] = true
    a['9'] = true
    a['10'] = true

    const { screenedIn, reasons } = evaluateScreening(a)
    expect(screenedIn).toBe(true)
    expect(reasons.some((r) => r.includes('Sex Trafficking — Rule 2'))).toBe(true)
  })

  it('screens in for Labor Trafficking – Rule 1: 3 + 8 + 10', () => {
    const a = makeAnswers()

    // set up answers to screen in
    a['3'] = true
    a['8'] = true
    a['10'] = true

    const { screenedIn, reasons } = evaluateScreening(a)
    expect(screenedIn).toBe(true)
    expect(reasons.some((r) => r.includes('Labor Trafficking — Rule 1'))).toBe(true)
  })

  it('screens in for Labor Trafficking – Rule 1: 3 + 9 + 10', () => {
    const a = makeAnswers()

    // set up answers to screen in
    a['3'] = true
    a['9'] = true
    a['10'] = true

    const { screenedIn, reasons } = evaluateScreening(a)
    expect(screenedIn).toBe(true)
    expect(reasons.some((r) => r.includes('Labor Trafficking — Rule 1'))).toBe(true)
  })

  it('screens in for Labor Trafficking – Rule 1: 3 + (8 AND 9) + 10', () => {
    const a = makeAnswers()

    // set up answers to screen in
    a['3'] = true
    a['8'] = true
    a['9'] = true
    a['10'] = true

    const { screenedIn, reasons } = evaluateScreening(a)
    expect(screenedIn).toBe(true)
    expect(reasons.some((r) => r.includes('Labor Trafficking — Rule 1'))).toBe(true)
  })

  it('screens in for Labor Trafficking – Rule 2: 4 + 8 + 10', () => {
    const a = makeAnswers()

    // set up answers to screen in
    a['4'] = true
    a['8'] = true
    a['10'] = true

    const { screenedIn, reasons } = evaluateScreening(a)
    expect(screenedIn).toBe(true)
    expect(reasons.some((r) => r.includes('Labor Trafficking — Rule 2'))).toBe(true)
  })

  it('screens in for Labor Trafficking – Rule 2: 4 + 9 + 10', () => {
    const a = makeAnswers()

    // set up answers to screen in
    a['4'] = true
    a['9'] = true
    a['10'] = true

    const { screenedIn, reasons } = evaluateScreening(a)
    expect(screenedIn).toBe(true)
    expect(reasons.some((r) => r.includes('Labor Trafficking — Rule 2'))).toBe(true)
  })

  it('screens in for Labor Trafficking – Rule 3: 5 + 8 + 10', () => {
    const a = makeAnswers()

    // set up answers to screen in
    a['5'] = true
    a['8'] = true
    a['10'] = true

    const { screenedIn, reasons } = evaluateScreening(a)
    expect(screenedIn).toBe(true)
    expect(reasons.some((r) => r.includes('Labor Trafficking — Rule 3'))).toBe(true)
  })

  it('screens in for Labor Trafficking – Rule 3: 5 + 9 + 10', () => {
    const a = makeAnswers()

    // set up answers to screen in
    a['5'] = true
    a['9'] = true
    a['10'] = true

    const { screenedIn, reasons } = evaluateScreening(a)
    expect(screenedIn).toBe(true)
    expect(reasons.some((r) => r.includes('Labor Trafficking — Rule 3'))).toBe(true)
  })

  it('screens in for Labor Trafficking – Rule 4: 6 + 8 + 10', () => {
    const a = makeAnswers()

    // set up answers to screen in
    a['6'] = true
    a['8'] = true
    a['10'] = true

    const { screenedIn, reasons } = evaluateScreening(a)
    expect(screenedIn).toBe(true)
    expect(reasons.some((r) => r.includes('Labor Trafficking — Rule 4'))).toBe(true)
  })

  it('screens in for Labor Trafficking – Rule 4: 6 + 9 + 10', () => {
    const a = makeAnswers()

    // set up answers to screen in
    a['6'] = true
    a['9'] = true
    a['10'] = true

    const { screenedIn, reasons } = evaluateScreening(a)
    expect(screenedIn).toBe(true)
    expect(reasons.some((r) => r.includes('Labor Trafficking — Rule 4'))).toBe(true)
  })

  it('screens in for Labor Trafficking – Rule 5: 7 + 8 + 10', () => {
    const a = makeAnswers()

    // set up answers to screen in
    a['7'] = true
    a['8'] = true
    a['10'] = true

    const { screenedIn, reasons } = evaluateScreening(a)
    expect(screenedIn).toBe(true)
    expect(reasons.some((r) => r.includes('Labor Trafficking — Rule 5'))).toBe(true)
  })

  it('screens in for Labor Trafficking – Rule 5: 7 + 9 + 10', () => {
    const a = makeAnswers()

    // set up answers to screen in
    a['7'] = true
    a['9'] = true
    a['10'] = true

    const { screenedIn, reasons } = evaluateScreening(a)
    expect(screenedIn).toBe(true)
    expect(reasons.some((r) => r.includes('Labor Trafficking — Rule 5'))).toBe(true)
  })
})
