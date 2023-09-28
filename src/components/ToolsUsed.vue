<template>
	<div class="mb-10 md:mb-12">
		<h2 class="mb-5 font-playfair text-2xl text-brand-white md:text-3xl">
			{{ data.sectionTitle }}
		</h2>
		<div>
			<div v-for="(set, index) in data.sets" :key="index" class="mb-5">
				<div class="mb-2">
					<h3 class="mb-2 font-playfair text-lg leading-tight text-brand-teal md:text-xl">
						{{ set.title }}
					</h3>
					<h4 class="font-opensans text-xs uppercase text-brand-white md:text-base">
						{{ set.tools }}
					</h4>
				</div>
				<div class="experience__body font-opensans text-sm leading-relaxed text-brand-grey md:text-base">
					<render-html :html="set.description" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import data from "../data/tools.json";

import RenderHtml from './RenderHtml.vue';

</script>
<style>
	.experience__body p {
		margin-bottom: 10px;
	}
</style>
