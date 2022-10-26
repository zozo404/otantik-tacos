<template>
  <div>
    <div class="p-4 mt-4 flex justify-center">
      <div class="container ">
        <div class="flex flex-col md:grid grid-cols-12 text-gray-50 2xl:w-11/12">
          <!-- start for | for loop to display my background, with the name, specialty, year and location of the degree -->
          <div
            v-for="park in parks"
            :key="park._id"
            class="flex md:contents"
          >
            <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 border border-1 border-orange-400 bg-orange-400 pointer-events-none" />
              </div>
              <!-- div to show graduation or not -->
              <!-- if we have the diploma -->
              <div v-if="park.status == true" class="w-6 h-6 absolute top-1/2 -mt-3  border border-1 border-green-400 bg-green-800 rounded-xl shadow text-center flex items-center justify-center">
                <i class="fas fa-check-circle text-white" />
              </div>
              <!-- if we don't have it -->
              <div v-else class="w-6 h-6 absolute top-1/2 -mt-3  border border-1 border-red-400 bg-red-800 rounded-xl shadow text-center flex items-center justify-center">
                <i class="fas fa-circle-xmark text-white" />
              </div>
            </div>
            <div class="border border-orange-400 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
              <h3 class="font-semibold text-lg mb-1">
                {{ park.name }}
              </h3>
              <p class="italic">
                {{ park.speciality }}
              </p>
              <p class="leading-tight text-justify w-full">
                {{ park.year }}
              </p>
              <p>
                {{ park.location }}
              </p>
            </div>
          </div>
          <!-- end for -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ParcoursMe',
  data () {
    return {
      parks: [
        {
          status: true,
          name: 'Développement Web et Web mobile',
          speciality: 'Formation Osengo',
          year: '2022',
          location: 'Les 5 Eléments - Perpignan'
        },
        {
          status: false,
          name: 'BTS SIO',
          speciality: 'Services Informatiques aux Organisations',
          year: '2021',
          location: 'Lycée Jean Lurçat - Perpignan'
        },
        {
          status: true,
          name: 'Bac STL',
          speciality: 'Sciences et Technologies de Laboratoires (SPCL)',
          year: '2019',
          location: 'Lycée Aristide Maillol - Perpignan'
        },
        {
          status: true,
          name: 'Brevet des Collèges',
          speciality: 'Brevet Général',
          year: '2016',
          location: 'Collège le Ribéral - Saint-Estève'
        }

      ]
    }
  }
}
</script>
