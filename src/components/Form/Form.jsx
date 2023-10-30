import Button from "./button/Button";
import styles from "./form.module.scss";
import Input from "./input/Input";
import TextArea from "./textArea/TextArea";

const Form = () => {
  return (
    <form className={styles.form}>
      <Input label="Start date" id="startDate" type="date" />

      <Input label="End date" id="endDate" type="date" />

      <Input
        label="Person Id"
        id="personId"
        type="text"
        placeholder="Type person Id ..."
      />

      <TextArea
        label="Person Id"
        id="personId"
        type="text"
        placeholder="Type token ..."
      />

      <section className={styles.actions}>
        <Button text="Submit" />
      </section>
    </form>
  );
};

export default Form;
