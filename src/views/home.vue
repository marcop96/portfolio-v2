<script setup lang="ts">
import NavBar from "../components/NavBar.vue";
import IntroSection from "../components/sections/IntroSection.vue";
import TheProjects from "../components/sections/TheProjects.vue";
import AboutMeSection from "../components/sections/AboutMeSection.vue";
</script>

<template>
  <div class="sm:min-w-100vh mx-auto">
    <NavBar id="navbar" class="m-4" />
    <main class="flex flex-col justify-center">
      <section id="info" class="mt-28"><IntroSection /></section>
      <section id="projects" class="flex justify-center">
        <TheProjects />
      </section>
      <section id="about" class="flex justify-center">
        <AboutMeSection />
      </section>
    </main>
  </div>
</template>

<style scoped>

main {
  min-height: 100vh;
  width: 80%;
  margin: auto;
  background-image: radial-gradient(#645f5f33 1px, transparent 10%);
  background-size: 40px 40px;
  background-color: #e9ecef;
width:100%


}

#navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}
</style>
