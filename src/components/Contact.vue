<template>
	<div class="mb-10">
		<h2 class="mb-5 text-center font-playfair text-2xl text-brand-white md:mb-8 md:text-3xl">Contact me</h2>
		<div class="mb-5 flex justify-center md:mb-8">
			<a class="rounded bg-brand-teal px-8 py-4 font-opensans text-brand-navy" href="mailto:hire@konx.dev"
				>hello@konx.dev</a
			>
		</div>
		<div class="flex justify-center gap-3">
			<a href="https://www.linkedin.com/in/oliverjamescox/" aria-label="linkedin" rel="nofollow" target="_blank">
				<font-awesome-icon
					class="text-xl text-brand-white hover:text-brand-teal md:text-2xl"
					:icon="['fab', 'linkedin']" />
			</a>
			<a href="https://github.com/konx-dev" aria-label="github" rel="nofollow" target="_blank">
				<font-awesome-icon
					class="text-xl text-brand-white hover:text-brand-teal md:text-2xl"
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
