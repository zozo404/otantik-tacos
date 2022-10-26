<template>
  <!-- my skills, we display technology logos with a "v-for" and an import from Sanity -->
  <div class="pb-5">
    <p class="text-center pb-3 text-lg">
      Voici toutes les technologies avec lesquelles j'ai pu travailler
    </p>
    <div class="flex justify-center flex-wrap gap-8 items-center px-1">
      <nuxt-img
        v-for="skill in skills"
        :key="skill._id"
        provider="sanity"
        :src="skill.imageUrl.asset._ref"
        placeholder
        class="w-16 h-auto"
        :alt="skill.imageUrl.alt"
      />
    </div>
  </div>
</template>

<script>

export default {
  name: 'CompetencesMe',
  props: {
    skills: {
      default: null,
      type: Array
    }
  }
}
</script>
