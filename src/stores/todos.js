import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todos', () => {
  const todos = ref([])
  const todo1 = ref({
    id: null,
    completed: false,
    text: null,
  })

  return { todos, todo1 }
})
