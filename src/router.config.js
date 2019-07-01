import VueRouter from "vue-router";
import Vue from 'vue'
Vue.use(VueRouter);
const props = (route) => ({ query: route.query, params: route.params })
export default new VueRouter({
    mode: "history",
    props: true,
    routes: [
        { path: '/', component: () => import('./view/setup.vue'), props },
    ],
})