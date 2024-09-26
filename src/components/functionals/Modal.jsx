import PropTypes from 'prop-types'
import Button from '../basics/Button'

import './styleModal.css'

function Modal({text, handlerButton}) {
  return (
    <div className='modal'>      
        <p>{text}</p>
        <Button handlerButton={handlerButton} text='OK' type='button'></Button>       
    </div>
  )
}

Modal.propTypes = {
    text: PropTypes.string.isRequired,
    handlerButton: PropTypes.func.isRequired
}

export default Modal

