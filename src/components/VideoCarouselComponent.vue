<script setup lang="ts">

import {useDisplay} from "vuetify";

const videos: string[] = [
    '/videos/CompositePack_01.mp4',
    '/videos/CompositePack_02.mp4',
    '/videos/CompositePack_03.mp4',
    '/videos/HazardIdentification_01.mp4',
    '/videos/HazardIdentification_02.mp4',
    '/videos/HazardIdentification_03.mp4',
    '/videos/CTTrainer.mp4',
    '/videos/RugbyRush.mp4',
    '/videos/LabSafetyTraining.mp4',
    '/videos/VirtualConstruction_01.mp4',
    '/videos/VirtualConstruction_02.mp4',
    '/videos/VirtualConstruction_03.mp4',
]


</script>

<template>
    <v-card
        variant="text"
        width="100%"
        maxWidth="80vh"
        class="border-sm">
        <v-card-title>Some of my work</v-card-title>
        <v-carousel
            class="d-flex flex-fill flex-column pb-12 bg-black"
            hide-delimiter-background
            color="#2db889"
            width="100%"
            height="100%">
            <v-carousel-item v-for="path in videos">
                <v-video eager floating :src="path" :aspect-ratio="useDisplay({mobileBreakpoint:'sm'}).mobile.value ? '1' : '16/9'"/>
            </v-carousel-item>
        </v-carousel>
    </v-card>
</template>