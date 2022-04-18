const addForm = document.querySelector(".form-add-todo")
const toDoListContainer = document.querySelector(".todos-container")
const searchInput = document.querySelector(".form-search input")


const createNewToDo = toDoText => {
  return `
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${toDoText}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`
}

addForm.addEventListener('submit', event => {
  event.preventDefault()
  const newToDo = event.target.add.value.trim()

  toDoListContainer.innerHTML += createNewToDo(newToDo)

  event.target.reset()
})

toDoListContainer.addEventListener('click', event => {
  const classList = Array.from(event.target.classList)

  if (classList.includes('delete')) {
    event.target.parentElement.remove()
  }
})

searchInput.addEventListener('input', event => {
  const searchText = event.target.value.toLowerCase()
  const toDoList = Array.from(toDoListContainer.children)

  toDoList.forEach(todo => {
    if (todo.textContent.toLowerCase().includes(searchText)) {
      todo.classList.add('d-flex')
      todo.classList.remove('hidden')
      return
    }
    todo.classList.remove('d-flex')
    todo.classList.add('hidden')
  })
})