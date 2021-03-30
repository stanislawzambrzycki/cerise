<template>
  <div class="services">
    <ul role="navigation" class="services_cards">
      <li>
        <a href="#" @click="navigateTo('home')">
          <div class="item-link">
            <p class="text-gradient text-center card-text">
              Makijaż permanentny
            </p>
            <div class="img-container">
              <v-img contain src="../assets/see-through.png" />
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
              Makijaż okolicznościowy
            </p>
            <div class="img-container">
              <v-img contain src="../assets/see-through.png" />
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
              Usuwanie makijażu permanentnego i tatuażu
            </p>
            <div class="img-container">
              <v-img contain src="../assets/see-through.png" />
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
              Makijaż permanentny brwii
            </p>
            <div class="img-container">
              <v-img contain src="../assets/see-through.png" />
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
              Jak będę wyglądać po zabiegu?
            </p>
            <div class="img-container">
              <v-img contain src="../assets/see-through.png" />
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
              Makijaż permanentny ust
            </p>
            <div class="img-container">
              <v-img contain src="../assets/see-through.png" />
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
              Makijaż permamentny oczu
            </p>
            <div class="img-container">
              <v-img contain src="../assets/see-through.png" />
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
              Makijaż ślubny
            </p>
            <div class="img-container">
              <v-img contain src="../assets/see-through.png" />
            </div>
            <v-btn dark depressed outlined class="call_to_action">
              <div class="text-gradient">Więcej</div>
            </v-btn>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "services",
};
</script>
