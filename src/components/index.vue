<template>
    <div class="container">

        <h3 class="page_title">Safety Evaluation</h3>

        <div class="point">
            00
        </div>

        <div class="waves-effect waves-light btn btn_start">START</div>
    </div>
</template>

<style>

    .page_title {
        position: absolute;
        top: 130px;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        font-size: 4rem;
        text-align: center;
    }

    .point {
        width: 200px;
        height: 200px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 2px solid #ffffff;
        border-radius: 50%;
        padding: 20px;
        font-size: 11rem;
        text-align: center;
        vertical-align: middle;
    }

    .btn_start {
        position: absolute;
        left :50%;
        bottom: 80px;
        font-size: 2.0rem;
        transform: translateX(-50%);
        padding: 0 120px;
    }

</style>

<script>
    export default {
        data () {
            return {
                foo: 'bar',
            }
        },

        created: function () {



        }
    }
</script>