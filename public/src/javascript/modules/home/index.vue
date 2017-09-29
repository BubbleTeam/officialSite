<template>
<div>
    <div class="m-main">
        <top-navbar />
        <focus-set />
        <div class="f-wbox">
            <title-block headline="文章分享" title="ARTICLES SHARING">
                <articles-list />
            </title-block>
            <title-block headline="我们是谁" title="WHO WE ARE?">
                <members-list />
            </title-block>
            <title-block headline="开源作品" title="OPEN SOURCE PROJECTS">内容分发</title-block>
        </div>
    </div>
    <common-footer />
</div>
</template>

<script>
import TopNavbar from 'comp/top.navbar';
import FocusSet from 'comp/focus.set';
import CommonFooter from 'comp/common.footer';
import TitleBlock from 'comp/title.block';
import ArticlesList from './components/articles.list';
import MembersList from './components/members.list';

export default {
    components: {
        TopNavbar,
        FocusSet,
        CommonFooter,
        TitleBlock,
        ArticlesList,
        MembersList
    }
};
</script>

<style lang="less">
body { background: #F0F0F0; }
.m-main {
    min-height: 100vh;
}
.f-wbox {
    width: 1000px; margin: auto;
}
</style>