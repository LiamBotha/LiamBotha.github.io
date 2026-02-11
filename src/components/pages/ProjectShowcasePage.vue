<script setup lang="ts">
import {GetAllProjects} from "../../services/project.service.ts";

document.title = 'Project Showcase';

const projectStore = GetAllProjects();

</script>

<template>
    <v-card
        flat
        variant="text"
        class="pb-10 d-flex flex-column flex-fill align-center justify-items-center">

        <v-card-title class="text-md-h5 pa-2">Some personal projects I've worked on</v-card-title>

        <v-row
            justify="center"
            class="fill-height mt-auto">
            <v-card
                v-for="project in projectStore"
                :to="'/projects/' + project.id"
                variant="text"
                class="ma-2 border-sm"
                height="300"
                minWidth="300"
                elevation="10"
                rounded="0">
                <v-img
                    :src="'/project images/' + project.images[0]"
                    class="position-absolute left-0 right-0 bottom-0"
                    height="100%" cover
                />
                <v-sheet
                    position="absolute"
                    class="top-0 left-0 right-0 blur text-white font-weight-bold pb-2">
                    <v-card-title>{{ project.title }}</v-card-title>
                    <v-card-subtitle>{{ project.tags.join(', ') }}</v-card-subtitle>
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