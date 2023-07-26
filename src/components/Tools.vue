<template>
  <div class="mb-10 md:mb-12">
    <h2 class="text-brand-white font-playfair text-2xl md:text-3xl mb-5">
      {{ data.sectionTitle }}
    </h2>
    <div>
      <div class="mb-5" v-for="(set, index) in data.sets" :key="index">
        <div class="mb-2">
          <h3
            class="font-playfair text-brand-teal text-lg md:text-xl leading-tight mb-2"
          >
            {{ set.title }}
          </h3>
          <h4
            class="font-opensans text-brand-white text-xs md:text-base uppercase"
          >
            {{ set.tools }}
          </h4>
        </div>

        <div
          class="experience__body font-opensans text-brand-grey text-sm md:text-base leading-relaxed"
          v-html="set.description"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import data from "../data/tools.json";
</script>
<style>
.experience__body p {
  margin-bottom: 10px;
}
</style>
