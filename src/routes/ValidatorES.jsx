import './Validator.css';
import 'katex/dist/katex.min.css';
import Latex from "react-latex-next";
import {useEffect, useState} from "react";
import ResultMessage from "../components/ResultMessage.jsx";

export default function ValidatorES() {
    const [values, setValues] = useState(JSON.parse(localStorage.getItem('values-es')) || Array(6).fill(''));

    const [sum1, setSum1] = useState(NaN);
    const [sum2, setSum2] = useState(NaN);

    const range = 0.1;

    function handleOnChange(i, e) {
        let newValues = values.slice();
        const newValue = e.target.value.replace(',', '.');
        newValues[i] = newValue.match(/^-?(\d+)?\.?(\d+)?$/g) ? newValue : values[i];
        setValues(newValues);
    }

    useEffect(() => {
        localStorage.setItem('values-es', JSON.stringify(values));
        setSum1(parseFloat(values[0]) * parseFloat(values[2]) + parseFloat(values[1]) * parseFloat(values[3]));
        setSum2(parseFloat(values[0]) * parseFloat(values[4]) + parseFloat(values[1]) * parseFloat(values[5]));
    }, [values]);

    return (<>
        <div className='Card'>
            <p style={{margin: 4}}>Für die Impulserhaltung gilt:</p>
            <Latex>$m_1 \cdot v_1 + m_2 \cdot v_2 = m_1 \cdot v_1^\prime + m_2 \cdot v_2^\prime$</Latex>
        </div>
        <div className='Card'>
            <h4 style={{margin: 4}}>Setze ein:</h4>
            <div className='GridContainer'>
                <div>
                    <Latex>$m_1$ = </Latex>
                    <input type="text" value={values[0]} onChange={e => handleOnChange(0, e)}/>
                    <Latex>$kg$</Latex>
                </div>
                <div>
                    <Latex>$m_2$ = </Latex>
                    <input type="text" value={values[1]} onChange={e => handleOnChange(1, e)}/>
                    <Latex>$kg$</Latex>
                </div>
                <div>
                    <Latex>$v_1$ = </Latex>
                    <input type="text" value={values[2]} onChange={e => handleOnChange(2, e)}/>
                    <Latex>$\frac m s$</Latex>
                </div>
                <div>
                    <Latex>$v_2$ = </Latex>
                    <input type="text" value={values[3]} onChange={e => handleOnChange(3, e)}/>
                    <Latex>$\frac m s$</Latex>
                </div>
                <div>
                    <Latex>$v_1^\prime$ = </Latex>
                    <input type="text" value={values[4]} onChange={e => handleOnChange(4, e)}/>
                    <Latex>$\frac m s$</Latex>
                </div>
                <div>
                    <Latex>$v_2^\prime$ = </Latex>
                    <input type="text" value={values[5]} onChange={e => handleOnChange(5, e)}/>
                    <Latex>$\frac m s$</Latex>
                </div>
            </div>
            <p style={{margin: 4}}>
                {!isNaN(sum1) && !isNaN(sum2) ? <Latex>${`${sum1}`} {!(sum1 - sum2 < sum1 * range && sum2 - sum1 < sum1 * range) ? '\\neq' : '\\approx'} {`${sum2}`}$</Latex> : ''}
            </p>
        </div>
        <ResultMessage sum1={sum1} sum2={sum2} range={range}/>
    </>);
}
