<template>
  <!--<div>-->
    <div id="app" v-bind:class="{previewMode: previewMode}">
      <Topbar class="topbar" v-on:preview="preview"/>
      <div class="main">
        <Editor class="editor"/>
        <Preview class="preview"/>
      </div>
      <el-button id="exitPreview" v-on:click="exitPreview">退出预览</el-button>
      <!-- router-view 用来显示路由信息，如果需要路由跳转 -->
      <!-- 则使用 <router-link to=xxx></router-link> -->
      <router-view></router-view>
    </div>
  <!--</div>-->
</template>

<script>
  import 'normalize.css'
  import './assets/reset.css'
  import Topbar from './components/Topbar'
  import Editor from './components/Editor'
  import Preview from './components/Preview'
  import icons from './assets/icons'
  import store from './store/index'
  import AV from './lib/leancloud'
  import getAVUser from './lib/getAVUser'


  export default {
    data() {
      return {
        previewMode: false,
      }
    },
    name: 'app',
    methods: {
      preview() {
        console.log('hhh');
        this.previewMode = true;
      },
      exitPreview() {
        this.previewMode = false;
      }
    },
    // 导入store，它会被注入所有子组件中
    store,
    components: { Topbar,  Editor,  Preview},
    created(){
      document.body.insertAdjacentHTML('afterbegin', icons);
      let state = localStorage.getItem('state');
      if (state) {
        state = JSON.parse(state);
      }
      this.$store.commit('initState', state);
      this.$store.commit('setUser', getAVUser());
    }

  }
</script>

<style lang="scss" rel="stylesheet/less">

  html, body, #app {
    height: 100%;
    overflow: hidden;
  }
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  #app #topbar {
    position: relative; z-index: 1;
    box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
  }

  #app .main{
    display: flex;
    flex: 1;
    background: #DDD;

    > #editor {
      width: 40em;
      margin: 16px 8px 16px 16px ;
      background: #fff;
      border-radius: 4px;
      overflow: hidden;
    }

    > #preview {
      flex: 1;
      margin: 16px 16px 16px 8px;
      background: #fff;
      border-radius: 4px;
      overflow: auto;
    }
  }

  .previewMode > #topbar {
    display: none;
  }
  .previewMode #editor {
    display: none;
  }

  .previewMode .main #preview {
    max-width: 800px;
    margin: 32px auto !important;
    padding: 40px;
  }

  #exitPreview {
    display: none;
  }
  .previewMode #exitPreview {
    display: inline-block;
    position: fixed;
    right: 10px;
    bottom: 10px;

  }

  svg.icon{
    height: 1em;
    width: 1em;
    fill: #fff;
    vertical-align: -0.1em;
    font-size: 16px;
  }
</style>


