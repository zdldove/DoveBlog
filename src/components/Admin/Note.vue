<template>
    <div name="Note">
        <ul v-loading="loading" class="editClass">
            <li v-for="(val,i) in Notes">
                <ul class="dove-main">
                    <li class="fl dove-tab-hover">
                        <div><input v-model:value="val.title" title="submit by Enter" @keyup.enter="change_class_title(val)" @keyup.esc="val.show=false" v-show="val.show" />
                            <span @click="val.show=!val.show;" v-show="!val.show">{{val.title}}</span>
                            <i @click="remove_class(val.id,i)"><i class="el-icon-delete"></i></i>
                        </div>
                    </li>
                </ul>
                <ul class="dove-main">
                    <li class="dove-edit-hover fl">
                        <router-link class="img-dd img-dd-list bgb fl" :to="{path:'/Admin?page=NodeListEdit',query:{'cid':val.id}}" tag="dd"><i class="el-icon-plus"></i></router-link>
                        <div>ADD</div>
                    </li>
                    <li v-for="(v,j) in val.param" :title="v.title" class="dove-edit-hover fl">
                        <router-link :to="{path:'/Admin?page=NoteList',query:{'id':v.id}}">
                            <dd class="img-dd img-dd-list fl" :style="{backgroundImage:`url(${api.oss_path}${v.pic})`}"></dd>
                        </router-link>
                        <div>
                            <router-link tag="i" :to="{path:'/Admin?page=NodeListEdit',query:{cid:val.id,id:v.id}}" class="el-icon-edit"></router-link>
                            <i @click="remove_list(v.id,i,j)" class="el-icon-delete"></i>
                            <span>{{v.title}}</span>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'Note',
    data() {
        return {
            loading: true,
            Notes: []
        }

    },
    created: function() {
        this.InitPage(this.$route.query.id || 0);
    },
    methods: {
        InitPage: function(cid) {
            this._http.post(this.api.note_class, { cid: cid }).then((res) => {
                res.data.map((val) => { val.show = false; })
                this.Notes = res.data;
                this.loading = false;
            })
        },
        change_class_title: function(val) {
            val.show = false;
        },
        remove_class: function(cid, i) {
            if (confirm('删除分类后所有子列表将会成为孤儿')) {
                this._http.execute(this.api.edit.NoteClassRemove, { cid: cid }).then((res) => {
                    this.Notes.splice(i, 1);
                    this.$message.success(this.msg.succeed);
                })
            } else {
                this.$message.info(this.msg.cancel)
            }
        },
        remove_list: function(id, i, j) {
            if (confirm('删除列表后所有文章将会成为孤儿')) {
                this._http.execute(this.api.edit.NoteListRemove, { id: id }).then((res) => {
                    this.Notes[i].param.splice(j, 1);
                    this.$message.success(this.msg.succeed);
                });
            } else {
                this.$message.info(this.msg.cancel)
            }
        }
    },
    watch: {
        '$route': function(to, from) {
            this.InitPage(to.query.id || 0)
        }
    }
}

</script>
<style>
</style>
