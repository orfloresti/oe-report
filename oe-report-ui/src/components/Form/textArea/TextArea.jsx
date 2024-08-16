import "./textArea.scss"
import PropTypes from "prop-types";

const TextArea = ({label, ...rest}) => {

  return (
    <>
      <label>{label}</label>
      <textarea {...rest} />
    </>
  )
}

TextArea.propTypes = {
  label: PropTypes.string,
}


export default TextArea;

