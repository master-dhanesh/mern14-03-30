import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncsigninuser } from "../../store/actions/userActions";
import { useEffect } from "react";
const Signin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const SigninSubmitHandler = (user) => {
        dispatch(asyncsigninuser(user));
        navigate("/");
    };

    return (
        <form
            className=" w-full p-10"
            onSubmit={handleSubmit(SigninSubmitHandler)}
        >
            <input
                {...register("email")}
                className="w-full border-b text-3xl outline-0 p-2 mb-5"
                type="email"
                placeholder="john@doe.example"
            />

            <input
                {...register("password")}
                className="w-full border-b text-3xl outline-0 p-2 mb-5"
                type="password"
                placeholder="*******"
            />
            <button className="text-3xl text-white px-5 py-3 bg-red-400 rounded">
                Signin User
            </button>
            <p className="mt-10">
                Don't have an account?{" "}
                <Link className="text-blue-400" to="/signup">
                    Singup
                </Link>
            </p>
        </form>
    );
};

export default Signin;
