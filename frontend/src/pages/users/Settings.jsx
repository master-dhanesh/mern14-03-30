import { useDispatch, useSelector } from "react-redux";
import {
    asyncdeleteuser,
    asynclogoutuser,
    asyncupdateuser,
} from "../../store/actions/userActions";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Settings = () => {
    const { user } = useSelector((state) => state.userReducer);
    const { register, handleSubmit } = useForm({
        defaultValues: {
            username: user?.username,
            email: user?.email,
            password: user?.password,
        },
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logoutuser = () => {
        dispatch(asynclogoutuser());
        navigate("/signin");
    };

    const deleteuser = () => {
        dispatch(asyncdeleteuser(user.id));
        navigate("/signin");
    };
    const UpdateSubmitHandler = (updateduser) => {
        dispatch(asyncupdateuser(user.id, updateduser));
    };

    return (
        <>
            <form
                className=" w-full p-10"
                onSubmit={handleSubmit(UpdateSubmitHandler)}
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
                <button className="text-3xl text-white px-5 py-3 bg-blue-400 rounded">
                    Update User
                </button>
                <br />
                <br />
                <button
                    onClick={logoutuser}
                    type="button"
                    className="text-3xl text-white px-5 py-3 bg-red-400 rounded"
                >
                    Logout User
                </button>
                <br /> <br />
                <button
                    onClick={deleteuser}
                    type="button"
                    className="text-3xl text-white px-5 py-3 bg-red-600 rounded"
                >
                    Delete User
                </button>
            </form>
        </>
    );
};

export default Settings;
