import { defineStore } from 'pinia'
//import { nanoid } from 'nanoid';

export const useDataStore = defineStore('data', {
    state: () => ({
        _domen:'https://wowdisk.ru/',
        _publicId:''

    }),
    actions: {
        /*async fetchProjects(url){
            const res = await fetch(url);
            const data = await res.json();
            //console.log('fetch', data);
            this.projects = data;
        },*/
        async fetchCompany(ctx){
            const res = await fetch('assets/company.json?v='+nanoid(6));
            const data = await res.json();
            //ctx.commit('updateCompanies', data.company);
            /*if(!data.company){
                this._query = 'general';
            }else{
                this._query = data.company;
            }*/

            this._companies = data.company;

        }

    },
    getters: {
        domen(state) {
            return state._domen;
        }

    }
})