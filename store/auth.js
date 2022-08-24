import axios from "axios";
import history from "../client/history";
const initialState = {};

const TOKEN = "token";

const SET_AUTH = "SET_AUTH";

const SetAuth = (auth) => ({
  type: SET_AUTH,
  auth,
});

export function TokenThunk() {
  return async (dispatch) => {
    try {
      console.log("tokenThunk");
      const token = window.localStorage.getItem(TOKEN);
      if (token) {
        const response = await axios.get("/auth/me", {
          headers: {
            authorization: token,
          },
        });
        return dispatch(SetAuth(response.data));
      }
    } catch (err) {
      console.log(err);
    }
  };
}

export const authenticate =
  (username, password, method) => async (dispatch) => {
    try {
      const res = await axios.post(`/auth/${method}`, {
        username,
        password,
      });
      window.localStorage.setItem(TOKEN, res.data.token);
      dispatch(TokenThunk());
    } catch (authError) {
      return dispatch(SetAuth({ error: authError }));
    }
  };

export const logout = () => {
  return async function (dispatch) {
    try {
      localStorage.removeItem(TOKEN);
      history.push("/login");
      dispatch(SetAuth({}));
    } catch (err) {
      console.log(err);
    }
  };
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_AUTH:
      return action.auth;
    default:
      return state;
  }
}
