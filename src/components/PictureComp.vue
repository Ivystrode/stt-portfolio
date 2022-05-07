<template>
    <div id="borderbox" class="flex justify-center">
        <div id="detection-card" class="rounded-lg shadow-lg bg-slate-900 max-w-LG">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img @click="$emit('open-modal', image)" class="rounded-t-lg text-gray-200" :src=image onerror="this.src='https://s3.envato.com/files/236638219/No%20signal%20590x332.jpg'" alt="No video feed detected"/>
            </a>
        </div>
    </div>
</template>



<script>

// RUNNING CAMERA FEED ON/FROM RASPBERRY PI
// USE COMMAND:
// ./mjpg_streamer -o "output_http.so -w ./www" -i "input_raspicam.so"
// FROM WITHIN /MJPEG-STREAMER-EXPERIMENTAL FOLDER!!

export default {
    name: "PictureComponent",
    props: {
        image: String
    },
    emits: [
        'open-modal'
    ],
    methods: {
        reboot() {
            alert("Unit is rebooting, please wait...")
            // fetch("api/post/reboot/")
        }
    },
    async created() {

      console.log("video feed")
    }
}
</script>

<style scoped>
#borderbox {
    border-style: solid;
    border-width: 5px;
    border-radius: 3%;
    /* height: 450px; */
    border-color: rgb(68, 122, 170);
    /* min-width: 380px; */
    /* min-height: 450px; */

}
#detection-card {
    min-width: 380px;
}
</style>