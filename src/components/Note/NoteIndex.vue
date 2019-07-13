<template>
    <div>
        <div class="list">
            <ul>
                <li v-for="val in data" :key="val.id">
                    <span>{{val.title}}</span>
                    <ol>
                        <router-link :to="{path:'/Note',query:{m:'NoteList',cid:value.id}}" v-for="value in val.child" :key="value.id" :title="value.title" draggable="true" tag="li">
                            <dd :style="{backgroundImage:`url(${api.oss_path}${value.pic})`}"></dd>
                            <span>{{value.title}}</span>
                        </router-link>
                    </ol>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Note',
    data() {
        return {
            msg: 'Note',
            data: [],
            loading: true,
        }
    },
    created: function() {
        this.init_class();
    },
    methods: {
        init_class: function() {
            this.loading = true;
            this._http.post(this.api.note_class, { cid: 0 }).then((res) => {
                for ([key, val] of Object.entries(res.data)) {
                    this.data.push({ id: val['id'], title: val['title'], child: val['param'] })
                }
                this.loading = false;
            });
        }
    }
}

</script>
