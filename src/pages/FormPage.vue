<template>
  <div class="card">
    <div class="card-body">
      <h1 class="h4 mb-3">Scoring Form</h1>

      <!-- Alert block -->
      <div v-if="errorMsg" class="alert alert-danger d-flex align-items-center gap-2" role="alert">
        <i class="bi bi-exclamation-triangle"></i>
        {{ errorMsg }}
      </div>

      <!-- Form -->
      <form>
        <!-- DEMOGRAPHICS -->
        <div class="demographics__form__container">
          <!-- First Name -->
          <div class="mb-3">
            <label for="firstName" class="form-label">Legal First Name</label>
            <input
              v-model="store.demographics.firstName"
              type="text"
              id="firstName"
              class="form-control"
            />
          </div>
          <!-- Last Name -->
          <div class="mb-3">
            <label for="lastName" class="form-label">Legal Last Name</label>
            <input
              v-model="store.demographics.lastName"
              type="text"
              id="lastName"
              class="form-control"
            />
          </div>
          <!-- Date of Birth -->
          <div class="mb-3">
            <label for="dob" class="form-label">Date of Birth</label>
            <input v-model="store.demographics.dob" type="date" id="dob" class="form-control" />
          </div>
          <!-- GDC Inmate Number -->
          <div class="mb-3">
            <label for="gdcNumber" class="form-label">GDC Inmate Number</label>
            <input
              v-model="store.demographics.gdcNumber"
              type="text"
              id="gdcNumber"
              class="form-control"
              inputmode="numeric"
              autocomplete="off"
            />
          </div>
        </div>

        <!-- QUESTIONS -->
        <div class="questions__form__container">
          <!-- Question loop -->
          <div v-for="question in QUESTIONS" v-bind:key="question.id">
            <fieldset class="mb-5">
              <legend class="form-label d-block mb-2">
                {{ question.id }}: {{ question.text }}
              </legend>

              <div class="btn-group" :aria-label="question.text">
                <input
                  type="radio"
                  class="btn-check"
                  :name="question.id"
                  :id="question.id + '-yes'"
                  :value="true"
                  v-model="store.answers[question.id]"
                />
                <label class="btn btn-outline-success" :for="question.id + '-yes'">Yes</label>

                <input
                  type="radio"
                  class="btn-check"
                  :name="question.id"
                  :id="question.id + '-no'"
                  :value="false"
                  v-model="store.answers[question.id]"
                />
                <label class="btn btn-outline-danger" :for="question.id + '-no'">No</label>
              </div>
            </fieldset>
          </div>
        </div>

        <!-- Submit -->
        <button type="button" class="btn btn-primary" @click="handleSubmit">Submit</button>
      </form>

      <pre class="mt-3 bg-light p-2">
        <span class="fw-bold fs-5 text-info">Screened in: {{ evaluateScreening(store.answers).screenedIn }}</span>
        Reasons: {{ evaluateScreening(store.answers).reasons }}
      </pre>

      <pre class="mt-3 bg-light p-2">
        {{ store.demographics }}
        {{ store.answers }}
      </pre>
      <pre class="mt-2 bg-light p-2">
        {{
          {
            one: store.answers[Q.ONE],
            one_b: store.answers[Q.ONE_B],
            eight: store.answers[Q.EIGHT],
            nine: store.answers[Q.NINE],
            ten: store.answers[Q.TEN],
          }
        }}
</pre
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSubmissionStore } from '@/stores/submission'
import { useRouter } from 'vue-router'
import { QUESTIONS } from '@/lib/questions.ts'
import { Q } from '@/lib/questionMap'

import { ref } from 'vue'
import { evaluateScreening } from '@/lib/scoringRules'
const router = useRouter()

const errorMsg = ref<string | null>(null)

function isComplete() {
  const d = store.demographics
  const allDemoFilled = d.firstName && d.lastName && d.dob && d.gdcNumber
  const allQsAnswered = Object.values(store.answers).every((v) => v === true || v === false)
  return allDemoFilled && allQsAnswered
}

function handleSubmit() {
  if (!isComplete()) {
    errorMsg.value = 'Please complete all demographics fields and answer all 10 questions.'
    return
  }
  errorMsg.value = null
  store.computeScreening()
  router.push('/review')
}

const store = useSubmissionStore()
</script>
