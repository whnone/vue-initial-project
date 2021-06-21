<template>
    <div id="login">
        <div>
            <img class="login-bk" :src="bkUrl" title="黑岩" @click="login">
        </div>
    </div>
</template>
<script>
import bkUrl from '../assets/images/BR-SHOOTER.jpg'
export default {
    data () {
        return {
            bkUrl
        }
    },
    methods: {
        login() {
            this.$message.success('登陆成功')
            this.$router.push(`/${this.$lang}/map-manage/map`)
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
.login-bk{
    width: 100%;
    height: auto;
}
</style>
