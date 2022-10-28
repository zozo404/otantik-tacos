<template>
  <nuxt-img
    provider="sanity"
    :src="BordureBottom.imageId.asset._ref"
    :alt="BordureBottom.imageId.alt"
    class="h-full"
    sizes="xs:100vw"
  />
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getPages']),
    BordureBottom () {
      return this.getPages.find(el => el.name === 'Bordure-b')
    }
  }
}
</script>
