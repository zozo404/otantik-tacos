<template>
  <div>
    <!-- intro component -->
    <div class="flex flex-col items-center lg:text-2xl">
      <p class="px-8 pb-7">
        👋, <br>
        Je suis Enzo 👨‍💻 <br>
        Je viens de finir la formation Osengo de développeur Web et Web mobile.
      </p>
      <ButtonScroll />
    </div>
  </div>
</template>

<script>
export default {

}
</script>
<style>
@keyframes bounce {
    0%, 100% {
        transform: translateY(-100%);
        animation-timing-function: cubic-bezier(0.8,0,1,1);
    }
    50% {
        transform: none;
        animation-timing-function: cubic-bezier(0,0,0.2,1);
    }
}
.animate {
    animation: bounce 1s infinite;
}
</style>
