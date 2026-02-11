<script setup lang="ts">
import {GetAllProjects} from "../../services/project.service.ts";

const projectStore = GetAllProjects();

</script>

<template>
    <v-list class="text-h5 bg-transparent" minWidth="275">
        <v-list-item class="font-weight-bold"> Projects </v-list-item>
        <v-divider class="my-2"></v-divider>
        <v-list-item
            title="Home"
            to="/projects"
            exact
            class="font-weight-bold border-b-sm">
            <template v-slot:prepend>
                <v-icon icon="mdi-home" size="xl"/>
            </template>
        </v-list-item>
        <v-list-item
            v-for="project in projectStore"
            :title="project.title"
            :to="'/projects/' + project.id"
            link
            class="font-weight-bold border-b-md mt-1 mb-1">
            <template v-slot:prepend>
                <v-icon icon="mdi-play" size="xl"/>
            </template>
        </v-list-item>
    </v-list>
</template>

<style scoped>
</style>