<template>
  <div>


    <form>
      <div class="row">
        <label>用户名</label>
        <input type="text" required v-model="formData.username">
      </div>
      <div class="row">
        <label>密码</label>
        <input type="password" required v-model="formData.password">
      </div>
      <div class="signInActions">
        <button @click.prevent="cancel">取 消</button></a>
        <button @click.prevent="signIn" class="active">登 录</button></a>
      </div>
    </form>
  </div>
</template>

<script>
  import AV from '../lib/leancloud'
  import getErrorMessage from '../lib/getErrorMessage'
  import getAVUser from '../lib/getAVUser'

  export default {
    name: 'SignInForm',
    data() {
      return {
        formData: {
          username: '',
          password: ''
        },
        errorMessage: '',
        formLabelWidth: '120px'
      }
    },
    methods: {
      signIn() {
        let {username, password} = this.formData;
        AV.User.logIn(username, password).then(() => {
          this.$emit('success', getAVUser())
        }, (error) => {
          this.errorMessage = getErrorMessage(error.code);
          this.open4(this.errorMessage);
        });
      },
      cancel() {
        this.$emit('cancel');
      },
      open4(error) {
        this.$message.error(error);
      }


    }
  }
</script>

<style lang="scss" rel="stylesheet/less">
  form {
    .row {
      display: flex;
      justify-content: space-between;
      margin: 10px 0;
      input {
        margin-left: 10px;
      }
    }
    .signInActions{
      text-align: center;
    }
    button {
      margin-right: 5px;
      padding: 5px 20px;
      border-radius: 5px;
      background: #fff;
      border: 1px solid #ddd;
      color: #888888;
      font-size: 18px;
      &:hover {
        cursor: pointer;
        border: 1px solid #156bdd;
      }
      &.active {
        background: #156bdd;
        color: #fff;
        &:hover {
          background: #3386dd;
        }
      }
    }
  }
</style>
