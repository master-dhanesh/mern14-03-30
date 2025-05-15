import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

const Create = (props) => {
    const users = props.users;
    const setusers = props.setusers;

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
            <h1>Create User</h1>
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
