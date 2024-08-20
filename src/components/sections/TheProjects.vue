<script setup lang="ts">
import CardComponent from "../CardComponent.vue";
import { projects } from "../../consts/Projects";
</script>

<template>
  <div class="flex flex-col pt-20">
    <h2 class="p-4 text-center text-3xl">My projects</h2>
    <main>
      <ul class="grid grid-cols-1 lg:grid-cols-2">
        <li class="mx-2" v-for="project in projects" :key="project.title">
          <!-- <CardComponent :project="project" class="h-80 w-96 rounded-sm" /> -->
          <CardComponent
            :project="project"
            class="my-2 h-72 w-72 sm:w-96 rounded-sm"
          />
        </li>
      </ul>
    </main>
  </div>
</template>
