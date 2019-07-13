<template>
    <ul id="dove-list-choose">
        <li v-for="val in data" :class="{active:CommonJs.in_array(val.id,choosed),disabled:CommonJs.in_array(val.id,disable)}">
            <el-tag @click="choose(val)">{{val.name}}</el-tag>
        </li>
    </ul>
</template>
<script>
export default {
    name: 'ListChoose',
    props: ['data', 'callback', 'choosed', 'disable'],
    methods: {
        choose: function(...arg) {
            this.$parent[this.callback](...arg);
        }
    }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#dove-list-choose {
    width: 100%;
    line-height: 30px;
    float: left;
    text-align: center;
    overflow: hidden;
    list-style: none;
    margin: 0;
    padding: 0;
}

#dove-list-choose li {
    margin: 2px 5px;
    float: left;
}

#dove-list-choose li.active {
    background: #ccc;
}

#dove-list-choose li.disabled {
    display: none;
    background: #000;
    color: #555;
}

</style>
