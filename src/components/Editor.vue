<template>
  <div id="editor">
    <nav>
        <ol>
          <li v-for="(item, index) in resume.config" :class="{active: item.field === selected}" @click="selected = item.field">
            <svg class="icon">
              <use :xlink:href="`#icon-${item.icon}`"></use>
            </svg>
          </li>
        </ol>
    </nav>
    <ol class="panels">
      <li v-for="item in resume.config" v-show="item.field === selected">
        <h2 class="title">{{item.title}}</h2>
        <div v-if="resume[item.field] instanceof Array">
          <div class="subitem" v-for="(subitem, i) in resume[item.field]">
            <i class="el-icon-circle-close close-item" v-show="resume[item.field].length > 1" @click="removeItem(`${item.field}`, i)"></i>
            <div class="resumeField" v-for="(value,key) in subitem" v-if="key !== 'title'">
              <p class=""> {{key}} </p>
              <div class="field">
                <div class="control" >
                  <input class="input text" type="text" placeholder="input" :value="value" @input="changeResumeField(`${item.field}.${i}.${key}`, $event.target.value)"></input>
                </div>
              </div>
            </div>
            <hr>
          </div>

          <el-button type="primary" v-on:click="addItem(`${item.field}`)">添加一项</el-button>
        </div>
        <div v-else class="resumeField" v-for="(value, key) in resume[item.field]">
          <p class=""> {{key}} </p>
          <div class="field">
            <div class="control" >
              <input class="input text" type="text" placeholder="input" :value="value"  @input="changeResumeField(`${item.field}.${key}`, $event.target.value)"></input>
            </div>
          </div>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
  import ProfileEditor from './ProfileEditor'
  import ArrayEditor from './ArrayEditor'
   export default {
    components: { ProfileEditor , ArrayEditor },
     computed: {
       selected:{
         get() {
           return this.$store.state.selected;
         },
         set(value) {
           return this.$store.commit('switchTab', value);
         }
       },
       resume() {
         return this.$store.state.resume;
       }
     },
     methods: {
       changeResumeField(path, value) {
         console.log(path);
         this.$store.commit('updateResume', {
           path,
           value
         });
       },
       addItem(path) {
         this.$store.commit('addFieldItem', {path});
       },
       removeItem(path, index) {
         this.$store.commit('removeFieldItem', {path, index});
       }
     },
    // created()函数是组件被创建之后的回调函数
    created() {

    },

  }
</script>

<style lang="scss" rel="stylesheet/less">

  #editor{

    min-height: 100px;
    display: flex;
    > nav {
      background-color: #000;
      width: 80px;
      > ol > li {
        padding: 16px 0;
        text-align: center;
        &.active {
          background: #fff;
          > .icon {
            fill: #000;
          }
        }
      }
    }
    > .panels{
      flex-grow: 1;
      overflow: auto;
      > li {
        padding: 24px;
      }
      .subitem {
        position: relative;
      }
    }
    svg.icon{
      width: 24px; // 原设计稿 32px 不好看，改成 24px
      height: 24px;
    }
  }
  ol{
    list-style: none;
  }
  .resumeField{
    > label{
      display: block;
    }
    input[type=text]{
      margin: 16px 0;
      width: 100%;
      height: 40px;
      padding: 0 8px;
    }
  }
  hr{
    border: none;
    /*border-top: 1px solid #ddd;*/
    margin: 16px 0;
  }

  .close-item {
    position: absolute;
    right: 0px;
    top: 0px;
    &:hover {
      cursor: pointer;
    }
  }
</style>
