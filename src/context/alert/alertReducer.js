import { HIDE_ALERT, SHOW_ALERT } from "../typex";

const hendlers = {
  [SHOW_ALERT]: (state, { payload }) => ({ ...payload, visible: true }),
  [HIDE_ALERT]: state => ({ ...state, visible: false }),
  DEFAULT: (state) => state,
};

export const alertReducer = (state, action) => {
  const hendle = hendlers[action.type] || hendlers.DEFAULT;
  return hendle(state, action);
};
