<template>
<div class="m-articlesList">
    <div class="item" v-for="item in list">
        <div class="cover">
            <img :src="item.cover" />
        </div>
        <div class="description">
            <div class="title"><a href="#">Nginx从入门到实战Nginx从入门到实战</a></div>
            <div class="info f-cb">
                <span class="f-fr"><i class="fa fa-user-o"></i> RuphiLau</span>
                <span><i class="fa fa-calendar"></i> 2017-09-28</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
const itemData = [
    { cover: 'http://szimg.mukewang.com/59ae66b2000110fa05400300-360-202.jpg' },
    { cover: 'http://img2.mukewang.com/59bfab740001369a06000338-240-135.jpg' },
    { cover: 'http://img3.mukewang.com/59b77bac0001985906000338-240-135.jpg' },
    { cover: 'http://szimg.mukewang.com/5959a60f0001cfd305400300-360-202.jpg' },
    { cover: 'http://img2.mukewang.com/59bfab740001369a06000338-240-135.jpg' }
];

export default {
    data() {
        return {
            list: itemData
        }
    }
}
</script>

<style scoped lang="less">
@highlightColor: #6173E8;
.m-articlesList {
    display: flex; flex-flow: row wrap;
    .item {
        overflow: hidden;
        width: ~'calc(25% - 20px)'; margin: 10px;
        background: #FFF;
        transition: box-shadow .5s;
        .cover {
            position: relative; overflow: hidden;
            width: 100%; padding-top: 56.25%;
            img {
                position: absolute; left: 0; top: 0;
                width: 100%; height: 100%;
                transition: transform .5s;
            }
        }
        .description {
            overflow: hidden;
            height: 70px; padding: 10px;
            .title {
                display: block; overflow: hidden;
                width: 100%; margin-top: 5px;
                font-size: 1.3em; white-space: nowrap; text-overflow: ellipsis; 
                a { transition: opacity .5s; }
            }
            .info {
                margin-top: 10px;
                color: #999;
            }
        }
        &:hover {
            box-shadow: 0 5px 15px -2px #BBB; cursor: pointer;
            .cover img {
                transform: scale(1.2);
            }
            .title a {
                opacity: .7;
            }
        }
    }
}
</style>