import { defineStore } from 'pinia'

export const useProjectsStore = defineStore('projects', {
    state: () => ({
        projects:[],
    }),
    actions: {
        async fetch(url){
            const resp = await fetch(url);
            if (!resp.ok) {
                const message = `An error has occurred into 'asyncData': ${resp.status}`;
                throw new Error(message);
            }
            const data = await resp.json();
            //console.log('fetch', data);
            this.projects = data;
        }
    },
    getters: {
        // automatically infers the return type as a number
    }
})