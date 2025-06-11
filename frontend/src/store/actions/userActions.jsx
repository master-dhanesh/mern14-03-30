import axios from "../../api/config";

export const asyncsignupuser = (user) => async (dispatch, getState) => {
    try {
        await axios.post("/users", user);
    } catch (error) {
        console.log(error);
    }
};
