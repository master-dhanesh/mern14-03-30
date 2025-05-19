import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
    return (
        <div className="w-screen h-screen bg-gray-800 text-white p-10">
            <Create />
            <Read />
        </div>
    );
};

export default App;
