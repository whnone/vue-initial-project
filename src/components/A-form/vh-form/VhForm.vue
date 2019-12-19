<template>
    <form>
        <slot></slot>
    </form>
</template>
<script>
    export default {
        // 把表单实例作为参数传递下去
        provide () {
            return {
                form: this
            }
        },
        props: {
            model: {
                type: Object,
                required: true
            },
            rules: {
                type: Object
            }
        }
    }
</script>
<style>
</style>
