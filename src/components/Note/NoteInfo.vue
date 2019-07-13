<link rel="styleSheet" href="{{require}}" />
<template>
    <ul v-loading="loading">
        <li>{{param.title}} {{param.create_time}}</li>
        <li></li>
        <li>
            <div v-html="param.message"></div>
        </li>
        <li>
            <ul class="page_list">
                <li class="fr text-right">
                    <router-link v-if="param.next" :to="{path:'/Note',query:{m:'NoteInfo',id: param.next.id}}" v-bind:title="param.next.title" tag="a">
                        {{param.next.title}}
                    </router-link>
                    <span v-else>Lastest Page</span>
                </li>
                <li>
                    <router-link v-if="param.prev" :to="{path:'/Note',query:{m:'NoteInfo',id:param.prev.id}}" v-bind:title="param.prev.title" tag="a">
                        {{param.prev.title}}
                    </router-link>
                    <span v-else>First Page</span>
                </li>
            </ul>
        </li>
    </ul>
</template>
<script>
import 'highlight.js/styles/monokai-sublime.css';

export default {
    name: 'Note',
    data() {
        return {
            msg: 'Note',
            param: { title: '', create_time: '', message: '', next: { id: '', title: '' }, prev: { id: '', title: '' } },
            loading: true,
            page: false,
        }
    },
    created: function() {
        this.init_class();
    },
    watch: {
        $route() {
            this.id = this.$route.query.id
            this.init_class()
        },

    },
    methods: {
        init_class: function() {
            //发送get请求
            this.loading = true;
            this._http.post(this.api.note_info, { id: this.$route.query.id }).then((res) => {
                let date = new Date();
                date.setTime(res.data.create_time * 1000);
                res.data.create_time = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes();
                this.param = res.data;
                this.$nextTick(function() { this.easyScript(); })
                this.loading = false;
            });
        },
        easyScript: function() {
            let dom = document.getElementsByTagName('pre');
            let len = dom.length;
            for (let i = 0; i < len; i++) {
                this.hljs.initHighlightingOnLoad();
                this.hljs.highlightBlock(dom[i])
            }
        }
    }
}

</script>
<style lang="css" scoped>
</style>
