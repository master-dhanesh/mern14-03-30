import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
    asyncdeleteproduct,
    asyncupdateproduct,
} from "../store/actions/productActions";
const ProductDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { products } = useSelector((state) => state.productReducer);
    const { user } = useSelector((state) => state.userReducer);
    const p = products.find((pro) => pro.id == id);
    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm({
        defaultValues: {
            title: p?.title,
            description: p?.description,
            price: p?.price,
            category: p?.category,
            image: p?.image,
        },
    });

    const deleteuser = () => {
        dispatch(asyncdeleteproduct(p.id));
        navigate("/");
    };
    const UpdateSubmitHandler = (updatedProduct) => {
        dispatch(asyncupdateproduct(p.id, updatedProduct));
    };

    return (
        <div className="w-full">
            {/*  */}
            <div className="w-full mr-3 mb-3 shadow p-3 rounded">
                <img
                    className="mb-3 h-[40vh] block mx-auto"
                    src={p.image}
                    alt=""
                />
                <h1 className="text-5xl">{p.title}</h1>
                <p>{p.description}</p>
                <p className="my-3 text-5xl text-red-400">{p.price}</p>
                <div className="mt-3 flex items-center justify-between p-3">
                    <button className="text-white px-4 py-2 bg-yellow-400 rounded">
                        Add to Cart
                    </button>
                </div>
            </div>

            {/*  */}
            {user?.isAdmin && (
                <form
                    className=" w-full p-10"
                    onSubmit={handleSubmit(UpdateSubmitHandler)}
                >
                    <input
                        {...register("image")}
                        className="w-full border-b text-3xl outline-0 p-2 mb-5"
                        type="url"
                        placeholder="Product Title"
                    />
                    <input
                        {...register("title")}
                        className="w-full border-b text-3xl outline-0 p-2 mb-5"
                        type="text"
                        placeholder="Product Title"
                    />
                    <input
                        {...register("price")}
                        className="w-full border-b text-3xl outline-0 p-2 mb-5"
                        type="text"
                        placeholder="0.00"
                    />
                    <input
                        {...register("category")}
                        className="w-full border-b text-3xl outline-0 p-2 mb-5"
                        type="text"
                        placeholder="Product Category"
                    />
                    <textarea
                        {...register("description")}
                        className="w-full border-b text-3xl outline-0 p-2 mb-5"
                        type="text"
                        placeholder="Product description here..."
                    ></textarea>
                    <button className="text-3xl text-white px-5 py-3 bg-blue-400 rounded">
                        Update Product
                    </button>
                    <br />
                    <br />
                    <br /> <br />
                    <button
                        onClick={deleteuser}
                        type="button"
                        className="text-3xl text-white px-5 py-3 bg-red-600 rounded"
                    >
                        Delete Product
                    </button>
                </form>
            )}
        </div>
    );
};

export default ProductDetails;
