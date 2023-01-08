import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import dashboard from './dashboard'
import order from './order'
import product from './product'
import category from './category'
import invest from './invest'
import source from './source'
import deposit from './deposit'
import marketing from './marketing'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    marketing,
    deposit,
    source,
    invest,
    category,
    dashboard,
    order,
    product
  },
  strict: process.env.DEV,
})