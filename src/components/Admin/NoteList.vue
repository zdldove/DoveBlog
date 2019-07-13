<template>
    <div name="NoteList">
        <ul v-loading="loading" class="editList">
            <li v-for="value,i in list" :key="i">
                <h2>{{value.title}}</h2>
                <ul class="dove-main">
                    <li class="dove-edit-hover fl">
                        <router-link class="img-dd img-dd-list bgb fl" :to="{path:'/Admin?page=NoteInfo',query:{'lid':$route.query.id}}" tag="dd"><i class="el-icon-plus"></i></router-link>
                        <div>ADD</div>
                    </li>
                </ul>
                <ul class="dove-main" v-for="key,j in tags" :key="j">
                    <li>
                        <h3>{{key}}</h3>
                    </li>
                    <li v-for="val,k in tags_id[key]" :key="k" :title="list_id[val].title" class="dove-edit-hover fl">
                        <router-link :to="{path:'/Admin?page=NoteInfo',query:{'id':list_id[val].id}}">
                            <dd class="img-dd img-dd-list fl" :style="{backgroundImage:`url(${api.oss_path}${list_id[val].pic})`}"></dd>
                        </router-link>
                        <div>
                            <router-link tag="i" :to="{path:'/Admin?page=NoteInfo',query:{'id':list_id[val].id}}" class="el-icon-edit"></router-link>
                            <i @click="NoteInfoRemove(list_id[val].id,tags_id[key],k)" class="el-icon-delete"></i>
                            <span>{{list_id[val].title}}</span>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
        </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'NoteList',
    data() {
        return {
            loading: true,
            list: [],
            list_id: {},
            tags: [],
            tags_id: {}
        }

    },
    created: function() {
        this.InitPage(this.$route.query.id || 0);
    },
    methods: {
        InitPage: function(cid) {
            this._http.post(this.api.note_list, { cid: cid }).then((res) => {
                this.loading = false;
                this.list = res.data;
                (this.list[0].param || []).map((v) => {
                    this.list_id[v.id] = v;
                    if (!this.CommonJs.in_array(v.tags, this.tags)) this.tags.push(v.tags);
                    if (typeof this.tags_id[v.tags] == 'undefined')
                        this.tags_id[v.tags] = [];
                    this.tags_id[v.tags].push(v.id)
                });
            })
        },
        NoteInfoRemove: function(id, list, key) {
            if (confirm('删除文章吗?')) {
                this._http.execute(this.api.edit.NoteInfoRemove, { id: id }).then((res) => {
                    list.splice(key, 1);
                    this.$set(this.tags);
                    this.$message.success(this.msg.succeed);
                });
            } else {
                this.$message.info(this.msg.cancel)
            }
        }
    },
    watch: {
        '$route': function(to, from) {
            this.InitPage(to.query.id)
        }
    }
}

</script>
<style>
</style>
