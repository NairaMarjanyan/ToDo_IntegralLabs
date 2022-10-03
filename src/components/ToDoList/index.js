import React from "react";
import ToDoItem from "../ToDoItem";

import styles from "./index.module.scss";

function ToDoList({todos, onClick, onChange}) {

    return (
        <div className={styles.ToDoList}>
            {todos.map(todo => {
                return (
                    <div className={styles.TodoItem} key={todo.id}>
                        <ToDoItem
                            todo={todo}
                            onClick={() => onClick(todo.id)}
                            onChange={onChange}
                            text={todo.title}
                            checked={todo.completed}
                        />
                    </div>)
            })}
        </div>
    )
}

export default ToDoList;