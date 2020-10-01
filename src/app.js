import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Footer from './footer'
import Sider from './sider'
import Content from './content'
import Toast from './toast'
import plugin from './plugin'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-footer', Footer)
Vue.component('g-sider', Sider)
Vue.component('g-content', Content)
Vue.component('g-header', Header)
Vue.component('g-toast', Toast)
Vue.use(plugin)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message: 'ha'
  },
  created() {
  },
  methods: {
    showToast1() {
      this.showToast('top')
    }, showToast2() {
      this.showToast('middle')
    }, showToast3() {
      this.showToast('bottom')
    },
    showToast(position) {
      this.$toast('你的智商需要交税', {
        enableHtml: false,
        closeButton: {
          text: '已交税',
          callback() {
            console.log('已经冲了对吧')
          }
        },
        autoClose: true,
        autoCloseDelay: 3,
        position
      })
    }
  }
})


