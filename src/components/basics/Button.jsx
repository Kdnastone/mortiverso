<<<<<<< HEAD
import PropTypes from 'prop-types'

import './button.css'

const Button = ({text, type, handlerButton}) => {
    return (
        <button onClick={handlerButton} type={type}>{text}</button>
    )
}
=======
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, setRoute }) => {
    const handlerButton = () => {
        const textRouteLower = text.toLowerCase();
        setRoute(textRouteLower);
    };

    return (
        <li>
            <button onClick={handlerButton}>{text}</button>
        </li>
    );
};
>>>>>>> development

Button.propTypes = {
<<<<<<< HEAD
    text : PropTypes.string.isRequired,
    type: PropTypes.string,
    handlerButton: PropTypes.func
}
=======
    text: PropTypes.string,
    setRoute: PropTypes.func,
};
>>>>>>> development

export default Button;
