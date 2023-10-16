<script setup>
import { storeToRefs } from 'pinia'
import { useTodoStore } from '../stores/todos'

const { todo1, todos } = storeToRefs(useTodoStore())

const addTodo = () => {
    console.log(todo1.value)
    //Agregar el id al todo
    todo1.value = {
        ...todo1.value,
        id: crypto.randomUUID(),
    }
    //Agregar el todo al estado
    todos.value = [...todos.value, todo1.value]
    //Limpiar los estados
    todo1.value = {
        id: null,
        text: null,
        completed: false,
    }
}

const hanleCompleteTodo = (_todo) => {
    console.log("Update", _todo)
    //Actualizar el estado del todo completado si el id es igual al id del todo
    todos.value = todos.value.map((todo) => {
        if (todo.id === _todo) {
            todo.completed = !todo.completed
        }
        return todo
    })
}

</script>

<template>
    <div class="bg-gray-700 w-5/6 sm:w-2/3 h-max rounded-3xl overflow-hidden m-auto px-[6%] py-[5%] shadow-[0_18px_60px_rgba(8,_112,_184,_0.7)]">
            <h1 class="text-blue-300 font-semibold block sm:hidden text-3xl">My Tasks</h1>
            <div class="mt-5 relative w-full sm:w-2/3 mx-auto">
                <input type="text" v-model="todo1.text" placeholder="Add new task" class="shadow-[inset_1px_3px_10px_#111418] block w-full p-4 pl-10 text-sm text-gray-900 rounded-lg bg-gray-50 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white" @keydown.enter="addTodo" />
                <button @click="addTodo" class="text-blue-300 text-3xl absolute right-0.5 bottom-0.5  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg py-2">></button>
            </div>

            <div class="mt-5 text-blue-300">
                <ul class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <li v-for="_todo in todos" :key="_todo.id" class="rounded-2xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] p-5 text-xl">
                        <template v-if="!_todo.completed">
                            <p class="text-blue-300"> <button class="text-blue-300 mr-3" @click="hanleCompleteTodo(_todo.id)">○</button> {{
                                _todo.text }}</p>

                        </template>
                    </li>
                </ul>
            </div>
            <div class="mt-5 text-blue-300 text-2xl">
                <p>Completed</p>
                <p v-if="todos.length <= 0" class="text-center text-sm text-gray-400">No tasks to do</p>
                <ul class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    
                    <li v-for="_todo in todos" :key="_todo.id" class="rounded-2xl shadow-[inset_1px_3px_10px_#111418] p-5 text-xl">
                        <template v-if="_todo.completed">
                            <p class="text-blue-300 line-through"> <button class="text-blue-300 mr-3" @click="hanleCompleteTodo(_todo.id)">●</button> {{
                                _todo.text }}</p>
                        </template>
                    </li>
                </ul>
            </div>
    </div>
</template>


