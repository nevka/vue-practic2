import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/product'
import user from './modules/user'
import common from './modules/common'
import oders from './modules/orders'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products,
    user,
    common,
    oders
  }
})
