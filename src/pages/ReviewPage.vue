<template>
  <div class="card">
    <div class="card-body">
      <h1 class="h4 mb-3">Review Submission</h1>

      <div class="mb-3">
        <span class="badge" :class="screenedIn ? 'bg-success' : 'bg-danger'">
          {{ screenedIn ? 'Screened In' : 'Screened Out' }}
        </span>
      </div>

      <h2 class="h5">Demographics</h2>
      <ul class="list-unstyled mb-4">
        <li><strong>First:</strong> {{ demographics.firstName }}</li>
        <li><strong>Last:</strong> {{ demographics.lastName }}</li>
        <li><strong>DOB:</strong> {{ demographics.dob }}</li>
        <li><strong>GDC #:</strong> {{ demographics.gdcNumber }}</li>
      </ul>

      <h2 class="h5">Answers</h2>
      <div class="row row-cols-1 row-cols-md-2 g-2">
        <div class="col" v-for="q in QUESTIONS" :key="q.id">
          <div class="d-flex justify-content-between align-items-start border rounded p-2">
            <span class="me-2">{{ q.text }}</span>
            <span
              class="badge"
              :class="
                answers[q.id] === true
                  ? 'bg-success'
                  : answers[q.id] === false
                    ? 'bg-danger'
                    : 'bg-secondary'
              "
            >
              {{ answers[q.id] === true ? 'Yes' : answers[q.id] === false ? 'No' : '—' }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSubmissionStore } from '@/stores/submission'
import { QUESTIONS } from '@/lib/questions'

const store = useSubmissionStore()
const { demographics, answers, screenedIn } = storeToRefs(store)
</script>
