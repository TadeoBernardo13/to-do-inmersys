<script setup>
import {useTodoStore} from '../stores/todos'

const {todo} = useTodoStore()

const addTodo = () => {
    console.log(todo.value)
}

</script>

<template>
    <div>

    </div>
</template>


