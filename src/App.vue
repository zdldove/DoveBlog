<template>
    <div id="app">
        <ul class="nav">
            <li>
                <router-link to="/">
                    <b>DoveBlogs</b>
                </router-link>
            </li>
            <li>
                <router-link to="/Note">
                    笔记
                </router-link>
            </li>
            <li>
                <router-link to="/Blog">
                    博客
                </router-link>
            </li>
            <li>
                <router-link to="/Admin">
                    管理中心
                </router-link>
            </li>
            <usercenter></usercenter>
        </ul>
        <router-view />
        <CommonLayout></CommonLayout>
        <!-- <div id="frend_links"><ul><li><span>友情链接</span><ol>
            <li><a href="https://cn.vuejs.org/" target="_blank"><span>Vue</span></a></li>
            <li><a href="https://secure.php.net/" target="_blank"><span>PHP</span></a></li>
            <li><a href="https://centos.org/" target="_blank"><span>centos</span></a></li>
            <li><a href="http://www.thinkphp.cn/" target="_blank"><span>ThinkPHP</span></a></li>
        </ol></li></ul></div> -->
    </div>
</template>
<script>
export default {
    name: 'App',
    components: {
        usercenter: () => import('@/components/Common/usercenter'),
        CommonLayout: () => import('@/components/Common/Layout')
    },
}

</script>
<style>
html, body, div, ul, li, a {
    padding: 0;
    margin: 0;
    list-style: none;
    color: #ccc
}
html, body {
    float: left;
    width: 100%;
}
html {
    background: rgba(0, 0, 0, 0.8);
    color: #ccc;
    font-family: "微软雅黑", "MicroSoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
}
img {
    background-color: #eee;
}
.nav {
    width: 100%;
    float: left;
    padding: 0;
    margin: 0;
    height: 50px;
    line-height: 50px;
    font-size: 12px;
    background: #000
}
.nav li {
    list-style: none;
    float: left;
    height: 100%;
}
.nav li a {
    color: #fff;
    text-decoration: none;
    padding: 0 10px;
    text-align: center;
}
.nav:hover li a {
    color: #ccc
}
.nav:hover li a:hover {
    color: #fff
}
.nav li a b {
    font-size: 16px;
}

.text-right {
    text-align: right !important;
}
.ellipsis {
    text-overflow: ellipsis;
    text-overflow: keep-all;
    overflow: hidden;
}
.input-black {
    width: 20rem;
    display: block;
    height: 2rem;
    line-height: 2rem;
    background-color: #ccc6;
    border: none;
    margin: .3rem;
    text-indent: .2rem;
    color: #ccc
}
.input-black::-webkit-input-placeholder {
    color: #ccc;
}

.wrap {
    background: #fff2;
    width: 80%;
    margin: 1rem 10%;
    float: left;
    border-radius: .5rem;
}
.wrap-main {
    padding: 1%;
}
.dove-main {
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    float: left;
}
.img-dd {
    display: block;
    background: center;
    background-size: auto 100%;
    background-repeat: no-repeat;
    padding: 0;
    margin: 0;
}

.img-dd-list-dn {
    background-position: center;
    width: 64px;
    height: 40px;
    font-size: 36px;
    text-align: center;
    line-height: 100px;
}

#frend_links {
    width: 80%;
    margin: 0 auto;
    line-height: 2rem
}
#frend_links span {
    height: 2rem;
    line-height: 2rem;
    font-size: 1rem;
    float: left;
}
#frend_links ol {
    width: 80%;
    margin: 0 auto;
    display: inline-block;
}
#frend_links ol li {
    width: 25%;
    float: left;
}

.el-form-item__label {
    color: #ccc;
}


.el-loading-mask {
    background-color: rgba(0, 0, 0, 0.8);
}

.bgb {
    background: #555;
}

.fl {
    float: left;
}
.fr {
    float: right !important;
}

.pd2 {
    padding: 2px;
}

</style>
