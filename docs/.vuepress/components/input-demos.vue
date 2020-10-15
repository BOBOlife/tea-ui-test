<template>
  <div>
    <g-input class="gap" value="中文"></g-input>
    <g-input class="gap" value="中文" disabled></g-input>
    <g-input class="gap" value="中文" readonly></g-input>
    <g-input class="gap" value="错误信息" error="这里是错误信息" ></g-input>
    <br>
    <g-input v-model="value"></g-input>
    <div>
      value: {{value}}
    </div>
  </div>
</template>

<script>
  import Input from '../../../src/input'

  export default {
    components: {
      'g-input': Input
    },
    data() {
      return {
        value: '双向绑定'
      }
    }
  }
</script>

<style lang="scss" scoped>
.gap{
  margin: 5px 0;
}
</style>