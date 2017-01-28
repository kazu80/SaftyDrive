<template>
  <div id="app">
    <_index></_index>
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

        created: function () {
            console.log("created!");
        },

        components: {
            '_index' : require ('./components/index.vue'),
        }
    }
</script>


