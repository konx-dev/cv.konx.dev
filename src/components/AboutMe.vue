<template>
  <div class="mb-10 md:mb-12">
    <h2 class="text-brand-white font-playfair text-2xl md:text-3xl mb-2">{{ data.sectionTitle }}</h2>
    <div class="about__body text-brand-grey text-sm md:text-base leading-relaxed font-opensans" v-html="data.description" />
    <div>
      <div class="text-brand-grey text-sm md:text-base leading-relaxed font-opensans" v-html="data.skills.skillsTitle" />
      <div class="flex flex-row flex-wrap my-4 max-w-[700px]">
        <div class="min-w-[160px] my-1" v-for="(item,index) in data.skills.skillsArray" :key="index">
          <span class="text-brand-teal mr-1">•</span><span class="text-sm md:text-base font-opensans text-brand-grey">{{ item }}</span>
        </div>
      </div>
    </div>
    <div class="about__body text-brand-grey text-sm md:text-base leading-relaxed font-opensans" v-html="data.personal" />
  </div>
</template>

<script setup>
import data from '../data/about.json'



</script>
<style>
.about__body p {
  margin-bottom: 10px;
}

.about__body a {
  color: #5BE8C9;
}
</style>
  