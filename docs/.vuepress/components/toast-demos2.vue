<template>
  <div>
    <g-button @click="onClickButton">上方弹出</g-button>
  </div>
</template>
<script>
  import Button from '../../../src/button'
  import plugin from '../../../src/plugin'
  import Vue from 'vue'
  Vue.use(plugin)
  export default {
    components: {
      'g-button': Button,
    },
    methods:{
      onClickButton () {
        this.$toast('你知道我在等你吗？', {
          closeButton: {
            text: '知道了',
            callback: () => {
              console.log('他说知道了')
            }
          }
        })
      }
    }
  }
</script>