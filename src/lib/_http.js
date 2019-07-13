import axios from 'axios'

// 封装axios
export default {
    install(Vue) {
        let error1 = () => { Vue.prototype.$message.error(Vue.prototype.msg.error) };
        let error2 = () => { Vue.prototype.$message.error(Vue.prototype.msg.lost) };
        Vue.prototype._http = {
            get: function(url, err1 = error1, err2 = error2) {
                return new Promise((resolve, reject) => {
                    axios.get(url, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(function(res) {
                        if (res.data.code != 0) {
                            Vue.prototype.$message.error(res.data.msg);
                            return false;
                        }
                        resolve(res.data);
                    }, function(res) {
                        err2(res);
                    });
                })
            },
            post: function(url, params, err1 = error1, err2 = error2) {
                return new Promise((resolve, reject) => {
                    let data = new FormData();
                    for (let [key, val] of Object.entries(params)) {
                        data.append(key, val);
                    }
                    axios.post(url, data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(function(res) {
                        if (res.data.code != 0) {
                            Vue.prototype.$message.error(res.data.msg);
                            return false;
                        }
                        resolve(res.data);
                    }, function(res) {
                        err2(res);
                    });
                })
            },
            execute: function(url, params, err1 = error1, err2 = error2) {
                return new Promise((resolve, reject) => {
                    let time = (new Date()).getTime();
                    let express = typeof localStorage.getItem('express') != 'null' ? localStorage.getItem('express') : 0;
                    let token = typeof localStorage.getItem('token') != 'null' ? localStorage.getItem('token') : null;
                    if (express < time || !token) {
                        Vue.prototype.$message.error(Vue.prototype.msg.needLogin);
                        Vue.prototype.CommonJs.CommonLayout('logout_mute');
                        Vue.prototype.CommonJs.CommonLayout('login');
                        reject(false);
                    }
                    let data = new FormData();
                    for (let [key, val] of Object.entries(params)) {
                        data.append(key, val);
                    }
                    axios.post(url, data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'token': token } }).then(function(res) {
                            if (res.data.code != 0) {
                                Vue.prototype.$message.error(res.data.msg);
                                return false;
                            }
                            resolve(res.data);
                        },
                        function(res) {
                            err2(res);
                        });
                })
            },
        }
    }
}
