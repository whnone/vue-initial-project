<template>
    <div class="form-manage">
        <VhForm :model="model" :rules="rules" ref="vhForm">
            <vhFormItem label='账号:' prop="username">
                <VhInput v-model="model.username" />
            </VhFormItem>
            <VhFormItem label='密码:' prop="password">
                <VhInput type="password" v-model="model.password" />
            </VhFormItem>
        </Vhform>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                model: {
                    username: 'wxaa',
                    password: '1234567'
                },
                rules: {
                    username: [{
                        required: true,
                        message: '请输入用户名'
                    }],
                    password: [{
                        required: true,
                        message: '请输入密码'
                    }]
                }
            }
        }
    }
</script>
<style>
.form-manage{
    width: 90vw;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
