import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asyncupdateuser } from "../store/actions/userActions";

const ProductTemplate = ({ p }) => {
    const { user } = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

    const AddCartHandler = () => {
        const copyuser = { ...user, cart: [...user.cart] };

        const index = copyuser.cart.findIndex((ci) => ci.product.id == p.id);

        if (index === -1) {
            copyuser.cart.push({ product: p, quantity: 1 });
        } else {
            copyuser.cart[index] = {
                ...copyuser.cart[index],
                quantity: copyuser.cart[index].quantity + 1,
            };
        }

        dispatch(asyncupdateuser(user.id, copyuser));
    };

    return (
        <div className="w-[31%] mr-3 mb-3 shadow p-3 rounded">
            <img className="mb-3 h-[40vh] block mx-auto" src={p.image} alt="" />
            <h1 className="text-2xl">{p.title.slice(0, 18)}...</h1>
            <p>{p.description.slice(0, 90)}...</p>
            <div className="mt-3 flex items-center justify-between p-3">
                <button
                    onClick={AddCartHandler}
                    className="text-white px-4 py-2 bg-yellow-400 rounded"
                >
                    Add to Cart
                </button>
                <Link
                    to={`/product-detail/${p.id}`}
                    className="text-white px-4 py-2 bg-blue-400 rounded"
                >
                    More Info
                </Link>
            </div>
        </div>
    );
};

export default ProductTemplate;
