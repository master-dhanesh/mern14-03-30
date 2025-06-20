import { useEffect } from "react";
import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";
import { asynccurrentuser } from "./store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
    const { user } = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        !user && dispatch(asynccurrentuser());
    }, [user]);

    return (
        <div className="font-thin py-10 px-[10%] w-screen  overflow-x-hidden ">
            <Nav />
            <Mainroutes />
        </div>
    );
};

export default App;
