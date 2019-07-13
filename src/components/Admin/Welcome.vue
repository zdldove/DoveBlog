<template>
    <div>
        <el-row>
            <el-col :span="24">
                <h2>User Storage</h2>
            </el-col>
            <el-col :span="12" v-for="val,key in user.info" :key="key">
                <div class="pd2">
                    <el-tag type="info">user.info.{{key}}</el-tag>{{val}}[用户信息]
                </div>
            </el-col>
            <el-col :span="12">
                <div class="pd2">
                    <el-tag type="info">user.express</el-tag>{{user.express}}[过期时间]
                </div>
            </el-col>
            <el-col :span="12">
                <div class="pd2">
                    <el-tag type="info">user.token</el-tag>{{user.token}}[登录签名]
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <h2>Date get</h2>
            </el-col>
            <el-col :span="12">
                <div class="pd2">
                    <el-tag type="info">date = new Date</el-tag>{{date}}[UTC]
                </div>
            </el-col>
            <el-col :span="12">
                <div class="pd2">
                    <el-tag type="info">date.getTime</el-tag>{{date.getTime()}}[时间戳*1000]
                </div>
            </el-col>
            <el-col :span="12">
                <div class="pd2">
                    <el-tag type="info">date.getFullYear</el-tag>{{date.getFullYear()}}[年]
                </div>
            </el-col>
            <el-col :span="12">
                <div class="pd2">
                    <el-tag type="info">('0'+(date.getMonth()+1)).slice(-2)</el-tag>{{('0'+(date.getMonth()+1)).slice(-2)}}[月]
                </div>
            </el-col>
            <el-col :span="12">
                <div class="pd2">
                    <el-tag type="info">('0'+date.getDate()).slice(-2)</el-tag>{{('0'+date.getDate()).slice(-2)}}[日]
                </div>
            </el-col>
            <el-col :span="12">
                <div class="pd2">
                    <el-tag type="info">('0'+date.getHours()).slice(-2)</el-tag>{{('0'+date.getHours()).slice(-2)}}[时]
                </div>
            </el-col>
            <el-col :span="12">
                <div class="pd2">
                    <el-tag type="info">('0'+date.getMinutes()).slice(-2)</el-tag>{{('0'+date.getMinutes()).slice(-2)}}[分]
                </div>
            </el-col>
            <el-col :span="12">
                <div class="pd2">
                    <el-tag type="info">('0'+date.getSeconds()).slice(-2)</el-tag>{{('0'+date.getSeconds()).slice(-2)}}[秒]
                </div>
            </el-col>
            <el-col :span="12">
                <div class="pd2">
                    <el-tag type="info">date.getMilliseconds()</el-tag>{{date.getMilliseconds()}}[毫秒]
                </div>
            </el-col>
            <el-col :span="12">
                <div class="pd2">
                    <el-tag type="info">date.getTimezoneOffset()</el-tag>{{date.getTimezoneOffset()}}[UTC相差分钟数-12~12 西12～东12]
                </div>
            </el-col>
            <el-col :span="12">
                <div class="pd2">
                    <el-tag type="info">('0'+date.getDay()).slice(-2)</el-tag>{{('0'+date.getDay()).slice(-2)}}[星期0~6]
                </div>
            </el-col>
            <el-col :span="12">
                <div class="pd2">
                    <el-tag type="info">date.valueOf()</el-tag>{{date.valueOf()}}[时间戳*1000]
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <h2>Date set</h2>
            </el-col>
            <el-col :span="12">
                <div class="pd2">
                    <el-tag type="info">new Date('2019-01-01')</el-tag>{{new Date('2019-01-01')}}[UTC]
                </div>
            </el-col>
            <el-col :span="12">
                <div class="pd2">
                    <el-tag type="info">(new Date()).setTime(1556809815010)</el-tag>{{(new Date()).setTime(1556809815010)}}[时间戳*1000]
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: 'Welcome',
    data() {
        return {
            date: new Date(),
            user: {
                token: typeof localStorage.getItem('token') != 'null' ? localStorage.getItem('token') : 'Null',
                express: typeof localStorage.getItem('express') != 'null' ? localStorage.getItem('express') : 'Null',
                info: typeof localStorage.getItem('info') != 'null' ? JSON.parse(localStorage.getItem('info')) : {},
            },
        }
    }
}

</script>
<style>
</style>
