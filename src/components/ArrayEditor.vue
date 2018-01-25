<template>
  <div>
    <h2>{{title}}</h2>
        <el-form>
          <!-- 这个(work, index) 是vue定义的语法 -->
          <div class="container" v-for="(work, index) in items" v-bind:key="index">
            <el-form-item v-for="key in keys" v-bind:label="labels[key] || key" v-bind:key="key">
              <el-input v-model="work[key]"></el-input>
            </el-form-item>

            <!-- 这里传的是一个removeitems(index)函数调用，而在下面的additems 传的是函数名，这是Vue自己支持的两种调用方法-->
            <i class="el-icon-circle-close" v-on:click="removeItems(index)"></i>
          </div>
          <hr>
          <el-button type="primary" v-on:click="addItems()">添加一项</el-button>
        </el-form>
  </div>
</template>

<script>
  export default {
    props: ['items', 'labels', 'title'],
    computed: {
      // keys 其实是一个计算属性
      keys() {
        return Object.keys(this.items[0]);
      }
    },
    methods: {
      addItems() {
        const empty = {}
        // 所以在此处使用的是keys，而不是keys()
        this.keys.map( (key) => {
          empty[key] = ''
        });
        this.items.push(empty);
      },
      removeItems(index) {
        this.items.splice(index, 1)
      }
    }
  }


</script>