<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <footer id="footer" class="bg-orange-1000">
    <div class="max-w-7xl mx-auto pt-4 px-4 overflow-hidden sm:px-6 lg:px-8 flex flex-col items-center">
      <!-- si bug visuel, alors modifier la height de l'image aux alentours de 40% (mobile only) -->
      <nuxt-img
        provider="sanity"
        :src="Tacos.imageId.asset._ref"
        :alt="Tacos.imageId.alt"
        class="h-auto filter brightness-tacos absolute z-0"
        sizes="xs:100vw"
      />
      <div class="relative pt-4 flex flex-col gap-5">
        <a
          v-for="item in navigation.tacos"
          :key="item.name"
          :href="item.href"
          class="text-orange-1000 flex flex-col items-center gap-3"
          target="_blank"
          rel="noopener"
        >
          <p>Vous pouvez également nous trouver ici</p>
          <span class="sr-only">{{ item.name }}</span>
          <i :class="item.icon" class="h-6 w-6 text-blue-700 bg-white rounded-full" />
        </a>
        <p class="text-center text-orange-1000">
          3 Av. Emile Zola, 66270 Le Soler
        </p>
      </div>
      <p class="mt-12 text-center text-base relative text-orange-1000">
        &copy; 2022 zozoy, Inc. All rights reserved.
      </p>
      <div class="flex justify-center space-x-6 relative">
        <a
          v-for="item in navigation.social"
          :key="item.name"
          :href="item.href"
          class="text-orange-1000"
          target="_blank"
          rel="noopener"
        >
          <span class="sr-only">{{ item.name }}</span>
          <i :class="item.icon" class="h-6 w-6 text-orange-1000" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'FooterApp',
  data () {
    return {
      navigation: {
        tacos: [
          {
            name: 'Facebook',
            href: 'https://www.facebook.com/people/Otantik-TACOS/100040555491473/',
            icon: 'fab fa-facebook'
          }
        ],
        social: [
          {
            name: 'Github',
            href: 'https://github.com/zozo404',
            icon: 'fab fa-github'
          },
          {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/enzo-cuny/',
            icon: 'fab fa-linkedin'
          }
        ]
      }
    }
  },
  computed: {
    ...mapGetters(['getPages']),
    Tacos () {
      return this.getPages.find(el => el.name === 'Tacos')
    }
  }
}
</script>
