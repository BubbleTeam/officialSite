<template>
<div class="m-titleBlock">
    <h2 class="headline">
        <template v-for="(word, index) in words">
            <span>{{ word }}</span>
        </template>
    </h2>
    <p class="smalltitle">{{ title }}</p>
    <slot></slot>
</div>
</template>

<script>
export default {
    props: ['headline', 'title'],
    data() {
        const words = [...this.headline];
        return {
            words
        };
    }
}
</script>

<style lang="less">
.m-titleBlock {
    margin: 50px 0;
    .headline {
        margin-bottom: 3px;
        text-align: center; font-size: 1.6rem; font-weight: weight;
        span {
            &:after {
                content: '/';
                margin: 0 8px;
                font-size: 0.7em; font-weight: lighter; color: #DDD;
            }
            &:last-of-type:after { display: none }
        }
    }
    .smalltitle {
        margin-bottom: 10px;
        text-align: center; color: #AAA;
    }
}
</style>