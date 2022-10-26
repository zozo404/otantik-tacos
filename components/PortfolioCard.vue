<template>
  <div>
    <div class="grid grid-cols-1 grid-row-3 place-self-auto xl:grid-cols-4 gap-4 items-center p-10">
      <!-- for loop to display some examples of my achievements, they each have a page for them, which gives the difficulty, the goal and the link of the project -->
      <div v-for="work in works" :key="work._id" class="flex flex-col items-center h-full w-full  rounded-xl ">
        <nuxt-link :to="work.slug.current" class="max-w-sm overflow-hidden rounded-xl shadow-md duration-200 hover:scale-105 hover:shadow-xl w-full h-full border-2 border-orange-500">
          <div>
            <nuxt-img
              provider="sanity"
              :src="work.imageUrl.asset._ref"
              placeholder
              class="h-52 w-full"
              :alt="work.imageUrl.alt"
            />
            <div class="p-5">
              <p class="text-2xl text-center mb-5 text-gray-50">
                {{ work.name }}
              </p>
              <button class="w-full rounded-md bg-black  py-2 text-indigo-100 hover:bg-amber-600 hover:shadow-md duration-200">
                En savoir plus
              </button>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
    <ButtonLink />
  </div>
</template>
<script>
export default {
  name: 'PortfolioCard',
  props: {
    works: {
      default: null,
      type: Array
    }
  }
}
</script>
