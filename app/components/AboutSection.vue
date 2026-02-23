<template>
	<section id="about" class="section-container">
		<div class="scroll-reveal">
			<h2 class="text-4xl md:text-5xl font-bold mb-12 gradient-text">
				About Me
			</h2>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
				<!-- Left side - Image placeholder -->
				<div class="scroll-reveal" style="animation-delay: 0.1s">
					<div
						class="relative aspect-square rounded-2xl overflow-hidden glass-effect p-2 card-hover"
					>
						<div
							class="w-full h-full bg-linear-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-8xl font-bold text-white/50"
						>
							💻
						</div>
					</div>
				</div>

				<!-- Right side - Bio -->
				<div class="scroll-reveal" style="animation-delay: 0.2s">
					<div class="space-y-6">
						<p class="text-lg text-gray-300 leading-relaxed">
							I'm a passionate
							<span class="gradient-text font-semibold italic">
								Full-Stack Web Developer
							</span>
							with a strong foundation in modern web technologies. With
							expertise spanning both frontend and backend development, I create
							comprehensive solutions that solve real problems.
						</p>

						<p class="text-lg text-gray-300 leading-relaxed">
							My journey in web development started with a curiosity about how
							things work on the internet. Over the years, I've honed my skills
							in building scalable applications, optimizing performance, and
							ensuring excellent user experiences.
						</p>

						<p class="text-lg text-gray-300 leading-relaxed">
							I'm particularly interested in creating performant, accessible web
							applications that make a difference.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts"></script>
