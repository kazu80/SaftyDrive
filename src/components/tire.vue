<template>
    <div class="tire-wrapper">
        <img class="tire" src="../assets/wheel.svg">
    </div>
</template>

<style>
    .tire {
        width                     : 100px;
        height                    : auto;
        animation-name            : spin;
        animation-duration        : 400ms;
        animation-iteration-count : infinite;
        animation-timing-function : linear
    }

    @keyframes spin {
        0% {
            transform : rotate(0deg);
        }
        100% {
            transform : rotate(360deg);
        }
    }

</style>