<template>
    <div class="top_tab_right">
        <div v-show="!logined">
            <li class="fr"><a @click="CommonJs.CommonLayout('register')" href="javascript:;">注册</a></li>
            <li class="fr"><a @click="CommonJs.CommonLayout('login')" href="javascript:;">登陆</a></li>
        </div>
        <div class="top_tab_logined" v-show="logined">
            <li class="fr"><a href="javascript:;" @click="CommonJs.CommonLayout('logout')">退出登录</a></li>
            <li class="fr">
                <dd><span>{{user.username}}</span></dd>
            </li>
            <li class="fr">
                <dd :style="'background-image:url('+api.oss_path+user.thumb+')'"></dd>
            </li>
        </div>
    </div>
</template>
<script>
export default {
    name: 'usercenter',
    data() {
        return {
            logined: false,
            user: {
                username: '',
                thumb: '',
            },
        }
    },
    created: function() {
        this.CommonJs.this_user = this;
        if (typeof localStorage.user != 'undefined') {
            this.login(JSON.parse(localStorage.user))
        }
    },
    methods: {
        login: function(arg) {
            localStorage.setItem('token', arg.token);
            localStorage.setItem('express', arg.express * 1000);
            localStorage.setItem('user', JSON.stringify(arg));
            this.user = { username: arg.username, thumb: arg.thumb };
            this.logined = true;
        },
        logout: function($type = 'music') {
            let token = typeof localStorage.getItem('token') != 'null' ? localStorage.getItem('token') : '';
            this._http.post(this.api.user.logout, { token: token }).then((res) => {
                localStorage.removeItem('user');
                localStorage.removeItem('token');
                localStorage.removeItem('express');
                this.logined = false;
                if ($type == 'music') {
                    this.$message.success('退出登录成功');
                }
            })
        }
    },
}

</script>
<style>
.top_tab_logined li dd {
    display: inline-block;
    background: center no-repeat;
    background-size: 100% auto;
    width: 30px;
    height: 50px;
    padding: 0;
    margin: 0;
    ;
    float: none;
}

</style>
