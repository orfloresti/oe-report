import "./textArea.scss"
import PropTypes from "prop-types";

const TextArea = ({label, id, placeholder}) => {

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <textarea id={id} placeholder={placeholder} />
    </>
  )
}

TextArea.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
}


export default TextArea;

