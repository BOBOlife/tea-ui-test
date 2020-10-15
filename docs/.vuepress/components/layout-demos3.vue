<template>
  <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
    <g-sider style=" background:#3e98af; width:200px; color: black;">
      sider
    </g-sider>
    <g-layout>
      <g-header style="height: 50px; background:lightskyblue;">
        header
      </g-header>
      <g-content style="height: 100px; background:deepskyblue;">
        content
      </g-content>
      <g-footer style="height: 50px; background:lightskyblue;">
        footer
      </g-footer>
    </g-layout>
  </g-layout>
</template>
<script>
  import Layout from '../../../src/layout'
  import Sider from '../../../src/sider'
  import Header from '../../../src/header'
  import Content from '../../../src/content'
  import Footer from '../../../src/footer'

  export default {
    components: {
      'g-layout': Layout,
      'g-header': Header,
      'g-footer': Footer,
      'g-sider': Sider,
      'g-content': Content
    }
  }
</script>