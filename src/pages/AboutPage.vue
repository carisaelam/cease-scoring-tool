<template>
  <div class="card">
    <div class="card-body">
      <h1 class="h4 mb-3">Scoring Tool</h1>

      <!-- CTA -->
      <div class="mb-4">
        <RouterLink to="/form" class="btn btn-primary"> Start Screening </RouterLink>
      </div>

      <!-- Accordion -->
      <div class="accordion" id="aboutAccordion">
        <!-- Legal Definitions -->
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingDefinitions">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseDefinitions"
              aria-expanded="true"
              aria-controls="collapseDefinitions"
            >
              Legal Definitions (Relevant Law)
            </button>
          </h2>
          <div
            id="collapseDefinitions"
            class="accordion-collapse collapse show"
            aria-labelledby="headingDefinitions"
            data-bs-parent="#aboutAccordion"
          >
            <div class="accordion-body">
              <ul>
                <li>
                  <strong>O.C.G.A. § 16-5-46(c)(8):</strong> Sexual servitude includes acts for
                  value induced by coercion/deception or by individuals under 18.
                </li>
                <li>
                  <strong>O.C.G.A. § 16-5-46(a)(3):</strong> Labor servitude defined as work of
                  economic value obtained by coercion or deception.
                </li>
                <li>
                  <strong>O.C.G.A. § 16-5-46(a)(1)(C)&(B):</strong> Coercion includes confiscation
                  of IDs or threats of immigration exposure.
                </li>
                <li>
                  <strong>O.C.G.A. § 16-5-46(a)(2)(B)&(C):</strong> Deception includes debt-bondage
                  or false promises of benefits.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Screen-in Logic -->
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingScreenIn">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseScreenIn"
              aria-expanded="false"
              aria-controls="collapseScreenIn"
            >
              Screen In Logic
            </button>
          </h2>
          <div
            id="collapseScreenIn"
            class="accordion-collapse collapse"
            aria-labelledby="headingScreenIn"
            data-bs-parent="#aboutAccordion"
          >
            <div class="accordion-body">
              <h6 class="fw-semibold">Sex Trafficking (O.C.G.A. § 16-5-46)</h6>
              <ul>
                <li>YES to 1, 1(a), 2, and 10 → strong indicator (sexual servitude under 18).</li>
                <li>
                  YES to 1, 1(b), 8/9, and 10 → strong indicator (sexual servitude via
                  coercion/deception).
                </li>
              </ul>

              <h6 class="fw-semibold mt-3">Labor Trafficking (O.C.G.A. § 16-5-46(a)(3))</h6>
              <ul>
                <li>YES to 3 + 8/9 + 10 → possible trafficking by deception or coercion.</li>
                <li>YES to 4 + 8/9 + 10 → possible trafficking by debt-bondage or coercion.</li>
                <li>
                  YES to 5 + 8/9 + 10 → possible trafficking by coercion or deception (false
                  promises).
                </li>
                <li>YES to 6 + 8/9 + 10 → possible trafficking by coercion (docs, threats).</li>
                <li>
                  YES to 7 + 8/9 + 10 → possible trafficking by coercion (passport/ID confiscation).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <p class="small text-muted mt-4 mb-0">
        This page is informational only and does not constitute legal advice.
      </p>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
