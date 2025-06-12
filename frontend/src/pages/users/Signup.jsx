import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { Link, useNavigate } from "react-router-dom";
import { asyncsignupuser } from "../../store/actions/userActions";
import { useDispatch } from "react-redux";
const Signup = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const SignupSubmitHandler = (user) => {
        user.id = nanoid();
        user.isAdmin = false;
        user.cart = [];
        console.log(user);
        dispatch(asyncsignupuser(user));
        navigate("/signin");
    };

    return (
        <form
            className=" w-full p-10"
            onSubmit={handleSubmit(SignupSubmitHandler)}
        >
            <input
                {...register("username")}
                className="w-full border-b text-3xl outline-0 p-2 mb-5"
                type="text"
                placeholder="john-doe"
            />
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
                Signup User
            </button>
            <p className="mt-10">
                Already have an account?{" "}
                <Link className="text-blue-400" to="/signin">
                    Singin
                </Link>
            </p>
        </form>
    );
};

export default Signup;
