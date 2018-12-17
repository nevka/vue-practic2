import Vue from 'vue'
import App from './App'
import BuyDialogComponent from './components/Common/BuyDialog'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase/app'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.component('app-buy-dialog', BuyDialogComponent)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    var config = {
      apiKey: 'AIzaSyD0GL_YLRm8yixk237TPvhzrC2Ab9YJp1g',
      authDomain: 'vue-practic2.firebaseapp.com',
      databaseURL: 'https://vue-practic2.firebaseio.com',
      projectId: 'vue-practic2',
      storageBucket: 'vue-practic2.appspot.com',
      messagingSenderId: '729556122653'
    }
    fb.initializeApp(config)

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })

    this.$store.dispatch('fetchProducts')
  }
})
