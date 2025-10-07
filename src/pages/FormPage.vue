<template>
  <div class="card">
    <div class="card-body">
      <h1 class="h4 mb-3">Scoring Form</h1>

      <form>
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

        <!-- Questions -->
        <div class="question__container">
          <!-- Question 1 -->
          <div class="mb-3">
            <label class="form-label d-block">Question 1: Example text goes here?</label>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                :value="true"
                v-model="store.answers.q1"
                id="q1-yes"
              />
              <label class="form-check-label" for="q1-yes">Yes</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                :value="false"
                v-model="store.answers.q1"
                id="q1-no"
              />
              <label class="form-check-label" for="q1-no">No</label>
            </div>
          </div>
          <!-- Question 2 -->
          <div class="mb-3">
            <label class="form-label d-block">Question 2: Example text goes here?</label>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                :value="true"
                v-model="store.answers.q2"
                id="q2-yes"
              />
              <label class="form-check-label" for="q2-yes">Yes</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                :value="false"
                v-model="store.answers.q2"
                id="q2-no"
              />
              <label class="form-check-label" for="q2-no">No</label>
            </div>
          </div>
          <!-- Question 3 -->
          <div class="mb-3">
            <label class="form-label d-block">Question 3: Example text goes here?</label>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                :value="true"
                v-model="store.answers.q3"
                id="q3-yes"
              />
              <label class="form-check-label" for="q3-yes">Yes</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                :value="false"
                v-model="store.answers.q3"
                id="q3-no"
              />
              <label class="form-check-label" for="q3-no">No</label>
            </div>
          </div>
          <!-- Question 4 -->
          <div class="mb-3">
            <label class="form-label d-block">Question 4: Example text goes here?</label>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                :value="true"
                v-model="store.answers.q4"
                id="q4-yes"
              />
              <label class="form-check-label" for="q4-yes">Yes</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                :value="false"
                v-model="store.answers.q4"
                id="q4-no"
              />
              <label class="form-check-label" for="q4-no">No</label>
            </div>
          </div>
          <!-- Question 5 -->
          <div class="mb-3">
            <label class="form-label d-block">Question 5: Example text goes here?</label>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                :value="true"
                v-model="store.answers.q5"
                id="q5-yes"
              />
              <label class="form-check-label" for="q5-yes">Yes</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                :value="false"
                v-model="store.answers.q5"
                id="q5-no"
              />
              <label class="form-check-label" for="q5-no">No</label>
            </div>
          </div>
          <!-- Question 6 -->
          <div class="mb-3">
            <label class="form-label d-block">Question 6: Example text goes here?</label>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                :value="true"
                v-model="store.answers.q6"
                id="q6-yes"
              />
              <label class="form-check-label" for="q6-yes">Yes</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                :value="false"
                v-model="store.answers.q6"
                id="q6-no"
              />
              <label class="form-check-label" for="q6-no">No</label>
            </div>
          </div>
          <!-- Question 7 -->
          <div class="mb-3">
            <label class="form-label d-block">Question 7: Example text goes here?</label>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                :value="true"
                v-model="store.answers.q7"
                id="q7-yes"
              />
              <label class="form-check-label" for="q7-yes">Yes</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                :value="false"
                v-model="store.answers.q7"
                id="q7-no"
              />
              <label class="form-check-label" for="q7-no">No</label>
            </div>
          </div>
          <!-- Question 8 -->
          <div class="mb-3">
            <label class="form-label d-block">Question 8: Example text goes here?</label>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                :value="true"
                v-model="store.answers.q8"
                id="q8-yes"
              />
              <label class="form-check-label" for="q8-yes">Yes</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                :value="false"
                v-model="store.answers.q8"
                id="q8-no"
              />
              <label class="form-check-label" for="q8-no">No</label>
            </div>
          </div>
          <!-- Question 9 -->
          <div class="mb-3">
            <label class="form-label d-block">Question 9: Example text goes here?</label>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                :value="true"
                v-model="store.answers.q9"
                id="q9-yes"
              />
              <label class="form-check-label" for="q9-yes">Yes</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                :value="false"
                v-model="store.answers.q9"
                id="q9-no"
              />
              <label class="form-check-label" for="q9-no">No</label>
            </div>
          </div>
          <!-- Question 10 -->
          <div class="mb-3">
            <label class="form-label d-block">Question 10: Example text goes here?</label>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                :value="true"
                v-model="store.answers.q10"
                id="q10-yes"
              />
              <label class="form-check-label" for="q10-yes">Yes</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                :value="false"
                v-model="store.answers.q10"
                id="q10-no"
              />
              <label class="form-check-label" for="q10-no">No</label>
            </div>
          </div>
        </div>

        <!-- Submit -->
        <button type="button" class="btn btn-primary" @click="handleSubmit">Submit</button>
      </form>

      <pre class="mt-3 bg-light p-2">
        {{ store.demographics }}
        {{ store.answers }}
      </pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSubmissionStore } from '@/stores/submission'
import { useRouter } from 'vue-router'

const router = useRouter()

function handleSubmit() {
  store.computeScreening()
  router.push('/review')
}

const store = useSubmissionStore()
</script>
