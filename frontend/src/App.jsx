import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";

const App = () => {
    return (
        <div className="font-thin py-10 px-[10%] w-screen h-screen overflow-x-hidden overflow-y-auto">
            <Nav />
            <Mainroutes />
        </div>
    );
};

export default App;
