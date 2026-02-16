<script setup lang="ts">

import VideoCarouselComponent from "../VideoCarouselComponent.vue";

document.title = 'Portfolio';

let lineA = "Hi, I'm Liam"
let lineB = "Programmer/Developer from South Africa"
let lineC = "I make Games, Websites, Visualisations, and more"

</script>

<template>
    <v-container
        fluid
        class="pa-0 d-flex flex-fill flex-column fill-height ">
        <v-card
            variant="text"
            class="justify-items-center fill-height"
            width="100%">
            <v-card-text class="text-left justify-center">
                <v-card-text class="pa-1 text-h5 text-sm-h3 font-weight-bold">{{ lineA }}</v-card-text>
                <v-card-text class="pa-1 text-sm-h5">{{ lineB }}</v-card-text>
                <v-card-text class="pa-1 text-sm-h5">{{ lineC }}</v-card-text>
            </v-card-text>
            <VideoCarouselComponent class="pa-5"/>
        </v-card>
    </v-container>
</template>