<template>
<div class="m-members f-cb">
    <div v-for="member in members" class="member">
        <div class="avatar">
            <img :src="member.avatar" />
        </div>
        <div class="profile">
            <h3>{{ member.name }}</h3>
            <p class="role">{{ member.role }}</p>
            <p class="desc">{{ member.desc }}</p>
        </div>
    </div>
</div>
</template>

<script>
const members = [
    {
        name: '方文天',
        role: '高级前端开发工程师',
        desc: 'BubbleTeam团长，网易考拉海购高级前端开发工程师',
        avatar: 'https://www.ruphi.cn/usr/themes/bluecity/image/avatar.jpg'
    },
    {
        name: '邓瑾',
        role: '高级前端开发工程师',
        desc: 'BubbleTeam团长，网易考拉海购高级前端开发工程师',
        avatar: 'https://www.ruphi.cn/usr/themes/bluecity/image/avatar.jpg'
    },
    {
        name: '李浪',
        role: '前端开发工程师',
        desc: 'BubbleTeam团长，网易考拉海购高级前端开发工程师',
        avatar: 'https://www.ruphi.cn/usr/themes/bluecity/image/avatar.jpg'
    },
    {
        name: '杨潇',
        role: '前端开发工程师',
        desc: 'BubbleTeam团长，网易考拉海购高级前端开发工程师',
        avatar: 'https://www.ruphi.cn/usr/themes/bluecity/image/avatar.jpg'
    },
    {
        name: '刘铷斐',
        role: '前端开发工程师',
        desc: 'BubbleTeam团长，网易考拉海购高级前端开发工程师',
        avatar: 'https://www.ruphi.cn/usr/themes/bluecity/image/avatar.jpg'
    }
];

export default {
    data() {
        return {
            members
        }
    }
}
</script>

<style lang="less">
.m-members {
    .member {
        float: left; position: relative;
        width: ~'calc(20% - 20px)'; margin: 10px;
        transition: transform .5s; cursor: pointer;
        .avatar {
            position: relative;
            width: 50%; margin: auto; margin-bottom: -30%; padding-top: 50%; 
            img {
                position: absolute; left: 0; top: 0;
                width: 100%; height: 100%; border-radius: 50%;
            }
        }
        .profile {
            padding: 35% 10px 10px 10px; border: 1px solid #DDD; border-radius: 5px;
            height: 220px; box-shadow: 0 2px 10px #DDD; background: #FEFEFE;
            text-align: center;
            h3 {
                margin: 5px 0; padding: 0;
                font-size: 1.6em; color: #333;
            }
            .role {
                margin: 10px 0;
                font-size: 1.2em; color: #999;
            }
            .desc {
                margin: 5px;
                font-size: 1.1em; line-height: 1.8em;
            }
        }
        &:hover {
            transform: translateY(-10px);
            .profile {
                border-color: #CCC;
            }
        }
    }
}
</style>