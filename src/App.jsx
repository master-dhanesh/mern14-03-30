import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
    const [users, setusers] = useState([]);
    return (
        <div className="w-screen h-screen bg-gray-800 text-white p-10">
            <Create users={users} setusers={setusers} />
            <Read users={users} setusers={setusers} />
        </div>
    );
};

export default App;
