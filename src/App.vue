<template>
	<div class="h-full min-h-screen w-full bg-brand-navy">
		<div class="container mx-auto max-w-[1000px] px-6 py-10 md:py-20 lg:px-0">
			<div class="mx-auto mb-8 max-w-[160px] md:mb-12 md:max-w-[200px] lg:mb-20 lg:max-w-[300px]">
				<KonxDev />
			</div>
			<!-- About -->
			<AboutMe />
			<!-- Experience -->
			<MyExperience />
			<!-- Tools & Tech -->
			<ToolsUsed />
			<!-- Education -->
			<MyEducation />
			<!-- Contact -->
			<ContactMe />
		</div>
	</div>
</template>

<script setup>
	// Component Imports
	import AboutMe from "./components/AboutMe.vue";
	import MyExperience from "./components/MyExperience.vue";
	import MyEducation from "./components/MyEducation.vue";
	import ToolsUsed from "./components/ToolsUsed.vue";
	import ContactMe from "./components/ContactMe.vue";
	import KonxDev from "./components/Assets/KonxDev.vue";
</script>
