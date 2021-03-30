<template>
  <div class="menu top-right">
    <!-- <ul class="menu-nav">
      <li ref="greeting" class="nav-item">
        <a href="#" class="nav-link" @click="$emit('navigate', 'greeting')"
          >Home
        </a>
      </li>

      <li ref="showcase" class="nav-item">
        <a href="#" class="nav-link" @click="$emit('navigate', 'showcase')"
          >Galleries
        </a>
      </li>

      <li ref="about" class="nav-item">
        <a href="#" class="nav-link" @click="$emit('navigate', 'about')"
          >About me
        </a>
      </li>

      <li ref="contact" class="nav-item">
        <a href="#" class="nav-link" @click="$emit('navigate', 'contact')"
          >Contact
        </a>
      </li>
    </ul> -->
  </div>
</template>
<script>
export default {
  name: "menu",
  data() {
    return {
      showMenu: false,
      home: true,
      products: false,
      about: false,
      contact: false,
    };
  },
  methods: {
    toggleMenu() {
      let menuBtn = document.querySelector(".menu-btn");
      let menu = document.querySelector(".menu");
      let menuNav = document.querySelector(".menu-nav");

      let navItems = document.querySelectorAll(".nav-item");

      if (!this.showMenu) {
        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");
        navItems.forEach((item) => item.classList.add("show"));

        // Reset Menu State
        this.showMenu = true;
      } else {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        navItems.forEach((item) => item.classList.remove("show"));

        // Reset Menu State
        this.showMenu = false;

        // Reset Contact State
        this.showContact = false;
      }
    },

    highlight(showMain, showAbout, showContact, showWork) {
      this.main = showMain;
      this.about = showAbout;
      this.contact = showContact;
      this.work = showWork;
    },
  },
};
</script>
