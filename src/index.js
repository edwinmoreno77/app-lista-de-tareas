
import './styles.css';

// import { Todo } from './classes/todo.class';
// import { TodoList } from './classes/todo-list.class';
import { Todo, TodoList } from './classes/index';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml(todo));

// const tarea = new Todo('Aprender JavaScript');
// todoList.nuevoTodo(tarea);

// crearTodoHtml(tarea);

// localStorage.setItem('mi-key', 'abc123');
// sessionStorage.setItem('mi-key', 'abc123');

// setTimeout(() => {

//     localStorage.removeItem('mi-key');
// }, 1500);