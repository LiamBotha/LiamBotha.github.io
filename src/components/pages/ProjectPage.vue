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

const currWindow = ref<number>(-1);

</script>

<template>
    <v-card
        v-if="project"
        variant="text"
        class="pb-5 align-self-start">

        <v-card-title class="text-md-h4 text-h6 font-weight-bold">{{ project.title }}</v-card-title>
        <v-card-subtitle class="text-md-h6 text-h7 font-weight-bold">{{ project.tags.join(', ') }}</v-card-subtitle>
        <v-card-text v-for="paragraph in project.description">{{paragraph}}</v-card-text>

        <v-responsive max-height="" max-width="800px">
            <v-window class="justify-center" v-model="currWindow" showArrows continuous>
                <!--Shows current image number out of total image count-->
                <div class="text-center">{{ currWindow + 1 }} / {{ project.images.length }}</div>
                <!--Carousel of the projects images-->
                <v-window-item
                    v-for="(img, index) in project.images"
                    transition="false"
                    :value="index">
                    <!--Screenshot of the project-->
                    <v-img
                        :src="'/project images/'+ img"
                        class="ma-1 bg-black"
                        cover
                        eager
                    />
                </v-window-item>
            </v-window>
        </v-responsive>
    </v-card>
</template>

<style scoped>
</style>