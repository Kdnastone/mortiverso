import PropTypes from 'prop-types'

import './button.css'

const Button = ({text, type, handlerButton}) => {
    return (
        <button onClick={handlerButton} type={type}>{text}</button>
    )
}

    
Button.propTypes = {
    text : PropTypes.string.isRequired,
    type: PropTypes.string,
    handlerButton: PropTypes.func
}

export default Button