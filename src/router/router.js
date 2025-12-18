import { createRouter,createWebHistory } from "vue-router";

//pages imports
import Home from "@/components/pages/Home.vue";
import ListPosts from "@/components/pages/ListPosts.vue";
import InsidePosts from "@/components/pages/InsidePosts.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path:'/', redirect:'/home'},
        {path:'/home', component: Home},
        {path:'/posts', component: ListPosts},
        {path:'/posts/:community', component: InsidePosts},
    ]
});

export default router;