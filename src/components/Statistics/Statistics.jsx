// import PropTypes from 'prop-types';
import css from "./Statistics.module.css"

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <div className={css.box}>
            <p className={css.value}><b className={css.title}>Good:</b>{good}</p>
            <p className={css.value}><b className={css.title}>Neutral:</b>{neutral}</p>
            <p className={css.value}><b className={css.title}>Bad:</b>{bad}</p>
            <p className={css.value}><b className={css.title}>Total:</b>{total}</p>
            <p className={css.value}><b className={css.title}>Positive feedback:</b>{positivePercentage}%</p>
        </div>
    );
}


export default Statistics;
