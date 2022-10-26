<template>
  <div>
    <!-- contact form I implemented with getform -->
    <form action="https://getform.io/f/ae1658ac-b595-4be1-9013-ebf2a296b6b1" method="POST">
      <!-- boucle for mail -->
      <div class="flex flex-col flex-wrap gap-5 items-center mt-5">
        <div v-for="input in inputs" :key="input._id" class="flex">
          <p class="pr-1">
            {{ input.title }}:
          </p>
          <input
            :key="input._name"
            class="text-black last:h-8 last:w-60 bg-gray-100 rounded-md p-1 text-lg"
            :type="input.type"
            :name="input.name"
            :minlength="input.minlength"
          >
        </div>
        <p>Message :</p>
        <textarea
          class="text-black w-3/5 bg-gray-100 rounded-md p-1 text-lg"
          type="message"
          name="message"
          minlength="10"
          cols="7"
          rows="7"
        />
      </div>
      <div class="text-center">
        <button type="submit" class="p-1 rounded-md bg-cyan-400 text-black mt-4 w-24 shadow-md duration-200 hover:scale-105 hover:shadow-xl">
          Envoyer
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactMe',
  data () {
    return {
      inputs: [
        {
          name: 'name',
          type: 'text',
          title: 'Nom ',
          minlength: '2'
        },
        {
          name: 'email',
          type: 'email',
          title: 'Email ',
          minlength: '5'
        },
        {
          name: 'objet',
          type: 'text',
          title: 'Objet ',
          minlength: '1'
        }
      ]
    }
  }
}
</script>
