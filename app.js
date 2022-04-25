const formAddTodo = document.querySelector(".form-add-todo")
const todoListContainer = document.querySelector(".todos-container")
const inputSearchTodo = document.querySelector(".form-search input")

const addTodo = event => {
  event.preventDefault()
  const todoText = event.target.add.value.trim()
  const datasetId = todoText.replace(' ', '')

  todoListContainer.innerHTML += `
    <li class="list-group-item d-flex rounded-0 justify-content-between align-items-center pencil-text" data-todo=${datasetId}>
      <span>${todoText}</span>
      <i class="far fa-trash-alt delete" data-id=${datasetId}></i>
    </li>`

  event.target.reset()
}

const deleteTodo = event => {
  const trashWasClicked = event.target.dataset.id

  if (trashWasClicked) {
    document.querySelector(`[data-todo=${trashWasClicked}]`).remove()
  }
}

const searchTodo = event => {
  const searchText = event.target.value.toLowerCase()
  const toDoList = Array.from(todoListContainer.children)

  toDoList.forEach(todo => {
    const shouldBeVisible = todo.textContent.toLowerCase().includes(searchText)

    if (shouldBeVisible) {
      todo.classList.add('d-flex')
      todo.classList.remove('hidden')
      return
    }
    todo.classList.remove('d-flex')
    todo.classList.add('hidden')
  })
}

formAddTodo.addEventListener('submit', addTodo)
todoListContainer.addEventListener('click', deleteTodo)
inputSearchTodo.addEventListener('input', searchTodo)