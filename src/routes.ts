// Routing
import {createRouter, createWebHashHistory} from "vue-router"

import ProjectShowcasePage from "./components/pages/ProjectShowcasePage.vue";
import ProjectListView from "./components/sidebars/ProjectListView.vue";

const routes = [
    {
        path: '',
        components: {
            default: () => import('./components/pages/AboutMePage.vue'),
            sidebar: () => import('./components/sidebars/SkillListView.vue'),
        },
    },
    {
        path: '/projects',
        children: [
            {
                path: '',
                components: {
                    default: ProjectShowcasePage, // breaks on GitHub pages if lazy loaded
                    sidebar: ProjectListView,
                },
            },
            {
                path: ':projectId',
                components: {
                    default: () => import('./components/pages/ProjectPage.vue'),
                    sidebar: () => import('./components/sidebars/ProjectListView.vue'),
                },
            }
        ],
    },
    {
        path: '/skills',
        components: {
            default: () => import('./components/sidebars/SkillListView.vue'),
            sidebar: () => import('./components/sidebars/SkillListView.vue'),
        },
    },
    {
        path: '/web-projects',
        components: {
            default: () => import('./components/pages/WebsiteShowcasePage.vue'),
            sidebar: () => import('./components/sidebars/SkillListView.vue'),
        },
    },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
