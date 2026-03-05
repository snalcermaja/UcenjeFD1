const {createApp} = Vue;

createApp({
    data(){
        return{
            brojac:0
        }
    },
    methods:{
        povecaj(){
            this.brojac++;
        },
         smanji(){
            this.brojac--;
        },
    }
    
}).mount('#app');