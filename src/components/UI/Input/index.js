import  React from 'react';
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";

import styles from "./index.module.scss";

function Input({value, onChange, ...muiDefaultProps}) {

    return (
        <div className={styles.Input}>
            <Box>
                <TextField
                    {...muiDefaultProps}
                    onChange={onChange}
                    placeholder="Lorem Ipsum"
                    value={value}
                />
            </Box>
        </div>
    );
}

export default Input;