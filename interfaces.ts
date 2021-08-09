/* function showToDo(todo: { title: string, text: string }) {
  console.log(todo.title + ':' + todo.text)   
}

const monday = {
  title: 'today',
  text: 'dishwashing'
}
 
showToDo(monday) */

interface Todo{
  title: string;
  text: string
}

function showToDo(todo: Todo) {
  console.log(todo.title + ':' + todo.text)   
}

const monday = {
  title: 'kitchen',
  text: 'dishwashing'
}
 
showToDo(monday)