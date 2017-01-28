<template>
    <div class="container">

        <h3 class="page_title">START</h3>

        <div class="point">
            {{point_view}}
        </div>
    </div>
</template>

<style>

</style>


<script>
    export default {

        props: ["point"],

        data() {
            return {
                point_view: this.point,
                interval  : null,
            }
        },

        watch: {
            point_view: function () {

                if (this.$data.point_view >= 60) {

                    clearInterval (this.$data.interval);

                    this.changeMode ('end');
                }
            }
        },

        mounted: function () {

            this.$data.interval = setInterval (() => {

                this.$data.point_view += 1;

            }, 100);
        },

        methods: {
            changeMode: function (val) {
                this.$emit ("changeMode", val);
            }
        }

    }
</script>
