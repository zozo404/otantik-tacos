<template>
  <div class="flex flex-col">
    <nuxt-img
      provider="sanity"
      :src="Bordure.imageId.asset._ref"
      :alt="Bordure.imageId.alt"
      class="h-full"
      sizes="xs:100vw"
    />
    <div class="bg-gray-1000 flex flex-col items-center pb-8">
      <Titles :id="'carte'" class="scroll-mt-60 lg:scroll-mt-40 text-orange-1000 w-full" subtitle="Notre carte" />
      <nuxt-img
        provider="sanity"
        :src="Carte.imageId.asset._ref"
        :alt="Carte.imageId.alt"
        class="h-full w-95 rounded-md"
        sizes="xs:100vw"
      />
    </div>
    <nuxt-img
      provider="sanity"
      :src="BordureBottom.imageId.asset._ref"
      :alt="BordureBottom.imageId.alt"
      class="h-full"
      sizes="xs:100vw"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'NotreCarte',
  computed: {
    ...mapGetters(['getPages']),
    Bordure () {
      return this.getPages.find(el => el.name === 'Bordure')
    },
    Carte () {
      return this.getPages.find(el => el.name === 'Carte')
    },
    BordureBottom () {
      return this.getPages.find(el => el.name === 'Bordure-b')
    }
  }
}
</script>

<style>

</style>
