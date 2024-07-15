<template>
  <footer class="p-4 bg-gray-50 md:p-8 lg:p-10 dark:bg-gray-800">
    <div class="mx-auto max-w-screen-xl text-center">
      <h2 class="text-2xl font-bold text-blue-500">SoleStyle</h2>
      <p class="my-6 text-gray-500 dark:text-gray-400">
        Discover the perfect blend of style, comfort, and quality with
        SoleStyle. Our exclusive collection of footwear is designed to make
        every step you take a statement of sophistication. Step up your shoe
        game and embrace the elegance you deserve!
      </p>
      <ul
        class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
        <li>
          <NuxtLink to="/" class="mr-4 hover:underline md:mr-6">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" class="mr-4 hover:underline md:mr-6"
            >About</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/products" class="mr-4 hover:underline md:mr-6"
            >Products</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/contact" class="mr-4 hover:underline md:mr-6"
            >Contact</NuxtLink
          >
        </li>
      </ul>
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© 2021-2022 <span class="hover:underline cursor-pointer">Almu_</span>.
        All Rights Reserved.</span
      >
    </div>
  </footer>
</template>

<script setup></script>
