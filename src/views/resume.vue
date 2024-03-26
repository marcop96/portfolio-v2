<script setup lang="ts">
import resume from "../assets/resume.pdf";
</script>

<template>
  <div class="h-screen">
    <embed :src="resume" type="application/pdf" width="100%" height="100%" />
  </div>
</template>
