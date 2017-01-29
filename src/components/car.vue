<template>
    <div class="car-wrapper">
        <img class="car" :class="{
    'car_stop' : intensity <= 2,
    'car_warning' : intensity >= 3 && intensity <= 5,
    'car_danger' : intensity >= 6,
    }" src="../assets/car.svg">
        <div class="_point">{{intensity}}</div>
    </div>
</template>

<style>

    ._point {
        position            : absolute;
        top                 : 25px;
        right               : -5px;
        width               : 80px;
        height              : 80px;
        padding             : 15px 28px;
        background-image    : url("../assets/favorite.svg");
        background-repeat   : no-repeat;
        background-size     : contain;
        background-position : center;
        transform           : rotate(45deg);
        font-size           : 3rem;
        color               : deeppink;
        text-shadow         : 1px 1px 3px #ffffff;
        text-align          : center;
    }

    .car-wrapper {
        position : relative;
    }

    .car {
        margin-top                : 60px;
        width                     : 100%;
        height                    : auto;
        max-height                : 340px;

    }

    .car_stop {
        animation-name            : carStart;
        animation-duration        : 350ms;
        animation-iteration-count : infinite;
    }

    .car_warning {
        animation-name            : carWarning;
        animation-duration        : 350ms;
        animation-iteration-count : infinite;
    }

    .car_danger {
        animation-name            : carDanger;
        animation-duration        : 100ms;
        animation-iteration-count : infinite;
    }

    @keyframes carDanger {
        from, to {
            transform : rotate(0deg);
        }

        25% {
            transform : rotate(5deg);
        }

        50% {
            transform : rotate(0deg);
        }

        75% {
            transform : rotate(-5deg);
        }
    }

    @keyframes carWarning {
        from, to {
            transform : rotate(0deg);
        }

        25% {
            transform : rotate(1.5deg);
        }

        50% {
            transform : rotate(0deg);
        }

        75% {
            transform : rotate(-1.5deg);
        }
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

        props: ["intensity"],

        data () {
            return {}
        }
    }

</script>