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
import Tags from './tabs'
import TagsHead from './tabs-head'
import TagsBody from './tabs-body'
import TagsItem from './tabs-item'
import TagsPane from './tabs-pane'

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
Vue.component('g-tabs', Tags)
Vue.component('g-tabs-head', TagsHead)
Vue.component('g-tabs-body', TagsBody)
Vue.component('g-tabs-item', TagsItem)
Vue.component('g-tabs-pane', TagsPane)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message: 'ha',
    selectedTab: 'sports'
  },
  created() {
  },
  methods: {
    yyy(){

    },
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
        autoClose: 3,
        position
      })
    }
  }
})


