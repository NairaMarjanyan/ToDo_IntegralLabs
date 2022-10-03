import React from "react";
import style from "./index.module.scss";

function Checkbox({ todo, onChange, checked}) {
    return (
        <div className={style.Checkbox}>
            <label className={style.Container}>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => onChange({
                        ...todo,
                        completed: e.target.checked
                    })}
                />
                <span className={style.Checkmark} />
            </label>
        </div>
    );
}

export default Checkbox;