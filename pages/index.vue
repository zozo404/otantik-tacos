<template>
  <div>
    <Titles :id="'carte'" class="scroll-mt-60 lg:scroll-mt-40" subtitle="Notre Carte" />
    <Titles :id="'retrouvez'" subtitle="Retrouvez-nous" class="scroll-mt-60 lg:scroll-mt-40" />
    <Titles :id="'horaires'" class="scroll-mt-60 lg:scroll-mt-40" subtitle="Nos horaires" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'IndexPage',
  computed: {
    ...mapGetters(['getSkills', 'getStages', 'getPortfolio']),
    Skills () {
      return this.getSkills
    },
    Stages () {
      return this.getStages
    },
    Portfolio () {
      return this.getPortfolio
    }
  }
}
</script>
