<template>
  <div>
    <h2>个人信息</h2>
    <form>

      <div class="field">
        <div class="control" v-bind:label="titles[key]" v-for="(value, key) in resume.profile" >
          <input class="input text" type="text" placeholder="input" :value="value" @input="changeResumeField('profile', key, $event.target.value)"></input>
        </div>
      </div>

      <!--<el-form-item label="姓名">-->
          <!--<el-input v-model="profile.name"></el-input>-->
      <!--</el-form-item>-->
      <!--<el-form-item label="城市">-->
          <!--<el-input v-model="profile.city"></el-input>-->
      <!--</el-form-item>-->
      <!--<el-form-item label="出生年月">-->
          <!--<el-input v-model="profile.birth"></el-input>-->
      <!--</el-form-item>-->
    </form>
  </div>
</template>

<script>
  import bulma from 'bulma';
  export default {
    components: {bulma},
    // 这句话表示：我允许从外面接受一个名为profile的变量
    // 就是别的组件向本组件传递数据
    props: ['profile'],
    data() {
      return {
        titles: {
          name: '名字',
          city: '城市',
          birth: '生日'
        }
      }
    },
    computed: {
      resume() {
        return this.$store.state.resume
      }
    },
    methods: {
      changeResumeField(field, subfield, value) {
        this.$store.commit('updateResume', {
          field,
          subfield,
          value
        })
      }
    }
  }
</script>

<style>
  .input{
    margin: 10px 0;
  }
</style>


