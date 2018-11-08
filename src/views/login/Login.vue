<template>
    <div class="login">
        <div class="login-con">
            <Card icon="log-in" title="欢迎登录" :bordered="false">
                <div class="form-con">
                    <login-form @on-success-valid="handleSubmit"></login-form>
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
import LoginForm from "./LoginForm";
import { mapActions } from "vuex";
export default {
  components: {
    LoginForm
  },
  methods: {
    ...mapActions(["handleLogin", "getUserInfo"]),
    handleSubmit({ userName, password }) {
      this.handleLogin({ userName, password })
        .then(res => {
          this.getUserInfo()
            .then(res => {
              this.$router.push({
                name: this.$config.homeName
              });
            })
            .catch(error => {
              alert("获取用户信息失败");
            });
        })
        .catch(error => {
          alert("登陆失败");
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/images/loginbg.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
  &::after{
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba($color: #000000, $alpha: 0.5)
  }
  &-con {
    position: absolute;
    right: 160px;
    top: 50%;
    transform: translateY(-60%);
    width: 300px;
    z-index: 100;
    &-header {
      font-size: 16px;
      font-weight: 300;
      text-align: center;
      padding: 30px 0;
    }
    .form-con {
      padding: 10px 0 0;
    }
    .login-tip {
      font-size: 10px;
      text-align: center;
      color: #c3c3c3;
    }
  }
}
</style>
