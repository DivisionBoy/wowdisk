<template>
    <div class="flex flex-col w-full h-full overflow-x-hidden">
        <main class="relative flex flex-col flex-1 shrink-0 basis-auto items-center">
            <!--Header ref="header" :company="company" :items="headerItems" class="w-full max-w-[1440px] h-header min-h-[95px] md:min-h-[140px] border-b-black z-[9999] noselect" /-->
            <header class="flex justify-center w-full h-headerMax bg-neutral-light border-b border-b-[#DADADA]">
                <div class="flex w-full max-w-maxWidth main-side"></div>
            </header>
            <slot />
              
        </main>

        <footer class="flex flex-col grow-0 shrink-0 w-full h-4 border border-t-black items-center bg-[#0A3D1E]">
        </footer>
    </div>
</template>

<script>
import { useDataStore } from '../stores/data';
//import { nanoid } from 'nanoid';

export default {
    /*head() {
        return {
            link: [{ rel: "canonical", href: `https://wowdisk.ru${this.$route.path}`}],//`${process.env.baseUrl}${this.$route.path}`
            meta: [{ hid: "og:url", property: "og:url", content: `https://wowdisk.ru${this.$route.path}`}],//`${process.env.baseUrl}${this.$route.path}`
        };
    },*/
    setup(){
        
        const store = useDataStore();
        console.log(store.domen)
        
        return { store }

    },
    data(){
        return {

        }
    },
    beforeCreate(){
    },
    created() {
        
        //this.fetchCompany();

    },
    mounted(){
       
    },

    methods: {
        someErrorLogger(){
            console.log('someErrorLogger')
        },
        async fetchCompany(){
            const res = await fetch(`${this.store.baseUrl}assets/company.json?v=`+nanoid(6));
            const data = await res.json();

            this.store._companies = data.company;
            //this.$bus.$emit('company-loaded');
        },
        
    }
}
</script>