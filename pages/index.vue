<template>
  <div>
    <Titles :id="'presentation'" class="scroll-mt-60 lg:scroll-mt-40" subtitle="Notre Carte" />
    <Titles :id="'competences'" subtitle="Compétences" class="scroll-mt-60 lg:scroll-mt-40" />
    <Titles :id="'parcours'" class="scroll-mt-60 lg:scroll-mt-40" subtitle="Parcours" />
    <Titles :id="'experiences'" subtitle="Expériences" class="scroll-mt-60 lg:scroll-mt-40" />
    <Titles :id="'portfolio'" subtitle="Portfolio" class="scroll-mt-60 lg:scroll-mt-40" />
    <Titles :id="'contact'" subtitle="Contact" class="scroll-mt-60 lg:scroll-mt-40" />
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
