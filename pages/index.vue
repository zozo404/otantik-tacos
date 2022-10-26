<template>
  <div>
    <DescriptionMe class="scroll-mt-60 lg:scroll-mt-40 py-10" />
    <Titles :id="'presentation'" class="scroll-mt-60 lg:scroll-mt-40" subtitle="Présentation" />
    <PresentationMe class="scroll-mt-60 lg:scroll-mt-40 pb-10" />
    <Titles :id="'competences'" subtitle="Compétences" class="scroll-mt-60 lg:scroll-mt-40" />
    <CompetencesMe :skills="Skills" class="pb-10" />
    <Titles :id="'parcours'" class="scroll-mt-60 lg:scroll-mt-40" subtitle="Parcours" />
    <ParcoursMe class=" pb-10" />
    <Titles :id="'experiences'" subtitle="Expériences" class="scroll-mt-60 lg:scroll-mt-40" />
    <ExperienceMe :exps="Stages" class=" pb-10" />
    <Titles :id="'portfolio'" subtitle="Portfolio" class="scroll-mt-60 lg:scroll-mt-40" />
    <PortfolioCard :works="Portfolio" class="scroll-mt-60 lg:scroll-mt-40 pb-10" />
    <Titles :id="'contact'" subtitle="Contact" class="scroll-mt-60 lg:scroll-mt-40" />
    <ContactMe class="scroll-mt-60 lg:scroll-mt-40" />
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
