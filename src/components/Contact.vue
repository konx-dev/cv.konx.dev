<template>
	<div class="mb-10">
		<h2 class="text-brand-white text-center font-playfair text-2xl md:text-3xl mb-5 md:mb-8">Contact me</h2>
		<div class="flex justify-center mb-5 md:mb-8">
			<a class="bg-brand-teal text-brand-navy font-opensans py-4 px-8 rounded" href="mailto:hire@konx.dev"
				>hello@konx.dev</a
			>
		</div>
		<div class="flex justify-center gap-3">
			<a href="https://www.linkedin.com/in/oliverjamescox/" aria-label="linkedin" rel="nofollow" target="_blank">
				<font-awesome-icon
					class="text-xl md:text-2xl text-brand-white hover:text-brand-teal"
					:icon="['fab', 'linkedin']" />
			</a>
			<a href="https://github.com/konx-dev" aria-label="github" rel="nofollow" target="_blank">
				<font-awesome-icon
					class="text-xl md:text-2xl text-brand-white hover:text-brand-teal"
					:icon="['fab', 'github']" />
			</a>
		</div>
	</div>
</template>

<script setup>
	import data from "../data/experience.json";
</script>
<style>
	.experience__body p {
		margin-bottom: 10px;
	}
</style>
