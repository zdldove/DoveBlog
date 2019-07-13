export default { //很关键
    install(Vue, options) {
        Vue.prototype.CommonJs = {
            this_commonlayout: {},
            this_user: {},
            user_login: function(arg) {
                this.this_user.login(arg)
                Vue.prototype.$message.success('登录成功');
                this.CommonLayout('finish');
            },
            sprintf: function(...arg) {
                var str = arg[0] || '',
                    i, n;
                for (i = 1, n = arg.length; i < n; i++) { str = str.replace(/%s/, arg[i]) }
                return str;
            },
            in_array: function(stringToSearch, arrayToSearch) { for (let s = 0; s < arrayToSearch.length; s++) { let thisEntry = arrayToSearch[s].toString(); if (thisEntry == stringToSearch) { return true } } return false },
            CommonLayout: function(m = '', ...info) {
                m = m.toLocaleLowerCase();
                switch (m) {
                    case 'login':
                        this.this_commonlayout.CommonLayout = true;
                        this.this_commonlayout.currentTab = () => import('@/components/Layout/Login.vue');
                        break;
                    case 'logout':
                        this.this_commonlayout.CommonLayout = false;
                        if (confirm('确定退出登录?')) {
                            this.this_user.logout();
                        } else {
                            Vue.prototype.$message.info('孬种');
                        }
                        // this.this_commonlayout.currentTab = () => import('@/components/Layout/Logout.vue');
                        break;
                    case 'logout_mute':
                        this.this_user.logout('mute');
                        break;
                    case 'register':
                        this.this_commonlayout.CommonLayout = true;
                        this.this_commonlayout.currentTab = () => import('@/components/Layout/register.vue');
                        break;
                    case 'finish':
                        this.this_commonlayout.CommonLayout = false;
                        break;
                }
            }
        }
    }
}
