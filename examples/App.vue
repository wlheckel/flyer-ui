<template>
  <div id="app">
    <fly-container>
      <fly-header>
        <fly-head></fly-head>
      </fly-header>
      <fly-container direction="vertical">
        <fly-aside>
          <fly-menu :data='navData'></fly-menu>
        </fly-aside>
        <fly-main>
          <router-view></router-view>
        </fly-main>
      </fly-container>
      <fly-footer>
        <fly-bottom></fly-bottom>
      </fly-footer>
    </fly-container>
  </div>
</template>

<script>
import FlyHead from '@/components/header'
import FlyMenu from '@/components/menu'
import FlyBottom from '@/components/footer'
import routes from './router.config.json'
import pages from './pages.config.json'

export default {
  components: {
    FlyHead,
    FlyMenu,
    FlyBottom
  },
  computed: {
    navData () {
      const currentLang = this.$route.params.lang || 'cn'
      const data = [].concat.apply(pages[currentLang], routes[currentLang])
      return data.filter((route) => { return !route.pending })
    }
  },
  name: 'App'
}
</script>

<style lang='scss'>
html,body,#app{
  height:100%;
}
 .fly-container {
    min-height:100%;
  }
.fly-main{
  padding:0px 10px;
}
  @import '~/components/themes/src/base/fly-variable.scss';
@import '~/components/themes/src/base/fly-bem.scss';
@import url('assets/css/common.scss');
body,#app{
  color:$font-color-common;
}
@include b('demo-table'){
    width:100%;
    border:1px solid #dedede;
    border-bottom:0px;
    margin:0px;
    padding:0px;
    border-collapse:collapse;
    th{
        background-color:#fafafa;
    }
    td,th{
        text-align:left;
        border:0px;
        padding:10px 15px;
        box-sizing:border-box;
        border-spacing:0px;
        border-bottom:1px solid #dedede;
    }
}
@include b('demo-icon'){
    [class^="fly-icon-"]{
        font-size:2em;
        margin:0 15px;
    }
    ul{
      list-style-type:none;
      margin:0px;
      padding:0px;
      border-top:1px solid $fly-color-border;
      border-left:1px solid $fly-color-border;
      &:after{
      content:'';
      display:block;
      clear:both;
    }
    }
    li{
      float:left;
      width:16.66%;
      text-align:center;
      padding:10px 0px;
      box-sizing:border-box;
      border-right:1px solid $fly-color-border;
      border-bottom:1px solid $fly-color-border;
      div{
        color:$font-color-common;
        margin:10px 0px;
      }
    }
}
code{
    overflow: visible;
    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;
    font-size: 14px;
    color: #24292e;
    word-wrap: normal;
    white-space: pre;
}
pre{
  border-radius: $fly-round-default-size;
  border:1px solid $fly-color-border;
}
.fly-logs{
    margin:10px;
}
.fly-logs__items{
  margin:5px;
  line-height:24px;
}
</style>
