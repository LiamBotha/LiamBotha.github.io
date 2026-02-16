<script setup lang="ts">
import {useRoute} from "vue-router";
import {GetProjectById, type Project} from "../../services/project.service.ts";
import {ref, watch} from "vue";

const project = ref<Project>()
const projectId: string = String(useRoute().params.projectId)
if(projectId)
{
    project.value = GetProjectById(projectId)
    document.title = 'Liam Botha: ' + project.value?.title || ""
}


watch(useRoute(), (route) => {
    const projectId: string = String(route.params.projectId)
    project.value = GetProjectById(projectId);
    document.title = 'Liam Botha: ' + project.value?.title || "";
})

</script>

<template>
    <v-card
        v-if="project"
        variant="text"
        class="pb-5">
        <v-card-title class="text-h4 font-weight-bold">{{ project.title }}</v-card-title>
        <v-card-subtitle class="text-h6 font-weight-bold">{{ project.tags.join(', ') }}</v-card-subtitle>
        <v-card-text v-for="paragraph in project.description">{{paragraph}}</v-card-text>
        <!-- images -->
        <v-container
            fluid
            class="fill-height align-start justify-center">
            <v-card
                variant="text"
                width="100%"
                maxWidth="80vh"
                class="bg-grey-darken-3 text-body-2"
                >
                <v-row no-gutters>
                    <v-col v-for="n in project.images.length / 2">
                        <v-img :src="'/public/project images/'+ project.images[(n - 1) * 2]" class="ma-1" cover max-height="" />
                        <v-img :src="'/public/project images/'+ project.images[(n) * 2 - 1]" class="ma-1" cover max-height="" />
                    </v-col>
                </v-row>
            </v-card>
        </v-container>
    </v-card>
</template>

<style scoped>
</style>