import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <div className={css.box}>
            {options.map(title =>
                <button
                    key={title}
                    type="button"
                    className={css.btn}
                    onClick={() => onLeaveFeedback(title)}>
                    {title}
                </button>)}
        </div>
    );
}



FeedbackOptions.propTypes ={
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};


export default FeedbackOptions;