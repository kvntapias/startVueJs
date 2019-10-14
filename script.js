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
        ]
    }
});