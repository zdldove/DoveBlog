<template>
    <div name="Note">
        <el-form :model="data" :rules="rules" ref="ruleForm" label-width="100px">
            <div v-loading="loading" class="NodeInfoEdit">
                <el-row>
                    <el-col :span="12">
                        <div>
                            <el-form-item label="列表标题" prop="title">
                                <el-input v-model="data.title" @keyup.native.enter="submit"></el-input>
                            </el-form-item>
                            <el-form-item label="排序权重" prop="index">
                                <el-input v-model="data.index" @keyup.native.enter="submit"></el-input>
                            </el-form-item>
                            <el-form-item label="标签" prop="tags">
                                <el-select v-model="data.tags" filterable placeholder="请选择">
                                    <el-option v-for="val,key in tmp.tags" :key="key" :value="val"></el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div>
                            <dd class="img-dd img-dd-edit fr" :style="{backgroundImage:`url(${api.oss_path}${data.pic})`}" @click="upImage();"></dd>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-form-item label="" prop="message">
                        <ueditor id="ueditor0" style="clear: both;" v-model="data.message"></ueditor>
                    </el-form-item>
                    <ueditor id="ueditor1" v-show="false" @ready="ready"></ueditor>
                </el-row>
                <el-row>
                    <el-form-item label="">
                        <el-button type="info" @click="submit">submit</el-button>
                    </el-form-item>
                </el-row>
            </div>
        </el-form>
    </div>
</template>
<script>
export default {
    name: 'Note',
    data() {
        return {
            loading: true,
            data: {
                title: '',
                pic: '8ebf1e5fe9f17086f439b5012bf66a111547025080.jpg',
                index: 0,
                tags: '',
                message: ''
            },
            lid: this.$route.query.lid || 0,
            id: this.$route.query.id || 0,
            rules: {

            },
            tmp: {
                tags: []
            }
        }

    },
    created: function() {
        this.InitPage(this.$route.query.id || 0);
    },
    methods: {
        InitPage: function(id) {

            if (id == 0) {
                this._http.post(this.api.NoteListInfo, { id: this.$route.query.lid }).then((res) => {
                    this.tmp.tags = JSON.parse(res.data.tags);
                    this.loading = false;
                })
                return false;
            } else {
                this._http.post(this.api.note_info, { id: id }).then((res) => {
                    this.data = res.data;
                    this.loading = false;
                    this._http.post(this.api.NoteListInfo, { id: res.data.lid }).then((res) => {
                        this.tmp.tags = JSON.parse(res.data.tags);
                        this.loading = false;
                    })
                })
            }

        },
        upImage: function() {
            let myImage = this._editor.getDialog("insertimage");
            myImage.open();
        },
        ready: function(that) {
            this._editor = that;
            that = this;
            this._editor.hide();
            //侦听图片上传
            this._editor.addListener('beforeInsertImage', function(t, arg) {
                let pic = arg[0].src.match(/[^\/]+$/g)[0];
                that.data.pic = pic;
                that.$set(that.data);
            })
            //侦听文件上传，取上传文件列表中第一个上传的文件的路径
            // this._editor.addListener('afterUpfile', function (t, arg) {
            //     $("#file").attr("value", this._editor.options.filePath + arg[0].url);
            // })
            return false;

        },
        submit: function() {
            if (this.lid == 0 && this.id == 0) { this.$message.error('参数异常'); return; }
            this._http.execute(this.api.edit.NoteInfo, { id: this.id, title: this.data.title, message: this.data.message, pic: this.data.pic, lid: this.lid, tags: this.data.tags, index: this.data.index }).then((res) => {
                this.loading = false;
                this.$message.success(this.msg.succeed);
                this.$router.go(-1);
            });
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
.NodeInfoEdit,
.NodeInfoEdit ul {
    width: 60rem;
    float: left;
    height: 100%;
    overflow: hidden;
}
.NodeInfoEdit ul li {
    width: 60rem;
    float: left;
    margin-bottom: 1rem
}
.NodeInfoEdit ul li .top_div {
    width: 29rem;
    float: left;
}
.NodeInfoEdit ul li .top_div dd {
    width: 14rem;
    height: 8rem;
    display: block;
    background-size: auto 100%;
    background-repeat: no-repeat;
}

</style>
