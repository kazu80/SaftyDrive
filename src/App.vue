<template>
  <div id="app">
    <_index :mode="mode" :point="point" v-on:changeMode="changeMode" v-if="mode == 'index'"></_index>
    <_start :mode="mode" :point="point" v-on:changeMode="changeMode" v-if="mode == 'start'"></_start>
    <_end :mode="mode" point="60" v-on:changeMode="changeMode" v-if="mode == 'end'"></_end>
  </div>
</template>

<style>
  #app {
    position: absolute;
    width: 100%;
    height: 100vh;
    background: green;
  }
</style>

<script>
    import Hello from './components/Hello'

    export default {
        name: 'app',

        data() {
            return {
                mode : 'index',
                point: 0,
            }
        },

        created: function () {
            console.log("created!");
        },

        methods: {
            changeMode: function (val) {
                this.mode = val;
            },
        },

        components: {
            '_index': require ('./components/index.vue'),
            '_start': require ('./components/start.vue'),
            '_end'  : require ('./components/end.vue'),
        }
    }
</script>


