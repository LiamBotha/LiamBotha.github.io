// Routing
import {createRouter, createWebHashHistory} from "vue-router"

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
                    default: () => import('./components/pages/ProjectShowcasePage.vue'),
                    sidebar: () => import('./components/sidebars/ProjectListView.vue'),
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
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
