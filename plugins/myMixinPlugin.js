// import Vue from 'vue'
// import categories from 'mixins/categories'

// Vue.mixin(categories)
import { provide } from 'vue';
import { categories } from "~/composable/categories";

export default {
    install: (app) => {
        const mixin = categories();
        provide('myMixin', mixin);
      }
}
