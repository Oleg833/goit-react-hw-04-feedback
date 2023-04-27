import PropTypes from 'prop-types';
import css from './Notification.module.css'

const Notification = ({message}) => {
    return (
        <section className={css.section}>
            <p className={css.notify}>{message}</p>
        </section>
    );
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}

export default Notification;