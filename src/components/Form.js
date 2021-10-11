import React, { useState, useContext } from "react";
import { AlertContext } from "../context/alert/alertContext";
import { FirebaseContext } from "../context/firebase/firebaseContext";

export const Form = () => {
  const [value, setValue] = useState("");
  const alert = useContext(AlertContext);
  const firebase = useContext(FirebaseContext)

  const submitHendler = (event) => {
    event.preventDefault();

    if (value.trim()) {
      firebase.addNote(value.trim()).then(() => {
        alert.show("Notification created", "success");
      }).catch(() => {
        alert.show("Something was wring", "danger");
      })
      setValue('')
    } else {
      alert.show('Entry note text')
    }
  };

  return (
    <form onSubmit={submitHendler}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Entry text value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </form>
  );
};
