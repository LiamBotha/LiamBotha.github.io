<script setup lang="ts">

const props = defineProps<{
    tabs:{name:string, href:string}[]
}>()

</script>

<template>
    <v-container class="pa-0 ma-0">
        <v-btn-toggle mandatory class="text-white">
            <v-btn
                v-for="tab in props.tabs"
                :text="tab.name"
                :to="tab.href"
                link
                exact
                border="md"
                variant="outlined"
                height="40px"
                class="ma-1 text-sm-button text-caption"
                rounded="lg"
                append-icon="mdi-pin"
            />
        </v-btn-toggle>
    </v-container>
</template>