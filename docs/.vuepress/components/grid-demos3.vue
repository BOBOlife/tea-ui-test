<template>
  <div class="align-wrapper">
    <g-row class="row" align="left">
      <g-col class="item" span="8">left</g-col>
      <g-col class="item" span="8">left</g-col>
    </g-row>
    <g-row class="row" align="center">
      <g-col class="item" span="8">center</g-col>
      <g-col class="item" span="8">center</g-col>
    </g-row>
    <g-row class="row" align="right">
      <g-col class="item" span="8">right</g-col>
      <g-col class="item" span="8">right</g-col>
    </g-row>
  </div>
</template>

<script>
  import col from '../../../src/col'
  import row from '../../../src/row'

  export default {
    components: {
      'g-col': col,
      'g-row': row
    }
  }
</script>

<style lang="scss" scoped>
  $background: #3eaf7c;
  * { box-sizing: border-box; }
  .align-wrapper{ text-align: center; color: white;
    .row{ padding-top: 10px;
      > .item { text-align: center; color: white;
        &:nth-child(odd){ background: $background; }
        &:nth-child(even){ background: lighten($background,20%); color: black; }
      }
    }
  }
</style>