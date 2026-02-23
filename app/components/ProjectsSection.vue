<template>
	<section id="projects" class="section-container">
		<div class="scroll-reveal">
			<h2 class="text-4xl md:text-5xl font-bold mb-4 gradient-text">
				Featured Projects
			</h2>
			<p class="text-xl text-gray-400 mb-12 max-w-2xl">
				A selection of notable projects demonstrating my skills and expertise
			</p>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				<!-- Project 1 -->
				<div
					class="scroll-reveal glass-effect overflow-hidden rounded-xl card-hover group"
					style="animation-delay: 0.1s"
				>
					<div
						class="h-48 bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center text-6xl overflow-hidden relative"
					>
						📱
						<div
							class="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
						></div>
					</div>
					<div class="p-6 space-y-4">
						<h3 class="text-2xl font-bold text-white">E-Commerce Platform</h3>
						<p class="text-gray-400">
							A full-featured e-commerce platform built with Vue.js and Laravel,
							featuring real-time inventory management and secure payment
							processing.
						</p>
						<div class="flex flex-wrap gap-2">
							<span class="skill-badge">Vue.js</span>
							<span class="skill-badge">Laravel</span>
							<span class="skill-badge">MySQL</span>
						</div>
						<div class="flex gap-3 pt-4 border-t border-white/10">
							<a
								href="#"
								class="flex-1 py-2 px-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-center text-sm font-semibold"
							>
								GitHub
							</a>
							<a
								href="#"
								class="flex-1 py-2 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-purple-500/50 transition-all text-center text-sm font-semibold"
							>
								Live Demo
							</a>
						</div>
					</div>
				</div>

				<!-- Project 2 -->
				<div
					class="scroll-reveal glass-effect overflow-hidden rounded-xl card-hover group"
					style="animation-delay: 0.2s"
				>
					<div
						class="h-48 bg-gradient-to-br from-purple-600 to-purple-900 flex items-center justify-center text-6xl overflow-hidden relative"
					>
						🎬
						<div
							class="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
						></div>
					</div>
					<div class="p-6 space-y-4">
						<h3 class="text-2xl font-bold text-white">Movie Discovery App</h3>
						<p class="text-gray-400">
							An intuitive movie discovery application with advanced filtering,
							user reviews, and personalized recommendations using external
							APIs.
						</p>
						<div class="flex flex-wrap gap-2">
							<span class="skill-badge">React</span>
							<span class="skill-badge">API</span>
							<span class="skill-badge">Firebase</span>
						</div>
						<div class="flex gap-3 pt-4 border-t border-white/10">
							<a
								href="#"
								class="flex-1 py-2 px-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-center text-sm font-semibold"
							>
								GitHub
							</a>
							<a
								href="#"
								class="flex-1 py-2 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-purple-500/50 transition-all text-center text-sm font-semibold"
							>
								Live Demo
							</a>
						</div>
					</div>
				</div>

				<!-- Project 3 -->
				<div
					class="scroll-reveal glass-effect overflow-hidden rounded-xl card-hover group"
					style="animation-delay: 0.3s"
				>
					<div
						class="h-48 bg-gradient-to-br from-pink-600 to-pink-900 flex items-center justify-center text-6xl overflow-hidden relative"
					>
						✍️
						<div
							class="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
						></div>
					</div>
					<div class="p-6 space-y-4">
						<h3 class="text-2xl font-bold text-white">Blogging Platform</h3>
						<p class="text-gray-400">
							A modern content management platform for writers with markdown
							support, SEO optimization, and analytics dashboard.
						</p>
						<div class="flex flex-wrap gap-2">
							<span class="skill-badge">Nuxt.js</span>
							<span class="skill-badge">Node.js</span>
							<span class="skill-badge">PostgreSQL</span>
						</div>
						<div class="flex gap-3 pt-4 border-t border-white/10">
							<a
								href="#"
								class="flex-1 py-2 px-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-center text-sm font-semibold"
							>
								GitHub
							</a>
							<a
								href="#"
								class="flex-1 py-2 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-purple-500/50 transition-all text-center text-sm font-semibold"
							>
								Live Demo
							</a>
						</div>
					</div>
				</div>

				<!-- Project 4 -->
				<div
					class="scroll-reveal glass-effect overflow-hidden rounded-xl card-hover group"
					style="animation-delay: 0.1s"
				>
					<div
						class="h-48 bg-gradient-to-br from-green-600 to-green-900 flex items-center justify-center text-6xl overflow-hidden relative"
					>
						🏋️
						<div
							class="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
						></div>
					</div>
					<div class="p-6 space-y-4">
						<h3 class="text-2xl font-bold text-white">Fitness Tracker</h3>
						<p class="text-gray-400">
							Mobile-responsive fitness application with workout tracking,
							nutrition logging, and progress visualization with charts.
						</p>
						<div class="flex flex-wrap gap-2">
							<span class="skill-badge">Vue.js</span>
							<span class="skill-badge">Chart.js</span>
							<span class="skill-badge">Firebase</span>
						</div>
						<div class="flex gap-3 pt-4 border-t border-white/10">
							<a
								href="#"
								class="flex-1 py-2 px-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-center text-sm font-semibold"
							>
								GitHub
							</a>
							<a
								href="#"
								class="flex-1 py-2 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-purple-500/50 transition-all text-center text-sm font-semibold"
							>
								Live Demo
							</a>
						</div>
					</div>
				</div>

				<!-- Project 5 -->
				<div
					class="scroll-reveal glass-effect overflow-hidden rounded-xl card-hover group"
					style="animation-delay: 0.2s"
				>
					<div
						class="h-48 bg-gradient-to-br from-yellow-600 to-yellow-900 flex items-center justify-center text-6xl overflow-hidden relative"
					>
						💳
						<div
							class="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
						></div>
					</div>
					<div class="p-6 space-y-4">
						<h3 class="text-2xl font-bold text-white">Payment Gateway</h3>
						<p class="text-gray-400">
							Secure payment processing system with support for multiple payment
							methods and comprehensive transaction logging.
						</p>
						<div class="flex flex-wrap gap-2">
							<span class="skill-badge">Node.js</span>
							<span class="skill-badge">Stripe API</span>
							<span class="skill-badge">MongoDB</span>
						</div>
						<div class="flex gap-3 pt-4 border-t border-white/10">
							<a
								href="#"
								class="flex-1 py-2 px-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-center text-sm font-semibold"
							>
								GitHub
							</a>
							<a
								href="#"
								class="flex-1 py-2 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-purple-500/50 transition-all text-center text-sm font-semibold"
							>
								Live Demo
							</a>
						</div>
					</div>
				</div>

				<!-- Project 6 -->
				<div
					class="scroll-reveal glass-effect overflow-hidden rounded-xl card-hover group"
					style="animation-delay: 0.3s"
				>
					<div
						class="h-48 bg-gradient-to-br from-cyan-600 to-cyan-900 flex items-center justify-center text-6xl overflow-hidden relative"
					>
						🤖
						<div
							class="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
						></div>
					</div>
					<div class="p-6 space-y-4">
						<h3 class="text-2xl font-bold text-white">AI Chat Assistant</h3>
						<p class="text-gray-400">
							Intelligent chatbot powered by machine learning with natural
							language processing and context awareness capabilities.
						</p>
						<div class="flex flex-wrap gap-2">
							<span class="skill-badge">Vue.js</span>
							<span class="skill-badge">OpenAI API</span>
							<span class="skill-badge">Python</span>
						</div>
						<div class="flex gap-3 pt-4 border-t border-white/10">
							<a
								href="#"
								class="flex-1 py-2 px-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-center text-sm font-semibold"
							>
								GitHub
							</a>
							<a
								href="#"
								class="flex-1 py-2 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-purple-500/50 transition-all text-center text-sm font-semibold"
							>
								Live Demo
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts"></script>
