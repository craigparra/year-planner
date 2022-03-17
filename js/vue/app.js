import { context } from '/js/config/context.js';
import { i18n } from '/js/vue/i18n.js';

i18n.global.locale = context.model.lang;

const app = Vue.createApp({
    data() {
        return context.model;
    },
    methods: context.controller,
    mounted() {
        this.refresh();
    }
});

context.app = app;
context.i18n = i18n;

export { app }












