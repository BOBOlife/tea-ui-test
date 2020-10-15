<template>
    <g-button-group>
      <g-button icon="left">上一页</g-button>
      <g-button>默认按钮</g-button>
      <g-button icon="right" icon-position="right">下一页</g-button>
    </g-button-group>
</template>

<script>
  import Button from '../../../src/button'
  import ButtonGroup from '../../../src/button-group'

  export default {
    components: {
      'g-button': Button,
      'g-button-group': ButtonGroup

    }
  }
</script>
