<template>
  <div class="mb-10 md:mb-20">
    <h2 class="text-brand-white font-playfair text-2xl md:text-3xl mb-5">
      {{ data.sectionTitle }}
    </h2>
    <div>
      <div
        class="mb-5 md:mb-8"
        v-for="(role, index) in data.education"
        :key="index"
      >
        <div class="mb-2 md:mb-4">
          <h3
            class="font-playfair text-brand-teal text-base md:text-xl leading-tight mb-2"
          >
            {{ role.title }}
          </h3>
          <h4
            class="font-opensans text-brand-white text-xs md:text-sm uppercase"
          >
            {{ role.location }}
          </h4>
        </div>

        <div
          class="experience__body font-opensans text-brand-grey text-sm leading-relaxed"
          v-html="role.description"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import data from "../data/education.json";
</script>
<style>
.education__body p {
  margin-bottom: 10px;
}
</style>
