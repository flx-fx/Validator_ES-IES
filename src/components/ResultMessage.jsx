import PropTypes from "prop-types";

export default function ResultMessage({ sum1, sum2 }) {

    ResultMessage.propTypes = {
        sum1: PropTypes.number.isRequired,
        sum2: PropTypes.number.isRequired,
    };

    let range = 0.1;
    let message;
    let color;
    let borderColor;
    let bgColor;

    if (sum1 - sum2 < sum1 * range && sum2 - sum1 < sum1 * range) { //Hardcoded Values sind vielleicht sinnvoller
        message = 'Deine Werte sind im richtigen Bereich!';
        color = '#2E7D32';
        borderColor = '#A5D6A7';
        bgColor = '#E8F5E9';
    } else if (isNaN(sum1) || isNaN(sum2)) {
        message = "Noch keine Werte Eingetragen!";
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
    </>)
}