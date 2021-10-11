import React, { useContext } from "react";
import { AlertContext } from "../context/alert/alertContext";
import { CSSTransition } from "react-transition-group";

export const Alert = () => {
  const { alert, hide } = useContext(AlertContext);

  return (
    <CSSTransition
    in={alert.visible}
    timeout={{
      enter: 500,
      exit: 350
    }}
    classNames={'alert'}
    mountOnEnter
    unmountOnExit
    >
      <div
        className={`alert alert-${alert.type || 'warning'} alert-dismissible fade show `}
      >
        <strong>Alert!</strong>
        &nbsp;{alert.text}
        <button
          onClick={hide}
          type="button"
          className="btn-close btn-sm "
          aria-label="Close"
        >
          <span aria-hidden="true"> </span>
        </button>
      </div>
    </CSSTransition>
  );
};
