<template>
  <AppHeader ref="nav" v-on:clicked="isDarkEnabled($event)" />
  <AppWelcome ref="welcome" />
  <AppAbout ref="about" />
  <AppProjects ref="projects" />
  <!-- <AppOtherSkill ref="otherskill"/> -->
  <AppContact ref="contacts" />
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import AppWelcome from "../components/AppWelcome.vue";
import AppAbout from "../components/AppAbout.vue";
import AppProjects from "../components/AppProjects.vue";
import AppContact from "../components/AppContact.vue";
// import AppOtherSkill from '../components/AppOtherSkill.vue'

export default {
  name: "Vue  ",
  components: {
    AppHeader,
    AppWelcome,
    AppAbout,
    AppProjects,
    AppContact,
    // AppOtherSkill
  },
  props: ["isDark"],
  data() {
    return {
      isDarkMode: false,
      darkModeStorage: localStorage.getItem("darkMode"),
    };
  },
  methods: {
    isDarkEnabled(updatedMode) {
      if (this.isDarkMode == true && updatedMode == true) {
        this.disableDarkMode();
        this.isDarkMode = false;
      } else if (updatedMode == true) {
        this.enableDarkMode();
        this.isDarkMode = true;
      } else if (updatedMode == false) {
        this.disableDarkMode();
        this.isDarkMode = false;
      }
    },

    enableDarkMode() {
      const welcome = this.$refs.welcome;
      const nav = this.$refs.nav;
      const about = this.$refs.about;
      const projects = this.$refs.projects;
      // const otherskill = this.$refs.otherskill;
      const contacts = this.$refs.contacts;

      // console.log(nav.$refs.darkModeSvg.src);

      nav.$refs.nav.style.background = "#191919";
      welcome.$refs.welcome.style.background = "#191919";
      welcome.$refs.svg.style.fill = "#696969";
      about.$refs.about.style.background = "#3B444F";
      about.$refs.about.style.color = "white";
      projects.$refs.projects.style.background = "#303A48";
      projects.$refs.sectiontitle.style.color = "white";
      // otherskill.$refs.otherskillbox.style.background = "#3B444F";
      // otherskill.$refs.title.style.color = "white";
      contacts.$refs.contacts.style.background = "#191919";
      localStorage.setItem("darkMode", true);
      // console.log(contacts.$refs.contact.style);
    },

    disableDarkMode() {
      const welcome = this.$refs.welcome;
      const nav = this.$refs.nav;
      const about = this.$refs.about;
      const projects = this.$refs.projects;
      // const otherskill = this.$refs.otherskill;
      const contacts = this.$refs.contacts;

      nav.$refs.nav.style.background = null;
      welcome.$refs.welcome.style.background = null;
      welcome.$refs.svg.style.fill = null;
      about.$refs.about.style.background = null;
      about.$refs.about.style.color = null;
      projects.$refs.projects.style.background = null;
      projects.$refs.sectiontitle.style.color = null;
      // otherskill.$refs.otherskillbox.style.background = null;
      // otherskill.$refs.title.style.color = null;
      contacts.$refs.contacts.style.background = null;
      localStorage.setItem("darkMode", null);
    },
  },
  mounted() {
    if (this.darkModeStorage == "true") {
      this.enableDarkMode();
      this.isDarkMode = true;
    }
  },
};
</script>

<style lang="scss" global>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");

*,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}
.container {
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}

.btn-primary {
  padding: 10px 35px;
  border: none;
  background-color: $dark-green;
  font-size: 1.2rem;
  cursor: pointer;
  color: white;
  transition: all ease 0.3s;
}
</style>
