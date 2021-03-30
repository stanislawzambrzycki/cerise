<template>
  <div id="app">
    <div class="background">
      <div class="header">
        <div class="filler">
          <ul class="upper_right_media_links">
            <li>
              <a
                href="https://www.facebook.com/cerise.torun"
                target="_blank"
                class="nav-link"
                ><font-awesome-icon :icon="['fab', 'facebook']"
              /></a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/cerise.anna.zambrzycka/"
                target="_blank"
                class="nav-link"
                ><font-awesome-icon :icon="['fab', 'instagram']"
              /></a>
            </li>
          </ul>
          <ul class="upper_left_contact">
            <li class="big_screen_only">
              <font-awesome-icon
                :icon="['fas', 'phone-square-alt']"
                class="phone"
              />
              <span class="text-gradient"> 577-274-727</span>
            </li>
            <li class="big_screen_only">
              <font-awesome-icon :icon="['fas', 'at']" class="at" />
              <span class="text-gradient"> anna_zambrzycka@wp.pl</span>
            </li>
          </ul>
          <img
            class="logo-phone"
            src="./assets/cerise_logo_dark.jpg"
            @click="navigateTo('home')"
          />
          <img
            class="logo-widescreens"
            src="./assets/cerise_logo_widescreens.png"
            @click="navigateTo('home')"
          />
          <ul role="navigation" class="header-nav">
            <li>
              <a href="#" class="text-gradient" @click="navigateTo('home')"
                >O mnie</a
              >
            </li>
            <li class="nav-item dropdown">
              <v-menu
                tile
                open-on-hover
                attach
                offset-y
                origin="top center"
                nudge-left="80"
                transition="scale-transition"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    depressed
                    text
                    v-bind="attrs"
                    v-on="on"
                    class="dropdown-btn"
                  >
                    <a
                      href="#"
                      class="nav-link text-gradient"
                      @click="navigateTo('services')"
                      >Oferta</a
                    >
                  </v-btn>
                </template>
                <v-list>
                  <v-menu
                    tile
                    attach=".dropdown-btn"
                    offset-y
                    origin="top left"
                    transition="scale-transition"
                    nudge-right="80vw"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        depressed
                        text
                        v-bind="attrs"
                        v-on="on"
                        class="dropdown-btn"
                      >
                        <v-list-item>
                          <v-list-item-title>
                            <p>
                              Makijaż permamentny
                              <v-btn icon dark large
                                ><font-awesome-icon
                                  :icon="['fas', 'chevron-right']"
                                  class="chevron-right"
                              /></v-btn>
                            </p>
                          </v-list-item-title>
                        </v-list-item>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item>
                        <v-list-item-title
                          >Usuwanie makijażu<br />
                          permamentnego i tatuażu</v-list-item-title
                        >
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title
                          >Makijaż permanentny brwii</v-list-item-title
                        >
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-title
                          >Makijaż permanentny ust</v-list-item-title
                        >
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title
                          >Makijaż permanentny oczu</v-list-item-title
                        >
                      </v-list-item>
                    </v-list>
                  </v-menu>
                  <v-list-item>
                    <v-list-item-title
                      >Makijaż okolicznościowy</v-list-item-title
                    >
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-title
                      >Jak będę wyglądać<br />
                      po zabiegu?</v-list-item-title
                    >
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-title>Makijaż ślubny</v-list-item-title>
                  </v-list-item>
                  <!-- <v-list-item v-for="(item, index) in items" :key="index">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item> -->
                </v-list>
              </v-menu>
            </li>
            <li>
              <a href="#" class="text-gradient" @click="navigateTo('pricing')"
                >Cennik</a
              >
            </li>
            <li class="logo-li">
              <img
                class="logo-navbar"
                src="./assets/cerise_logo_widescreens.png"
                @click="navigateTo('home')"
              />
            </li>
            <li>
              <a href="#" class="text-gradient" @click="navigateTo('coaching')"
                >Szkolenia</a
              >
            </li>

            <li>
              <a href="#" class="text-gradient" @click="navigateTo('gallery')"
                >Galeria</a
              >
            </li>

            <li>
              <a href="#" class="text-gradient" @click="navigateTo('contact')"
                >Kontakt</a
              >
            </li>
          </ul>
        </div>

        <div class="hamburger-menu pulse" role="navigation">
          <div class="menu-btn" @click="toggleMenu()">
            <div class="btn-line"></div>
            <div class="btn-line"></div>
            <div class="btn-line"></div>
          </div>
        </div>
      </div>

      <nav class="navigation">
        <div class="menu">
          <ul class="menu-nav" role="navigation">
            <ul>
              <li class="nav-item">
                <a
                  href="#"
                  class="nav-link"
                  @click="navigateTo('home'), toggleMenu()"
                  >O mnie</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="#"
                  class="nav-link"
                  @click="navigateTo('services'), toggleMenu()"
                  >Oferta</a
                >
              </li>

              <li class="nav-item">
                <a
                  href="#"
                  class="nav-link"
                  @click="navigateTo('pricing'), toggleMenu()"
                  >Cennik</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="#"
                  class="nav-link"
                  @click="navigateTo('coaching'), toggleMenu()"
                  >Szkolenia</a
                >
              </li>

              <li class="nav-item">
                <a
                  href="#"
                  class="nav-link"
                  @click="navigateTo('gallery'), toggleMenu()"
                  >Galeria</a
                >
              </li>

              <li class="nav-item">
                <a
                  href="#"
                  class="nav-link"
                  @click="navigateTo('contact'), toggleMenu()"
                  >Kontakt</a
                >
              </li>
            </ul>
          </ul>
        </div>
      </nav>
      <main class="content">
        <Home v-if="showHome" />
        <Pricing v-if="showPricing" />
        <Services v-if="showServices" />
        <Contact v-if="showContact" />
        <Coaching v-if="showCoaching" />
        <Gallery v-if="showGallery" />
        <PrivacyStatement v-if="showPrivacyStatement" />
        <RODO v-if="showRODO" />
      </main>

      <footer class="footer" v-if="showFooter">
        <div class="footer-container">
          <ul class="adress">
            <li class="text-gradient"><h3>Adres</h3></li>
            <li class="text-gradient">ul. Dziewulskiego 21</li>
            <li class="text-gradient">87-100 Toruń</li>
          </ul>
          <ul class="contact">
            <li class="text-gradient"><h3 id="kontakt">Kontakt</h3></li>
            <li class="text-gradient">
              <!-- <font-awesome-icon icon="phone-alt" class="icon" />  -->
              telefon: 577-274-727
            </li>
            <li class="text-gradient">mail: anna_zambrzycka@wp.pl</li>
          </ul>
          <ul class="working-hours">
            <li class="text-gradient"><h3>Godziny otwarcia</h3></li>
            <li class="text-gradient">Poniedziałek - Piątek: 9-20</li>
            <li class="text-gradient">Sobota - Niedziela: zamkniete</li>
          </ul>
          <ul role="navigation" class="footer-nav">
            <li>
              <a href="#" class="text-gradient" @click="navigateTo('home')"
                >O mnie</a
              >
            </li>
            <li>
              <a
                href="#"
                class="nav-link text-gradient"
                @click="navigateTo('services')"
                >Oferta</a
              >
            </li>
            <li>
              <a href="#" class="text-gradient" @click="navigateTo('pricing')"
                >Cennik</a
              >
            </li>
            <li>
              <a href="#" class="text-gradient" @click="navigateTo('coaching')"
                >Szkolenia</a
              >
            </li>

            <li>
              <a href="#" class="text-gradient" @click="navigateTo('gallery')"
                >Galeria</a
              >
            </li>

            <li>
              <a href="#" class="text-gradient" @click="navigateTo('contact')"
                >Kontakt</a
              >
            </li>

            <li>
              <a
                href="#"
                class="text-gradient"
                @click="navigateTo('privacyStatement')"
                >Polityka Prywatności</a
              >
            </li>

            <li>
              <a href="#" class="text-gradient" @click="navigateTo('RODO')"
                >RODO</a
              >
            </li>
          </ul>
          <v-btn icon dark large>
            <font-awesome-icon
              icon="arrow-alt-circle-up"
              class="button"
              @click="scrollToTop()"
            />
          </v-btn>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import Home from "./components/home.vue";
