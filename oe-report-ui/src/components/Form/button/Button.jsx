import styles from "./button.module.scss";
import PropTypes from "prop-types";

const Button = ({label, color, ...rest}) => {
  
  let buttonClass = '';
  switch(color){
    case "outline":
      buttonClass = styles.outline;
      break;
    default:
      buttonClass = styles.solid
  }

  return (
    <button {...rest} className={buttonClass}> {label} </button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
}

export default Button;
