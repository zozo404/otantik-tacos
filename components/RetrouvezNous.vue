<template>
  <div class="pb-6 text-gray-1000">
    <Titles :id="'retrouvez'" subtitle="Retrouvez-nous" class="scroll-mt-60 lg:scroll-mt-40" />
    <div class="flex justify-center">
      <!-- iframe qui permet de mettre la localisation du tacos avec google maps afin de rendre + facile de trouver le lieu pour les clients -->
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2073.961242084!2d2.7941677585123177!3d42.68203147525996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b06d5ce10ee5a3%3A0xbdcb1b4ce36ea3ba!2sO&#39;tantik%20tacos!5e0!3m2!1sfr!2sfr!4v1666786550305!5m2!1sfr!2sfr"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="w-full xl:w-3/4"
      />
    </div>
    <p class="text-center text-lg pt-4 font-bold">
      3 Av. Emile Zola, 66270 Le Soler
    </p>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
