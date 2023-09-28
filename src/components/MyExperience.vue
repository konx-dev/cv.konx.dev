<template>
	<div class="mb-10 md:mb-12">
		<h2 class="mb-5 font-playfair text-2xl text-brand-white md:text-3xl">
			{{ data.sectionTitle }}
		</h2>
		<div>
			<div v-for="(role, index) in data.roles" :key="index" class="mb-5 md:mb-8">
				<div class="mb-2 md:mb-4">
					<h3 class="mb-2 font-playfair text-lg leading-tight text-brand-teal md:text-xl">
						{{ role.title }},
						{{ role.company }}
					</h3>
					<h4 class="font-opensans text-xs uppercase text-brand-white md:text-sm">
						{{ role.date }}
					</h4>
				</div>
				<div class="experience__body font-opensans text-sm leading-relaxed text-brand-grey md:text-base">
					<render-html :html="role.description" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import RenderHtml from './RenderHtml.vue';
import data from "../data/experience.json";
</script>
<style>
	.experience__body p {
		margin-bottom: 10px;
	}
</style>
