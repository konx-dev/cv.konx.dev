<template>
	<div class="bg-brand-navy h-full min-h-screen w-full">
		<div class="container max-w-[1000px] py-10 md:py-20 px-6 lg:px-0 mx-auto">
			<div class="max-w-[160px] md:max-w-[200px] lg:max-w-[300px] mx-auto mb-8 md:mb-12 lg:mb-20">
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
