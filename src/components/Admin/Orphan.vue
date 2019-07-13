<template>
    <div class="orphan">
        <el-row v-loading="loading">
            <el-col :span="12">
                <ul>
                    <li v-for="val,key in show.type" :key="key" @click="show.tab = key">
                        <i v-show="key==show.tab" class="el-icon-location-outline"></i>{{val}}<i v-show="key==show.tab" class="el-icon-location-outline"></i>
                    </li>
                </ul>
                <ul>
                    <li v-for="v in page" :title="v.ctitle + '-' + v.ltitle" @dragstart="dragStart($event)" draggable="true" v-show="show.tab == 0 || (show.tab ==1 && 1 == v.is_orphan) || (2==show.tab&&v.is_orphan == 0)">
                        <span :id="v.id">
                            <el-tag type="info">{{v.title}}</el-tag>
                        </span>
                    </li>
                    <li v-if="Object.entries(page).length == 0">
                        <el-tag type="warning">Empty</el-tag>
                    </li>
                </ul>
            </el-col>
            <el-col :span="12">
                <ol>
                    <li v-for="value in list">
                        <h2>{{value.title}}</h2>
                        <ul>
                            <li v-for="v in value.child" type="list" @dragover="dropover($event)" @drop="drop($event)" :id="v.id">
                                {{v.title}}
                                <ul></ul>
                            </li>
                        </ul>
                    </li>
                </ol>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: 'orphan',
    data() {
        return {
            list: [],
            loading: true,
            page: [],
            dom: '',
            show: {
                tab: 1,
                type: [
                    '全部',
                    '孤儿',
                    '非孤儿'
                ]
            }
        }
    },
    created: function() {
        this.loading = true;
        this.init_class();
        this.init_page();
    },
    methods: {
        init_class: function() {
            //发送get请求
            this._http.post(this.api.note_class, { cid: 0 }).then((res) => {
                this.loading = false;
                let body = res.data;
                let result = [];
                for (let key in body) {
                    result.push({ id: body[key]['id'], title: body[key]['title'], child: body[key]['param'] })
                }
                this.list = result;
                return;
            });
        },
        init_page: function() {
            //发送get请求
            this._http.post(this.api.note_list_throw, { cid: 0 }).then((res) => {
                this.loading = false;
                this.page = res.data;
            });
        },
        drop: function(event) {
            event.preventDefault();
            let target = this.$getElement(event.srcElement, (dom) => { return dom.getAttribute('type') == 'list' });
            target.getElementsByTagName("ul")[0].appendChild(this.dom);
            let pid = this.dom.getElementsByTagName("span")[0].getAttribute("id");
            let lid = target.getAttribute("id");
            this.move(pid, lid);
        },
        $getElement: function(dom, callback) {
            if (callback(dom)) {
                return dom
            } else {
                return this.$getElement(dom.parentElement, callback);
            }
        },
        dropover: function(event) {
            event.preventDefault();
        },
        dragStart: function(event) {
            this.dom = event.currentTarget;
        },
        move: function(pid, lid) {
            this._http.execute(this.api.edit.PageMove, { pid: pid, lid: lid }).then((res) => {
                this.$message.success(this.msg.succeed);
            });
        }
    }
}

</script>
<style>
.orphan ol,
.orphan ol li,
.orphan ol li ul,
.orphan ul,
.orphan ul li {
    list-style: none;
    width: 100%;
    float: left;
    padding: 0;
    margin: 0;
}
.orphan ul li {
    padding: 3px 5px;
    margin: 2px;
    width: auto;
}

.orphan ul li:hover {
    border-color: #000;
}
.orphan ol ul li:hover {
    background: #000
}

</style>
