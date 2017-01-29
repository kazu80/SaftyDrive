<template>
    <div>
        <h3 class="page_title">Driving Data</h3>

        <div class="data-wrapper">
            <ul class="data">
                <li>speed: {{speed / 1000}}km/h</li>
                <li>Acceleration X: {{ acceleration_X }}G</li>
                <li>Acceleration Y: {{ acceleration_Y }}G</li>
                <li>Acceleration Z: {{ acceleration_Z }}G</li>
                <li>Gyro pitch: {{ gyro_pitch }}</li>
                <li>Gyro roll: {{ gyro_roll }}</li>
                <li>Gyro yaw: {{ gyro_yaw }}</li>
                <li>steeringWheel: {{ steeringWheel }}</li>
                <li>brakeOperation: {{ brakeOperation }}</li>
                <li>acceleratorPedalPosition: {{ acceleratorPedalPosition }}</li>
                <li>heartrate: {{heartrate}}</li>
                <li>emotionCluster: {{emotionCluster}}</li>
                <li>latitude: {{latitude}}</li>
                <li>longitude: {{longitude}}</li>
            </ul>
        </div>
    </div>
</template>

<style>
    .page_title {
        margin-top : 30px;
        width      : 100%;
        font-size  : 4rem;
        text-align : left;
        z-index    : 10;
    }

    .data-wrapper {
        margin-top : 30px;
        width      : 100%;
        font-size  : 2rem;
        text-align : left;
    }

    .data-wrapper .data {
        display    : inline-block;
        text-align : left;
        z-index    : 10;
    }
</style>

<script>
    export default {
        props: [
            "speed",
            "acceleration_X",
            "acceleration_Y",
            "acceleration_Z",
            "gyro_pitch",
            "gyro_roll",
            "gyro_yaw",
            "steeringWheel",
            "brakeOperation",
            "acceleratorPedalPosition",
            "heartrate",
            "emotionCluster",
            "latitude",
            "longitude"
        ],
    }
</script>