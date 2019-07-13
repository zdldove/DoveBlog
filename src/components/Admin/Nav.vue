<template>
    <div class="nav-width-fill">
        <ul>
            <li v-for="val,index in nav" :key="index">
                <router-link :to="{path:'/Admin/',query:{'page':val.page}}" tag="span">{{val.title}}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'Welcome',
    data() {
        return {
            nav: [
                { title: 'Welcome', page: 'Welcome' },
                { title: '孤儿领养', page: 'Orphan' },
                { title: '笔记', page: 'Note' },
                { title: '博客', page: 'Blogs' },
            ]
        }
    }
}

</script>
<style>
.nav-width-fill {
    width: 100%;
    float: left;
    height: 100%;
    overflow: hidden;
    background: #0003;
}
.nav-width-fill ul {
    width: 100%;
    float: left;
    overflow-x: hidden;
}
.nav-width-fill ul li {
    width: 100%;
    float: left;
    overflow: hidden;
    text-indent: .3rem;
    height: 3rem;
    line-height: 3rem;
    border-bottom: 1px solid #fff1;
    cursor: pointer;
}
.nav-width-fill ul li span {
    width: 100%;
    height: 100%;
    float: left;
}
.nav-width-fill ul:hover li span {
    color: #000;
}
.nav-width-fill ul li:hover span {
    color: #ccc;
}
.nav-width-fill ul li.active span {
    color: #fff;
}

</style>
