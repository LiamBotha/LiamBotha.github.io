import { createApp } from 'vue'

//vuetify
// @ts-ignore
import "vuetify/styles"
import {createVuetify} from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import '@mdi/font/css/materialdesignicons.css'
import { VVideo } from 'vuetify/labs/VVideo'

// Vue Routing
import {router} from "./routes.ts";

// Components
import App from './App.vue'

const vuetify = createVuetify({
    components: {
        ...components,
        VVideo,
    },
    directives,
})

createApp(App)
    .use(vuetify)
    .use(router)
    .mount('#app')