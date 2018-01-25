<template>
  <div>
    <h2>学习经历</h2>
        <el-form>
          <!-- 这个(item, index) 是vue定义的语法 -->
          <div class="container" v-for="(item, index) in items">

            <div class="field">
              <div class="control" v-bind:label="titles[key]" v-for="(value, key) in resume.studyHistory" >
                <input class="input text" type="text" placeholder="input" :value="value" @input="changeResumeField('studyHistory', key, $event.target.value)"></input>
              </div>
            </div>

            <!--<el-form-item label="学习">-->
              <!--<el-input v-model="item.school"></el-input>-->
            <!--</el-form-item>-->

            <!--<el-form-item label="学位">-->
              <!--<el-input v-model="item.degree"></el-input>-->
            <!--</el-form-item>-->

            <!--<el-form-item label="时间">-->
              <!--<el-input v-model="item.duration"></el-input>-->
            <!--</el-form-item>-->
            <!-- 这里传的是一个removeitems(index)函数调用，而在下面的additems 传的是函数名，这是Vue自己支持的两种调用方法-->
            <!--<i class="fa fa-times-circle" aria-hidden="true"></i>-->
            <!--<i class="el-icon-circle-close" v-on:click="removeItem(index)"></i>-->
          </div>
          <hr>
          <el-button type="primary" v-on:click="addItem()">添加一项</el-button>
        </el-form>
  </div>
</template>

<script>
  export default {

    return {
      titles: {
        school: '学习',
        degree: '学位',
        duration: '时间'
      }
    }
    methods: {
      addItem() {
        this.items.push({
          school: '', duration: '', degree: ''
        })
      },
      removeItem(index) {
        this.items.splice(index, 1)
      },
      changeResumeField(field, subfield, value) {
        this.$store.commit('updateResume', {
          field,
          subfield,
          value
        })
      }
    },
    computed: {
      resume() {
        return this.$store.state.resume;
      }
    },
  }


</script>
