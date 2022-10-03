import React, {useEffect, useState} from "react";
import ToDoList from "./components/ToDoList";
import Divider from "./components/UI/Divider";
import Input from "./components/UI/Input";

import styles from './App.module.scss';

const getTodos =  JSON.parse(localStorage.getItem("todos"));

function App() {
    const [checked, setChecked] = useState(false);
    const [state, setState] = useState({
        inputValue: "",
        todos: getTodos || [
            {
              title: "Task 1",
              id: Math.random(),
              completed: false
            },
            {
                title: "Task 2",
                id: Math.random(),
                completed: false
            }
        ]
    });

    const localStorage = window.localStorage;

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(state.todos))
    }, [state.todos])

    function handleChange(e) {
        const value = e.target.value;

        return (
            setState((prevState) => {

                return {
                    ...prevState,
                    inputValue: value,
                };
            }));
        }

    function handleAdd(text) {
        if (text !== "") {
            setState({
                    inputValue: "",
                    todos: [
                        ...state.todos,
                        {
                            title: text,
                            id: Math.random(),
                    }]
                })
            }
    }

    function handleDelete(id) {
        setState( prevState => {
            const todos = prevState.todos.filter((todo) => todo.id !== id);
            return {
                ...prevState,
                todos
            }
        })
    }

    function handleChecked(newTodo) {
        setState(prevState => {
            const todos = state.todos.map(todo => {
                if (todo.id === newTodo.id) {
                    return newTodo
                }
                return todo;
            });
            return {
                ...prevState,
                todos
            }
        })
        setChecked(true);
    }

  return (
    <div className={styles.App}>
      <div className={styles.ToDo}>
          <h2>To Do</h2>
          <div className={styles.ToDoList}>
              <ToDoList
                  todos={state.todos}
                  onClick={handleDelete}
                  onChange={handleChecked}
                  checked={checked}
              />
          </div>
          <Divider />

          <div className={styles.Input}>
              <Input
                  inputProps={{
                      "aria-label": "Lorem ipsum"
                  }}
                  onChange={handleChange}
                  value={state.inputValue}

              />
          </div>
          <button type="button" className={styles.Button} onClick={() => handleAdd(state.inputValue)}>
              <span>Add</span>
          </button>
      </div>
    </div>
  );
}

export default App;
