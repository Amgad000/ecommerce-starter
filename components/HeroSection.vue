<template>
  <section class="bg-white dark:bg-gray-900">
    <div
      class="grid max-w-screen-xl py-8 mx-auto lg:gap-8 xl:gap-0 md:py-16 md:grid-cols-12">
      <div class="mr-auto place-self-center md:col-span-7">
        <h1
          class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          Step into Elegance and Comfort
        </h1>
        <p
          class="max-w-2xl md:max-w-3xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          Discover the perfect blend of style, comfort, and quality with
          SoleStyle. Our exclusive collection of footwear is designed to make
          every step you take a statement of sophistication. Whether you're
          looking for trendy sneakers, chic heels, or comfortable flats,
          SoleStyle has it all. Step up your shoe game and embrace the elegance
          you deserve!
        </p>
        <NuxtLink
          to="/products"
          class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-600 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
          Go to Products
          <svg
            class="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </NuxtLink>
        <NuxtLink
          href="/contact"
          class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
          Speak to Sales
        </NuxtLink>
      </div>
      <div
        class="hidden md:mt-0 md:col-span-5 md:flex rounded-lg overflow-hidden">
        <NuxtImg src="/hero-shoe2.jpg" quality="25" alt="mockup" />
      </div>
    </div>
  </section>
</template>

<script setup></script>
