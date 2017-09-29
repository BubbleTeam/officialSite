<template>
    <div class="m-header">
        <div class="logo"></div>
        <ul class="nav f-cb">
            <li :class="{current: curNav === item.key}" v-for="item in navList">
                <router-link :to="item.url">{{ item.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import Vue from 'vue';

export default {
    props: [
        'current',   // 表示默认的当前 Nav
        'extendNav'  // 表示扩展追加的 Nav
    ],
    data() {
        let navList = [
            { name: '主页', key: 'home', url: '/' },
            { name: '博文', key: 'blog', url: '/blog' },
            { name: '作品', key: 'work', url: '/work' },
            { name: '关于', key: 'about', url: '/about' }
        ];
        if (this.extendNav) {
            navList = [...navList, ...extendNav];
        }
        const curNav = this.current || navList[0].key;
        return {
            curNav,
            navList
        }
    }
};
</script>

<style scoped lang="less">
@height: 70px;
@highlightColor: #6173E8;
.m-header {
    display: flex; overflow: hidden; justify-content: space-between;
    width: 100%; height: @height;
    background: #FFF; box-shadow: 0 0 5px #999;
    .logo {
        width: 170px; height: 50px; margin: 10px 20px;
        background: url('images/logo.png') no-repeat ~"0 0 / auto 50px";
    }
    .nav {
        height: @height;
        margin: 0 20px;
        li {
            float: left;
            margin: 0 20px;
            &.current a, &:hover a {
                border-bottom: 5px solid @highlightColor;
                color: @highlightColor; font-weight: bold;
            }
        }
        a {
            display: block;
            height: @height; padding: 0 15px;
            line-height: @height; font-weight: lighter; font-size: 1.3rem; color: #555;
        }
    }
}
</style>