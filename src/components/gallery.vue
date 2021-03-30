<template>
  <div class="gallery">
    <ul role="navigation" class="gallery_cards">
      <li>
        <a href="#" @click="navigateTo('home')">
          <div class="item-link">
            <p class="text-gradient text-center card-text">
              Makijaż permanentny
            </p>
            <div class="img-container">
              <v-img contain src="../assets/gallery/11.jpg" />
            </div>
            <v-btn dark depressed outlined class="call_to_action">
              <div class="text-gradient">Więcej</div>
            </v-btn>
          </div>
        </a>
      </li>
      <li>
        <a href="#" @click="navigateTo('home')">
          <div class="item-link">
            <p class="text-gradient text-center card-text">
              Stylizacja paznokci
            </p>
            <div class="img-container">
              <v-img contain src="../assets/gallery/1.jpg" />
            </div>
            <v-btn dark depressed outlined class="call_to_action">
              <div class="text-gradient">Więcej</div>
            </v-btn>
          </div>
        </a>
      </li>
      <li>
        <a href="#" @click="navigateTo('home')">
          <div class="item-link">
            <p class="text-gradient text-center card-text">
              Stylizacja rzęs i brwii
            </p>
            <div class="img-container">
              <v-img contain src="../assets/gallery/5.jpg" />
            </div>
            <v-btn dark depressed outlined class="call_to_action">
              <div class="text-gradient">Więcej</div>
            </v-btn>
          </div>
        </a>
      </li>
    </ul>
    <!-- <v-responsive>
      <v-lazy
        v-for="(active, index) in areActive"
        v-model="active.check"
        :key="index"
        :options="{
          threshold: 0.5,
        }"
        min-height="200"
        transition="slide-x-transition"
      >
        <v-card tile min-height="200" class="mx-auto">
          <v-card-text>
            {{ active.text }}
            {{ active.check }}
          </v-card-text>
        </v-card>
      </v-lazy>
    </v-responsive> -->
  </div>
</template>

<script>
export default {
  name: "gallery",
  // data() {
  //   return {
  //     lorem:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam velit ad enim corrupti, porro labore! Voluptatum eligendi voluptates asperiores fuga, veniam cumque quia. Saepe consequatur vitae culpa dolore corporis porro?",
  //     areActive: [
  //       { check: false, text: "" },
  //       { check: false, text: "" },
  //       { check: false, text: "" },
  //       { check: false, text: "" },
  //       { check: false, text: "" },
  //       { check: false, text: "" },
  //       { check: false, text: "" },
  //       { check: false, text: "" },
  //     ],
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
  //   onIntersect(entries, observer) {
  //     // More information about these options
  //     // is located here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
  //     this.isIntersecting = entries[0].isIntersecting;
  //   },
  // },
};
</script>
