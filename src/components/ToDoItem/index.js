import React from "react";
import Checkbox from "../UI/Checkbox";
import CloseSvg from "../../Icons/CloseSvg";

import styles from "./index.module.scss";

function ToDoItem({onClick, text, todo, onChange, checked}) {

    return (
        <div className={styles.ToDoItem}>
            <div className={styles.Wrapper}>
                <div className={styles.Checkbox}>
                    <Checkbox
                        onChange={onChange}
                        todo={todo}
                        checked={checked}
                    />
                </div>
                <div className={styles.Text}>{text}</div>
            </div>
            <div className={styles.Icon} onClick={onClick}>
                <CloseSvg />
            </div>
        </div>
    )
}

export default ToDoItem;