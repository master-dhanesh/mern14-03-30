import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useContext } from "react";
import { usercontext } from "../Wrapper";

const Create = () => {
    const [users, setusers] = useContext(usercontext);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const SubmitHandler = (data) => {
        data.id = nanoid();
        const copyusers = [...users];
        copyusers.push(data);
        setusers(copyusers);
        reset();
    };

    return (
        <div>
            <h1 className="text-5xl font-thin">Create User</h1>
            <form onSubmit={handleSubmit(SubmitHandler)}>
                <input
                    {...register("name", {
                        required: "input must not be empty",
                    })}
                    type="text"
                    placeholder="Name"
                />
                <p>{errors?.name?.message}</p>

                <input
                    {...register("age", {
                        required: "input must not be empty",
                    })}
                    type="number"
                    placeholder="Age"
                />
                <p>{errors?.name?.message}</p>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Create;
