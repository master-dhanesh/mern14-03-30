import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";

const App = () => {
    return (
        <div className="px-[20%] w-screen h-screen bg-gray-800 text-white py-5">
            <Nav />
            <Mainroutes />
        </div>
    );
};

export default App;
