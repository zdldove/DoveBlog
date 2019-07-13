<template>
    <div class="fill-with-head">
        <div class="drap">
            <div class="right_drap">
                <div class="drap_wrap">
                    <div class="drap_wrap_content">
                        <tab :is="page"></tab>
                    </div>
                </div>
            </div>
            <div class="left_drap">
                <Nav></Nav>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Admin',
    data() {
        return {
            page: '',
            tab: {
                Welcome: () => import('./Welcome.vue'),
                Orphan: () => import('./Orphan.vue'),
                Note: () => import('./Note.vue'),
                NoteList: () => import('./NoteList.vue'),
                NoteInfo: () => import('./NoteInfo.vue'),
                NodeListEdit: () => import('./NodeListEdit.vue'),
            }
        }
    },
    components: {
        Nav: () => import('./Nav.vue'),
    },
    created: function() {
        this.setPage(this.$route);
    },
    methods: {
        setPage: function(route) {
            let m = route.query.page || 'Welcome';
            this.page = this.tab[m] || this.tab['Welcome'];
        }
    },
    watch: {
        '$route': function(to, from) {
            this.setPage(to);
        }
    }
}

</script>
<style>
.drap {
    width: 100%;
    float: left;
    height: 100%
}
.drap .left_drap {
    width: 15rem;
    float: left;
    height: 100%;
    position: relative;
}
.drap .right_drap {
    margin-left: -15rem;
    display: inline-block;
    width: 100%;
    float: none;
    height: 100%;
    position: relative;
}
.drap .right_drap .drap_wrap {
    margin-left: 16rem;
    height: 100%;
}
.drap .right_drap .drap_wrap .drap_wrap_content {
    width: 100%;
    float: left;
    padding-bottom: 5rem;
}

.el-icon-delete {
    color: #bb5c5c
}

.el-icon-edit {
    color: #6a6abb
}

.img-dd-edit {
    background-position: center right;
    width: 260px;
    height: 115px;
}

.img-dd-list {
    background-position: center;
    width: 160px;
    height: 100px;
    font-size: 36px;
    text-align: center;
    line-height: 100px;
}

.el-form-item__content {
    line-height: auto !important;
}

.dove-tab-hover i {
    display: none;
}
.dove-tab-hover:hover i {
    display: inline-block;
}
li.dove-edit-hover {
    width: 160px;
    margin: 5px;
}
li.dove-edit-hover div {
    width: 100%;
    height: 36px;
    float: left;
    text-align: center;
    line-height: 36px;
    overflow: hidden;
}
li.dove-edit-hover div i {
    display: none
}

li.dove-edit-hover:hover div i {
    display: inline-block;
}

li.dove-edit-hover:hover div span {
    display: none
}

</style>
