import React from 'react'
import PropTypes from 'prop-types'

const Button = (text) => {

    const handleButton = () => {
        ///lógica
    }
    return (
        <button onClick={handleButton}>{text}</button>
    )
}

    
Button.propTypes = {
    text : PropTypes.string.isRequired
}

export default Button
