<template>
  <div class="flex flex-col">
    <BordureTop />
    <div class="bg-gray-1000 flex flex-col items-center pb-8">
      <Titles :id="'carte'" class="scroll-mt-60 lg:scroll-mt-40 text-orange-1000 w-full" subtitle="Notre carte" />
      <a href="/carte1.jpg" target="_blank" rel="noopener noreferrer" class="w-95 lg:w-1/3">
        <nuxt-img
          provider="sanity"
          :src="Carte.imageId.asset._ref"
          :alt="Carte.imageId.alt"
          class="h-full rounded-md"
        />
      </a>
      <i class="pt-2 text-lg">
        NB: Cliquez sur l'image si vous avez du mal à voir
      </i>
    </div>
    <BordureBottom />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'NotreCarte',
  computed: {
    ...mapGetters(['getPages']),
    Carte () {
      return this.getPages.find(el => el.name === 'Carte')
    }
  }
}
</script>

<style>

</style>
