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
      'g-button': Button
    },
    methods: {
      onClickButton() {
        this.$toast('<strong style="color: red">加粗的提示</strong>', {
          enableHtml: true
        })
      }
    }
  }
</script>