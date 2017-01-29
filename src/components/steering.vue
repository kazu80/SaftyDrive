<template>
    <div class="steering-wrapper">
        <img class="steering" src="../assets/steering-wheel.svg">
    </div>
</template>

<style>
    .steering {
        width                     : 100px;
        height                    : auto;
        animation-name            : spin-half;
        animation-duration        : 3000ms;
        animation-iteration-count : infinite;
        animation-timing-function : linear
    }

    @keyframes spin-half {
        0%, 10%, 50%, 60%, 100% {
            transform : rotate(0deg);
        }

        25% {
            transform : rotate(90deg);
        }

        75% {
            transform : rotate(-90deg);
        }
    }
</style>