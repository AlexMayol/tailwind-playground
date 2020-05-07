import Vue from 'vue/dist/vue.esm.js';

import Modal from './Modal.vue';
new Vue({
    el:'#app',
    data:{
        msg: 'giddd',
        show: false
    },
    components:{
        Modal
    }
});

