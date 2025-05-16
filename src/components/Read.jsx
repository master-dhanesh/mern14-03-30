import abc from "./Read.module.css";

const Read = (props) => {
    console.log(abc);
    const users = props.users;
    const setusers = props.setusers;

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
            <h1 className={abc.head}>Read User</h1>
            <ol>{users.length > 0 ? userrender : "No data Found!"}</ol>
        </div>
    );
};

export default Read;
