<template>
    <div class="login">
        <div class="login-layout">
            <div class="login-background">
                <div>
                    <ul>
                        <li class="hover"><b>Login</b></li>
                        <li><b><a @click="CommonJs.CommonLayout('register')" href="javascript:;">Register</a></b></li>
                    </ul>
                </div>
                <div><input placeholder="username" @keyup.enter="Login" v-model:value="username" /></div>
                <div><input type="password" @keyup.enter="Login" placeholder="password" v-model:value="passwd" /></div>
                <div><button @click="Login">提交</button></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Welcome',
    data() {
        return {
            username: '',
            passwd: ''
        }
    },
    methods: {
        Login: function() {
            this._http.post(this.api.user.login, { username: this.username, passwd: this.passwd }).then((res) => {
                // localStorage.User = JSON.stringify(body.data);
                this.CommonJs.user_login(res.data);
            });
        }
    }
}

</script>
<style>
/*html,body{margin: 0; padding: 0; width: 100%; background: URL('__PUBLIC__/images/black.jpg'); background-size: cover}*/
/*.login{width: 100%; height: 100%; position: fixed; left: 0; top: 0;   background: #000a }*/
/*.login div.login-layout{width: 510px; position: relative; float: none; margin:180px auto; }*/
.login div.login-layout div.login-background {
    position: relative;
    float: left;
    margin: 0 auto;
    background: #666;
    box-shadow: 5px 5px 15px #06f5;
    padding: 0 32px 32px;

}
.login div.login-layout div.login-background div {
    width: 100%;
    position: relative;
    float: left;
    height: 38px;
    margin: 8px auto;
    line-height: 38px;
}
.login div.login-layout div.login-background div {
    width: 100%;
    position: relative;
    float: left;
    height: 38px;
    margin: 8px auto;
    line-height: 38px;
}
.login div ul li {
    width: auto;
    float: left;
    margin: 0 auto;
    padding: 8px 16px;
    height: 26px;
    line-height: 26px;
    margin: 3px auto;
}
.login div ul li.hover {
    background: #333
}
.login div input {
    width: 100%;
    height: 100%;
    border: 1px solid rgba(200, 200, 200, 0.4);
    text-indent: 12px
}
.login div button {
    width: 160px;
    height: 100%;
    border: 1px solid #000;
    background: #333;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
}

</style>
