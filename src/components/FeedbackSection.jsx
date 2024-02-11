import { useState } from "react";
import Button from "./Button/Button";

export default function FeedbackSection() {
  const [form, setForm] = useState({
    name: "",
    hasError: true,
    reason: "help",
  });

  //   const [name, setName] = useState("");
  //   const [hasError, setHasError] = useState(true);
  //   const [reason, setReason] = useState("help");

  function handleNameChange(event) {
    // setName(event.target.value);
    // setHasError(event.target.value.trim().length === 0)
    setForm((prev) => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
    }));
  }

  function toggleError() {
    // setHasError((prev) => !prev); //false
  }

  return (
    <section>
      <h3>Обратная связь</h3>

      <Button onClick={toggleError}>Toggle Error</Button>

      <form>
        <label htmlFor="name">Ваше имя</label>
        <input
          tipe="text"
          id="name"
          className="control"
          value={form.name}
          style={{ border: form.hasError ? "1px solid red" : null }}
          onChange={handleNameChange}
        />

        <label htmlFor="reason">Причина обращения</label>
        <select
          id="reson"
          className="control"
          value={form.reason}
          onChange={(event) => setForm((prev) => ({ ... prev, reason: event.target.value}))}
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>

        <pre>
          {/* Name: {form.name} <br />
          Reason: {form.reason} <br /> */}
          {/* {JSON.stringify(form, null, 2)} */}
        </pre>

        <Button disabled={form.hasError} isActive={!form.hasError}>
          Отправить
        </Button>
      </form>
    </section>
  );
}
