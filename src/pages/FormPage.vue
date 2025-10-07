<script setup lang="ts">
import { useSubmissionStore } from '@/stores/submission'

const store = useSubmissionStore()
</script>

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
      </form>

      <pre class="mt-3 bg-light p-2">
        {{ store.demographics }}
      </pre>
    </div>
  </div>
</template>
