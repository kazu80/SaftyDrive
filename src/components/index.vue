<template>
    <div class="container" :class="{ 'background-color-animation_stop' : true}">

        <div class="_header">
            <a class="btn-floating btn-large waves-effect waves-light blue" href="javascript:void(0)" @click="changeMode('index')">index</a>
            <a class="btn-floating btn-large waves-effect waves-light yellow" href="javascript:void(0)" @click="changeMode('driveData')">Data</a>
            <a class="btn-floating btn-large waves-effect waves-light red" href="javascript:void(0)" @click="changeMode('intensity')">intensity</a>
        </div>

        <_car v-if="mode == 'index'"></_car>

        <_tire class="tire_component" v-if="mode == 'index_'"></_tire>

        <_steering class="steering_component" v-if="mode == 'index_'"></_steering>

        <_driveData
                :speed="speed"
                :acceleration_X="acceleration_X"
                :acceleration_Y="acceleration_Y"
                :acceleration_Z="acceleration_Z"
                :gyro_pitch="gyro_pitch"
                :gyro_roll="gyro_roll"
                :gyro_yaw="gyro_yaw"
                :steeringWheel="steeringWheel"
                :brakeOperation="brakeOperation"
                :acceleratorPedalPosition="acceleratorPedalPosition"
                :acceleration_y="acceleration_y"
                :acceleration_z="acceleration_z"
                :heartrate="heartrate"
                :emotionCluster="emotionCluster"
                :latitude="latitude"
                :longitude="longitude"
                v-if="mode == 'driveData'"
        ></_driveData>

        <_video v-if="mode == 'driveMovie'"></_video>

        <_intensity :intensity="intensity" v-if="mode == 'intensity'"></_intensity>

    </div>
</template>

