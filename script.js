const app = new Vue({
    el : '#app',
    data : {
        titulo : "HolaMundo",
        frutas: ['manzana', 'pera','limon'],
        personas: [
            {
                nombre: "kevin", 
                apellidos : "tapias",
                edad: 19
            },
            {
                nombre: "juan", 
                apellidos : "tapias",
                edad: 18
            },
            {
                nombre: "mario", 
                apellidos : "tapias",
                edad: 11
            },
        ],
        nuevaPersona : '',
        totaledades : 0,

        fondo : 'bg-warning',
        color: true
    },

    methods : {
        agregarPersona(){
            this.personas.push({
                nombre : this.nuevaPersona,
                apellidos : this.nuevaPersona,
                edad : this.nuevaPersona,
            });
            this.nuevaPersona = ''
        },
        quitarPersona(){

        }
    },

    computed: {
        sumarEdades(){
            this.totaledades = 0;
            for (persona of this.personas) {
                this.totaledades += persona.edad;
            }
            return this.totaledades;
        }
    }
});