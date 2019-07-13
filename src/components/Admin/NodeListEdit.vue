<template>
    <div class="NodeListEdit">
        <el-form :model="data" :rules="rules" ref="ruleForm" label-width="100px">
            <el-row>
                <el-col :span="12">
                    <div>
                        <el-form-item label="列表标题" prop="title">
                            <el-input v-model="data.title" @keyup.native.enter="submit('ruleForm')"></el-input>
                        </el-form-item>
                        <el-form-item label="排序权重" prop="index">
                            <el-input v-model="data.index" @keyup.native.enter="submit('ruleForm')"></el-input>
                        </el-form-item>
                        <el-form-item label="标签">
                            <el-col :span="12">
                                <el-input v-model="tmp.tags" @keyup.native.enter="submit('ruleForm')"></el-input>
                            </el-col>
                            <el-col :span="12">
                                <el-button type="info" @click="addTags"><i class="el-icon-plus"></i></el-button>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="" prop="tags">
                            <el-tag v-for="(tag,i) in data.tags" :key="i" closable type="info" @close="minTags(i)">
                                {{tag}}
                            </el-tag>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div>
                        <dd class="img-dd img-dd-edit fr" :style="{backgroundImage:`url(${api.oss_path}${data.pic})`}" @click="upImage();"></dd>
                    </div>
                </el-col>
            </el-row>
            <el-row v-show="false">
                <ueditor @ready="ready"></ueditor>
            </el-row>
            <el-row>
                <el-form-item label="">
                    <el-button type="info" @click="submit('ruleForm')">提交</el-button>
                </el-form-item>
            </el-row>
        </el-form>
    </div>
</template>
<script>
export default {
    name: 'NodeListEdit',
    data() {
        return {
            id: this.$route.query.id || 0,
            cid: this.$route.query.cid || 0,
            data: {
                message: '<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>',
                pic: '8ebf1e5fe9f17086f439b5012bf66a111547025080.jpg',
                title: '',
                tags: [],
                index: 0,
            },
            tmp: { tags: '' },
            rules: {
                title: [{ required: true, message: '请输入列表标题', trigger: 'blur' }],
                index: [{ required: true, message: '输入排序权重', trigger: 'blur' }],
                tags: [{ required: true, message: '添加标签', trigger: 'change' }],
            },
        }
    },
    created: function() {
        this.loadpage(this.$route.query.cid || 0, this.$route.query.id || 0)
    },
    methods: {
        loadpage: function(cid, id) {
            if (id == 0) { return; }
            if (cid == 0) { return; }
            this._http.post(this.api.NoteListInfo, { id: id }).then((res) => {
                this.loading = false;
                res.data.tags = JSON.parse(res.data.tags || '[]');
                this.data = res.data;
            });
        },
        addTags: function() {
            try {
                if (this.tmp.tags == '') throw ('请输入标签名称');
                if (this.CommonJs.in_array(this.tmp.tags, this.data.tags)) throw ('已使用的标签名称');
                this.data.tags.push(this.tmp.tags);
                this.tmp.tags = '';
            } catch (e) {
                this.$message.error(e);
            }
        },
        minTags: function(i) {
            this.data.tags.splice(i, 1);
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
        submit: function(formName) {
            this.$refs[formName].validate((valid) => {
                if (!valid) { return false; }
                if (this.cid == 0) { return false; }
                this._http.execute(this.api.edit.NoteListInfo, { id: this.id, title: this.data.title, pic: this.data.pic, cid: this.cid, tags: JSON.stringify(this.data.tags), index: this.data.index }).then((res) => {
                    this.loading = false;
                    this.$message.success(this.msg.succeed);
                    this.$router.go(-1);
                });

            });
        },

    }
}

</script>
<style>
.NodeListEdit {
    padding: 1%;
    max-width: 800px;
}

</style>
