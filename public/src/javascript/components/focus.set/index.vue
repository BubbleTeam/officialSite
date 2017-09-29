<template>
<div class="m-focus">
    <ul class="images">
        <li v-for="{image, zIndex, opacity} in list" :style="{
            backgroundImage: image,
            zIndex,
            opacity
        }"></li>
    </ul>
    <div class="switches">
        <a v-for="(item, index) in list"
           href="javascript:;"
           :class="{current: index === current}"
           @click="manualSetTo(index)"
        ></a>
    </div>
</div>
</template>

<script>
import Vue from 'vue';
const focusData = [
    { link: '', image: 'http://desk.fd.zol-img.com.cn/t_s1366x768c5/g5/M00/0F/09/ChMkJ1auzdiIMUZmAAVS7ZPk6UIAAH9IgF71qIABVMF033.jpg' },
    { link: '', image: 'http://desk.fd.zol-img.com.cn/t_s1920x1200c5/g5/M00/01/0E/ChMkJlbKwhGIcpmbAAdnKLnPmmwAALGiQICOv4AB2dA340.jpg' },
    { link: '', image: 'http://desk.fd.zol-img.com.cn/t_s2880x1800c5/g5/M00/0F/09/ChMkJlauzbOIb6JqABF4o12gc_AAAH9HgF1sh0AEXi7441.jpg' }
];

export default {
    data() {
        const list = focusData.map((item, index) => {
            return {
                link: item.link,
                image: `url(${item.image})`,
                opacity: index === 0 ? 1 : 0,
                zIndex: index === 0 ? 2 : 1
            };
        });
        return {
            list,
            current: 0,
            switchTime: 3000
        }
    },
    /**
     *  初始化配置
     *  @return {Void}
     */
    beforeCreated() {
        this.timer = null;
    },
    mounted() {
        this.autoSwitch();
    },
    methods: {
        /**
         *  轮播切换
         *  @param {Number} nth 目标轮播图
         *  @return {Void}
         */
        setTo(nth) {
            const prev = this.list[this.current];
            const curr = this.list[nth];
            this.current = nth;
            prev.opacity = 0;
            prev.zIndex = 1;
            curr.opacity = 1;
            curr.zIndex = 2;
        },
        /**
         *  手动轮播切换
         *  @param {Number} nth 目标轮播图
         *  @return {Void}
         */
        manualSetTo(nth) {
            clearTimeout(this.timer);
            this.setTo(nth);
            this.autoSwitch();
        },
        /**
         *  轮播自动切换
         *  @return {Void}
         */
        autoSwitch() {
            const fn = () => {
                let nxt = (this.current + 1) % this.list.length;
                this.setTo(nxt);
                this.timer = setTimeout(fn, this.switchTime);
            };
            this.timer = setTimeout(fn, this.switchTime);
        }
    }
};
</script>

<style scoped lang="less">
.m-focus {
    position: relative; overflow: hidden;
    width: 100%; height: 550px;
    background: #F0F0F0;
    .images {
        position: relative; z-index: 0;
        width: 100%; height: 100%;
        li {
            display: block; position: absolute; left: 50%; top: 0;
            width: 1920px; height: 100%; margin-left: -960px;
            background-size: cover;
            transition: opacity 1s;
        }
    }
    .switches {
        position: absolute; left: 50%; bottom: 20px;
        transform: translateX(-50%);
        display: flex;
        a {
            display: block;
            width: 10px; height: 5px; margin: 2px 3px; border-radius: 3px;
            background-color: rgba(255,255,255,.5);
            transition: width .3s; transition-timing-function: cubic-bezier(0, 1.11, 0.51, 1.49);
            &.current {
                width: 55px;
                background-color: #FFF;
            }
            &:hover {
                background-color: #FFF;
            }
        }
    }
}
</style>