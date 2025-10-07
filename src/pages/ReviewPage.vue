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
        <div class="col" v-for="n in 10" :key="n">
          <div class="d-flex justify-content-between border rounded p-2">
            <span>Question {{ n }}</span>
            <span class="fw-semibold">
              {{ answers['q' + n] === true ? 'Yes' : answers['q' + n] === false ? 'No' : '—' }}
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

const store = useSubmissionStore()
const { demographics, answers, screenedIn } = storeToRefs(store)
</script>
