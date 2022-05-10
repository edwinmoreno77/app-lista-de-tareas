import { Todo } from '../classes/todo.class'

export class TodoList {

    constructor() {
        // this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id) {

        this.todos = this.todos.filter(todo => todo.id != id)
        this.guardarLocalStorage();
    }

    marcarCompletado(id) {

        for (const todo of this.todos) {

            if (todo.id == id) {

                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }


    }

    eliminarCompletados() {

        this.todos = this.todos.filter(todo => !todo.completado)
        this.guardarLocalStorage();

    }

    guardarLocalStorage() {

        localStorage.setItem('todo', JSON.stringify(this.todos));

    }

    cargarLocalStorage() {

        this.todos = localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : [];

        this.todos = this.todos.map(obj => Todo.fromJson(obj));// el metodo map me permite barrer cada uno de los elementos que estan dentro de un arreglo y retornar uno nuevo con cada uno de sus objetos mutados, Todo se pone con T mayuscula porque estamos haciendo referencia a una propiedad estatica

        // console.log(this.todos);
        // if (localStorage.getItem('todo')) {
        //     this.todos = JSON.parse(localStorage.getItem('todo'));
        //     console.log(this.todos);
        // } else {
        //     this.todos = [];
        // }
    }
}