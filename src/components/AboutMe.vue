<template>
	<section class="mb-10 md:mb-12">
		<h2 class="mb-2 font-playfair text-2xl text-brand-white md:text-3xl">
			{{ data.sectionTitle }}
		</h2>
		<div class="about__body font-opensans text-sm leading-relaxed text-brand-grey md:text-base">
			<render-html :html="data.description" />
		</div>
		<div>
			<div class="font-opensans text-sm leading-relaxed text-brand-grey md:text-base">
				<render-html :html="data.skills.skillsTitle" />
			</div>
			<div class="my-4 flex max-w-[700px] flex-row flex-wrap">
				<div v-for="(item, index) in data.skills.skillsArray" :key="index" class="my-1 min-w-[160px]">
					<span class="mr-1 text-brand-teal">•</span
					><span class="font-opensans text-sm text-brand-grey md:text-base">{{ item }}</span>
				</div>
			</div>
		</div>
		<div class="about__body font-opensans text-sm leading-relaxed text-brand-grey md:text-base">
			<render-html :html="data.personal" />
		</div>
	</section>
</template>

<script setup>
	import RenderHtml from "./RenderHtml.vue";
	import data from "../data/about.json";
</script>
<style>
	.about__body p {
		margin-bottom: 10px;
	}

	.about__body a {
		color: #5be8c9;
	}
</style>
