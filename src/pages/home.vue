<template lang="jade">
    el-container(
        style="height: 97vh; border: 1px solid #eee"
    )
        el-aside(
            width="200px"
            style="background-color: rgb(238, 241, 246)"
        )
            div.avatar-box
                el-avatar(:src="avatar")
            el-menu(:default-active="active")
                el-submenu(
                    v-for="(item, index) in Menus",
                    :key="index",
                    :index="item.index"
                )
                    template(slot="title")
                        i(:class="`el-icon-${item.icon}`")
                        span {{item.title}}
                    router-link(
                        v-for="(subItem, subIndex) in item.subMenus",
                        :key="subIndex",
                        :to="`/${$lang}/${subItem.url}`"
                    )
                        el-menu-item(:index="subItem.index") {{subItem.title}}

        el-container
            el-header
                span {{$route.meta.title}}
                span Neo

            el-main
                router-view
</template>
<script>
import avatar from '../assets/images/avatar.jpeg'
import {Menus} from '../config'
export default {
    data() {
        return {
            avatar,
            Menus
        }
    },
    computed: {
        active: function() {
            console.log(this.$route.meta.index)
            return this.$route.meta.index
        }
    }
}
</script>

<style scoped>
.avatar-box{
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
}
.el-header {
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    font-size: 14px;
    color: #333;
    background-color: #B3C0D1;
}
.el-menu a{
    text-decoration: none;
}
.el-aside {
    color: #333;
}
</style>
