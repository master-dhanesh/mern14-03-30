import { useEffect } from "react";
import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";
import { asynccurrentuser } from "./store/actions/userActions";
import { asyncloadproduct } from "./store/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
    const { user } = useSelector((state) => state.userReducer);
    const { products } = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        !user && dispatch(asynccurrentuser());
    }, [user]);

    // useEffect(() => {
    //     products.length === 0 && dispatch(asyncloadproduct());
    // }, [products]);

    return (
        <div className="font-thin py-10 px-[10%] w-screen h-screen overflow-x-hidden overflow-y-auto">
            <Nav />
            <Mainroutes />
        </div>
    );
};

export default App;
