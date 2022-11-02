<template>
  <div>
    <div class="flex flex-col items-center mt-10 gap-4">
      <nuxt-link to="/#portfolio">
        <h1 class="pl-2 py-3">
          <i class="fa-solid fa-arrow-left" />
          Retour
        </h1>
      </nuxt-link>
      <Titles :title="portfolio.name" />
      <nuxt-img
        provider="sanity"
        :src="portfolio.imageUrl.asset._ref"
        :alt="portfolio.imageUrl.alt"
        placeholder
        class="w-full h-full sm:w-1/2 rounded-md border-2 border-orange-600"
      />
      <div class="mt-4 px-5 flex flex-col text-center w-1/2">
        <div class="flex justify-center space-x-4">
          Difficulté du projet:
          <span v-if="portfolio.difficulty == 'Simple'" class="inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800 ml-1">{{ portfolio.difficulty }}</span>
          <span v-if="portfolio.difficulty == 'Moyen'" class="inline-flex items-center rounded-full bg-yellow-100 px-3 py-0.5 text-sm font-medium text-yellow-800 ml-1">{{ portfolio.difficulty }}</span>
          <span v-if="portfolio.difficulty == 'Dur'" class="inline-flex items-center rounded-full bg-red-100 px-3 py-0.5 text-sm font-medium text-red-800 ml-1">{{ portfolio.difficulty }}</span>
        </div>
        <p class="my-8">
          {{ portfolio.text }}
        </p>
        <br>
        <p>
          Vous pouvez accéder au github du projet <br>
          <a :href="portfolio.link" target="_blank" rel="noopener noreferrer" class="text-orange-400 text-lg">Ici</a>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SlugPage',
  computed: {
    ...mapGetters(['getPortfolio']),
    routeSlug () {
      return this.$route.params.slug
    },
    portfolio () {
      return this.getPortfolio.find(el => el.slug.current === this.routeSlug)
    }
  }
}
</script>
