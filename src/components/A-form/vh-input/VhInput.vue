<template>
    <div>
        <input :value="value" :type="type" @input="onInput">
    </div>
</template>
<script>
    export default {
        props: {
            value: {
                type: String
            },
            type: {
                type: String,
                default: 'text'
            }
        },
        methods: {
            onInput (e) {
                // 派发事件，通知父组件输入值变更
                this.$emit('input', e.target.value)
                // 通知父组件校验
                this.$parent.$emit('validate')
            }
        }
    }
</script>
<style>
</style>
