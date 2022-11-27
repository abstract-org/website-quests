import * as React from "react"
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import {createTheme, TextareaAutosize, ThemeProvider} from "@mui/material";
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
                    <div className="col-lg-7 col-md-12">
                        <TextField sx={{
                            "input": {
                                borderBottom: '2px solid #fff',
                                paddingBottom: '10px',
                                paddingLeft: '10px',
                                fontSize: '18px'
                            }
                        }} className={styles.input} label="E-mail" variant="standard" />
                    </div>
                    <div className="col-lg-5 col-md-12">
                        <TextField sx={{
                            "input": {
                                borderBottom: '2px solid #fff',
                                paddingBottom: '10px',
                                paddingLeft: '10px',
                                fontSize: '18px'
                            }
                        }} className={styles.input} label="Name" variant="standard" />
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <TextField sx={{
                            "textarea": {
                                borderBottom: '2px solid #fff',
                                paddingBottom: '10px',
                                paddingLeft: '10px',
                                fontSize: '18px'
                            },
                            ".MuiInputBase-root": {
                                padding: "0"
                            }
                        }}
                        multiline
                        rows={4}
                        className={styles.input + " " + styles.text_area}
                        label="Tell us about your research"
                        variant="standard" />
                    </div>
                    <div className="col-lg-3 col-md-12 text-center">
                        <Button className={styles.button} variant="contained">Submit</Button>
                    </div>
                </div>
            </ThemeProvider>
    )
}