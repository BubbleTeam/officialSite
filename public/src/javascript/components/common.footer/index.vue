<template>
<footer class="m-footer">
    <div class="cols f-cb f-wbox">
        <div class="lastCol">
            <div class="links f-cb">
                <a href="#"><i class="fa fa-address-book"></i>友情链接</a>
                <a href="#"><i class="fa fa-github"></i>GitHub</a>
                <a href="#"><i class="fa fa-file-text"></i>版权声明</a>
            </div>
            <div class="f-cb"></div>
            <div class="copyright">
                &copy; {{timeInfo}} &lt;BubbleTeam /&gt; All Rights Reserved
            </div>
        </div>
        <div class="firstCol">
            <img src="./images/footer-icon.png" height="50" />
            <p class="slogan">一个好玩的前端团队</p>
        </div>
    </div>
</footer>
</template>

<script>
import Vue from 'vue';

export default {
    data() {
        const timeInfo = new Date().getFullYear();
        return {
            timeInfo
        };
    }
}
</script>

<style lang="less">
.m-footer {
    overflow: hidden;
    width: 100%; padding: 20px 0;
    background: #26282D;
    .firstCol {
        float: left;
        font-size: 1.2rem; color: #99A1A6;
        .slogan {
            display: inline-block;
            height: 30px; margin-left: 10px; padding-left: 10px; border-left: 1px dotted #111;
            vertical-align: top; line-height: 30px;
        }
    }
    .lastCol {
        float: right;
        margin-top: 10px;
        font-size: 1.1rem; 
        .links {
            float: right;
            a {
                &:first-of-type {
                    border-left: none;
                }
                &:last-of-type {
                    padding-right: 0;
                }
                &:hover {
                    color: #FFF;
                }
                i { font-size: 1.2em; margin-right: 5px; }
                float: left;
                padding: 0 15px; border-left: 1px solid #444;
                color: #999;
            }
        }
        .copyright {
            margin: 10px 0;
            color: #555; text-align: right;
        }
    }
}
</style>