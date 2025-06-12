import axios from "../../api/config";
import { loginuser, logoutuser } from "../reducers/userSlice";

export const asynccurrentuser = () => async (dispatch, getState) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            dispatch(loginuser(user));
            console.log("Session Restored!");
        } else {
            console.log("login to access the resource");
        }
    } catch (error) {
        console.log(error);
    }
};

export const asyncsignupuser = (user) => async (dispatch, getState) => {
    try {
        await axios.post("/users", user);
    } catch (error) {
        console.log(error);
    }
};

export const asyncsigninuser = (user) => async (dispatch, getState) => {
    try {
        const { data } = await axios.get(
            "/users?email=" + user.email + "&password=" + user.password
        );
        if (data[0]?.email && data[0]?.password) {
            localStorage.setItem("user", JSON.stringify(data[0]));
            dispatch(asynccurrentuser());
            console.log("User logged in!");
        } else {
            console.log("Wrong Credientials");
        }
    } catch (error) {
        console.log(error);
    }
};

export const asyncupdateuser = (id, user) => async (dispatch, getState) => {
    try {
        const { data } = await axios.patch("/users/" + id, user);
        localStorage.setItem("user", JSON.stringify(data));
        dispatch(asynccurrentuser());
        console.log("User Updated!");
    } catch (error) {
        console.log(error);
    }
};

export const asyncdeleteuser = (id) => async (dispatch, getState) => {
    try {
        await axios.delete("/users/" + id);
        localStorage.removeItem("user");
        dispatch(logoutuser());
        console.log("User Deleted!");
    } catch (error) {
        console.log(error);
    }
};

export const asynclogoutuser = () => async (dispatch, getState) => {
    try {
        localStorage.removeItem("user");
        dispatch(logoutuser());
        console.log("User logged out!");
    } catch (error) {
        console.log(error);
    }
};
