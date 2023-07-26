<template>
	<div class="h-full min-h-screen w-full bg-brand-navy">
		<div class="container mx-auto max-w-[1000px] px-6 py-10 md:py-20 lg:px-0">
			<div class="mx-auto mb-8 max-w-[160px] md:mb-12 md:max-w-[200px] lg:mb-20 lg:max-w-[300px]">
				<KonxDev />
			</div>
			<!-- About -->
			<AboutMe />
			<!-- Experience -->
			<Experience />
			<!-- Tools & Tech -->
			<Tools />
			<!-- Education -->
			<Education />
			<!-- Contact -->
			<Contact />
		</div>
	</div>
</template>

<script setup>
	// Component Imports
	import AboutMe from "./components/AboutMe.vue";
	import Experience from "./components/Experience.vue";
	import Education from "./components/Education.vue";
	import Tools from "./components/Tools.vue";
	import Contact from "./components/Contact.vue";
	import KonxDev from "./components/Assets/KonxDev.vue";
</script>
