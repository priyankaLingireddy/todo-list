import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
} from "./userTypes";
import axios from "axios";
export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};
const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};
const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};
const updateUserRequest = () => ({
  type: UPDATE_USER_REQUEST,
});

const updateUserSuccess = (user) => ({
  type: UPDATE_USER_SUCCESS,
  payload: user,
});

const updateUserFailure = (error) => ({
  type: UPDATE_USER_FAILURE,
  payload: error,
});
const deleteUserRequest = () => ({
  type: DELETE_USER_REQUEST,
});

const deleteUserSuccess = (id) => ({
  type: DELETE_USER_SUCCESS,
  payload: id,
});

const deleteUserFailure = (error) => ({
  type: DELETE_USER_FAILURE,
  payload: error,
});
export const fetchusers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest);
    axios
      .get("http://localhost:3001/users", )
      .then((response) => {
        const users = response.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        const errormsg = error.message;
        dispatch(fetchUsersFailure(errormsg));
      });
  };
};

export const postfetchusers =(data)=>{
  return (dispatch) => {
    dispatch(fetchUsersRequest(data));
    axios
      .post("http://localhost:3001/users",data)
      .then((response) => {
        const users = response.data;
        console.log(users,"This is userActuion")
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        const errormsg = error.message;
        dispatch(fetchUsersFailure(errormsg));
      });
  };
}
export const Updatefetchusers =(data,callback)=>{
  return (dispatch) => {
    dispatch(updateUserRequest());
    axios
      .put(`http://localhost:3001/users/${data.id}`,data)
      .then((response) => {
        const users = response.data;
        console.log(users,"This is userActuion")
        dispatch(updateUserSuccess(users));
        if (callback) callback();
      })
      .catch((error) => {
        const errormsg = error.message;
        dispatch(updateUserFailure(errormsg));
      });
  };
}
export const deletefeatchUser = (id) => {
  return async (dispatch) => {
    dispatch(deleteUserRequest());
    try {
      await axios.delete(`http://localhost:3001/users/${id}`);
      dispatch(deleteUserSuccess(id));
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };
};



