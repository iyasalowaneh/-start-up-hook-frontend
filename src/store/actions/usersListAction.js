import * as actionTypes from "./types";
import instance from "./instance";

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/users");
      dispatch({
        type: actionTypes.FETCH_USERS,

        payload: { users: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
