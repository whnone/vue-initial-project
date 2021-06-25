<template lang="jade">
el-container(
    class="manage-container container analysis-manage"
)
    el-container
        el-header(
            class="manage-list-header",
            height="36px"
        )
            .header-left
                h3 {{$route.meta.title}}
            .header-right
        el-main.main.el_main
            el-form(
                ref="form",
                label-width="100px"
            )
                el-form-item(
                    label="OpenId:"
                )
                    el-input( v-model="url" )

</template>
<script>
export default {
    data() {
        return {
            loading: false,
            url: ''
        }
    },
    methods: {}
}
</script>
<style lang="scss" scoped>
</style>
