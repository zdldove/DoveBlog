<template>
    <div class="dove-main">
        <tab :is="page" v-loading="!page"></tab>
    </div>
</template>
<script>
export default {
    name: 'Admin',
    data() {
        return {
            page: '',
            tab: {
                ChoosePrice: () => import('./ChoosePrice.vue'),
            }
        }
    },
    created: function() {
        this.setPage(this.$route);
    },
    methods: {
        setPage: function(route) {
            let m = route.query.page || 'Welcome';
            this.page = this.tab[m] || this.tab['Welcome'];
        }
    },
    watch: {
        '$route': function(to, from) {
            this.setPage(to);
        }
    }
}

</script>
<style>
</style>
