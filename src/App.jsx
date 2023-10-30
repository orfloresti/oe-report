import { useState } from "react";
import styles from "./App.module.scss";
import Form from "./components/Form/Form";
import Card from "./components/card/Card";

function App() {
  const [result, setResult] = useState();
  const handleSubmit = (form) => {
    console.log(form);
    setResult('Test');
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Card title="Open English Report">
          <Form onSubmit={handleSubmit}/>
        </Card>
        {result ? <Card title="Results"></Card> : null}
      </div>
    </div>
  );
}

export default App;
