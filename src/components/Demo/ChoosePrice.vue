<template>
    <div class="hello">
        <div class=" dove-main">
            <h5><span>房间类型:</span></h5>
            <list-choose :data="roomType" :choosed="Choosed.roomType" :disable="[]" callback="choose_room_type"></list-choose>
        </div>
        <div class=" dove-main">
            <h5><span>服务:</span></h5>
            <list-choose :data="service" :choosed="Choosed.service" :disable="[]" callback="choose_room_service"></list-choose>
        </div>
        <div class=" dove-main">
            <h5><span>服务时间:</span></h5>
            <list-choose :data="timeblock" :choosed="Choosed.timeblock" :disable="[]" callback="choose_time_block"></list-choose>
        </div>
        <div class=" dove-main">
            <h5><span>价格:</span></h5>
            {{price}}
        </div>
    </div>
</template>
<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            roomType: [],
            service: [],
            prices: [],
            timeblock: [],
            price_room: {},
            price_room_service: {},
            price: '0.00',
            Choosed: {
                roomType: [],
                service: [],
                timeblock: [],
            }
        }
    },
    created: function() {
        this.init_page();
    },
    components: {
        'list-choose': () => import('./components/ListChoose'),
    },
    methods: {
        init_page: function() {
            this.get_roomType();
            this.get_service();
            this.get_timeblock();
            this.get_price();
        },
        get_roomType: function() {
            for (let i = 1; i < 5; i++) {
                this.roomType.push({ id: i, name: i + '居室' })
            }
        },
        get_service: function() {
            for (let i = 1; i < 5; i++) {
                this.service.push({ id: i, name: i + '号技师' })
            }
        },
        get_timeblock: function() {
            for (let i = 0; i < 24; i++) {
                this.timeblock.push({ id: i, name: i + ':00 ~ ' + i + ':59' })
            }
        },
        get_price: function() {
            for (let i = 0; i < 24; i++) {
                // time
                for (let j = 1; j < 5; j++) {
                    // room
                    this.prices[j + '_' + i] = parseInt(Math.random() * 10000);
                    for (let k = 1; k < 5; k++) {
                        // service
                        this.prices[j + '_' + k + '_' + i] = parseInt(Math.random() * 10000);
                    }
                }
            }
        },
        show_price: function(arg) {
            try {
                this.$set(this.Choosed);
                if (this.Choosed.roomType.length == 0) {
                    throw ('Choose The Room Type First,please.');
                }
                if (this.Choosed.timeblock.length == 0) {
                    throw ('Choose The Time Block First,please.');
                }

                // for (let key in this.Choosed) {
                //   console.log(JSON.stringify(this.Choosed[key]));
                // }


                this.price = 'loading...';
                let price = 0;
                for (let i = 0; i < this.Choosed.timeblock.length; i++) {
                    // time
                    for (let j = 0; j < this.Choosed.roomType.length; j++) {
                        // room
                        price += this.prices[this.Choosed.roomType[j] + '_' + this.Choosed.timeblock[i]];
                        for (let k = 0; k < this.Choosed.service.length; k++) {
                            // service
                            price += this.prices[this.Choosed.roomType[j] + '_' + this.Choosed.service[k] + '_' + this.Choosed.timeblock[i]];
                        }
                    }
                }
                this.price = (price * 0.01).toFixed(2);

            } catch (e) {
                console.log(e);
            }

        },
        choose_room_type: function(x) {
            this.Choosed.roomType = [x.id];
            this.show_price();
        },
        choose_room_service: function(x) {
            let boolean = true;
            for (let i = 0; i < this.Choosed.service.length; i++) {
                if (this.Choosed.service[i] == x.id) {
                    boolean = false;
                    this.Choosed.service.splice(i, 1)
                    break;
                }
            }
            if (boolean) this.Choosed.service.push(x.id);
            this.show_price();
        },
        choose_time_block: function(x) {
            this.Choosed.timeblock = [x.id];
            this.show_price();
        },
    }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dove-main {
    width: 100%;
    padding: 0;
    margin: 0;
    float: left;
}

</style>