import Pricing from "./components/pricing.vue";
import Services from "./components/services.vue";
import Contact from "./components/contact.vue";
import Coaching from "./components/coaching.vue";
import Gallery from "./components/gallery.vue";
import PrivacyStatement from "./components/privacyStatement.vue";
import RODO from "./components/RODO.vue";

export default {
  name: "App",
  components: {
    Home,
    Pricing,
    Services,
    Contact,
    Coaching,
    Gallery,
    PrivacyStatement,
    RODO,
  },
  data() {
    return {
      showHome: true,
      showPricing: false,
      showServicesItems: false,
      showContact: false,
      showCoaching: false,
      showGallery: false,
      showFooter: true,
      showPrivacyStatement: false,
      showRODO: false,
      isActive: false,
    };
  },
  methods: {
    navigateTo(navigate) {
      switch (navigate) {
        case "home":
          this.showHome = true;
          this.showPricing = false;
          this.showServices = false;
          this.showContact = false;
          this.showCoaching = false;
          this.showGallery = false;
          this.showFooter = true;
          this.showPrivacyStatement = false;
          this.showRODO = false;
          break;
        case "pricing":
          this.showHome = false;
          this.showPricing = true;
          this.showServices = false;
          this.showContact = false;
          this.showCoaching = false;
          this.showGallery = false;
          this.showFooter = true;
          this.showPrivacyStatement = false;
          this.showRODO = false;
          break;
        case "services":
          this.showHome = false;
          this.showPricing = false;
          this.showServices = true;
          this.showContact = false;
          this.showCoaching = false;
          this.showGallery = false;
          this.showFooter = true;
          this.showPrivacyStatement = false;
          this.showRODO = false;
          break;
        case "contact":
          this.showHome = false;
          this.showPricing = false;
          this.showServices = false;
          this.showContact = true;
          this.showCoaching = false;
          this.showGallery = false;
          this.showFooter = true;
          this.showPrivacyStatement = false;
          this.showRODO = false;
          break;
        case "coaching":
          this.showHome = false;
          this.showPricing = false;
          this.showServices = false;
          this.showContact = false;
          this.showCoaching = true;
          this.showGallery = false;
          this.showFooter = true;
          this.showPrivacyStatement = false;
          this.showRODO = false;
          break;
        case "gallery":
          this.showHome = false;
          this.showPricing = false;
          this.showServices = false;
          this.showContact = false;
          this.showCoaching = false;
          this.showGallery = true;
          this.showFooter = true;
          this.showPrivacyStatement = false;
          this.showRODO = false;
          break;
        case "privacyStatement":
          this.showHome = false;
          this.showPricing = false;
          this.showServices = false;
          this.showContact = false;
          this.showCoaching = false;
          this.showGallery = false;
          this.showFooter = true;
          this.showPrivacyStatement = true;
          this.showRODO = false;
          break;
        case "RODO":
          this.showHome = false;
          this.showPricing = false;
          this.showServices = false;
          this.showContact = false;
          this.showCoaching = false;
          this.showGallery = false;
          this.showFooter = true;
          this.showPrivacyStatement = false;
          this.showRODO = true;
          break;
      }
      window.scrollTo(0, 0);
    },

    scrollToTop() {
      window.scrollTo(0, 0);
    },

    toggleMenu() {
      let header = document.querySelector(".header");
      let menuBtn = document.querySelector(".menu-btn");
      let menu = document.querySelector(".menu");
      let menuNav = document.querySelector(".menu-nav");

      let navItems = document.querySelectorAll(".nav-item");

      // MenuBtn Pulse Animation
      let hamburgerMenuPulse = document.querySelector(".hamburger-menu");

      if (!this.showMenu) {
        setTimeout(() => {
          header.classList.add("fixed");
          this.showFooter = false;
        }, 1000);

        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");
        navItems.forEach((item) => item.classList.add("show"));

        hamburgerMenuPulse.classList.remove("pulse");

        // Reset Menu State
        this.showMenu = true;
      } else {
        header.classList.remove("fixed");
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        navItems.forEach((item) => item.classList.remove("show"));

        // setTimeout(() => {
        //   hamburgerMenuPulse.classList.add("pulse");
        // }, 1000);

        // Reset Menu State
        this.showMenu = false;

        // Reset Services Dropdown
        // servicesItems.forEach((item) => item.classList.remove("display"));
        // this.showServicesItems = false;
        // this.showFooter = true;

        window.scrollTo(0, 0);
      }
    },
    // toggleServicesItems() {
    //   let servicesItems = document.querySelectorAll(".services-item");
    //   if (!this.showServicesItems) {
    //     servicesItems.forEach((item) => item.classList.add("display"));
    //     this.showServicesItems = true;
    //   } else {
    //     servicesItems.forEach((item) => item.classList.remove("display"));
    //     this.showServicesItems = false;
    //   }
    // },
  },
};
</script>

<style src="./scss/main.css" />
