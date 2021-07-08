<template lang="jade">
    div#login
        div.login-back
            //- img.login-bk(
            //-     :src="bkUrl"
            //-     title="黑岩"
            //-     @click="login"
            //- )
            div.login-content
                el-form(
                    ref="ruleForm",
                    :model="form"
                )
                    el-form-item(prop="username")
                        el-input(
                            v-model="form.username"
                            size="large"
                            placeholder="账号"
                        )
                    el-form-item(prop="password")
                        el-input(
                            v-model="form.password"
                            size="small"
                            placeholder="密码"
                        )
                    el-form-item
                        el-button.circle(@click="submit") 提交
</template>
<script>
import bkUrl from '../assets/images/BR-SHOOTER.jpg'
import api from '../api'
export default {
    data () {
        return {
            bkUrl,
            form: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        async submit() {
            const {resultCode, data, message} = await api.authLogin(this.form)
            if (resultCode !== '1') return this.$message.error(message)
            this.$message.success('登录成功')
            this.login()
        },
        login() {
            this.$router.replace(`/${this.$lang}/map-manage/map`)
        }
    }
}
</script>
<style scoped>
#login{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 97vh;
}
#login>div{
    width: 100%;
    height: 600px;
    overflow: hidden;
}
.login-back{
    position: relative;
    top: 0;
    left: 0;
}
.login-content{
    position: absolute;
    left: calc(50% - 150px);
    top: 20vh;
    z-index: 2;
}
.login-bk{
    width: 100%;
    height: auto;
}
.circle{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    text-align: center;
    padding: 0;
    margin-left: calc(50% - 30px);
}
</style>
