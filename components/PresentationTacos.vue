<template>
  <!-- ici, on affichera une div avec la devanture du tacos comme fond, on décrit ce qu'il font en qlq mots -->
  <div class="flex flex-col items-center">
    <!-- la balise nuxt-img sert à faire une requete pour demander l'image requise -->
    <nuxt-img
      provider="sanity"
      :src="Door.imageId.asset._ref"
      :alt="Door.imageId.alt"
      class="h-80 sd:h-full filter brightness-tacos w-full"
    />
    <!-- Titre ou ici texte pour le centre de la div -->
    <Titles :id="'door'" class="scroll-mt-60 lg:scroll-mt-40 absolute top-44 text-orange-1000 md:top-96 lg:top-3/4 xl:pt-16" subtitle="Fast food de Tacos/ Burgers/ Américains/ Salades" />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PresentationTacos',
  // partie importe qui permet de faire appel à la bdd pour l'img; on appele la fonction getPage (props)
  // La fonction crée Door() permet de filter les donnees pour retourner celle que l'on veut (ici celle qui a le nom Door)
  computed: {
    ...mapGetters(['getPages']),
    Door () {
      return this.getPages.find(el => el.name === 'Door')
    }
  }

}

</script>
