<template>
<div class='fly-demo-menus'>
  <ul class='fly-demo-menus__list'>
    <li v-for='(item,index) in data' :key='index' :class='`fly-demo-menus__${item.type}`'>
      <h3 v-if='item.type==="header"'>
        <span v-if='item.path==="/"'>
         {{item.text}}
       </span>
        <router-link v-else :to='getPath(item)'>
          {{item.text}}
        </router-link>
      </h3>
      <span v-if='item.type==="notice"' class='fly-demo-menus__notice'>
          {{item.text}}
      </span>
      <span v-if='item.type==="item"'>
          <router-link :to='getPath(item)' :class='{"is-pending":item.pending}'>{{item.text}}</router-link>
        </span>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'FlyMenu',
  props: {
    data: Array
  },
  methods: {
    getPath (item) {
      return `/${this.$route.params.lang}/${item.path}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/components/themes/src/base/fly-variable.scss';
@import '~/components/themes/src/base/fly-bem.scss';

@include b('demo-menus') {
  min-width: 300px;
  box-sizing: border-box;
  padding: 10px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    z-index: 1;
    top: 10px;
    right: 1px;
    bottom: 10px;
    border-right: 1px solid $fly-color-border;
  }

  h3 {
    font-size: 16px;
  }

  @include e('list') {
    list-style-type: none;
    margin: 0px;
    padding: 0px 10px;
    box-sizing: border-box;
  }

  @include e('header') {
    a {
      color: #000;
    }

    a.router-link-active {
      color: $fly-primary-color;
    }
  }

  @include e('item') {
    line-height: 36px;
    padding-left: 10px;
    cursor: pointer;

    a:hover {
      color: $fly-primary-color;
    }

    a.router-link-active {
      color: $fly-primary-color;
    }

    .is-pending {
      color: $font-color-placeholder;
    }
  }
  @include e('notice'){
    color:$font-color-placeholder;
    font-size:$fly-font-assist_text-size;
    line-height: 36px;
  }
}
</style>
