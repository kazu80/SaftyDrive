<template>
    <div class="container">

        <h3 class="page_title">Driving Data</h3>

        <div class="video-container">
            <iframe style="transform:scale(0.35);transform-origin:0 0;" width="853" height="480" src="http://13.112.91.95:3000/cluster/controlindex.html?json=20170110-1818-chiba-makuhari_full.json" frameborder="0" allowfullscreen></iframe>
        </div>

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

        <!--
        <div class="waves-effect waves-light btn btn_start" @click="changeMode('start')">START</div>
        -->
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

    .video-container {
        position       : absolute;
        top            : 0;
        left           : 500px;
        padding-right  : 1000px;
        padding-bottom : 1000px;
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
        props: ["mode", "point"],

        data () {
            return {
                speed                   : 0,
                acceleration_X          : 0,
                acceleration_Y          : 0,
                acceleration_Z          : 0,
                gyro_pitch              : 0,
                gyro_roll               : 0,
                gyro_yaw                : 0,
                steeringWheel           : 0,
                brakeOperation          : null,
                acceleratorPedalPosition: 0,
                acceleration_y          : 0,
                acceleration_z          : 0,
                heartrate               : 0,
                emotionCluster          : 0,
                latitude                : 0,
                longitude               : 0,
                //altitude: 0,
                //heading: 0,
                //speed: 0,

            }
        },

        created: function () {

            const handleSpeed = navigator.vehicle.vehicleSpeed.subscribe (
                vehicleSpeed => {
                    this.$data.speed = vehicleSpeed.speed;

                    //navigator.vehicle.vehicleSpeed.unsubscribe(handle);
                }
            );

            const handleAcceleration = navigator.vehicle.acceleration.subscribe (
                Acceleration => {
                    this.$data.acceleration_X = Acceleration.x;
                    this.$data.acceleration_Y = Acceleration.y;
                    this.$data.acceleration_Z = Acceleration.z;
                }
            );

            const handleGyro = navigator.vehicle.gyro.subscribe (
                gyro => {
                    this.$data.gyro_pitch = gyro.pitchRate;
                    this.$data.gyro_roll = gyro.rollRate;
                    this.$data.gyro_yaw = gyro.yawRate;
                }
            );

            const handleSteeringWheel = navigator.vehicle.steeringWheel.subscribe (
                steeringWheel => {
                    this.$data.steeringWheel = steeringWheel.angle;
                }
            );

            const handleBrakeOperation = navigator.vehicle.brakeOperation.subscribe (
                brakeOperation => {
                    this.$data.brakeOperation = brakeOperation.brakePedalDepressed;
                }
            );

            const handleAcceleratorPedalPosition = navigator.vehicle.acceleratorPedalPosition.subscribe (
                acceleratorPedalPosition => {
                    this.$data.acceleratorPedalPosition = acceleratorPedalPosition.value;
                }
            );

            const handleVital = navigator.vehicle.vital.subscribe (
                vital => {
                    this.$data.heartrate = Math.floor (vital.heartrate);
                    this.$data.emotionCluster = Math.floor (vital.emotionCluster);
                }
            );

            const handleLocation = navigator.vehicle.location.subscribe (
                location => {
                    this.$data.latitude = Math.floor (location.latitude * 1000) / 1000;
                    this.$data.longitude = Math.floor (location.longitude * 1000) / 1000;
                    //this.$data.altitude   = Math.floor( location.altitude * 1000) / 1000;
                    //this.$data.heading    = Math.floor( location.heading * 1000) / 1000;
                    //this.$data.speed      = Math.floor( location.speed * 1000) / 1000;
                }
            );

        },

        methods: {
            changeMode: function (val) {
                this.$emit ("changeMode", val);
            }
        }
    }
</script>