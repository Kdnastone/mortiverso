import './input.css';
import PropTypes from 'prop-types'


const Input = ({ label, type, name, onChange, placeholder}) => (
  <div>
    <label>{label}</label>
    <input 
    type={type} 
    name={name} 
    onChange={onChange} 
    placeholder={placeholder}
    required/>
  </div>
);
Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
}
export default Input;