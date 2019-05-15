import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user.js';//引入某个store对象

Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    user: user
  }
})
