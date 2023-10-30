import "./input.module.scss";
import PropTypes from "prop-types";

const Input = ({label, type, id, placeholder}) => {

    return (
      <>
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} placeholder={placeholder}/>
      </>
    )
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
}

export default Input;
