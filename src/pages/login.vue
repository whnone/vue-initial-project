<template>
    <div class="login-content">
        <input type="text" v-model="form.name">
        <input type="text" v-model="form.password">
        <button @click="sumit">提交</button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                form: {
                    name: '',
                    password: ''
                }
            }
        },
        methods: {
            sumit () {
                console.log(this.form)
            }
        }
    }
</script>