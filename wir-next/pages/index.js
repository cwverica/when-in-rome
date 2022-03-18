import { useState, useEffect } from "react";
import NavBar from '../components/navBar/NavBar';
import ConversionArea from '../components/conversionArea/ConversionArea';
import Error from '../components/error/Error';
import validator from '../helpers/validator';
import styles from '../styles/Home.module.css';



export default function App() {

    const [toRoman, setToRoman] = useState(true);
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [errors, setErrors] = useState([])

    function handleChange(e) {
        setInput(e.target.value);
    }

    useEffect(async function getConversion() {
        const val = input;
        setErrors([]);
        if (val) {
            if (!toRoman) {
                const validated = validator(val);
                if (validated.isValid) {
                    const response = await fetch(`/api/to-arabic/${val}`);
                    let data = await response.json();
                    if (response.status === 200) {
                        setOutput(data.arabic);
                    } else setErrors((errors) => [...errors, { error: "Server Error", message: response.json }]);
                } else setErrors(errors => [...errors, ...validated.errors])
            } else {
                const number = parseInt(val);
                if (isNaN(number)) {
                    setErrors(errors => [...errors, { error: "Invalid", message: "Number is invalid" }])
                } else if (number <= 0 || number >= 4000) {
                    setErrors(errors => [...errors, { error: "Out Of Range", message: "Number is out of range for this project" }])
                } else {
                    const response = await fetch(`/api/to-roman/${val}`);
                    let data = await response.json();
                    if (response.status === 200) {
                        setOutput(data.roman);
                    } else setErrors((errors) => [...errors, { error: "Server Error", message: response.json }]);
                }
            }
        } else setOutput("");
    }, [input]);

    // flex direction column -> conversion area + errormap
    // conversion area flex direction row 
    return (
        <div className="nav-bar">
            <NavBar
                toRoman={toRoman}
                setToRoman={setToRoman} />
            <div className="main-display">
                <div className="helper-text">
                    Click the arrows above to switch conversion direction.
                </div>
                <div className="conversion-area-outer">
                    <ConversionArea
                        toRoman={toRoman}
                        input={input}
                        output={output}
                        handleChange={handleChange}
                        errors={errors} />
                </div>
                <div className="error-area">
                    {errors.length > 0 &&
                        <ul>
                            {errors.map(err => <Error err={err} />)}
                        </ul>
                    }
                </div>
            </div>
        </div>
    );
}