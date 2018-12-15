<template>
  <v-app>
    <NavBar></NavBar>
    <template v-if="error">
      <v-snackbar :multi-line="true" :timeout="5000" color="error" @input="closeError" :value="true">
        {{error}}
        <v-btn dark flat @click.native="closeError">Закрыть</v-btn>
      </v-snackbar>
    </template>
  </v-app>
</template>

<script>
  import NavBar from './components/NavBar'
  export default {
    components: {
      NavBar
    },
    computed: {
      error () {
        return this.$store.getters.error
      }
    },
    method: {
      closeError () {
        this.$store.dispatch('clearError')
      }
    }
  }
</script>
