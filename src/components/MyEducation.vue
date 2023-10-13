<template>
	<section class="mb-10 md:mb-20">
		<h2 class="mb-5 font-playfair text-2xl text-brand-white md:text-3xl">
			{{ data.sectionTitle }}
		</h2>
		<div>
			<div v-for="(role, index) in data.education" :key="index" class="mb-5 md:mb-8">
				<div class="mb-2 md:mb-4">
					<h3 class="mb-2 font-playfair text-base leading-tight text-brand-teal md:text-xl">
						{{ role.title }}
					</h3>
					<h4 class="font-opensans text-xs uppercase text-brand-white md:text-sm">
						{{ role.location }}
					</h4>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	import data from "../data/education.json";
</script>
<style>
	.education__body p {
		margin-bottom: 10px;
	}
</style>
