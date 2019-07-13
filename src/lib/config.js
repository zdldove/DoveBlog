const baseurl = '';
// const baseurl = '//blog.zdldove.top';
// const baseurl = '//blog';
export default {
    install(Vue, options) {
        Vue.prototype.api = {
                baseurl: baseurl,
                note_class: baseurl + '/Home/Apis/Index?_c=Note&_e=ListClass',
                note_list: baseurl + '/Home/Apis/Index?_c=Note&_e=ListList',
                NoteListInfo: baseurl + '/Home/Apis/Index?_c=Note&_e=ListInfo',
                note_list_throw: baseurl + '/Home/Apis/Index?_c=Note&_e=InfoOrphan',
                note_info: baseurl + '/Home/Apis/Index?_c=Note&_e=Info',
                user: {
                    login: baseurl + '/Home/Apis/Index?_c=User&_e=login',
                    logout: baseurl + '/Home/Apis/Index?_c=User&_e=logout',
                },
                edit: {
                    PageMove: baseurl + '/Home/ApisEdit/Index?_e=PageMove',

                    NoteListInfo: baseurl + '/Home/ApisEdit/Index?_e=NoteListInfo',
                    NoteInfoRemove: baseurl + '/Home/ApisEdit/Index?_e=NoteInfoRemove',
                    NoteListRemove: baseurl + '/Home/ApisEdit/Index?_e=NoteListRemove',
                    NoteClassRemove: baseurl + '/Home/ApisEdit/Index?_e=NoteClassRemove',

                    NoteInfo: baseurl + '/Home/ApisEdit/Index?_e=NoteInfo',
                },

                oss_path: '//img-dove.oss-cn-hongkong.aliyuncs.com/Blogs/',
            },
            Vue.prototype.msg = {
                cancel: '孬种',
                error: '网络错误',
                lost: '网络异常',
                succeed: '操作成功',
                needLogin: 'Login First,Please.'
            }
    }
}
