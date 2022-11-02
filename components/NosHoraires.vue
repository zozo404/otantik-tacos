<template>
  <div class="flex flex-col">
    <BordureTop />
    <div class="bg-gray-1000 flex flex-col items-center pb-8 text-gray-25">
      <Titles :id="'horaires'" class="scroll-mt-60 lg:scroll-mt-40 text-orange-1000 w-full" subtitle="Nos horaires" />
      <!-- Horaires -->
      <div>
        <ul class="flex flex-col gap-2 mb-2 md:text-lg">
          <!-- début de la boucle avec l'élément que l'on souhaite répéter -->
          <li v-for="horaire in horaires" :key="horaire.jour">
            <span class="font-bold">{{ horaire.jour }} :</span>
            <span v-if="horaire.horaires==='Fermé'" class="text-red-600 font-medium">
              {{ horaire.horaires }}
            </span>
            <span v-else>
              {{ horaire.horaires }}
            </span>
          </li>
          <p>
            Numéro: <a href="tel:0468612529" rel="noopener noreferrer" class="font-bold">04 68 61 25 29 </a>
          </p>
          <!-- fin de la boucle -->
        </ul>
        <i class="md:text-lg">
          NB: Les horaires peuvent varier selon les saisons
        </i>
      </div>
    </div>
    <BordureBottom />
  </div>
</template>

<script>
export default {
  name: 'NotreCarte',
  // ici on crée la donnée horaire qui nous permettra de faire une boucle
  data () {
    return {
      horaires: [
        {
          jour: 'Lundi',
          horaires: 'Fermé'
        },
        {
          jour: 'Mardi',
          horaires: '10h30 - 13h30 | 17h30 - 21h30'
        },
        {
          jour: 'Mecredi',
          horaires: '10h30 - 13h30 | 17h30 - 21h30'
        },
        {
          jour: 'Jeudi',
          horaires: '10h30 - 13h30 | 17h30 - 21h30'
        },
        {
          jour: 'Vendredi',
          horaires: '10h30 - 13h30 | 17h30 - 21h30'
        },
        {
          jour: 'Samedi',
          horaires: '10h30 - 13h30 | 17h30 - 21h30'
        },
        {
          jour: 'Dimanche',
          horaires: 'Fermé'
        }
      ]
    }
  }

}
</script>

<style>

</style>
