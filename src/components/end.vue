<template>

    <div class="container">

        <h3 class="page_title">RESULT</h3>

        <div class="point">
            {{point}}
        </div>

        <ul class="detail">
            <li>After cooking the blood oranges, season tofu, asparagus and gravy with it in a plastic bag.</li>
            <li>After cooking the blood oranges, season tofu, asparagus and gravy with it in a plastic bag.</li>
            <li>After cooking the blood oranges, season tofu, asparagus and gravy with it in a plastic bag.</li>
        </ul>


    </div>
</template>

<style>

    .detail {
        position  : absolute;
        left      : 20px;
        bottom    : 60px;
        font-size : 1.4rem;

    }

</style>

<script>
    export default {
        props: ["point"],
    }
</script>