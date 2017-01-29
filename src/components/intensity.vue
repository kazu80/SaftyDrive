<template>
    <div>

        <ul v-for="intensity_num in intensities">
            <li class="intensity">{{intensity_num}}</li>
        </ul>

    </div>
</template>

<style>
    .intensity {
        font-size : 3rem;
    }
</style>

<script>
    export default {
        props: ['intensity'],

        data() {
            return {
                intensities: [],
            }
        },

        watch: {
            intensity: function (val) {
                this.$data.intensities.splice (0, 0, val);
            }
        }
    }
</script>