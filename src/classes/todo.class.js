

export class Todo {


    constructor(tarea) {

        this.tarea = tarea;

        this.id = new Date().getTime();// 135484321
        this.completado = false;
        this.creado = new Date();

    }
}