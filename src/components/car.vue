<template>
    <div class="car-wrapper">
        <img class="car" src="../assets/car.svg">
    </div>
</template>

<style>
    .car {
        margin-top                : 60px;
        width                     : 100%;
        height                    : auto;
        max-height                : 340px;
        animation-name            : carStart;
        animation-duration        : 350ms;
        animation-iteration-count : infinite;
    }

    @keyframes carStart {
        from, to {
            transform : rotate(0deg);
        }

        25% {
            transform : rotate(.5deg);
        }

        50% {
            transform : rotate(0deg);
        }

        75% {
            transform : rotate(-.5deg);
        }
    }

</style>

<script>

    export default {
        data () {
            return {}
        }
    }

</script>