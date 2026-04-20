<script setup lang="ts">
import {GetAllWebDevProjects} from "../../services/webdev.service.ts";

document.title = 'Project Showcase';

const websites = GetAllWebDevProjects();

</script>

<template>
    <v-card
        flat
        variant="text"
        class="align-self-start">

        <div class="text-md-h5 pb-5">Web Development</div>

        <v-row
            justify="center"
            class="fill-height">
            <v-card
                v-for="site in websites"
                :href=site.link
                variant="text"
                class="ma-2 border-sm"
                height="300"
                minWidth="300"
                elevation="10"
                rounded="0">
                <v-img
                    :src=site.icon
                    class="position-absolute left-0 right-0 bottom-0"
                    height="100%" cover
                />
                <v-sheet
                    position="absolute"
                    class="top-0 left-0 right-0 blur text-black font-weight-bold pb-2">
                    <v-card-title>{{ site.title }}</v-card-title>
                    <v-card-subtitle>{{ site.tags.join(', ') }}</v-card-subtitle>
                </v-sheet>
            </v-card>
        </v-row>
    </v-card>
</template>

<style scoped>
.blur
{
    backdrop-filter: blur(5px);
    background-color: rgba(255, 255, 255, 0.2);
}
</style>