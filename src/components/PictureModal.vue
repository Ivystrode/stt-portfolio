<template>
    <div class="fixed inset-0 bg-gray-600 bg-opacity-75 overflow-y-auto h-full w-full" id="my-modal">
        <div id="the-modal" class="relative top-20 mx-auto p-5 shadow-lg rounded-md bg-slate-900">
            <div class="text-center">

                <img @click="$emit('close-modal')" :src=image class="inline">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CaptureModal',
    props: {
        image: String
    },
    emits: [
        'close-modal'
    ]
}
</script>

<style scoped>
#the-modal {
    border-style: solid;
    border-width: 5px;
    border-radius: 3%;
    border-color: rgb(68, 122, 170);
    z-index: 99;
    max-width: 70vw;
    /* min-width: 95vw; */
    
}
img {
    min-width: 50vw;
    /* max-height: 700px; */
}
</style>