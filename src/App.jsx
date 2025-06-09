import { useDispatch, useSelector } from "react-redux";
import { create } from "./store/reducers/productSlice";
import { asyncloadproduct } from "./store/actions/productActions";
import { useEffect } from "react";

const App = () => {
    const dispatch = useDispatch(); // call(dispatch) the action
    const data = useSelector((state) => state); // store data
    console.log(data);

    const createproduct = () => {
        const newProduct = {
            id: 2,
            title: "Mens Casual Premium Slim Fit T-Shirts ",
            price: 22.3,
            description:
                "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
            category: "men's clothing",
            image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            rating: {
                rate: 4.1,
                count: 259,
            },
        };

        // send the data in to the store
        // a normal function is "called" -> xyz()
        // but an action(function) is "dispatched" -> dispatch(xyz())
        // action -> async /sync
        // dispatch(create(newProduct));
    };

    useEffect(() => {
        dispatch(asyncloadproduct());
    }, []);
    return (
        <div className="py-10 px-[10%] mt-10 font-thin">
            <h1 className="mb-5 text-5xl">Apps</h1>
            <button onClick={createproduct}>Create Product</button>
        </div>
    );
};

export default App;
