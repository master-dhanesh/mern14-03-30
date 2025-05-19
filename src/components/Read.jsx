import { useContext } from "react";
import { usercontext } from "../Wrapper";

const Read = () => {
    const [users, setusers] = useContext(usercontext);

    const DeleteHandler = (id) => {
        const filterusers = users.filter((user) => user.id != id);
        setusers(filterusers);
    };

    const userrender = users.map((user) => {
        return (
            <li key={user.id}>
                <span>{user.name}</span> |
                <span onClick={() => DeleteHandler(user.id)}>Delete</span>
            </li>
        );
    });

    return (
        <div>
            <h1 className="font-thin text-5xl">Read User</h1>
            <ol>{users.length > 0 ? userrender : "No data Found!"}</ol>
        </div>
    );
};

export default Read;
