<template>
    <div class="list">
        <ul v-for="key in tags" :key="key" v-loading="loading">
            <li>
                <span>{{key}}</span>
            </li>
            <li>
                <ol>
                    <router-link v-for="val,key in tags_id[key]" :key="key" :title="list_id[val].title" :to="{path:'/Note',query:{m:'NoteInfo',id:list_id[val].id}}" tag="li">
                        <dd class="img-dd img-dd-list-dn fl" :style="{backgroundImage:`url(${api.oss_path}${list_id[val].pic})`}"></dd>
                        <span>{{list_id[val].title}}</span>
                    </router-link>
                </ol>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'Note',
    data() {
        return {
            list_id: {},
            tags: [],
            tags_id: {}
        }
    },
    created: function() {
        this.init_class();
    },
    methods: {
        init_class: function() {
            this._http.post(this.api.note_list, { cid: this.$route.query.cid }).then((res) => {
                res.data[0].param.map((val, i) => {
                    this.list_id[val.id] = val;
                    if (!this.CommonJs.in_array(val.tags, this.tags)) this.tags.push(val.tags);
                    if (typeof this.tags_id[val.tags] == 'undefined') this.tags_id[val.tags] = [];
                    this.tags_id[val.tags].push(val.id)
                })
                this.loading = false;
            });
        }
    }
}

</script>
