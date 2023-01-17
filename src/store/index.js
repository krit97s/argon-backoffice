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
import report from './report'
import payment from './payment'
import carousel from './carousel'
import anounce from './anounce'
import setting from './setting'
import auth from './auth'
import creditlog from './credit_log'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    creditlog,
    auth,
    setting,
    anounce,
    carousel,
    payment,
    report,
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