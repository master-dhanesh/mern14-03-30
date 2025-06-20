import { useDispatch, useSelector } from "react-redux";
import { asyncupdateuser } from "../store/actions/userActions";

const Cart = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.userReducer);

    const IncreaseQuantity = (index) => {
        const copyuser = { ...user, cart: [...user.cart] };

        copyuser.cart[index] = {
            ...copyuser.cart[index],
            quantity: copyuser.cart[index].quantity + 1,
        };

        dispatch(asyncupdateuser(user.id, copyuser));
    };
    const DecreaseQuantity = (index) => {
        const copyuser = { ...user, cart: [...user.cart] };

        console.log(copyuser.cart[index].quantity);
        if (copyuser.cart[index].quantity == 1) {
            copyuser.cart.splice(index, 1);
        } else {
            copyuser.cart[index] = {
                ...copyuser.cart[index],
                quantity: copyuser.cart[index].quantity - 1,
            };
        }
        dispatch(asyncupdateuser(user.id, copyuser));
    };

    const x = user.cart.reduce((ac, cv) => {
        return ac + +cv.product.price * cv.quantity;
    }, 0);
    console.log(x.toFixed(2));

    return (
        <div className="p-5">
            {user.cart.map((ci, i) => (
                <div
                    className="flex justify-between items-center w-full mb-5 bg-gray-200 rounded p-5"
                    key={i}
                >
                    <img className="h-[10vmax]" src={ci.product.image} alt="" />
                    <h1>{ci.product.title}</h1>

                    <div>
                        <button
                            onClick={() => IncreaseQuantity(i)}
                            className="text-2xl"
                        >
                            +
                        </button>
                        <span className="mx-3">{ci.quantity}</span>
                        <button
                            onClick={() => DecreaseQuantity(i)}
                            className="text-2xl"
                        >
                            -
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cart;
