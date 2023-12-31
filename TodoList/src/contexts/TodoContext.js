import { createContext, useContext } from "react";

export const TodoContext = createContext({
   //creating a default structure of TODO
    todos: [
        {
            id:1,
            todo: "todo msg",
            completed: false,
        },
        //there will be multiple and basically all todos here with the above structure accessible for usag eby functionalities and componenets`
        
    ],
    //todo will be the input msg and subsequent function is invoked
    addTodo: (todo) => {} ,
    updateTodo: (id,todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider