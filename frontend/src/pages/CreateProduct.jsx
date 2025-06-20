import { nanoid } from "@reduxjs/toolkit";
import { asynccreateproduct } from "../store/actions/productActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const CreateProduct = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm();

    const CreateSubmitHandler = (product) => {
        product.id = nanoid();
        dispatch(asynccreateproduct(product));
        navigate("/");
    };
    return (
        <form
            className=" w-full p-10"
            onSubmit={handleSubmit(CreateSubmitHandler)}
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
                Create Product
            </button>
        </form>
    );
};

export default CreateProduct;
