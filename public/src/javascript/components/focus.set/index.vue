<template>
<div class="m-focus">

    <div class="switches">
        <a href="javascript:;" class="current"></a>
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
    </div>
</div>
</template>

<script>
import Vue from 'vue';

export default {

};
</script>

<style scoped lang="less">
.m-focus {
    position: relative;
    width: 100%;
    height: ~"calc(100vh - 70px)";
    background: #666;
    .switches {
        position: absolute; left: 50%; bottom: 50px;
        transform: translateX(-50%);
        display: flex;
        a {
            display: block;
            width: 10px;
            height: 10px;
            margin: 2px 3px;
            border-radius: 10px;
            box-shadow: 0 0 3px #777;
            background-color: rgba(255,255,255,.7);
            &.current {
                width: 25px;
                background-color: rgba(255,170,81,.9);
            }
            &:hover {
                background-color: rgba(255,170,81,.9);
            }
        }
    }
}
</style>