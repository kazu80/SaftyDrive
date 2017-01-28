<template>
    <div class="container">

        <h3 class="page_title">START</h3>

        <div class="point">
            {{point_view}}
        </div>

        <div class="detail_param">
            speed: {{speed}}
        </div>

    </div>
</template>

<style>

    .detail_param {
        position  : absolute;
        left      : 20px;
        bottom    : 60px;
        font-size : 1.4rem;
    }

</style>


<script>
    export default {

        props: ["point"],

        data() {
            return {
                point_view: this.point,
                interval  : null,
                vehicle   : navigator.vehicle,
                speed     : 0,
            }
        },

        watch: {
            point_view: function () {

                if (this.$data.point_view >= 60) {

                    clearInterval (this.$data.interval);

                    //this.changeMode ('end');
                }
            }
        },

        mounted: function () {

            //

            //
            this.$data.interval = setInterval (() => {
                this.$data.point_view += 1;

                navigator.vehicle.vehicleSpeed.get ()
                //this.$data.vehicle.vehicleSpeed.get()
                    .then (vehicleSpeed => {
                        console.log ("Vehicle speed: " + vehicleSpeed.speed);
                        this.$data.speed = vehicleSpeed.speed;

                        console.log (this.$data.speed);

                    })
                    .catch (err => console.log (err));

            }, 100);
        },

        methods: {
            changeMode: function (val) {
                this.$emit ("changeMode", val);
            }
        }

    }
</script>
