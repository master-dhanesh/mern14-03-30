import { createContext, useState } from "react";
export const usercontext = createContext(null);
const Wrapper = (props) => {
    const [users, setusers] = useState([]);
    return (
        <usercontext.Provider value={[users, setusers]}>
            {props.children}
        </usercontext.Provider>
    );
};

export default Wrapper;
