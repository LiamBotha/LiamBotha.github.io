<script setup lang="ts">
import PageTabComponent from "./components/PageTabComponent.vue";
import ContactInfoComponent from "./components/ContactInfoComponent.vue";
import { useDisplay } from "vuetify";
import {ref, watch} from "vue";

const tabs = ref([
    {
        name: "About Me",
        href: "/",
    },
    {
        name: "Projects",
        href: "/projects",
    },
])

if(useDisplay({mobileBreakpoint:'md'}).mobile.value)
    tabs.value.push({
        name: "Skills",
        href: "/skills",
    })

watch(useDisplay({mobileBreakpoint:'md'}).mobile, (bIsMobile) => {
    if(bIsMobile)
        tabs.value = [
            {
                name: "About Me",
                href: "/",
            },
            {
                name: "Projects",
                href: "/projects",
            },
            {
                name: "Skills",
                href: "/skills",
            },
        ]
    else
        tabs.value = [
            {
                name: "About Me",
                href: "/",
            },
            {
                name: "Projects",
                href: "/projects",
            },
        ]
})

</script>

<template>
    <v-app id="background" class="bg-black pa-0 ma-0" >
        <v-main class="pr-1 pt-1 pb-1 d-flex" maxHeight="100vh">
            <v-row no-gutters>
                <v-col
                    id="sidebar"
                    v-if="!useDisplay({mobileBreakpoint:'md'}).mobile.value"
                    cols="auto"
                    class="pa-1 text-grey-lighten-2 rounded-lg">
                    <RouterView name="sidebar" class="overflow-y-scroll fill-height pa-2" maxHeight="98vh"/>
                </v-col>

                <v-col id="content" class="d-flex flex-column ml-md-1 rounded-lg">
                    <PageTabComponent :tabs="tabs" class="text-white"/>
                    <v-divider/>
                    <v-container id="content-scrollable" fluid class="fill-height overflow-y-scroll">
                        <RouterView width="100%"/>
                    </v-container>
                    <v-divider/>
                    <ContactInfoComponent/>
                </v-col>
            </v-row>
        </v-main>
    </v-app>
</template>

<style>
 #content, #sidebar {
     background-color: #1b1e20;
     scrollbar-color: #2db889 transparent;
     max-height: 99vh;
 }

 #content-scrollable {
     background-color: #191a1c;
 }
</style>