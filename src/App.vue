<template>
  <div id="app">
    <_index :mode="mode" :point="point" v-on:changeMode="changeMode"></_index>
  </div>
</template>

<style>
  #app {
    position   : relative;
    width      : 100%;
    height     : 100vh;
    background : green;
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


