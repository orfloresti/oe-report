import Button from "./button/Button";
import styles from "./form.module.scss";

const Form = () => {
  return(
    <form className={styles.form}>
      <label htmlFor="startDate">Start date</label>
      <input type="date" id="startDate"/>

      <label htmlFor="endDate">End date</label>
      <input type="date" id="endDate"/>

      <label htmlFor="userId">User ID</label>
      <input type="text" id="userId"/>
      
      <label htmlFor="token">Token</label>
      <textarea id="token"/>
      
      <section className={styles.actions}>
        <Button text="Submit"/>
      </section>
    </form>
  )
}

export default Form