<template>
  <div>
    <PresentationTacos class="pt-6" />
    <NotreCarte />
    <RetrouvezNous />
    <Titles :id="'horaires'" class="scroll-mt-60 lg:scroll-mt-40" subtitle="Nos horaires" />
  </div>
</template>

<script>

export default {
  name: 'IndexPage'
}
</script>
