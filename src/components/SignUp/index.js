import * as React from "react"
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import {createTheme, ThemeProvider} from "@mui/material";
import * as styles from "./style.module.scss"

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    }
});

export const SignUp = () => {
    return (
            <ThemeProvider theme={darkTheme}>
                <div className="row">
                    <div className="col-lg-9 col-md-12">
                        <TextField sx={{
                            "input": {
                                borderBottom: '2px solid #fff',
                                paddingBottom: '10px',
                                paddingLeft: '10px',
                                fontSize: '18px'
                            }
                        }} className={styles.input} label="E-mail" variant="standard" />
                    </div>
                    <div className="col-lg-3 col-md-12 text-center">
                        <Button className={styles.button} variant="contained">Sign Up</Button>
                    </div>
                </div>
            </ThemeProvider>
    )
}