<style>

    ._header {

    }

    ._header a {
        margin-right : 10px;
    }

    .container {
        width            : 100%;
        height           : 100%;
        padding          : 20px;
        background-color : deepskyblue;

        /*
        animation-name: color;
        animation-duration: 3000ms;
        animation-iteration-count: infinite;
        */
    }

    .background-color-animation_stop {
        animation-name            : color_stop;
        animation-duration        : 2000ms;
        animation-iteration-count : infinite;
        animation-direction       : alternate;
    }

    @keyframes color_stop {
        0% {
            background-color : lightgray;
        }

        100% {
            background-color : darkgray;
        }
    }

    @keyframes color_normal {
        0% {
            background-color : deepskyblue;
        }

        33% {
            background-color : yellowgreen;
        }

        66% {
            background-color : orangered;
        }
    }

    .steering_component {
        position : absolute;
        left     : 50px;
        bottom   : 120px;
    }

    .tire_component {
        position : absolute;
        right    : 50px;
        bottom   : 120px;
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
                acceleration_X_array: [],
                acceleration_Y          : 0,
                acceleration_Y_array: [],
                acceleration_Z          : 0,
                acceleration_Z_array: [],
                gyro_pitch              : 0,
                gyro_pitch_array    : [],
                gyro_roll               : 0,
                gyro_roll_array     : [],
                gyro_yaw                : 0,
                gyro_yaw_array      : [],
                steeringWheel           : 0,
                brakeOperation          : null,
                acceleratorPedalPosition: 0,
                acceleration_y          : 0,
                acceleration_z          : 0,
                heartrate               : 0,
                emotionCluster          : 0,
                latitude                : 0,
                longitude               : 0,
                max_params              : {
                    acceleration_X: 0,
                    acceleration_Y: 0,
                    acceleration_Z: 0,
                    gyro_pitch    : 0,
                    gyro_roll     : 0,
                    gyro_yaw      : 0,
                },

                axios                   : require ('axios'),
                intensity               : 0,
            }
        },

        watch: {

            acceleration_X_array: function () {
                if (this.$data.acceleration_X_array.length >= 5) {
                    this.$data.max_params.acceleration_X = Math.max.apply (null, this.$data.acceleration_X_array);
                    this.$data.acceleration_X_array = [];
                    this.sendVehicleData ();
                }
            },

            acceleration_Y_array: function () {
                if (this.$data.acceleration_Y_array.length >= 5) {
                    this.$data.max_params.acceleration_Y = Math.max.apply (null, this.$data.acceleration_Y_array);
                    this.$data.acceleration_Y_array = [];
                    this.sendVehicleData ();
                }
            },

            acceleration_Z_array: function () {
                if (this.$data.acceleration_Z_array.length >= 5) {
                    this.$data.max_params.acceleration_Z = Math.max.apply (null, this.$data.acceleration_Z_array);
                    this.$data.acceleration_Z_array = [];
                    this.sendVehicleData ();
                }
            },

            gyro_pitch_array: function () {
                if (this.$data.gyro_pitch_array.length >= 5) {
                    this.$data.max_params.gyro_pitch = Math.max.apply (null, this.$data.gyro_pitch_array);
                    this.$data.gyro_pitch_array = [];
                    this.sendVehicleData ();
                }
            },

            gyro_roll_array: function () {
                if (this.$data.gyro_roll_array.length >= 5) {
                    this.$data.max_params.gyro_roll = Math.max.apply (null, this.$data.gyro_roll_array);
                    this.$data.gyro_roll_array = [];
                    this.sendVehicleData ();
                }
            },

            gyro_yaw_array: function () {
                if (this.$data.gyro_yaw_array.length >= 5) {
                    this.$data.max_params.gyro_yaw = Math.max.apply (null, this.$data.gyro_yaw_array);
                    this.$data.gyro_yaw_array = [];
                    this.sendVehicleData ();
                }
            },

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

                    this.$data.acceleration_X_array.push (Acceleration.x);
                    this.$data.acceleration_Y_array.push (Acceleration.y);
                    this.$data.acceleration_Z_array.push (Acceleration.z);
                }
            );

            const handleGyro = navigator.vehicle.gyro.subscribe (
                gyro => {
                    this.$data.gyro_pitch = gyro.pitchRate;
                    this.$data.gyro_roll = gyro.rollRate;
                    this.$data.gyro_yaw = gyro.yawRate;

                    this.$data.gyro_pitch_array.push (gyro.pitchRate);
                    this.$data.gyro_roll_array.push (gyro.rollRate);
                    this.$data.gyro_yaw_array.push (gyro.yawRate);
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

            sendVehicleData: function () {
                if (
                    this.$data.max_params.acceleration_X &&
                    this.$data.max_params.acceleration_Y &&
                    this.$data.max_params.acceleration_Z &&
                    this.$data.max_params.gyro_pitch &&
                    this.$data.max_params.gyro_roll &&
                    this.$data.max_params.gyro_yaw
                ) {
                    let acceleration_X = this.$data.max_params.acceleration_X;
                    let acceleration_Y = this.$data.max_params.acceleration_Y;
                    let acceleration_Z = this.$data.max_params.acceleration_Z;

                    acceleration_X = acceleration_X * acceleration_X;
                    acceleration_Y = acceleration_Y * acceleration_Y;
                    acceleration_Z = (acceleration_Z - 1) * (acceleration_Z - 1);

                    let raw_intensity = Math.sqrt (acceleration_X + acceleration_Y + acceleration_Z);

                    this.$data.intensity = Math.round ((raw_intensity - 0.1) / 0.26 * 10);
                    //this.$data.intensity = Math.floor (raw_intensity * 10);

                    console.log (`${raw_intensity}, ${this.$data.intensity}`);

                    this.$data.axios.post ('http://localhost:3000/shakes', {"intensity": this.$data.intensity})
                        .then (res => console.log (res))
                        .catch (err => console.warn (err));

                    //
                    this.$data.max_params = {
                        acceleration_X: 0,
                        acceleration_Y: 0,
                        acceleration_Z: 0,
                        gyro_pitch    : 0,
                        gyro_roll     : 0,
                        gyro_yaw      : 0,
                    };
                }
            },

            changeMode: function (val) {
                this.$emit ("changeMode", val);
            }
        },

        components: {
            '_car'      : require ('./car.vue'),
            '_driveData': require ('./driveData.vue'),
            '_tire'     : require ('./tire.vue'),
            '_steering' : require ('./steering.vue'),
            '_video'    : require ('./video.vue'),
            '_intensity': require ('./intensity.vue'),
        }
    }
</script>