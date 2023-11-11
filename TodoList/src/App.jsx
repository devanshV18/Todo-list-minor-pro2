import { useState } from 'react'
import { TodoProvider } from './contexts'
import './App.css'


function App() {
  //the state todos stores  all the todos in the presc obj structure as it is a array and can store an array of strings
  const [todos,setTodos] = useState([])

  //The todo argument is a string coming from the user input filled form
  const addTodo = (todo) => {
    //VVVIII--- setTodos(todo) here we are storing the todo from user in the state (array) but writing like this deletes all previous entries and enters the current only which is not to be done
    //injecting todo as its obj structure:-
    setTodos((prev) => [{id:Date.now(), ...todo},...prev]) 
  }


  const updateTodo = (id , todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? 
    {...prevTodo,completed:!prevTodo.completed} : prevTodo ))
  }

  return (
    //todos variable accessed by the provider the same array(containing obj which is our todo) with todos and its structure defined in context 
    <TodoProvider value = {{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
