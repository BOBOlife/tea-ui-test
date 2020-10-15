<template>
  <div class="response-wrapper">
    <g-row class="row">
      <g-col class="item"
             span="24"
             :ipad="{span:8}"
             :narrow-pc="{span:4}"
             :pc="{span: 2}"
             :wide-pc="{span:1}"
      >
        col
      </g-col>
      <g-col class="item"
             span="24"
             :ipad="{span:16}"
             :narrow-pc="{span:20}"
             :pc="{span: 20,offset:2}"
             :wide-pc="{span:21}"
      >
        col
      </g-col>
    </g-row>
  </div>
</template>
<script>
  import row from '../../../src/row'
  import col from '../../../src/col'

  export default {
    components:{
      'g-row':row,
      'g-col':col
    }
  }
</script>
<style lang="scss" scoped>
  $background: #3eaf7c;
  $wrapper-top: 10px;
  $font-color: white;
  * { box-sizing: border-box; }
  .response-wrapper { padding-top: $wrapper-top;
    > .row {
      > .item { text-align: center; color: $font-color;
        > span { display: block; background: $background; }
      }
    }
  }
</style>
