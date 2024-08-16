import "./input.module.scss";
import PropTypes from "prop-types";

const Input = ({label, ...rest }) => {

    return (
      <>
        <label>{label}</label>
        <input {...rest}/>
      </>
    )
}

Input.propTypes = {
  label: PropTypes.string
}

export default Input;
