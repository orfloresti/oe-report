import { useState } from "react";
import Button from "./button/Button";
import styles from "./form.module.scss";
import Input from "./input/Input";
import TextArea from "./textArea/TextArea";
import PropTypes from "prop-types";

const Form = ({onSubmit}) => {

  const initialState = {
    startDate: "",
    endDate: "",
    personId: "",
    token: "",
  }
  const [form, setForm] = useState(initialState);
  
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  }

  const handleReset = () => {
    setForm(initialState);
  }

  return (
    <form className={styles.formWrapper} onSubmit={handleSubmit} onReset={handleReset}>
      <Input
        label="Start date"
        name="startDate"
        type="date"
        value={form.name}
        onChange={handleChange}
      />

      <Input
        label="End date"
        name="endDate"
        type="date"
        value={form.name}
        onChange={handleChange}
      />

      <Input
        label="Person Id"
        name="personId"
        type="text"
        placeholder="Type person Id ..."
        value={form.name}
        onChange={handleChange}
      />

      <TextArea
        label="Token"
        name="token"
        placeholder="Type token ..."
        value={form.name}
        onChange={handleChange}
      />

      <section className={styles.actions}>
        <Button color="outline" label="Clear" type="reset"/>
        <Button color="solid" label="Submit" />
      </section>
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func,
}

export default Form;
