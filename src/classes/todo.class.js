

export class Todo {

    static fromJson({ id, tarea, completado, creado }) {// de esta manera vamos a crear la instancia y nos va a permitir recuperar los metodos de la clases desde el Json que viene del local storage
        const tempTodo = new Todo(tarea);

        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;


        return tempTodo;
    }

    constructor(tarea) {

        this.tarea = tarea;

        this.id = new Date().getTime();// 135484321
        this.completado = false;
        this.creado = new Date();

    }

    imprimirClase() {
        console.log(`${this.tarea} - ${this.id}`);
    }
}