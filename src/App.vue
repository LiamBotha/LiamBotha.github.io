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

                <v-col id="content" maxHeight="10vh" class="position-relative pa-2 ml-md-1 rounded-lg">
                    <v-container maxHeight="97vh" class="d-flex flex-fill flex-column pa-0 ma-0 ga-0">
                        <PageTabComponent :tabs="tabs" class="text-white"/>
                        <v-divider/>
                        <RouterView class="overflow-y-auto"/>
                        <ContactInfoComponent class="position-absolute bottom-0 left-0"/>
                    </v-container>
                </v-col>
            </v-row>
        </v-main>
    </v-app>
</template>

<style>
 #content, #sidebar {
     background-color: #101318;
     scrollbar-color: #2db889 transparent;
 }

 html{
     overflow: hidden;
 }
</style>