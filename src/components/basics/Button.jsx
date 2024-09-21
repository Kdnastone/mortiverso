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

Button.propTypes = {
    text: PropTypes.string,
    setRoute: PropTypes.func,
};

export default Button;
