<template>
  <div class="home">
    <div class="home-container" v-intersect="emerge">
      <p class="text-1 observer-victim">
        Cześć. Nazywam się Anna Zambrzycka. Zajmuje się stylizacją rzęs,
        paznokci oraz makijażem permanentnym brwi.
      </p>

      <v-img src="../assets/portrait_1.jpg" />
      <p class="text-2">
        W zawodzie pracuje 6 lat, a od 3 lat prowadzę swój gabinet w Toruniu.
        Niedawno do mojej załogi dołączyła zdolna stylistka Ola.
      </p>

      <p class="text-3">
        W mojej pracy stawiam przede wszystkim na wysoką jakość produktów i
        poprawne pod względem technicznym stylizacje. Jestem perfekcjonistką. W
        makijażu permanentnym pracuje na wysokiej jakości sprzęcie oraz
        sprawdzonych pigmentach. Prowadzę szkolenia z zakresu stylizacji rzęs i
        paznokci. Moja praca to moja pasja.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  // data() {
  //   return {
  //     isIntersecting: false,
  //   };
  // },
  // mounted() {
  //   this.areActive.forEach((active) => {
  //     active.check = false;
  //     active.text = this.lorem;
  //   });
  // },
  // methods: {
  //   emerge() {
  //     let victim = document.querySelector("text-1");

  //     victim.classList.toggle("observer-victim");
  //   },
  // },
};
</script>
