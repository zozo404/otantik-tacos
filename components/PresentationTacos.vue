<template>
  <div class="flex flex-col items-center">
    <nuxt-img
      provider="sanity"
      :src="Door.imageId.asset._ref"
      :alt="Door.imageId.alt"
      class="h-full filter brightness-tacos"
      sizes="xs:100vw"
    />
    <Titles :id="'door'" class="scroll-mt-60 lg:scroll-mt-40 absolute top-44 text-orange-1000 md:top-96 lg:top-3/4" subtitle="Fast food de Tacos/ Burgers/ Américains/ Salades" />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PresentationTacos',
  computed: {
    ...mapGetters(['getPages']),
    Door () {
      return this.getPages.find(el => el.name === 'Door')
    }
  }

}

</script>
