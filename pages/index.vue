<template>
  <v-layout
    column
    justify-center
    align-center
    class = "index"
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <div >
        <vuetify-logo />
        <v-btn
            @click="newPage = !newPage"
            color="deep-purple darken-1"
            class="ma-2 white--text" 
          >
            <v-icon left dark>mdi-file-document-box-plus-outline</v-icon>
            New Page Checklist
        </v-btn>
        <v-btn
            color="deep-purple darken-2"
            class="ma-2 white--text" 
          >
            <v-icon left dark>mdi-wrench</v-icon>
            Pre-Dev Checklist
        </v-btn>
        <v-btn
            color="deep-purple darken-3"
            class="ma-2 white--text" 
          >
            <v-icon left dark>mdi-cogs</v-icon>
            Pre-Go-Live Checklist
        </v-btn>

        <v-btn
            color="deep-purple darken-4"
            class="ma-2 white--text" 
          >
            <v-icon left dark>mdi-flag-checkered</v-icon>
            Go-Live Checklist
        </v-btn>
        <WebPageCheckList v-if="newPage" />

        <tasks  />
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import Tasks from '~/components/Tasks.vue'
import WebPageCheckList from '~/components/WebPageCheckList.vue'

export default {
  name: 'index',
  components: {
    Logo,
    VuetifyLogo,
    Tasks,
    WebPageCheckList
  },
  data () {
    return {
      newPage: ''
    }
  },
  method() {
  } 
}
</script>

<style>
.centered-text {
  text-align: center;
}

td, tr {
  border: 1px solid #fff;
}
</style>