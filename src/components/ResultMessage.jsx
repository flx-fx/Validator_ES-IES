import {bool, number} from "prop-types";

export default function ResultMessage({ sum1, sum2, correct }) {
    
    let message;
    let color;
    let borderColor;
    let bgColor;

    if (correct) {
        message = 'Deine Werte sind im richtigen Bereich!';
        color = '#2E7D32';
        borderColor = '#A5D6A7';
        bgColor = '#E8F5E9';
    } else if (isNaN(sum1) || isNaN(sum2)) {
        message = 'Noch keine/nicht alle Werte Eingetragen!';
        color = '#303740';
        borderColor = '#DAE2ED';
        bgColor = '#FFFFFF';
    } else {
        message = 'Deine Werte scheinen Falsch zu sein!';
        color = '#C62828';
        borderColor = '#EF9A9A';
        bgColor = '#FFEBEE';
    }

    return (<>
        <div className='Card Result' style={{color: color, borderColor: borderColor, backgroundColor: bgColor}}>
            <p style={{margin: 4}}>{message}</p>
        </div>
    </>);
}

ResultMessage.propTypes = {
    sum1: number.isRequired,
    sum2: number.isRequired,
    correct: bool.isRequired,
};
