import * as React from "react"
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import {createTheme, TextareaAutosize, ThemeProvider} from "@mui/material";
import * as styles from "./style.module.scss"
import {useState} from "react";

import envelop from "../../images/envelop.png"

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    }
});

const ErrorMessage = function ({msg}) {
    return (
        <div className={styles.error}>{msg}</div>
    )
}

const emailValidation = (val) => {
    return String(val)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}

export const SignUp = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errEmail, setErrEmail] = useState('');
    const [errName, setErrName] = useState('');
    const [loading, setLoading] = useState(false)
    const [sent, setSent] = useState(false)

    const sendForm = () => {
        let valid = true;
        if(email === ""){
            setErrEmail("This is required field");
            valid = false;
        }else if(!emailValidation(email)){
            setErrEmail("This is not a valid email format");
            valid = false;
        }else {
            setErrEmail("");
            valid = true;
        }

        if(name === "") {
            setErrName("This is required field");
            valid = false;
        }else{
            setErrName("")
            valid = true;
        }

        if(valid) {
            setLoading(true)
            fetch("/api/google-sheets", {
                method: 'POST',
                body: JSON.stringify({Email: email, Name: name, Message: message})
            }).then(res => res.json())
              .then((data) => {
                console.log(data)
                setLoading(false)
                setSent(true)
            })
        }
    }

    if(loading){
        return (
            <div className={styles.loading + " regular_text2 white_text"}>Loading...</div>
        )
    }

    if(sent){
        return (
            <div className={styles.sent + " regular_text2 white_text"}>
                <img src={envelop} alt="form sent"/>
                <div>The form has been successfully sent, we are will contact you soon!</div>
            </div>
        )
    }

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
                    }}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.input} label="E-mail" variant="standard" />
                    <ErrorMessage msg={errEmail}/>
                </div>
                <div className="col-lg-5 col-md-12">
                    <TextField sx={{
                        "input": {
                            borderBottom: '2px solid #fff',
                            paddingBottom: '10px',
                            paddingLeft: '10px',
                            fontSize: '18px'
                        }
                    }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={styles.input} label="Name" variant="standard" />
                    <ErrorMessage msg={errName}/>
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
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    multiline
                    rows={4}
                    className={styles.input + " " + styles.text_area}
                    label="Tell us about your research"
                    variant="standard" />
                </div>
                <div className="col-lg-3 col-md-12 text-sm-center text-lg-start">
                    <Button onClick={() => sendForm()} className={styles.button} variant="contained">Submit</Button>
                </div>
            </div>
        </ThemeProvider>
    )
}