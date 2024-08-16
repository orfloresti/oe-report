import { useState } from "react";
import styles from "./App.module.scss";
import Form from "./components/Form/Form";
import Card from "./components/card/Card";

function App() {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (form) => {
    setReport(null)
    setLoading(true);
    const response = await fetch("http://localhost:3000/", {
      body: JSON.stringify(form),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());

    setReport(response);
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Card title="Open English Report">
          <Form onSubmit={handleSubmit} />
        </Card>
        {loading && (
          <Card title="Results">
            <p>Loading ...</p>
          </Card>
        )}
        {report && (
          <Card title="Results">
            <>
              <p> Time: {(report.time.hours).toFixed(2)}h </p>
              <p> Open English - {report.weeks} </p>
              <ul>
                {Object.keys(report.activities).map((activity) => (
                  <li key={activity}>
                    {`${activity}: ${report.activities[activity]}`}
                  </li>
                ))}
              </ul>
            </>
          </Card>
        )}
      </div>
    </div>
  );
}

export default App;
