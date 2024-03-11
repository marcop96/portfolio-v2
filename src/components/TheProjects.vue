<script setup lang="ts">
import { ref } from "vue";

import { projects } from "../consts/Projects";
</script>

<template>
  <li v-for="project in projects" :key="project.title">
    <h2>{{ project.title }}</h2>
    <p>{{ project.description }}</p>
  </li>
</template>
