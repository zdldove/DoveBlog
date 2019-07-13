<template>
    <div class="register">
        <div class="register-layout">
            <div class="register-background">
                <div>
                    <ul>
                        <li><b><a @click="CommonJs.CommonLayout('Login')" href="javascript:;">Login</a></b></li>
                        <li class="hover"><b>Register</b></li>
                    </ul>
                </div>
                <div><input name="username" placeholder="username" /></div>
                <div><input name="password" type="password" placeholder="password" /></div>
                <div><input name="repassword" type="password" placeholder="repassword" /></div>
                <div><input name="telphone" type="password" placeholder="telphone" /></div>
                <div><input name="code" type="password" placeholder="code" /></div>
                <div><button>提交</button></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Welcome',
}

</script>
<style>
/*html,body{margin: 0; padding: 0; width: 100%; background: URL('__PUBLIC__/images/black.jpg'); background-size: cover}*/
/*.register{width: 100%; height: 100%; position: fixed; left: 0; top: 0;	background: #000a }*/
.register div.register-layout {
    position: relative;
    float: none;
    margin: 180px auto;
}
.register div.register-layout div.register-background {
    position: relative;
    float: left;
    margin: 0 auto;
    background: #666;
    box-shadow: 5px 5px 15px #06f5;
    padding: 0 32px 32px;
}
.register div.register-layout div.register-background div {
    width: 100%;
    position: relative;
    float: left;
    height: 38px;
    margin: 8px auto;
    line-height: 38px;
}
.register div.register-layout div.register-background div {
    width: 100%;
    position: relative;
    float: left;
    height: 38px;
    margin: 8px auto;
    line-height: 38px;
}
.register div ul li {
    width: auto;
    float: left;
    margin: 0 auto;
    padding: 8px 16px;
    height: 26px;
    line-height: 26px;
    margin: 3px auto;
}
.register div ul li.hover {
    background: #333
}
.register div input {
    width: 100%;
    height: 100%;
    border: 1px solid rgba(200, 200, 200, 0.4);
    text-indent: 12px
}
.register div button {
    width: 160px;
    height: 100%;
    border: 1px solid #000;
    background: #333;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
}

</style>
