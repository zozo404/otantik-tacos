<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <footer id="footer" class="bg-orange-1000">
    <div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
      <div class="mt-8 flex justify-center space-x-6">
        <a
          v-for="item in navigation.social"
          :key="item.name"
          :href="item.href"
          class="text-gray-25 hover:text-gray-500"
          target="_blank"
          rel="noopener"
        >
          <span class="sr-only">{{ item.name }}</span>
          <i :class="item.icon" class="h-6 w-6 text-gray-50" />
        </a>
      </div>
      <p class="mt-8 text-center text-base text-gray-25">
        &copy; 2022 zozoy, Inc. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterApp',
  data () {
    return {
      navigation: {
        social: [
          {
            name: 'Twitter',
            href: 'https://twitter.com/zozoy66',
            icon: 'fab fa-twitter'
          },
          {
            name: 'Instagram',
            href: 'https://www.instagram.com/zozoy_fr/',
            icon: 'fab fa-instagram'
          },
          {
            name: 'Discord',
            href: 'https://discord.com/invite/enzo66#9786',
            icon: 'fab fa-discord'
          },
          {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/enzo-cuny/',
            icon: 'fab fa-linkedin'
          }

        ]
      }
    }
  }
}
</script>
