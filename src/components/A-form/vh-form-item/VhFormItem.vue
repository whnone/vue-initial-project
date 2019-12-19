<template>
    <div class="form-item">
        <div>
            <div class="form-item-label" v-show="label">{{label}}</div>
            <slot></slot>
        </div>
        <p class="form-error" v-if="error">{{error}}</p>
    </div>
</template>
<script>
    import AsyncValidator from 'async-validator'
    export default {
        inject: ['form'],
        props: {
            label: String,
            prop: String
        },
        data () {
            return {
                error: ''
            }
        },
        mounted () {
            this.$on('validate', this.validate)
        },
        methods: {
            validate () {
                // 1.获取校验规则
                const rule = this.form.rules[this.prop]

                // 2.获取数据模型
                const value = this.form.model[this.prop]

                // 3.校验对象的创建
                const descriptor = {[this.prop]: rule}

                // 4.创建校验器
                const asyncValidator = new AsyncValidator(descriptor)

                // 5.校验
                asyncValidator.validate({[this.prop]: value}, errors => {
                    if (errors) {
                        this.error = errors[0].message
                    } else {
                        this.error = ''
                    }
                })
            }
        }
    }
</script>
<style scoped>
.form-item{
    margin: 8px 0;
}
.form-item>div{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}
.form-item-label{
    width: 90px;
    text-align: right;
    margin-right: 10px;
    font-size: 14px;
}
.form-error{
    color: red;
    font-size: 13px;
}
</style>
