import { useSelector } from "react-redux";

const App = () => {
    const data = useSelector((state) => state);
    console.log(data);
    return (
        <div className="py-10 px-[10%] mt-10 font-thin">
            <h1 className="text-5xl">Apps</h1>
        </div>
    );
};

export default App;
