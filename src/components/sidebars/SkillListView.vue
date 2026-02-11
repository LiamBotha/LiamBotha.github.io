<script setup lang="ts">
import {ref} from "vue";

const skillsGroups = [
    {
        grouping: 'Game Engines',
        items: [
            "Unreal Engine 4 & 5",
            "Unity",
        ]
    },
    {
        grouping: 'Programming Languages',
        items: [
            "C++",
            "C#",
            "JavaScript & TypeScript",
        ]
    },
    {
        grouping: 'Javascript Frameworks',
        items: [
            "Vue.js",
            "Vuetify",
        ]
    },
    {
        grouping: 'Other',
        items: [
            "NPM",
            "Git",
            "Perforce",
            "VR",
            "AR",
        ]
    },
    {
        grouping: 'Devices',
        items: [
            "Quest 2 & 3",
            "HoloLens 2",
        ]
    }
]

const openGroupsList = ref<string[]>([]);
skillsGroups.forEach(group => { openGroupsList.value.push(group.grouping) });

</script>

<template>
    <v-list class="text-h6 bg-transparent" v-model:opened="openGroupsList">

        <v-list-item class="font-weight-bold"> Skills </v-list-item>

        <v-list-group
            maxHeight="100vh"
            v-for="group in skillsGroups"
            :value="group.grouping"
            class="text-body-2 font-weight-light">

            <!-- Header -->
            <template v-slot:activator={props}>
                <v-list-item
                    v-bind="props">
                    <v-icon icon="mdi-folder" size="xl" class="pr-2"/> {{ group.grouping }}
                </v-list-item>
            </template>

            <!-- Item -->
            <v-list-item v-for="item in group.items" density="compact" class="">
                <v-icon icon="mdi-circle-small" size="xl"/>
                {{ item }}
            </v-list-item>

        </v-list-group>
    </v-list>
</template>

<style scoped>
</style>