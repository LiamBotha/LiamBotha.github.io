<script setup lang="ts">

import {useDisplay} from "vuetify";

const videos: string[] = [
    'https://drive.google.com/file/d/1XLmwtIxuEVJyNpQTjxrdbIIBIZ-tUHOr/preview',
    'https://drive.google.com/file/d/1aXwVRozKjQOBtLzeO3-FYIhqHYvHqhkx/preview',
    'https://drive.google.com/file/d/1P99y6hFccnKtQ8IrUCGvsaiB4_ZVHpdd/preview',
    'https://drive.google.com/file/d/1f2YH_9ugSaDws4pBCsWD1C1syHs1RVNa/preview',
    'https://drive.google.com/file/d/1KwSSncWNl--gQlIE-QjsnryMbxSmmfgO/preview',
    'https://drive.google.com/file/d/1KUaJzfUuGdWcKhJJkdy40rKhmmqKaFfq/preview',
    'https://drive.google.com/file/d/1AGyhO7HbOcD-mvAxKCEKn2xhYLd5Fqqh/preview',
    'https://drive.google.com/file/d/1ZJlvXtS4SNsc-Qr1R6hjBay1ilGfLuNi/preview',
    'https://drive.google.com/file/d/1a4PkdCuOFKrnUGvIqspGcMnsi47NAtGd/preview',
    'https://drive.google.com/file/d/1i8Z7-sug25cSkzD1bOZ9HFIYwLXzz0v7/preview',
    'https://drive.google.com/file/d/1aQPttwTsKC8wi6QMshoCbXcMGEJDADj0/preview',
    'https://drive.google.com/file/d/14O8v0zF1hX6558ifurQqtqUsAo2IC73-/preview',
]

</script>

<template>
    <v-card
        variant="text"
        width="100%"
        maxWidth="80vh">
        <v-card-title>Some of my work</v-card-title>
        <v-responsive :aspectRatio="useDisplay({mobileBreakpoint:'sm'}).mobile.value ? 4/3 : 16/9">
            <v-window class="fill-height" show-arrows continuous>
                <v-window-item class="fill-height bg-black" v-for="path in videos">
                    <iframe :src="path" width="100%" height="100%" class="border-0" allowfullscreen/>
                </v-window-item>
            </v-window>
        </v-responsive>
    </v-card>
</template>