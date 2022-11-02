<template>
  <nuxt-img
    provider="sanity"
    :src="Bordure.imageId.asset._ref"
    :alt="Bordure.imageId.alt"
    class="h-full relative top-px"
  />
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getPages']),
    Bordure () {
      return this.getPages.find(el => el.name === 'Bordure')
    }
  }
}
</script>

<style>

</style>
